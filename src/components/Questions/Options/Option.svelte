<script>
  import { createEventDispatcher } from "svelte";
  import { calcClassNames } from "../../../utils/calcClassNames";

  export let selected;
  export let right;
  export let text;

  const dispatch = createEventDispatcher();
  $: className = calcClassNames("option")({ selected, right });
</script>

<style>
  .option {
    font-size: 4rem;
    padding: 0.5rem;
    border: 3px solid transparent;
    border-radius: 1rem;
    cursor: pointer;
  }
  .option--selected {
    border-color: red;
  }
  .option--right {
    background: lightgreen;
  }
</style>

<div class={className} on:click={() => dispatch('select')}>{text}</div>
