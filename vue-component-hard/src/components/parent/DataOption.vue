<template>
  <div>
    <data-option-child @send-message="sendMessage" ref="data_option_child" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>

<script>
import DataOptionChild from "../child/DataOptionChild.vue";

export default {
  components: { DataOptionChild },
  methods: {
    changeChildData() {
      this.$refs.data_option_child.msg = "부모 컴포넌트가 변경한 데이터";
    },
  },
};
</script>

<style scoped></style>
