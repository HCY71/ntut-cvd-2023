<template>
  <div
    id="loader"
    class="custom-flex-center sticky left-0 top-0 z-10 h-screen w-screen flex-col bg-brand-950"
  >
    <div
      class="absolute top-1/2 -mt-[15%] -translate-y-1/2 text-[20vw] font-extrabold"
    >
      <div
        class="ani-loader-top absolute left-0 top-0 h-full w-0 bg-brand-950"
      />
      LOADING
    </div>
    <div class="ani-loader-line relative h-1 w-full bg-brand-50" />
    <div
      class="ani-loader-bottom absolute top-1/2 mt-[15%] -translate-y-1/2 text-sm font-bold opacity-0 md:text-base"
    >
      WELCOME
    </div>
  </div>
</template>
