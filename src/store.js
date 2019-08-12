import { writable, derived, get } from "svelte/store";
import { game } from "./game";

const state = writable(game.first());
export const isLoading = writable(true);
export const isChecking = writable(false);
export const isError = writable(false);
export const questionCount = writable(0);

export const score = derived(state, ({ score }) => score);
export const question = derived(state, ({ question }) => question);
export const isFinished = derived(state, ({ finished }) => finished);

export const next = async () => {
  isLoading.set(true);
  const $state = get(state);
  try {
    const newState = await game.next($state);
    state.set(newState);
  } catch (e) {
    isError.set(true);
  }
  isLoading.set(false);
};

export const check = async optionId => {
  isLoading.set(true);
  const $state = get(state);
  try {
    const newState = await game.check($state, optionId);

    state.set(newState);
  } catch (e) {
    isError.set(true);
  }
  questionCount.update($count => $count + 1);
  isLoading.set(false);
};
