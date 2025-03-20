<template>
  <div>
    <h2>사이트별 로그인</h2>
    <button @click="$router.push('/kakaologin')">KAKAO</button>
    <button @click="$router.push('/naverlogin')">NAVER</button>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
button {
  border: 2px solid gold;
  background-color: lightblue;
  border-radius: 50px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  margin-right: 50px;
  margin-top: 200px;
}
button:hover {
  background-color: blue;
  color: white;
}
</style>
