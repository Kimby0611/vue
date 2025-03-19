<template>
  <div>
    <func-ev-child @send-message="sendMessage" ref="child_component" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import FuncEvChild from "../child/FuncEvChild.vue";
export default {
  components: { FuncEvChild },
  mounted() {
    this.$refs.child_component.callFromParent();
  },
};
</script>

<style scoped></style>
