<template>
  <div id="app">
    <Navbar />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/movieDetail">MovieDetails</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>


<style lang="scss">
html,
body{
  // font-family: 'Caveat', cursive;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
#app {
  // font-family: 'Caveat', cursive;
  background-color: #eee;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>