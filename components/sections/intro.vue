<script setup>
onMounted(timelineIntro);
</script>
<template>
  <div
    id="intro"
    class="custom-flex-center p-2 py-10 sm:p-6 lg:h-screen xl:h-[unset] 2xl:h-screen"
  >
    <div
      class="ani-intro-container flex h-full w-full max-w-8xl flex-col rounded-[3rem] border-2 p-5 py-7 sm:p-20 sm:py-24 lg:max-h-[860px] xl:max-h-[1024px]"
    >
      <div
        class="ani-intro-title pb-3 font-gothic text-3xl sm:text-5xl lg:pb-8 lg:text-6xl lg:tracking-widest"
      >
        展前導覽
      </div>
      <div
        class="ani-intro-line h-[1px] w-full select-none bg-brand-50 text-brand-950"
      >
        UNDERLINE
      </div>
      <div class="flex h-full flex-col gap-5 lg:flex-row lg:gap-8">
        <div class="flex-1">
          <div
            class="ani-intro-fadeIn mt-5 text-3xl sm:text-5xl lg:mt-12 2xl:text-7xl"
          >
            Lost and Found
          </div>
          <IntroText class="ani-intro-fadeIn mt-4 lg:mt-20">
            這是一個//遺落跟找尋 / 失去而獲得//的過程。<br />
            微風撫過小島的邊緣，枝葉婆娑⋯枯黃的葉片，<br />
            迴旋、飛舞，然後落地；隨著時間的進程靜靜散<br />
            落於樹的身旁。 <br />但它們並沒有真正離去⋯ ⋯<br />
            西南季風挾來豐沛的雨水，在死去的同時，她重<br />生於新一圈的年輪。
          </IntroText>
        </div>
        <div
          class="flex flex-1 flex-col justify-center align-middle lg:mt-20 2xl:mt-0"
        >
          <IntroTag class="ani-intro-fadeIn">生生不息⋯⋯?</IntroTag>
          <IntroText class="ani-intro-fadeIn mt-1">
            在已經記載，或不及記載的時間裡，事件作為點，點與點連接連貫成為故事線，而線與線交織成為歷史的面貌。<br />
            臺灣，我們的母親島，古老而優美的南島音色在千百年間伴著我們不斷舞動，
            而每一個節奏都落成一個已踏的腳步，隨著下一個步伐變成過去的回憶，細細碎碎地遺落在已經之路。
          </IntroText>
          <IntroTag class="ani-intro-fadeIn mt-2 lg:mt-4"
            >失而復得⋯⋯！</IntroTag
          >
          <IntroText class="ani-intro-fadeIn mt-1">
            來到二十一世紀，我們丟失了什麼？
            有時候我們丟了東西，自己也不曉得；甚至於丟失了自己，也毫無知覺。
          </IntroText>
        </div>
      </div>
    </div>
  </div>
</template>
