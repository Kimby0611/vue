<template>
  <div>
    <composition-a-p-i-inject />
    <p>provide와 inject는 분리해서 사용해야함</p>
    <p>provide가 부모로 전달받을 값과 키를 설정</p>
    <p>provide(키, 값)</p>
  </div>
</template>

<script>
import { provide } from "vue";
import CompositionAPIInject from "./CompositionAPIInject.vue";

export default {
  components: { CompositionAPIInject },
  setup() {
    provide("title", "vue.js 프로젝트");
  },
};
</script>

<style scoped></style>
