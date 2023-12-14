<script setup>
import memberName1 from "~/assets/team/names/01.png";
import memberName2 from "~/assets/team/names/02.png";
import memberName3 from "~/assets/team/names/03.png";
import memberName4 from "~/assets/team/names/04.png";
import memberName5 from "~/assets/team/names/05.png";
import memberName6 from "~/assets/team/names/06.png";
import memberName7 from "~/assets/team/names/07.png";
import memberName8 from "~/assets/team/names/08.png";
import memberName9 from "~/assets/team/names/09.png";
import memberName10 from "~/assets/team/names/10.png";
import memberName11 from "~/assets/team/names/11.png";
import memberName12 from "~/assets/team/names/12.png";

import memberImg1 from "~/assets/team/01.jpg";
import memberImg2 from "~/assets/team/02.jpg";
import memberImg3 from "~/assets/team/03.jpg";
import memberImg4 from "~/assets/team/04.jpg";
import memberImg5 from "~/assets/team/05.jpg";
import memberImg6 from "~/assets/team/06.jpg";
import memberImg7 from "~/assets/team/07.jpg";
import memberImg8 from "~/assets/team/08.jpg";
import memberImg9 from "~/assets/team/09.jpg";
import memberImg10 from "~/assets/team/10.jpg";
import memberImg11 from "~/assets/team/11.jpg";
import memberImg12 from "~/assets/team/12.jpg";

const teamMembers = [
  {
    name: memberName1,
    img: memberImg1,
    words:
      "在這段不容易的旅程中，謝謝大家一起堅持了下來，心中滿滿的感動與感謝。謝謝每位你們，成就了一個群體的完整。在「Lost and Found失物招領」裡，我發掘失去並不意味著終結，因為我們獲得了一個重新找尋的機會。<br/>“Not until we are lost do we begin to understand ourselves.” —Henry David Thoreau 不要在意那些失去的，相信我們會在探尋的旅途中，找到比失去更珍貴的東西，祝福大家！",
  },
  {
    name: memberName2,
    img: memberImg2,
    words:
      "畢業展覽走到最後一步，我們的大學生活也即將來到尾聲，感謝所有同學的努力、付出和協助。過了這個終點，不知道我們的下一個盡頭會在哪裡，但仍然祝福大家不論身在何方、正在前往哪個方向，一切都能安好無恙。",
  },
  {
    name: memberName3,
    img: memberImg3,
    words:
      "所有的幹部們，辛苦了！謝謝我的搭檔諾玫，你是最棒的搭檔！<br>這一年全部的大家都辛苦了，恭喜大家熬過來了，為自己專題畫下完美的句點。一段旅程的結束也代表著下一段旅程即將開始，希望大家的下一段旅程能夠更順利！為自己未來的那片天空畫出一道最美的彩虹！",
  },
  {
    name: memberName4,
    img: memberImg4,
    words:
      "從一開始的籌備，到最終策畫、舉辦展覽，內心十分感慨與激動。經過分工團隊不斷溝通和努力、各司其職，很慶幸大家齊心協力一起完成這場展覽。希望失物招領的呈現，可以讓所有對未來迷惘、徬徨的我們，能找回最真實的自己。",
  },
  {
    name: memberName5,
    img: memberImg5,
    words:
      "專題是大家大學生涯最後一次和同學們共同合作的項目，從籌備、準備到現在即將畫下句點。希望大家記得一起奮鬥的這些日子，但忘記了也沒關係，總有一天這些記憶會在某天被記起，成為回憶。<br>恭喜我們完成了這項挑戰，辛苦了。",
  },
  {
    name: memberName6,
    img: memberImg6,
    words:
      "專題能夠圓滿的結束都是大家這一年一起努力的成果，沒有大家的統籌與領導，就沒有現在的「失物招領」。也謝謝各位同學們的配合，讓專題這項大課題更加完整。<br>期許大家都能在這段期間有個美好的收穫，辛苦大家了！",
  },
  {
    name: memberName9,
    img: memberImg9,
    words:
      "「失物招領」是獨一無二的，因為它承載了每一個人的心血和努力，每一次的改進和調整，都是我們向著目標邁進的腳步，這是一個充滿考驗與艱辛的籌備之路，也正是這些挑戰讓我們能夠成長進步，將成為人生中珍貴的回憶。",
  },
  {
    name: memberName8,
    img: memberImg8,
    words: "能者多勞，大家辛苦了~",
  },
  {
    name: memberName11,
    img: memberImg11,
    words:
      "整整將近一年的籌備期，很開心終於走到寫感言的時刻了。感謝好partner其謙，也辛苦所有籌備展覽的幹部與同學，沒有你們就沒有「失物招領」，希望大家未來一樣可以在自己喜歡的道路上持續發光發熱，加油！",
  },

  {
    name: memberName10,
    img: memberImg10,
    words:
      "專題大家都付出了很多，希望畢業專題可以順利結束，大家也可以順順利利畢業，未來都可以往自己想要去的地方繼續努力!",
  },
  {
    name: memberName7,
    img: memberImg7,
    words:
      "畢業專題即將落下帷幕。站在這段旅程的終點，我想表達對每一位組員的深深感激和由衷的感動。大家都是這趟旅程最美麗的風景。過程每一次的討論都是心靈的碰撞，每一次的合作都是靈魂的共振。也就是諸多「每一次」大家才能一起成就整個專題。<br>這段旅程或許將結束，但我們攜手前行的故事將永遠被刻在心底。",
  },
  {
    name: memberName12,
    img: memberImg12,
    words:
      "這次展覽透過大家的努力，專題終於走到了尾聲。在這一年中經歷了許多困難，但經由大家的溝通與合作，使展覽最終展現了現今的樣貌。這次籌備展覽讓我獲得了許多經驗以及豐富的回憶，謝謝大家一路的陪伴。",
  },
];

onMounted(timelineTeam);
</script>
<template>
  <div id="team" class="py-5 lg:pb-20 lg:pt-14 xl:pb-40 xl:pt-20">
    <CommonBanner> 策展團隊 </CommonBanner>
    <div
      class="mx-auto mt-16 grid max-w-screen-lg grid-cols-1 gap-12 pl-20 pr-8 sm:mt-20 sm:gap-16 sm:pl-28 sm:pr-12 md:grid-cols-2 md:pl-20 md:pr-6 lg:mt-32 lg:gap-x-32 lg:gap-y-20 lg:pl-36 lg:pr-20 xl:max-w-screen-xl xl:gap-x-48 xl:pl-40 xl:pr-20"
    >
      <div
        v-for="m in teamMembers"
        class="ani-team-card md:w-[95%] md:odd:justify-self-start md:even:justify-self-end lg:w-full"
      >
        <CommonPersonCard :img="m.img" :first="m.name" />
        <div v-html="m.words" class="-ml-10 mt-4 font-hanWang md:text-lg" />
      </div>
    </div>
  </div>
</template>
