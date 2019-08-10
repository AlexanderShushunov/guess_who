<script>
  import { getContext, createEventDispatcher } from "svelte";
  let score = getContext("score");
  let questionCount = getContext("questionCount");
  const dispath = createEventDispatcher();
</script>

<style>
  .result {
    font-size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<div class="result" on:click={() => dispath('close')}>
  Итого: {$score} из {$questionCount}
</div>
