<template>
  <div>
    <h1>Resuability & Composition</h1>
    <nav>
      <router-link to="/calculator">calculator</router-link> |
      <router-link to="/calcomposition">Composition</router-link> |
      <router-link to="/computed">Computed</router-link> |
      <router-link to="/funccal">Computed</router-link> |
      <router-link to="/jscal">js calculator</router-link> |
      <router-link to="/pvij">provide/inject</router-link> |
      <router-link to="/api">API</router-link> |
      <router-link to="/directive">Custom Directive</router-link> |
      <router-link to="/plugin">Plugin</router-link> |
    </nav>
    <router-view />
  </div>
</template>

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
