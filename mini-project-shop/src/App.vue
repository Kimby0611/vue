<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./layout/HeaderLayout";
import Footer from "./layout/FooTer";
export default {
  components: { Header, Footer },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
