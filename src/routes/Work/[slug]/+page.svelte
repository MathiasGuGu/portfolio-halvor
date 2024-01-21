<script>
  export let data;
</script>

<div class="w-[80%] m-auto">
  <section class="flex flex-col-reverse lg:flex-row justify-center lg:justify-between mb-10">
    <img src={data.subject.cover.src} alt={data.subject.cover.alt} class="w-[80%] lg:w-[40%] xl:w-[45%] mx-auto lg:mx-0 object-cover"/>
  
    <div class="w-[80%] lg:w-[55%] xl:w-[45%] mx-auto lg:mx-0 mb-5">
      <h1 class="text-2xl font-light">{data.subject.projectNr}</h1>
      <h2 class="text-8xl font-extrabold my-5">{data.subject.title}</h2>
      <p>{data.subject.intro}</p>
    </div>
  </section>
  
  <section  class="mx-auto lg:mx-0 flex flex-col-reverse lg:flex-row-reverse justify-between my-10">
    <img src={data.subject.second.src} alt={data.subject.second.alt} class="w-[30%] xl:w-[25%] mx-auto lg:mx-0 mt-5 object-contain {!data.subject.second.src && "hidden"}">

    <div class="w-[80%] lg:w-[68%] xl:w-[60%] mx-auto lg:mx-0">
      <h3 class="font-semibold">{data.subject.info}</h3>
      <p class="my-5">{data.subject.content}</p>
      <p>{data.subject.otherContent}</p>
    </div>
  </section>

  <a href="/Work" class="mt-8 text-[#ffffff] font-semibold bg-[#321BDC] py-2 px-10 rounded-full">Back</a>
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