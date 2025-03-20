<template>
  <div>
    <h2>{{ $translate("ko.hi") }}</h2>
    <h2>{{ i18n.ko.hi }}</h2>
    <p>
      처리할 플러그인 제작 >>js, 제작한 플러그인 main.js에
      등록(use(pluginfile)/app.use(pluginfile), vue파일에서 inject로 불러와서
      사용)
    </p>
  </div>
</template>

<script>
export default {
  inject: ["i18n"],
  mounted() {
    console.log(this.i18n);
  },
};
</script>

<style scoped></style>
