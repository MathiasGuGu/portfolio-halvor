<script>
  import "../app.css";
  import TopScroll from "./topScroll.svelte";
</script>

<style>
  .sliding-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
  }

  .sliding-space {
    width: 100%;
    flex: 0 0 auto;
  }

  .sliding-image {
    animation: slide 10s linear infinite;
    display: flex;
    width: 100%;
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>

<section class="w-[80%] m-auto">
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="text-xl sm:text-3xl md:text-5xl">
      <h1 class="my-6">Graphic designer</h1>
      <h2 class="my-6">Web designer</h2>
      <h2 class="my-6">UI / UX</h2>
      <h2 class="my-6">Brand identity</h2>
      <h2 class="my-6">Photography</h2>
      <h2 class="my-6">Product design</h2>
    </div>
  
    <img src="/home_image.png" alt="logo"/>
  </div>
  
  <p class="w-[80%] lg:w-[50%] my-6">My passion is helping brands and individuals express their true self through innovative and functional design.</p>
</section>

<div class="sliding-container my-28">
  <div class="sliding-image">
    <div class="sliding-space">
      <img src="/Group.png" alt="Main text"/>
    </div>
    <div class="sliding-space">
      <img src="/Group.png" alt="Main text"/>
    </div>
  </div>
</div>

<section class="w-[80%] xl:w-[75%] mx-auto my-12 flex flex-col xl:flex-row gap-3 lg:gap-6 xl:gap-3">
  <div class="justify-center m-auto">
    <img src="/images/image_1.png" alt="first home image" class="mb-3 xl:mb-4">
    <img src="/images/image_2.png" alt="second home image">
  </div>

  <div class="justify-center m-auto">
    <img src="/images/image_3.png" alt="third home image" class="mb-3 xl:mb-8">
    <div class="flex flex-col lg:flex-row lg:gap-3 xl:justify-between">
      <img src="/images/image_4.png" alt="fourth home image" class="mb-3 xl:mb-0">
      <img src="/images/image_5.png" alt="fifth home image">
    </div>
  </div>
</section>

<div class="justify-center text-center">
  <a href="./Work" class="m-auto text-[#ffffff] font-semibold bg-[#321BDC] py-2 px-10 rounded-full">
    View all
  </a>
</div>

<div class="justify-center text-center mt-16 mb-12">
  <div class="w-[80%] lg:w-[60%] m-auto">
    <h1 class="text-5xl md:text-8xl">Let's work</h1>
    <h2 class="font-bold text-[#321BDC] text-lg">Contact:</h2>
    <p>If you have a project to discuss please contact: </p>
    <p>Halvortandbergflato@gmail.com</p>
    <p>Tlf: 48091210</p>
    <img src="/logo.png" alt="logo" class="m-auto my-10"/>
  </div>
</div>

<TopScroll />