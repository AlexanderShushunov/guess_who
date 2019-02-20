import { next as apiNext, check as apiCheck } from "./api";

const getNextId = state => state.question.next;

const getId = state => state.question.id;

const setNewQuestion = ({ score }) => newQuestion => ({
  question: {
    ...newQuestion,
    alreadyAnswered: false,
    result: "guessing",
    rightOption: undefined
  },
  score
});

const setResult = ({ question, score }) => ({ rightOption, result }) => ({
  question: {
    ...question,
    alreadyAnswered: true,
    result,
    rightOption
  },
  score
});

const calcScore = ({ question, score }) => ({
  question,
  score: score + (question.result === "correct" ? 1 : 0)
});

export const game = {
  first() {
    return {
      question: { next: 0 },
      score: 0
    };
  },
  next(state) {
    if (getNextId(state) === undefined) {
      return Promise.resolve({
        finished: true,
        score: state.score
      });
    }
    return apiNext(getNextId(state)).then(setNewQuestion(state));
  },
  check(state, optionId) {
    return apiCheck(getId(state), optionId)
      .then(setResult(state))
      .then(calcScore);
  }
};
