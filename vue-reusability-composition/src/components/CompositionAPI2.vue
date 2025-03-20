<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" />
      <span> + </span>
      <input type="text" v-model="state.num2" />
      <span> = </span>
      <span>{{ state.result }}</span>
      <p>reactive와 computed 사용으로 keyup 이벤트 없앨 수 있음</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    });
    return {
      state,
    };
  },
};
</script>

<style scoped></style>
