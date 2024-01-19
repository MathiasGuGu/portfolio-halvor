<script>
  import { onMount } from 'svelte';

  // Function to handle scrolling to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  onMount(() => {
   console.log('Scroll component is mounted');
 });
</script>

<style>
  /* Add your button styling here */
  .scroll-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #321BDC;
    color: #fff;
    border: none;
    border-radius: 200px;
    cursor: pointer;
    z-index: 50;
  }
</style>

<button on:click={scrollToTop} class="scroll-to-top-btn font-bold">
  Top
</button>