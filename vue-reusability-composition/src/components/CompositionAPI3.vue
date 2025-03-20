<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <span> = </span>
      <span>{{ result }}</span>
      <p>setup의 코드를 함수로 분리</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

function plusCal() {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
  });
  return toRefs(state);
}

export default {
  setup() {
    let { num1, num2, result } = plusCal();
    return {
      num1,
      num2,
      result,
    };
  },
};
</script>

<style scoped></style>
