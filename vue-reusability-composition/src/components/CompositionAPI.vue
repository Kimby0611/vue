<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="state.num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ state.result }}</span>
      <p>state, reactive 로 반응형 적용</p>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: 0,
    });
    function plusNumbers() {
      state.result = parseInt(state.num1) + parseInt(state.num2);
    }
    return {
      state,
      plusNumbers,
    };
  },
};
</script>

<style scoped></style>
