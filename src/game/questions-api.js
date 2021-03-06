const questionsData = [
  {
    photoSrc: "data/charles_babbage_363_430.jpg",
    options: [
      {
        id: 0,
        text: "Евклид"
      },
      {
        id: 1,
        text: "Иммануил Кант"
      },
      {
        id: 2,
        text: "Чарлз Бэббидж"
      },
      {
        id: 3,
        text: "Георг Кантор"
      }
    ],
    rightOption: 2
  },
  {
    photoSrc: "data/ada_lovelace_1280_1839.jpg",
    options: [
      {
        id: 0,
        text: "Ада Лавлейс"
      },
      {
        id: 1,
        text: "Наталья Гончарова"
      },
      {
        id: 2,
        text: "Екатерина II"
      },
      {
        id: 3,
        text: "Клара Цеткин"
      }
    ],
    rightOption: 0
  },
  {
    photoSrc: "data/Alan_Turing_2303_3120.jpg",
    options: [
      {
        id: 0,
        text: "Алонзо Чёрч"
      },
      {
        id: 1,
        text: "Алан Тьюринг"
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
    rightOption: 1
  },
  {
    photoSrc: "data/bjarne-stroustrup_632_953.jpg",
    options: [
      {
        id: 0,
        text: "Роб Пайк"
      },
      {
        id: 1,
        text: "Гвидо ван Россум"
      },
      {
        id: 2,
        text: "Никлаус Вирт"
      },
      {
        id: 3,
        text: "Бьёрн Страуструп"
      }
    ],
    rightOption: 3
  },
  {
    photoSrc: "data/Robert_Cecil_Martin.png",
    options: [
      {
        id: 0,
        text: "Мартин Фаулер"
      },
      {
        id: 1,
        text: "Роберт Мартин"
      },
      {
        id: 2,
        text: "Стив Макконнелл"
      },
      {
        id: 3,
        text: "Дональд Кнут"
      }
    ],
    rightOption: 1
  },
  {
    photoSrc: "data/Sir_Tim_Berners-Lee.jpg",
    options: [
      {
        id: 0,
        text: "Тим Бернерс-Ли"
      },
      {
        id: 1,
        text: "Джозеф Ликлайдер"
      },
      {
        id: 2,
        text: "Том Дженнингс"
      },
      {
        id: 3,
        text: "Сатоси Накамото"
      }
    ],
    rightOption: 0
  },
  {
    photoSrc: "data/rich_harris.jpeg",
    options: [
      {
        id: 0,
        text: "Джордан Валк"
      },
      {
        id: 1,
        text: "Рич Харрис"
      },
      {
        id: 2,
        text: "Эван Ю"
      },
      {
        id: 3,
        text: "Мишко Хевери"
      }
    ],
    rightOption: 1
  },
  {
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
  },
  {
    photoSrc: "data/tigprogmmist.jpg",
    options: [
      {
        id: 0,
        text: "Супермен"
      },
      {
        id: 1,
        text: "Бэтмен"
      },
      {
        id: 2,
        text: "Дедпул"
      },
      {
        id: 3,
        text: "Тыжпрограммист"
      }
    ],
    rightOption: 3
  }
];

const isLast = (arr, index) => arr.length === index + 1;

const addIds = data =>
  data.map((question, index) => ({
    ...question,
    id: index,
    next: !isLast(data, index) ? index + 1 : undefined
  }));

const findById = id =>
  addIds(questionsData).find(question => question.id === id);

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
