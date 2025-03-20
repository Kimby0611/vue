<template>
  <div>
    <p>getters</p>
    <p>cartCount: {{ cartCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
};
</script>

<style scoped></style>
