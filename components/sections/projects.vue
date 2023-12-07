<script setup>
import project1Image1 from "~/assets/projects/01/01.jpg";
import project1Image2 from "~/assets/projects/01/02.jpg";
import project1Image3 from "~/assets/projects/01/03.jpg";
import project1Image4 from "~/assets/projects/01/04.jpg";
import project1Image5 from "~/assets/projects/01/05.jpg";
import project1Image6 from "~/assets/projects/01/06.jpg";
import project1Image7 from "~/assets/projects/01/07.jpg";
import project1Image8 from "~/assets/projects/01/08.jpg";
import project2Image1 from "~/assets/projects/02/01.jpg";
import project2Image2 from "~/assets/projects/02/02.jpg";
import project2Image3 from "~/assets/projects/02/03.jpg";
import project2Image4 from "~/assets/projects/02/04.jpg";
import project2Image5 from "~/assets/projects/02/05.jpg";
import project2Image6 from "~/assets/projects/02/06.jpg";
import project2Image7 from "~/assets/projects/02/07.jpg";
import project2Image8 from "~/assets/projects/02/08.jpg";
import project3Image1 from "~/assets/projects/03/01.jpg";
import project3Image2 from "~/assets/projects/03/02.jpg";
import project3Image3 from "~/assets/projects/03/03.jpg";
import project3Image4 from "~/assets/projects/03/04.jpg";
import project3Image5 from "~/assets/projects/03/05.jpg";
import project3Image6 from "~/assets/projects/03/06.jpg";
import project3Image7 from "~/assets/projects/03/07.jpg";
import project3Image8 from "~/assets/projects/03/08.jpg";
import project4Image1 from "~/assets/projects/04/01.jpg";
import project4Image2 from "~/assets/projects/04/02.jpg";
import project4Image3 from "~/assets/projects/04/03.jpg";
import project4Image4 from "~/assets/projects/04/04.jpg";
import project4Image5 from "~/assets/projects/04/05.jpg";
import project4Image6 from "~/assets/projects/04/06.jpg";
import project4Image7 from "~/assets/projects/04/07.jpg";
import project4Image8 from "~/assets/projects/04/08.jpg";

const projectData = [
  {
    title: "始",
    subtitle:
      "生命如若是恩賜，<br/>那它的反面即為時間；<br/>我們在無數個睜眼與闔眼之間創造意義。",
    links: [
      {
        name: "琴革─皮革鞣製與臺灣在地素材轉化實踐",
        url: "https://www.behance.net/gallery/185028271/_",
        author: "陳昱璇",
        img: project1Image1,
      },
      {
        name: "彩瓷風雲間─釉上彩繪融入3D列印技術應用於陶瓷原模製造",
        url: "https://www.google.com",
        author: "陳力維",
        img: project1Image2,
      },
      {
        name: "「設」香茶韻─臺灣茶產業之探究與包裝形象轉化",
        url: "https://www.behance.net/gallery/185447947/_",
        author: "程平壹",
        img: project1Image3,
      },
      {
        name: "挑戰主流文化：Voguing在台灣的深入研究",
        url: "https://www.behance.net/gallery/185512447/Voguing",
        author: "黃冠檠",
        img: project1Image4,
      },
      {
        name: "技藝傳承融入環境永續─毛線編織新娘手捧花之設計與市場開發",
        url: "https://www.behance.net/gallery/185090947/_",
        author: "莊宜璇",
        img: project1Image5,
      },
      {
        name: "河岸故事：基隆田寮河生活記憶之傳承與推廣",
        url: "https://www.google.com",
        author: "涂可諭",
        img: project1Image6,
      },
      {
        name: "作伴（辦桌）─訪談總鋪師及傳承辦桌文化",
        url: "https://www.behance.net/gallery/185601829/_",
        author: "馮宣穎、王憲義",
        img: project1Image7,
      },
      {
        name: "以地域文化價值引導環境永續： 客家保存食文化的新美學",
        url: "https://www.behance.net/gallery/185691299/_",
        author: "邱郁慈",
        img: project1Image8,
      },
    ],
  },
  {
    title: "遺",
    subtitle:
      "而我們只能不斷前進，<br/>儘管我們止不住衰老的宿命；<br/>儘管終將死去。",
    links: [
      {
        name: "最後的禮物─祭祀器皿的再現",
        url: "https://www.behance.net/gallery/185534607/_",
        author: "邱品瑄",
        img: project2Image1,
      },
      {
        name: "福氣現代化 — 福字商標與現代元素結合",
        url: "https://www.behance.net/gallery/185509303/_",
        author: "梁靜珊、裘曉藍",
        img: project2Image2,
      },
      {
        name: "饗硯 — 陶硯的工藝創新與文化永續應用",
        url: "https://www.behance.net/gallery/185421059/",
        author: "許菁菁",
        img: project2Image3,
      },
      {
        name: "大稻埕北街文化符碼轉譯及其體驗 — 以葉晉發商號為中心",
        url: "https://www.behance.net/gallery/185707957/_",
        author: "陳怡安",
        img: project2Image4,
      },
      {
        name: "文化永續 — 臺灣吉祥紋樣融入穿戴美甲開發設計與行銷策略",
        url: "https://www.behance.net/gallery/185569069/WeirdNail",
        author: "黃鈺晰",
        img: project2Image5,
      },
      {
        name: "重版出來 — 再現日治臺灣王詩琅、龍瑛宗、張文環之文學地景",
        url: "https://www.behance.net/portfolio/editor?project_id=185427747",
        author: "陳彥寧",
        img: project2Image6,
      },
      {
        name: "穿越 — 台北歷史建築探析與透視轉化",
        url: "https://www.behance.net/gallery/185854425/_",
        author: "林義翔",
        img: project2Image7,
      },
      {
        name: "飛鴻印雪 — 明清以來皖派篆刻流變及其文創加值探析",
        url: "https://www.behance.net/gallery/185595641/_z",
        author: "盧昀萱、林柔妤",
        img: project2Image8,
      },
    ],
  },
  {
    title: "尋",
    subtitle:
      "人類的軌跡呈圓形，<br/>假如開始同時是結束的話，<br/>我願意扭過頭再回到來時路。",
    links: [
      {
        name: "Oasis • 苒苒蒔日 — 以陶瓷器皿再現青田街地方紋理",
        url: "https://www.behance.net/gallery/185395401/Oasis-?",
        author: "張戎佳",
        img: project3Image1,
      },
      {
        name: "Pyanan — 宜蘭縣南山部落深度旅遊教育推廣計畫",
        url: "https://www.behance.net/gallery/185466389/Pyanan-",
        author: "林姿嫻",
        img: project3Image2,
      },
      {
        name: "台灣好鄉 — 以嗅覺符碼建構地方意象之策略研究",
        url: "https://www.behance.net/gallery/185895291/_",
        author: "陳柏翰",
        img: project3Image3,
      },
      {
        name: "戀上艋舺 — 龍山寺愛情產業鏈振興暨形象品牌形塑之遊戲製作",
        url: "https://www.behance.net/gallery/185571217/_",
        author: "曾愉捷、黃品嘉",
        img: project3Image4,
      },
      {
        name: "誰是雲林人? — 探析旅北雲林人的自我追尋與自我實踐路徑",
        url: "https://www.behance.net/gallery/185709439/_?share=1",
        author: "沈松德",
        img: project3Image5,
      },
      {
        name: "上學日 — 從權力結構、性別與自我認同議題探究臺灣學生制服文化",
        url: "https://www.behance.net/gallery/185493915/_",
        author: "黃欣宜、許雅婷",
        img: project3Image6,
      },
      {
        name: "臺灣日治時期新劇發展初探 — 以星光、民烽及厚生為例",
        url: "https://www.behance.net/gallery/185530835/_",
        author: "黃于庭",
        img: project3Image7,
      },
      {
        name: "文化資產視覺化行銷 — 以古蹟陽明山中山樓為例",
        url: "https://www.behance.net/gallery/185414349/_",
        author: "楊喨宇",
        img: project3Image8,
      },
    ],
  },
  {
    title: "拾",
    subtitle:
      "我會幫你記住，幫你一片一片撿起，<br/>反方向走總是判逆的，<br/>但只為了在你凋零殆盡前，把你拼回來。",
    links: [
      {
        name: "建構文化影像 AI 程式設計 — 以臺灣老舊影像為例",
        url: "https://www.behance.net/gallery/185726463/AI",
        author: "孫嘉謙",
        img: project4Image1,
      },
      {
        name: "樂 • 瓷不疲 — 以樂高積木結合陶瓷工藝再現北科紅樓建築",
        url: "https://www.behance.net/gallery/185719595/_?",
        author: "李諾",
        img: project4Image2,
      },
      {
        name: "軒社在臺灣民間宗教中的文化意涵 — 以林口樂林園為例",
        url: "https://www.behance.net/gallery/185417969/_",
        author: "楊穎超、黃雋越",
        img: project4Image3,
      },
      {
        name: "星淵紀:艋舺跫音 — 頂下郊拼歷史事件小說化",
        url: "https://www.behance.net/gallery/185286971/_",
        author: "辛佩得",
        img: project4Image4,
      },
      {
        name: "追「更」舊地 — 以臺中仕紳吳鸞旂的公館興衰歷程為例,探究何謂文化資產",
        url: "https://www.behance.net/gallery/185354319/_",
        author: "蕭諾玫",
        img: project4Image5,
      },
      {
        name: "臺灣民間文學踏查 — 以李獻璋《臺灣民間文學集》故事篇為例",
        url: "https://player.soundon.fm/p/849ff479-f497-4a2a-9202-db74b177e342/episodes/37c8a066-7a29-49ac-80e2-56255333af6d",
        author: "翁珮瑜",
        img: project4Image6,
      },
      {
        name: "古奠新生 — 探討北斗奠安宮古廟的遷建與轉型",
        url: "https://www.behance.net/gallery/185684809/31-",
        author: "江其謙",
        img: project4Image7,
      },
      {
        name: "璃珍瑭㺭 — 臺灣傳統玻璃產業探析及其文創轉化",
        url: "https://www.behance.net/gallery/185094705/_",
        author: "趙佑真、郭紫婕",
        img: project4Image8,
      },
    ],
  },
];
</script>

<template>
  <div id="projects" class="pb-10 md:pb-20">
    <CommonBanner>展覽作品</CommonBanner>
    <Project
      v-for="p in projectData"
      :title="p.title"
      :subtitle="p.subtitle"
      :links="p.links"
      class="mx-auto"
    />
  </div>
</template>
