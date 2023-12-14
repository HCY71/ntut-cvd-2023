<script setup>
defineProps(["isDark"]);
</script>
<template>
  <div
    class="custom-flex-center relative w-full py-2 font-gothic text-2xl tracking-wider text-black sm:text-4xl xl:py-4 xl:text-5xl"
    :class="isDark ? '!text-white' : ''"
  >
    <div
      class="ani-banner absolute left-0 top-0 h-full w-full bg-white"
      :class="{ '!bg-brand-950': isDark }"
    ></div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
