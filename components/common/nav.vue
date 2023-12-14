<script setup>
const sections = [
  { name: "展前導覽", id: "#intro" },
  { name: "展覽作品", id: "#projects" },
  { name: "師長的話", id: "#teachers" },
  { name: "策展團隊", id: "#team" },
];
</script>

<template>
  <div
    class="relative flex flex-col gap-6 bg-black p-4 sm:p-6 md:flex-row md:items-end md:justify-between md:gap-20 md:p-8"
  >
    <div class="ani-nav-imgs flex w-60 flex-col gap-1 md:w-64 lg:w-80">
      <img src="@/assets/brand.png" alt="" class="w-full" />
      <img src="@/assets/brand_en.png" alt="" class="w-full" />
    </div>
    <div
      class="flex max-w-xl justify-between gap-5 font-['Dela_Gothic_One'] text-base tracking-wide sm:text-2xl md:w-full md:justify-between md:gap-0 lg:max-w-3xl lg:text-3xl"
    >
      <a
        v-for="s in sections"
        :href="s.id"
        class="ani-nav-items md:leading-none"
      >
        {{ s.name }}
      </a>
    </div>
    <div class="absolute -bottom-2 left-0 h-1 w-full bg-black"></div>
  </div>
</template>
