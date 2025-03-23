<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;

// Fetch product details based on `productId` if needed
</script>

<template>
  <div>
    <h1>Product Details</h1>
    <p>Product ID: {{ productId }}</p>
    <!-- Add more details about the product here -->
  </div>
</template>