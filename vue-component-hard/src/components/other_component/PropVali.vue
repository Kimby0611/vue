<template>
  <div>
    <TitlePage :title="title" />
  </div>
</template>

<script>
import TitlePage from "../TitlePage.vue";

export default {
  components: { TitlePage },
  data() {
    return {
      title: "Prop 유효성 검사",
    };
  },
  props: {
    propA: Number,
    propB: [String, Number],
    propC: {
      type: String,
      required: true,
    },
    propD: {
      type: Number,
      default: 100,
    },
    propE: {
      type: Object,
      default: function () {
        return { message: "hello" };
      },
    },
    propF: {
      validator: function (value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    propG: {
      type: Function,
      default: function () {
        return "Default function";
      },
    },
  },
};
</script>

<style scoped></style>
