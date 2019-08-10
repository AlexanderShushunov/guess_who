<script>
  import { createEventDispatcher } from "svelte";
  import { calcClassNames } from "../../../utils/calcClassNames";
  import Option from "./Option.svelte";

  export let options = [];
  export let alreadyAnswered = false;
  export let rightOption;

  let selectedId = undefined;

  $: canSelect = selectedId !== undefined && !alreadyAnswered;
  $: isSelected = id => id === selectedId;
  $: isRight = id => id === rightOption;
  $: answerBtnClassName = calcClassNames("answer-btn")({
    disbaled: !canSelect
  });

  const dispatch = createEventDispatcher();

  function select(id) {
    if (!alreadyAnswered) {
      selectedId = id;
    }
  }
</script>

<style>
  .options {
    display: flex;
    flex-direction: column;
  }
  .answer-btn {
    margin: 2rem;
    font-family: inherit;
    font-size: 4rem;
    border-radius: 1rem;
    background-color: white;
  }
  .answer-btn--disbaled {
    opacity: 0.2;
  }
</style>

<div class="options">
  {#each options as { text, id } (id)}
    <Option
      {text}
      selected={isSelected(id)}
      right={isRight(id)}
      on:select={() => select(id)} />
  {/each}
  <button
    class={answerBtnClassName}
    disabled={!canSelect}
    on:click={() => dispatch('answer', selectedId)}>
    Ответить
  </button>
</div>
