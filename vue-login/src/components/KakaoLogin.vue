<template>
  <div>
    <a id="custom-logiin-btn" @click="kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    <p>{{ username }}</p>
    <p>{{ imgurl }}</p>
    <button type="button" @click="kakaoLogout()">로그아웃</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      imgurl: "",
    };
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, profile_image",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const profile_image = kakao_account.profile.profile_image_url;
          const defaulttext = "카카오톡 이름 : ";
          const defaultimg = "이미지 URL : ";
          this.username = defaulttext + kakao_account.profile.nickname;
          this.imgurl = defaultimg + kakao_account.profile.profile_image_url;
          console.log("nickname", nickname);
          console.log("image", profile_image);
          alert("로그인 성공");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        this.username = "";
        this.imgurl = "";
        console.log(response, "로그아웃 되었습니다.");
      });
    },
  },
};
</script>

<style scoped></style>
