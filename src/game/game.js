import { next as apiNext, check as apiCheck } from "./questions-api";

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
  async next(state) {
    if (getNextId(state) === undefined) {
      return {
        finished: true,
        score: state.score
      };
    }

    const nextQuestion = await apiNext(getNextId(state));
    return setNewQuestion(state)(nextQuestion);
  },
  async check(state, optionId) {
    const result = await apiCheck(getId(state), optionId);
    const newState = setResult(state)(result);
    return calcScore(newState);
  }
};
