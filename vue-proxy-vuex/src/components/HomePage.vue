<template>
  <div>
    <h2>homepage</h2>
    <nav>
      <router-link to="/storeacc">Store Access</router-link> |
      <router-link to="/storeget">getters</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
// directives: {focus:{mounted(el) el.focus()}}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
