import { Store } from "svelte/store.js";
import { game } from "./game";

class QuizStore extends Store {
  next(description) {
    const { state } = this.get();
    this.set({ isLoading: true });
    game
      .next(state)
      .then(newState => this.set({ state: newState }))
      .catch(() => this.set({ isError: true }))
      .then(() => this.set({ isLoading: false }))
      .then(() => this.set({ selectedId: undefined }));
  }
  check(optionId) {
    const { state } = this.get();
    this.set({ isChecking: true });
    game
      .check(state, optionId)
      .then(newState => this.set({ state: newState }))
      .catch(err => this.set({ isError: true }))
      .then(() => this.set({ isChecking: false }));
  }
  select(id) {
    this.set({ selectedId: id });
  }
}

export const store = new QuizStore({
  state: game.first(),
  isLoading: true,
  isChecking: false,
  isError: false,
  selectedId: undefined
});

store.compute("score", ["state"], ({ score }) => score);

store.compute("isFinished", ["state"], ({ finished }) => Boolean(finished));

store.compute("question", ["state"], ({ question }) => question);
