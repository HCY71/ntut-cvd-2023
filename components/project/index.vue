<script setup>
defineProps(["title", "subtitle", "links"]);
</script>
<template>
  <div class="flex h-screen w-full max-w-screen-xl gap-20 border">
    <div class="ml-2 h-fit border-l-4 pl-2 text-2xl">{{ title }}</div>
    <div class="flex w-full flex-col">
      <div v-html="subtitle" />
      <div class="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2 md:grid-cols-4">
        <ProjectCard v-for="link in links" :link="link" />
      </div>
    </div>
  </div>
</template>
