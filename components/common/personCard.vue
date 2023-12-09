<script setup>
defineProps(["img", "first", "second", "isDirector", "isTeacher", "isRounded"]);
</script>
<template>
  <div
    class="bg relative w-full font-gothic text-xl sm:text-2xl sm:tracking-wider lg:text-3xl"
    :class="{
      'rounded-e-full': isRounded,
      'pl-16 sm:pl-20 lg:pl-40': isDirector,
    }"
  >
    <div
      class="custom-flex-center absolute -bottom-1 h-[130%] -translate-x-1/2 overflow-hidden rounded-full border-[6px] lg:h-[140%] lg:border-8"
      :class="{
        'border-brand-925 bg-brand-925': isDirector,
        'border-brand-100 bg-brand-100': isTeacher,
        'border-white bg-white': !isDirector && !isTeacher,
      }"
    >
      <img :src="img" alt="" class="h-full w-auto rounded-full" />
    </div>
    <div
      class="flex h-full w-full flex-col pl-[72px] sm:pl-20 lg:pl-[100px]"
      :class="{
        'bg-gradient-to-r from-black py-4  text-white': isDirector,
        'rounded-e-full bg-brand-100 !py-3 !pl-16  text-brand-950 sm:!pl-[72px] md:!pl-[72px] lg:!pl-[84px]':
          isTeacher,
        'rounded-e-full bg-white py-6 !pl-16 text-brand-950 sm:py-8 sm:!pl-20 md:py-7 lg:py-8 xl:!pl-24':
          !isDirector && !isTeacher,
      }"
    >
      <img
        v-if="first.includes('assets')"
        :src="first"
        alt=""
        class="mb-1 mt-2 w-[100px] sm:w-32 md:w-32"
        :class="{
          '!mt-1 !w-40 sm:!w-44 md:!w-48 xl:!w-60': !isDirector && !isTeacher,
        }"
      />
      <div v-else>{{ first }}</div>
      <div
        :class="{ 'font-kozuka text-lg  sm:text-xl lg:text-2xl': isTeacher }"
      >
        {{ second }}
      </div>
    </div>
  </div>
</template>
