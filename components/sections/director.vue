<script setup>
const { $anime } = useNuxtApp();

const isOpen = ref(false);
const node = ref(null);

const handleClick = () => {
  const animation = $anime({
    targets: node.value,
    height: 300,
    easing: "easeInOutExpo",
  });
  if (isOpen.value) {
    console.log("play");
    animation.play();
  } else {
    console.log("rev");
    animation.reverse();
  }
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div id="teachers">
    <CommonBanner> 主任的話 </CommonBanner>
    <div class="mx-auto max-w-screen-xl">
      <div class="my-10">//////</div>
      <CommonPersonCard
        img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        first="文化事業發展系 系主任"
        second="王怡惠 主任"
        :isDirector="true"
      />
      <div class="relative h-[100px] overflow-hidden" ref="node">
        <div>
          Excepteur reprehenderit sit culpa et laboris velit tempor ut dolore
          cupidatat. Ex esse aliquip magna proident qui magna laboris enim duis
          cupidatat. Eiusmod mollit eu aliquip duis eu ut adipisicing laboris
          aute. Officia et nulla eu aute et. Officia excepteur ea proident eu
          cillum duis veniam deserunt cillum aliquip labore enim proident
          cupidatat aliqua. Qui nostrud adipisicing mollit elit elit cillum
          pariatur. Ad laborum aliquip duis eiusmod irure quis adipisicing ea
          qui sint irure ad dolor. Id qui et reprehenderit cillum eu. Excepteur
          reprehenderit sit culpa et laboris velit tempor ut dolore cupidatat.
          Ex esse aliquip magna proident qui magna laboris enim duis cupidatat.
          Eiusmod mollit eu aliquip duis eu ut adipisicing laboris aute. Officia
          et nulla eu aute et. Officia excepteur ea proident eu cillum duis
          veniam deserunt cillum aliquip labore enim proident cupidatat aliqua.
          Qui nostrud adipisicing mollit elit elit cillum pariatur. Ad laborum
          aliquip duis eiusmod irure quis adipisicing ea qui sint irure ad
          dolor. Id qui et reprehenderit cillum eu.
        </div>
        <div
          class="absolute bottom-0 flex h-1/2 w-full items-end justify-start bg-gradient-to-t from-black"
        >
          <div class="cursor-pointer" @click="handleClick">Read More</div>
        </div>
      </div>
    </div>
  </div>
</template>
