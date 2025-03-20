<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  inject: ["itemLength"],
  data() {
    return {
      message: "",
    };
  },
  mounted() {
    console.log(this.itemLength);
    this.message = this.itemLength;
  },
};
</script>

<style scoped></style>
