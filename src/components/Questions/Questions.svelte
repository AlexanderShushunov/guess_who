<script>
  import { getContext, createEventDispatcher } from "svelte";
  import Options from "./Options";
  import Result from "./Result.svelte";

  let question = getContext("question");
  let check = getContext("check");
  let next = getContext("next");

  const dispath = createEventDispatcher();

  $: photoSrc = $question.photoSrc;
  $: options = $question.options;
  $: rightOption = $question.rightOption;
  $: alreadyAnswered = $question.alreadyAnswered;
  $: result = $question.result;
</script>

<style>
  .question {
    height: 100%;
    overflow: hidden;
    display: flex;
  }
  .photo {
    flex-basis: 50%;
    padding: 1rem;
    height: calc(100% - 2rem);
    object-fit: contain;
  }
</style>

<div class="question">
  <img src={photoSrc} alt="photo" class="photo" />
  <div class="options">
    <Options
      {options}
      on:answer={({ detail }) => check(detail)}
      {rightOption}
      {alreadyAnswered} />
  </div>
  {#if alreadyAnswered}
    <Result {result} on:close={next} />
  {/if}
</div>
