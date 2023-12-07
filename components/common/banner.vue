<script setup>
defineProps(["isDark"]);
</script>
<template>
  <div
    class="custom-flex-center w-full bg-white py-2 font-gothic text-2xl tracking-wider text-black sm:text-4xl xl:py-4 xl:text-5xl"
    :class="isDark ? '!bg-brand-950 !text-white' : ''"
  >
    <slot />
  </div>
</template>
