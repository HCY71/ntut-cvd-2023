<script setup>
defineProps(["link"]);
</script>
<template>
  <div class="w-full border">
    <div
      class="custom-flex-center aspect-video w-full cursor-pointer text-gray-600"
      :href="link.url"
      rel="noopener noreferrer"
      target="_blank"
    >
      LINK
      <img src="" alt="" />
    </div>
    <div>{{ link.name }}</div>
    <div>{{ link.author }}</div>
  </div>
</template>
