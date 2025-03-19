<template>
  <div>
    <button type="button" @click="childFunc" ref="btn">click</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    childFunc() {
      this.message = "부모 컴포넌트에서 직접 발생시킨 이벤트";
    },
  },
};
</script>

<style scoped></style>
