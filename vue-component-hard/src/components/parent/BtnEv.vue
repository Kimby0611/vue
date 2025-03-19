<template>
  <div>
    <btn-ev-child @send-message="sendMessage" ref="child_component" />
  </div>
</template>

<script>
import BtnEvChild from "../child/BtnEvChild.vue";

export default {
  components: { BtnEvChild },
  mounted() {
    this.$refs.child_component.$refs.btn.click();
  },
};
</script>

<style scoped></style>
