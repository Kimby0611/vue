<template>
  <div>
    <div id="naverIdLogin"></div>
    <button type="button" @click="logout">로그아웃</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      naverLogin: null,
    };
  },
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "ciDECEqj3mQCXB6j7HEC",
      callbackUrl: "http://localhost:8080/naverlogin",
      isPopup: false,
      loginButton: {
        color: "green",
        type: 3,
        height: 60,
      },
    });
    this.naverLogin.init();
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        var email = this.naverLogin.user.getEmail();
        if (email == undefined || email == null) {
          alert("동의하세요");
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("실패");
      }
    });
  },
  methods: {
    logout() {
      const accessToken = this.naverLogin.accessToken.accessToken;
      console.log(accessToken);
      const url = `/oauth2.0/token?grant_type=delete&client_id=zFcLWPMTcDQTNTB6iIOy&client_secret=IF6AZcPTj0&access_token=${accessToken}&service_provider=NAVER`;
      axios.get(url).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style scoped></style>
