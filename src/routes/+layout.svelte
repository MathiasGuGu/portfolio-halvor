<script>
  import "../app.css";
  import { onMount } from "svelte";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  onMount(() => {
    closeMenu();
  });
</script>

<header class="flex flex-row justify-between items-center m-8">
  <div class="mb-10">
    <a href="/"><img src="/Intro_logo.png" alt="logo" class="w-[120px]"/></a>
  </div>

  <div class="sm:hidden relative -mt-4">
    <button
      class="text-black hover:text-[#171717] focus:outline-none focus:text-black"
      aria-label="Toggle menu"
      on:click={toggleMenu}
    >
      <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Dropdown menu -->
    {#if isMenuOpen}
      <div class="absolute top-10 right-0 bg-white z-50 shadow-lg mt-2 py-2 px-4 w-48">
        <a href="/Work" class="block py-2">Work</a>
        <a href="/About" class="block py-2">About</a>
        <a href="/Contact" class="block py-2">Contact</a>
      </div>
    {/if}
  </div>

  <nav class="-mt-8 hidden sm:flex" onclick={closeMenu}>
    <a href="/Work" class="mx-4">Work</a>
    <a href="/About" class="mx-4">About</a>
    <a href="/Contact" class="mx-4">Contact</a>
  </nav>
</header>

<slot />


<!--
<script>
  import "../app.css";
</script>

<header class="flex flex-row justify-between m-8">
  <div class="mb-10">
    <a href="/"><img src="/Intro_logo.png" alt="logo" class="w-[120px]"/></a>
  </div>
  
  <nav>
    <a href="/Work" class="mx-4">Work</a>
    <a href="/About" class="mx-4">About</a>
    <a href="/Contact" class="mx-4">Contact</a>
  </nav>
</header>
-->