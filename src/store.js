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

export const next = () => {
  isLoading.set(true);
  const $state = get(state);
  game
    .next($state)
    .then(newState => state.set(newState))
    .catch(() => isError.set(true))
    .finally(() => isLoading.set(false));
};

export const check = optionId => {
  isLoading.set(true);
  const $state = get(state);
  game
    .check($state, optionId)
    .then(newState => state.set(newState))
    .then(() => questionCount.update($count => $count + 1))
    .catch(() => isError.set(true))
    .finally(() => isLoading.set(false));
};
