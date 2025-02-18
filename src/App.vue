  <script>
 import Navbar from './components/Navbar.vue';
 import Hero from './components/Hero.vue';
 import ProductCard from './components/ProductCard.vue';
import Footer from './components/Footer.vue';
 
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Hero,
      ProductCard ,
      Footer,
    }
  }
  </script>

<template>
  <Navbar />
  <Hero />
  <ProductCard />
  <Footer />
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
