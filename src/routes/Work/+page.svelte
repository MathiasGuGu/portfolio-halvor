<script>
  import TopScroll from "../topScroll.svelte";
  export let data;
</script>

<div class="w-[80%] justify-center text-center m-auto">
  <h1 class="text-6xl w-[260px] mb-20 font-bold">Projects & Work</h1>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 text-left">
    {#each data.summaries as {projectNr, cover, slug}}
    <a href="/Work/{slug}">
      <p>{projectNr}</p>
      <img src={cover.src} alt={cover.alt}/>
    </a>
    {/each}
  </section>

  <a href="./Gallery" class="m-auto text-left text-[#ffffff] font-semibold bg-[#321BDC] py-2 px-10 rounded-full">
    Art & Photography
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