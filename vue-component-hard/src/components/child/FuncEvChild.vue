<template>
  <div>
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
    toparent() {
      console.log("부모 컴포넌트에서 직접 호출한 함수");
    },
    toparentp() {
      this.message = "부모 컴포넌트에서 직접 호출한 함수";
      this.$emit("send-message", this.message);
    },
  },
};
</script>

<style scoped></style>
