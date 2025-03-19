<template>
  <div>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <data-sync-child ref="data_sync_child" />
  </div>
</template>

<script>
import DataSyncChild from "../child/DataSyncChild.vue";

export default {
  components: { DataSyncChild },
  computed: {
    msg() {
      return this.$refs.data_sync_child.msg;
    },
  },
  methods: {
    checkChild() {
      alert(this.msg);
    },
  },
};
</script>

<style scoped></style>
