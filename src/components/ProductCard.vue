<script setup>
import ReusableCard from './ReusableCard.vue';
import yellowWoman from '../assets/yellowWoman.png';
import { ref } from 'vue';
import Rating from 'primevue/rating';
import router from '@/router';



const products = ref([
  {
    id: 1,
    title: "Golden Yellow Butterfly Bodycon Dress",
    price: "120,000",
    image: yellowWoman,
  },
  {
    id: 2,
    title: "Elegant Red Maxi Dress",
    price: "150,000",
    image: yellowWoman,
  },
  {
    id: 3,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 4,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 5,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 6,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 7,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 8,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 9,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 10,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 11,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 12,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 13,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 14,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 15,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
  {
    id: 16,
    title: "Classic Black Evening Gown",
    price: "200,000",
    image: yellowWoman,
  },
]);




const value = ref(3.5);

// const handleOptions = (id) => {
//   router.push(`/view-details/${id}`); // Navigate to the ViewDetailsPage with the product ID
//   console.log(`Navigating to ViewDetailsPage for product ID: ${id}`);
// };
const handleOptions = (id) => {
  console.log(`Navigating to ViewDetailsPage for product ID: ${id}`); // Debugging
  router.push(`/view-details/${id}`)
    .then(() => console.log('Navigation successful')) // Debugging
    .catch((err) => console.error('Navigation failed:', err)); // Debugging
};



</script>

<template>
  <div class="p-10">
    <p class="text-3xl font-bold text-[#061410] mb-6 text-left ml-12">Best Sellers</p>
    <!-- <div class="grid grid-cols-4 gap-4 mt-4"> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 ml-8">

      <ReusableCard v-for="product in products"
      :key="product.id" class="ml-4" :ratingValue="product.rating" cardWidth="400px" cardHeight="" border-radius="8px"  >
        <template #header>
          <img alt="custom header" :src="yellowWoman" class="w-full rounded-t-lg" />
        </template>
        <template #title>
          <p class="text-left text-base font-normal text-[#061410]">{{ product.title }}</p>
        </template>
        <template #subtitle>
          <p class="text-left" >{{ product.price }}</p>
        </template>    
        <!-- <template>
          <div class="card flex justify-center">
              <Rating v-model="value" />
          </div>
        </template> -->

<!--        <template #content>-->
<!--          <div class="card flex justify-left gap-2">-->
<!--            <Rating v-model="value" class="custom-rating" />-->
<!--            &lt;!&ndash; <p>3.5</p> &ndash;&gt;-->
<!--            <p>{{ product.rating ? product.rating.toFixed(1) : 'N/A' }}</p>-->
<!--            <p>(400 + Reviews)</p>-->
<!--          </div>-->
<!--        </template>-->
        <template #content>
          <div class="card flex justify-left gap-2">
            <Rating v-model="value" class="custom-rating" />
            <p>{{ value ? Math.round(value) : 'N/A' }}</p>
            <p>(400 + Reviews)</p>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4 border border-[#26735B] rounded-lg text-[#26735B] mt-4">
            <Button label="Choose Options" @click="() => handleOptions(product.id)"  class="w-full h-[48px] text-base font-bold font-manrope " />
          </div>
        </template>

      </ReusableCard>
    </div>
  </div>
  
</template>

<style>
/* Override PrimeVue Rating color using Tailwind */
.custom-rating .p-rating-icon {
  @apply text-[#FFAE00] !important;
}

.custom-rating .p-rating-item:nth-child(4) .p-rating-icon {
  background: linear-gradient(to right, #FFAE00 50%, #E5E7EB 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>