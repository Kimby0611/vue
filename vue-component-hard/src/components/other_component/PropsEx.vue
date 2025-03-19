<template>
  <div>
    <h2>
      <TitlePage :title="pagetitle" />
    </h2>
    <p>부모 컴포넌트에서 자식 컴포넌트로 데이터 전달하기 : props</p>
  </div>
</template>

<script>
import TitlePage from "../TitlePage.vue";

export default {
  components: { TitlePage },
  data() {
    return {
      pagetitle: "Props를 이용한 page title"
    };
  }
};
</script>

<style scoped>
</style>