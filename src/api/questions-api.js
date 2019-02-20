const questionsData = [
  {
    id: 0,
    photoSrc: "data/Alan_Turing_2303_3120.jpg",
    options: [
      {
        id: 0,
        text: "Алан Тьюринг"
      },
      {
        id: 1,
        text: "Алонзо Чёрч"
      },
      {
        id: 2,
        text: "Джон фон Нейман"
      },
      {
        id: 3,
        text: "Альфред Нобель"
      }
    ],
    rightOption: 0,
    next: 1
  },
  {
    id: 1,
    photoSrc: "data/Larry_Page_425_512.jpg",
    options: [
      {
        id: 0,
        text: "Бил Гейтс"
      },
      {
        id: 1,
        text: "Стив Джобс"
      },
      {
        id: 2,
        text: "Джефф Безос"
      },
      {
        id: 3,
        text: "Ларри Пейдж"
      }
    ],
    rightOption: 3
  }
];

const findById = id => questionsData.find(question => question.id === id);

const doABitLater = action =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(action());
    }, 1000)
  );

export const next = (id = 0) =>
  doABitLater(() => {
    const { rightOption, ...question } = findById(id);
    return question;
  });

export const check = (id, option) =>
  doABitLater(() => {
    const { rightOption, ...question } = findById(id);
    return {
      rightOption,
      result: rightOption === option ? "correct" : "wrong"
    };
  });
