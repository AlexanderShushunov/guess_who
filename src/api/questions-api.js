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
    answer: 0,
    next: 1
  }
];

const findById = id => questionsData.find(question => question.id === id);

const doABitLater = action =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(action());
    }, 3000)
  );

export const next = (id = 0) => doABitLater(() => findById(id));

export const check = (id, answer) =>
  Promise.resolve(findById(id).answer === answer);
