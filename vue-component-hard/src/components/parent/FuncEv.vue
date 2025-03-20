<template>
  <div>
    <func-ev-child @send-message="sendMessage" ref="child_component" />
    <p ref="chmessage">{{ message }}</p>
  </div>
</template>

<script>
import FuncEvChild from "../child/FuncEvChild.vue";
export default {
  components: { FuncEvChild },
  data() {
    return {
      message: null,
    };
  },
  methods: {
    sendMessage(func) {
      this.message = func;
    },
  },
  mounted() {
    this.$refs.chmessage;
    this.$refs.child_component.toparent();
    this.$refs.child_component.toparentp();
  },
};
</script>

<style scoped></style>
