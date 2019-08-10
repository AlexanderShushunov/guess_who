<script>
  import { getContext } from "svelte";
  let score = getContext("score");
</script>

<style>
  .score {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    width: 15rem;
    border: 3px solid yellowgreen;
    border-radius: 3rem;
  }
</style>

<div class="score">Счет: {$score}</div>
