<script setup>
import tag1 from "@/assets/exhibition_tag_1.png";
import tag2 from "@/assets/exhibition_tag_2.png";

const exhibitions = [
  {
    year: 2023,
    tag: tag1,
    dates: "12.19 tue. - 12.27 wed.",
    loc: "國立臺北科技大學藝文中心",
  },
  {
    year: 2024,
    tag: tag2,
    dates: "01.02 tue. - 01.06 sat.",
    loc: "剝皮寮歷史街區",
  },
];
onMounted(() => {
  setTimeout(() => {
    timelineHome();
  }, 500);
});
</script>
<template>
  <div class="relative h-screen bg-white">
    <CommonNav />
    <div
      class="custom-flex-center relative flex-col text-black lg:h-[75%] lg:flex-row-reverse lg:!items-end lg:!justify-between 2xl:h-4/5"
    >
      <h1 class="custom-hidden">
        失物招領 Lost and Found | 北科大文化事業發展系 109級畢業展
      </h1>
      <div
        class="mt-12 w-96 max-w-full sm:mt-24 sm:w-4/5 lg:w-full lg:max-w-2xl xl:w-4/5 xl:max-w-2xl 2xl:max-w-6xl"
      >
        <img src="@/assets/project.png" alt="" class="ani-banner w-full" />
        <img
          src="@/assets/project_en.png"
          alt=""
          class="ani-banner -mt-2 w-full"
        />
        <img src="@/assets/project_des.png" alt="" class="ani-banner" />
      </div>
      <div
        class="custom-flex-center mt-6 w-full font-gothic lg:mb-8 lg:w-1/2 xl:mb-[2vw] 2xl:mb-[3vw]"
      >
        <div
          class="flex w-96 flex-col gap-4 pl-6 sm:w-4/5 sm:pl-10 md:pl-12 lg:pl-0 xl:gap-4 2xl:gap-10"
        >
          <div v-for="e in exhibitions" class="ani-date flex flex-col xl:gap-1">
            <div class="flex items-end gap-2">
              <div
                class="text-base font-bold leading-none sm:text-lg xl:text-3xl"
              >
                {{ e.year }}
              </div>
              <div class="w-12 sm:mb-1 sm:w-14 xl:mb-0 xl:w-20">
                <img :src="e.tag" alt="" class="w-full" />
              </div>
            </div>
            <div class="text-2xl leading-none sm:-mt-2 sm:text-3xl xl:text-4xl">
              {{ e.dates }}
            </div>
            <div class="text-lg leading-none sm:text-xl xl:text-2xl">
              {{ e.loc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
