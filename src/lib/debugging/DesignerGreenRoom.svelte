<script>
import autoAnimate from "@formkit/auto-animate";
import lottie from "lottie-web";
import anim_lurking_cat from "../../assets/LottieFiles/lurking-cat.json";
import FavStar from "../../assets/LottieFiles/FavStar.json";
import { Button } from "flowbite-svelte";
import { onMount } from "svelte";
import { inview } from "svelte-inview";
import { inview_options_persistant } from "../../GlobalVars";

let inViewVars = {};
let lottieFileVars = {};

let liked;
let starButton;
let starButtonAnim;
onMount(() => {
  starButtonAnim = lottie.loadAnimation({
    container: starButton,
    animationData: FavStar,
    loop: false,
    autoplay: false,
  });
  lottieFileVars.starButton_lastFrame = starButtonAnim.totalFrames - 1;

  // starButtonAnim.goToAndPlay(0, true)
});

let animationContainer;
let showcat;
$: {
  if (showcat == true) {
    lottie.loadAnimation({
      container: animationContainer,
      animationData: anim_lurking_cat,
      loop: true,
      autoplay: true,
    });
  }
}
</script>

<div>
  {#if showcat}
    <div
      class="w-[200px] h-[200px] animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out"
      bind:this="{animationContainer}"
    ></div>
  {/if}

  <Button on:click="{() => (showcat = !showcat)}"
    >TURN {showcat ? "OFF" : "ON"} CAT!</Button
  >
  <div class="max-w-[900px] h-[500px]"></div>

  <div
    use:inview="{inview_options_persistant}"
    on:change="{(e) => {
      inViewVars.starButton = e.detail.inView;
    }}"
  >
    <button
      bind:this="{starButton}"
      disabled="{!inViewVars.starButton}"
      on:click="{() => {
        liked = !liked;
        if (liked == true) {
          starButtonAnim.setDirection(1);
          starButtonAnim.goToAndPlay(0, true);
        } else {
          starButtonAnim.setDirection(-1);
          starButtonAnim.goToAndPlay(25, true);
        }
      }}"
      class="w-[300px] scale-50 opacity-40 transition-all duration-700"
      class:scale-100="{inViewVars.starButton}"
      class:opacity-100="{inViewVars.starButton}"></button>

    <div class="max-w-[900px] h-[2000px]"></div>
  </div>
</div>
