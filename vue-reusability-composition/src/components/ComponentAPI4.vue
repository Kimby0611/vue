<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <span> = </span>
      <span>{{ result }}</span>
      <p>js파일로 분리해서 외부파일 가져오기</p>
    </div>
  </div>
</template>
<script>
import { plusCalculator } from "../router/common";
export default {
  setup() {
    let { num1, num2, result } = plusCalculator();
    return {
      num1,
      num2,
      result,
    };
  },
};
</script>
