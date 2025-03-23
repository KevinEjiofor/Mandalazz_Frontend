<script>
 import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
 
  
  export default {
    name: 'App',
    compoents: {
      Navbar,
      Footer,
    }
  }
</script>

<template>
  <Navbar :onSearch="handleSearch" />
  <router-view />
  <Footer />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.custom-scroll-bar::-webkit-scrollbar {
  background: transparent !important;
  width: 8px;
  height: 8px;
}

.custom-scroll-bar::-webkit-scrollbar-thumb {
  background: #eaecf0 !important;
  max-height: 20px !important;
  border-radius: 32px;
}
</style>
