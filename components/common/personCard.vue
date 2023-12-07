<script setup>
defineProps(["img", "first", "second", "isDirector", "isTeacher", "isRounded"]);
</script>
<template>
  <div
    class="bg relative w-full font-gothic text-lg sm:text-2xl sm:tracking-wider lg:text-3xl"
    :class="{
      'rounded-e-full': isRounded,
      'pl-16 sm:pl-20 lg:pl-40': isDirector,
    }"
  >
    <div
      class="absolute -bottom-1 h-[130%] -translate-x-1/2 overflow-hidden rounded-full border-[6px] border-brand-700 lg:h-[140%] lg:border-8"
    >
      <img :src="img" alt="" class="h-full scale-105" />
    </div>
    <div
      class="flex h-full w-full flex-col py-4 pl-[72px] sm:pl-24 lg:pl-[100px]"
      :class="{
        'bg-gradient-to-r from-black text-white': isDirector,
        'rounded-e-full bg-brand-100 text-brand-950': isTeacher,
        'rounded-e-full bg-white text-brand-950': !isDirector && !isTeacher,
      }"
    >
      <div>{{ first }}</div>
      <div class="font-bold">{{ second }}</div>
    </div>
  </div>
</template>
