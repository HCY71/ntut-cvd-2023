<script setup>
const projectData = [
  {
    title: "始",
    subtitle:
      "生命如若是恩賜，<br/>那他的反面極為時間;<br/>我們在無數個睜眼與闔眼之間創造意義。",
    links: [
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
    ],
  },
  {
    title: "遺",
    subtitle:
      "生命如若是恩賜，<br/>那他的反面極為時間;<br/>我們在無數個睜眼與闔眼之間創造意義。",
    links: [
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
    ],
  },
  {
    title: "尋",
    subtitle:
      "生命如若是恩賜，<br/>那他的反面極為時間;<br/>我們在無數個睜眼與闔眼之間創造意義。",
    links: [
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
    ],
  },
  {
    title: "拾",
    subtitle:
      "生命如若是恩賜，<br/>那他的反面極為時間;<br/>我們在無數個睜眼與闔眼之間創造意義。",
    links: [
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
      { name: "作品名稱", url: "https://www.google.com", author: "作者" },
    ],
  },
];
</script>

<template>
  <div id="projects">
    <Project
      v-for="p in projectData"
      :title="p.title"
      :subtitle="p.subtitle"
      :links="p.links"
      class="mx-auto"
    />
  </div>
</template>
