<template>
  <pro-vide-child />
</template>

<script>
import ProVideChild from "../child/ProVideChild.vue";

export default {
  components: { ProVideChild },
  data() {
    return {
      items: ["A", "B"],
    };
  },
  provide() {
    return {
      itemLength: this.items.length,
    };
  },
};
</script>

<style scoped></style>
