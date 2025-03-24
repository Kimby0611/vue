<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">로그아웃</button>
    <pre>{{ userinfo }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      naverLogin: null,
      userinfo: "",
    };
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "wa3o5bsxrhXPdzbuJ7Hy",
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 },
    });

    this.naverLogin.init();

    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(this.naverLogin.accessToken.accessToken);
        console.log(
          "Current Access Token:",
          this.naverLogin.accessToken.accessToken
        );
        const agetext = "사용자의 나이는 : ";
        const birtext = "사용자의 생일은 : ";
        const emailtext = "사용자의 이메일은 : ";
        const nickname = "사용자의 닉네임은 : ";
        this.userinfo = agetext + this.naverLogin.user.age + "\n";
        this.userinfo += birtext + this.naverLogin.user.birthday + "\n";
        this.userinfo += emailtext + this.naverLogin.user.email + "\n";
        this.userinfo += nickname + this.naverLogin.user.nickname + "\n";
        const email = this.naverLogin.user.getEmail();
        if (email === undefined || email === null) {
          alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("로그인 상태 확인 실패 또는 미로그인");
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      const url = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=wa3o5bsxrhXPdzbuJ7Hy&client_secret=S5goWLI0Q8&access_token=${accessToken}&service_provider=NAVER`;

      this.userinfo = "";

      axios
        .get(url)
        .then((res) => {
          console.log("로그아웃 성공:", res.data);
          console.log("Logout Request URL:", url);
        })
        .catch((error) => {
          console.error(
            "로그아웃 실패:",
            error.response ? error.response.data : error.message
          );
        });
    },
  },
};
</script>
