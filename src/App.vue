<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  created() {
    alert('لطفا برای بهتر کار کردن سایت فیلتر شکن خود را روشن کنید')
  }
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