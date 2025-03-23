<script setup>
    import cream from '../assets/cream.png'
    import rectangle from '../assets/Rectangle 2.png'

</script>

<template>
    <!-- <div class="container"> -->
  <div class="fixed top-[72px] left-0 w-full z-40 border-t-2 border-b-1 border-gray-200">
        <div class="flex items-center justify-center gap-12 p-2 bg-green-100 border-t-2 border-b-1 border-gray-200 h-[43]">
            <div class="flex items-center gap-4">
                <i class="pi pi-list" style="font-size: 1.2rem"></i>
                <p class="text-base font-normal font-manrope text-black leading-5">Brands</p>
                <i class="pi pi-angle-down" style="font-size: 1rem; color: #343330;"></i>
            </div>
            <div class="flex items-center justify-between gap-4 text-base font-normal font-manrope text-black leading-5">
                <p>Men</p>
                <p>Women</p>
                <p>Unisex</p>
                <p>Children</p>
                <p>Shoes</p>
                <p>Bags</p>
                <p>Accessories</p>
            </div>
        </div>
  </div>

        <div class="pt-[115px]" >
            <div class="relative flex flex-col items-center text-center mt-8 ">
                <img :src="cream" alt="hero" class="w-[1750px] h-[440px] object-cover rounded-3xl mx-auto              " />
<!--                <p class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-left w-max ">All the right <br>-->
<!--                    fashion accessories</p>-->
<!--                <img class="absolute top-72 left-1/4 -translate-x-1/2 -translate-y-1/2 w-full " :src="rectangle" alt="line"/>-->
              <p class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-left">
                All the right <br>
                <span class="relative inline-block">
                  fashion accessories
                  <img class="absolute top-full left-0 -translate-y-1/2 w-full" :src="rectangle" alt="line" />
                </span>
              </p>
            </div>


        </div>
    <!-- </div> -->
</template>