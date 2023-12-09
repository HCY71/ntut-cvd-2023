<script setup>
const handleBack = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
<template>
  <div class="font-hanWang mb-20 mt-16 text-base text-white lg:mb-40 lg:mt-32">
    <CommonBanner class="cursor-pointer" @click="handleBack">
      <img src="@/assets/back.png" alt="" class="w-28 py-2 md:w-32 lg:w-40" />
    </CommonBanner>
    <div
      class="custom-flex-center flex-col py-4 text-xs !leading-loose sm:text-base lg:py-12"
    >
      <img
        src="@/assets/footer.png"
        alt=""
        class="w-60 sm:w-72 md:w-80 lg:w-[520px]"
      />
      <div>國立臺北科技大學文化事業發展系</div>
      <div>Department of Cultural Vocation Development, Taipei Tech</div>
      <div>10608 台北市忠孝東路三段1號 共同科館 7樓 702室</div>
      <div>TEL: 886-2-27712171#5600</div>
      <div>FAX: 886-2-87730872</div>
      <div>E-mail: cvd@ntut.edu.tw</div>
    </div>
  </div>
</template>
