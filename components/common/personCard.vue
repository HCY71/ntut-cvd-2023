<script setup>
defineProps(["img", "first", "second", "isDirector"]);
</script>
<template>
  <div
    class="bg relative w-full text-black"
    :class="{
      'bg-gradient-to-r from-white': isDirector,
      'bg-white': !isDirector,
    }"
  >
    <img
      :src="img"
      alt=""
      class="absolute bottom-0 h-[120%] rounded-full border-2"
    />
    <div class="flex flex-col">
      <div>{{ first }}</div>
      <div class="font-bold">{{ second }}</div>
    </div>
  </div>
</template>
