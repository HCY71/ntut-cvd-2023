<script setup>
defineProps(["title", "subtitle", "links"]);
</script>
<template>
  <div
    class="w-full max-w-8xl gap-20 px-2 pt-10 sm:px-6 lg:px-20 lg:pt-16 xl:pt-20"
  >
    <div class="flex w-full gap-5 sm:gap-10">
      <div
        class="h-fit pl-2 font-gothic text-6xl leading-none sm:-mt-2 sm:text-8xl"
      >
        {{ title }}
      </div>
      <div
        v-html="subtitle"
        class="custom-flex-center text-sm leading-relaxed tracking-wider sm:text-lg lg:leading-relaxed lg:tracking-widest"
      />
    </div>
    <div
      class="mt-5 grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-4 px-2 md:gap-x-10 md:gap-y-4 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-4 lg:pl-36 xl:gap-x-16 xl:gap-y-4 2xl:gap-x-20 2xl:gap-y-10"
    >
      <ProjectCard v-for="link in links" :link="link" />
    </div>
  </div>
</template>
