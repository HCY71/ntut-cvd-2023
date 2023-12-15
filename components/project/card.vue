<script setup>
defineProps(["link"]);
</script>
<template>
  <div class="group w-full text-xs font-bold sm:text-base">
    <a
      class="w-full cursor-pointer"
      :href="link.url"
      :class="{ 'pointer-events-none !cursor-auto': link.url === '' }"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div
        class="relative aspect-square overflow-hidden border-2 pt-[100%] duration-300 group-hover:scale-95"
      >
        <img
          :src="link.img"
          alt=""
          class="absolute left-0 top-0 h-full w-full duration-300 group-hover:scale-110"
        />
      </div>
      <div class="mt-2 leading-tight sm:leading-normal sm:tracking-wide">
        {{ link.name }}
      </div>
      <div class="mt-1 text-brand-200">{{ link.author }}</div>
    </a>
  </div>
</template>
