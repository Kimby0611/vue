<template>
  <div>
    <h3>?</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    callFromParent() {
      this.message = "부모 컴포넌트에서 직접 호출한 함수";
    },
  },
};
</script>

<style scoped></style>
