<script>
  import { createEventDispatcher } from "svelte";
  import { scale, fly } from "svelte/transition";

  export let result;
  const dispath = createEventDispatcher();
</script>

<style>
  .result {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
  }
  .sign {
    height: 100%;
    object-fit: contain;
  }
</style>

<div class="result" on:click={() => dispath('close')} in:scale out:fly>
  {#if result === 'correct'}
    <img src="data/correct.png" alt="correct" class="sign" />
  {:else}
    <img src="data/wrong.png" alt="wrong" class="sign" />
  {/if}
</div>
