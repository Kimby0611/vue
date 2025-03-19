<template>
  <div>
    <TitlePage :title="post.title" />
    <TitlePage :count="post.number" />
    <TitlePage :title="bool.title" />
    <TitlePage :boooo="bool.bol" />
    <TitlePage :title="arra.title" />
    <TitlePage :arra="arra.ar" />
    <TitlePage :title="obj.title" />
    <TitlePage :objc="obj.obob" />
  </div>
</template>

<script>
import TitlePage from "../TitlePage.vue";

export default {
  components: { TitlePage },
  data() {
    return {
      post: {
        title: "num.post, v-bind 예제 vue에서는 ':' < 이것이 v-bind의 약어",
        number: 3,
      },
      bool: {
        title: "논리 자료형 역시 숫자형과 같은 형식",
        bol: false,
      },
      arra: {
        title: "배열 형태",
        ar: [234, 456, 678],
      },
      obj: {
        title: "객체 형태",
        obob: { name: "Veroica", company: "Veridian Dynamics" },
      },
    };
  },
};
</script>
<style scoped></style>
