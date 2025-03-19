<template>
  <!-- <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div> -->
  <!-- <modal-layout>
    <template v-slot:header>
      <h1>팝업 타이틀</h1>
    </template>
    <template v-slot:default>
      <p>팝업 컨텐츠1</p>
      <p>팝업 컨텐츠2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </modal-layout> -->
  <h2><slot></slot></h2>
</template>

<script>
export default {
  data() {
    return {
      sampleData: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
