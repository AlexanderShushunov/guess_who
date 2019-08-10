<script>
  import { setContext, onMount } from "svelte";
  import {
    score,
    isError,
    isChecking,
    isLoading,
    isFinished,
    question,
    next,
    check,
    questionCount
  } from "./store";
  import {
    Loading,
    Checking,
    Error,
    Score,
    Result,
    Questions
  } from "./components";

  setContext("score", score);
  setContext("question", question);
  setContext("check", check);
  setContext("next", next);
  setContext("questionCount", questionCount);

  $: Main = calcMain($isError, $isLoading, $isChecking, $isFinished);

  function calcMain(isError, isLoading, isChecking, isFinished) {
    if (isError) return Error;
    if (isLoading) return Loading;
    if (isChecking) return Checking;
    if (isFinished) return Result;

    return Questions;
  }

  onMount(next);
</script>

<style>
  .layout {
    height: 100%;
  }
  .title {
    text-align: center;
    font-size: 4rem;
    line-height: 4rem;
    padding: 1rem;
    margin: 0;
  }
  .main {
    height: calc(100% - 6rem);
    position: relative;
  }
  .score {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
</style>

<div class="layout">
  <h1 class="title">Кто на фото?</h1>
  <div class="score">
    <Score />
  </div>
  <div class="main">
    <svelte:component this={Main} />
  </div>
</div>
