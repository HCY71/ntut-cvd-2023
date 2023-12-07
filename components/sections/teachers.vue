<script setup>
import directorImage from "@/assets/teachers/director02.jpg";

import teacherImage1 from "@/assets/teachers/01.jpg";
import teacherImage2 from "@/assets/teachers/02.jpg";
import teacherImage3 from "@/assets/teachers/03.jpg";
import teacherImage4 from "@/assets/teachers/04.jpg";
import teacherImage5 from "@/assets/teachers/05.jpg";
import teacherImage6 from "@/assets/teachers/06.jpg";
import teacherImage7 from "@/assets/teachers/07.jpg";
import teacherImage8 from "@/assets/teachers/08.jpg";

const teachersCol1 = [
  {
    name: "陳涵秀 老師",
    eng: "Han-Hsiu, Chen",
    img: teacherImage1,
    text: "恭喜大家完成了大學生涯中的「大事」，一個可以證明自己能力的專題，帶著雀躍的心，迎向未來的挑戰，走出屬於自己的一條路！",
  },
  {
    name: "張怡敏 老師",
    eng: "I-Min, Chang",
    img: teacherImage2,
    text: "經濟，可使國家強大。<br>文化，可使國家偉大。",
  },
  {
    name: "吳欣怡 老師",
    eng: "Hsin-Yi, Wu",
    img: teacherImage3,
    text: "不曉得你們喜歡去戲院看電影，或在家追劇？ 兩者都好，戲劇都是生命的故事。畢業後，歡迎回來！我們聊電影，也想辦法ㄧ起努力勇敢，保持活力，祝福你們！",
  },
  {
    name: "楊琇惠 老師",
    eng: "Han-Hsiu, Chen",
    img: teacherImage4,
    text: "喜大家完成了最艱難的畢專！將近一年的努力，終於要畫下完美的句點了，大家辛苦了！我大聲地為大家鼓掌，恭喜恭喜！<br><br>看著大家從只有構想的初審，到慢慢成形的二審，一步步成長，實著令人驚豔！我內心除了開心外，還浮現了幾個字：滴水穿石。原來，一些看似沒有成果的日常努力，日積月累，是可以造就不凡的！<br><br>專題做完，意味著大家就要畢業了，還真有點捨不得！想跟大家說的是，不管日後大家飛得再高，走得再遠，我都願意當大家休息的中島。隨時歡迎你，回來坐坐，喝杯茶，聊一聊，然後再繼續前進。<br>",
  },
];
const teachersCol2 = [
  {
    name: "吳宇凡 老師",
    eng: "Yu-Fan, Wu",
    img: teacherImage5,
    text: "文化，那看不到卻無法忽視、幽靈般的存在，彷若記憶中的魑魅魍魎，勾動著人們的行為模式，就像是哈姆雷特父親的幽靈，透過面具的保護，讓我們無法注視他的雙眼。________________讓你們產生了關注並嘗試凝視，順應著時空的脈動起伏，探循那遺忘在記憶中的失物；氣味芬芳、磚石璃瓦，工藝、地景、社會關懷，遊走在生命與自然的互動之間，形塑文化的多元樣態，讓人們嘖嘖稱奇！這時我才明白，原來招領的並不是找尋失物的你們，更不是那曾經的記憶過往、流水黃沙，而是張大嘴巴驚訝著你們成長的我們啊！",
  },
  {
    name: "楊景德 老師",
    eng: "Jing-Der, Yang",
    img: teacherImage6,
    text: "古希臘德爾菲的阿波羅神廟入口處刻的首句箴言即是「認識你自己」（know thyself）。你們正處於完成大學進入社會的階段，但什麼算是完成？四年的時間？還是那一百多個學分？不，這些只是形式條件。完成大學，意味跨越了心靈上的距離，成為準備就緒的人。你，完成了嗎？很快社會將讓你知道，你不再是團體中的亮點，更不容你引領風向。你發現自己不是以為的模樣，但沒關係，正是時候開始「認識你自己」。摒棄意氣與身段，承認自己的不足，遇挫折時向內求索。以謙虛的心好好向社會學習，經過五年、十年的沈潛與努力，你會發現，你的聲音開始受人注目，你的存在為團體帶來信心與力量。這時，你不再是原本的自己，因為你實現了自己。你找到了你。",
  },
  {
    name: "劉秋蘭 老師",
    eng: "Peggy, Liu",
    img: teacherImage7,
    text: "",
  },
  {
    name: "    岳錚 老師",
    eng: "Han-Hsiu, Chen",
    img: teacherImage8,
    text: "",
  },
];
</script>

<template>
  <div class="bg-brand-50 py-5 text-brand-700">
    <CommonBanner :isDark="true"> 老師的話 </CommonBanner>
    <div
      class="mx-auto mt-12 md:mt-20 lg:mt-24 lg:max-w-screen-lg xl:mt-28 xl:max-w-screen-2xl"
    >
      <div>
        <CommonPersonCard
          :img="directorImage"
          first="109級總指導"
          second="鄭麗玲 老師"
          :isDirector="true"
          class="lg:pr-24"
        />
        <div
          class="mt-6 px-8 sm:px-12 sm:text-lg lg:px-28 lg:text-xl lg:leading-normal xl:mt-10 xl:text-2xl"
        >
          親愛的109級同學<br /><br />
          很高興我們終於走到這裡，看到畢業專刊出爐的這一刻，相信大家都有壓力終於放下的輕鬆感。回憶一年多來經歷畢業專題的各種大小事務，從一開始為決定哪一個主題而煩心、苦思文化內涵與作品型態的撞牆期、製作過程不順利的沮喪、期限內完成的壓力、最後趕工期等各種痛苦。但是當一步步克服問題，作品拼圖逐漸完成之際，相信你們也感受到創作的樂趣。這樣的成就感驅動下再次繼續前進，成為一個良性循環。畢業專題製作就是這樣一場酸甜苦辣交織，情緒張力堆疊飽滿的畢業大戲啊。<br /><br />
          我們109級的同學們，各有不同性格，進行的主題也不太相同。除了努力在期限內完成自己的作品，以最完美的樣貌展示出來，大家同時共同策劃2場展覽——為期8天的校內畢業展與5天的校外展，大家分組分工，互相協調合作，這兩場畢業成果展，是109級同學們共同完成作品。《失物招領Lost
          and
          Found—國立臺北科技大學文化事業發展系109級畢業成果展專刊》紀錄你們努力過程，將展覽的瞬間凝聚結晶，相信多年之後翻閱，大學四年學習的點點滴滴，重新湧上心頭。請大家不吝惜地給自己鼓掌，謝謝各位的努力與付出。<br /><br />
          國立台北科技大學 文化事業發展系<br />
          109級總指導 鄭麗玲
        </div>
      </div>
      <div class="mt-20 flex flex-col items-start gap-20">
        <div
          v-for="t in teachersCol1"
          class="mx-60 flex flex-col items-start gap-10"
        >
          <CommonPersonCard
            :img="t.img"
            :first="t.name"
            :second="t.eng"
            :isDirector="false"
            :isTeacher="true"
            class="lg:pr-24"
          />
          <div class="" v-html="t.text" />
        </div>
      </div>
    </div>
  </div>
</template>
