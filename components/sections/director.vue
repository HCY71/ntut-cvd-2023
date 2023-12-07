<script setup>
import directorImage from "@/assets/teachers/director01.jpg";
</script>
<template>
  <div
    id="teachers"
    class="bg-brand-50 py-5 text-brand-700 lg:pb-20 lg:pt-14 xl:pb-40 xl:pt-20"
  >
    <CommonBanner :isDark="true"> 主任的話 </CommonBanner>
    <div
      class="mx-auto mt-12 md:mt-20 lg:mt-24 lg:max-w-screen-lg xl:mt-28 xl:max-w-screen-2xl"
    >
      <CommonPersonCard
        :img="directorImage"
        first="文化事業發展系 系主任"
        second="王怡惠 主任"
        :isDirector="true"
        class="lg:pr-24"
      />
      <div
        class="mt-6 px-8 sm:px-12 sm:text-lg lg:px-28 lg:text-xl lg:leading-normal xl:mt-10 xl:text-2xl"
      >
        位處城市的中心，面向多元廣博的場域，文化事業發展系在國家文化與教育政策的引導下，同學們成為第十屆的畢業生。限制和困難是學習與教學過程中不斷考驗文發系師生勇氣、智慧、彈性和創意的驅動力，對應站立在十字路口的探尋，同學們確立以「失物招領」為路徑，希冀透過世代的批判與反思，實踐文化議題下的豐富產出，實屬難得。<br /><br />
        感謝本屆總召老師鄭麗玲教授及所有專題指導老師不間斷的支持，此外，也感謝王麗蕉、王昭旺及楊育修三位外部指導委員，讓每一個專題的產出更具社會實踐力。在此，鼓勵與祝福所有的同學們，擁有不受限的人生向度，期許開創自我無限的未來，用「文化」發聲，成為溫暖的人。<br /><br />
        國立台北科技大學 文化事業發展系<br />
        系主任 王怡惠
      </div>
    </div>
  </div>
</template>
