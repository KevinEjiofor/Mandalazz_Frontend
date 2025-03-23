<script>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import ProductCard from '@/components/ProductCard.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    ProductCard,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <Hero />
    <ProductCard />
    <Footer />
  </div>
</template>
