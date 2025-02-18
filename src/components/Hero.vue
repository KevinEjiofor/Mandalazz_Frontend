<script setup>
    import pink from '../assets/pink.png'
    import rectangle from '../assets/Rectangle 2.png'
 
</script>

<template>
    <!-- <div class="container"> -->
        <div class="flex items-center justify-center gap-12 p-6">
            <div class="flex items-center gap-4">
                <i class="pi pi-list" style="font-size: 1.2rem"></i>
                <p class="text-base font-normal font-manrope text-black leading-5">Categories</p>
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

        <div >
            <div class="relative flex flex-col items-center text-center mt-8 ">
                <img :src="pink" alt="hero" class="w-[1750px] h-[440px] object-cover rounded-3xl mx-auto" />
                <p class="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 text-white text-6xl font-bold text-left ">All the right <br>
                    fashion accessories</p>
                <img class="absolute top-72 left-1/4 -translate-x-1/4 -translate-y-1/2 " :src="rectangle" alt="line"/>
            </div>
            

        </div>
    <!-- </div> -->
</template>