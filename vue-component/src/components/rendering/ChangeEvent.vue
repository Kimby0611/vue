<template>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: ''
    };
  }, methods: {
    changeSelect () {
        alert(this.selectedValue);
    }
  }
};
</script>

<style scoped>
</style>