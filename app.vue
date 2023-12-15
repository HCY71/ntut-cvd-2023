<script setup>
useSeoMeta({
  title: "失物招領 | 國立臺北科技大學文化事業發展系109級學士畢業展",
  ogTitle: "失物招領 | 國立臺北科技大學文化事業發展系109級學士畢業展",
  // description: "失物招領 | 國立臺北科技大學文化事業發展系109級學士畢業展",
  // ogDescription: "This is my amazing site, let me tell you all about it.",
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
useHead({
  htmlAttrs: {
    lang: "zh-Hant",
  },
  link: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicons/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/favicons/site.webmanifest",
    },
  ],
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
  // script: [
  //   {
  //     children: `(function(d) {
  //   var config = {
  //     kitId: 'mxh1yxz',
  //     scriptTimeout: 3000,
  //     async: true
  //   },
  //   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  // })(document)`,
  //   },
  // ],
});

onMounted(() => {
  // DEBUG
  // introConsole();
});
</script>
<template>
  <div>
    <CommonLoader />
    <SectionsHome />
    <SectionsIntro />
    <SectionsProjects />
    <SectionsDirector />
    <SectionsTeachers />
    <SectionsTeam />
    <SectionsFooter />
  </div>
</template>

<style>
/* Global Styles */
@import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap");
@tailwind base;

@layer base {
  @font-face {
    font-family: "kozuka-gothic-pr6n";
    font-style: normal;
    src: url(/assets/fonts/kozuka.otf) format("opentype");
  }
  @font-face {
    font-family: "Han Wang";
    font-style: normal;
    src: url(/assets/fonts/hanwang.ttf) format("truetype");
  }
}

html {
  @apply overflow-hidden scroll-smooth bg-black text-white;
}
body {
  @apply bg-black;
}
.h-screen {
  height: 100lvh;
  height: 100vh;
}
.custom-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-hidden {
  display: none;
  opacity: 0;
}
/* DEBUG */
.debug {
  @apply border-2 border-slate-500;
}
</style>
