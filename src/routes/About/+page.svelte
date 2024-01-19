
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

<div class="sliding-container my-16">
  <div class="sliding-image">
    <div class="sliding-space">
      <img src="/Group.png" alt="Main text"/>
    </div>
    <div class="sliding-space">
      <img src="/Group.png" alt="Main text"/>
    </div>
  </div>
</div>

<section class="w-[80%] m-auto flex flex-row justify-between">
  <div class="w-[50%]">
    <p class="mb-8">My name is Halvor Tandberg Flåto, im an 22 year old graphic designer with years of experience. My passion is creating extrodinary visual experiences, and help brands and individuals express their true self through functional and innovative design.</p>

    <p class="mt-8 mb-16">You can find out more about my work on these platforms:</p>

    <div class="flex flex-row">
      <img src="./behance.png" alt="behance logo" class="w-[60px] h-[60px] mr-5"/>
      <img src="./instagram.png" alt="instagram logo" class="w-[60px] h-[60px] mr-5"/>
    </div>
  </div>
  <img src="./halvor.png" alt="Owner image"/>
</section>

<div class="justify-center text-center mt-16 mb-12">
  <div class="w-[60%] m-auto">
    <h1 class="text-8xl">Let's work</h1>
    <h2 class="font-bold text-[#321BDC] text-lg">Contact:</h2>
    <p>If you have a project to discuss please contact: </p>
    <p>Halvortandbergflato@gmail.com</p>
    <p>Tlf: 48091210</p>
    <img src="/logo.png" alt="logo" class="m-auto my-10"/>
  </div>
</div>