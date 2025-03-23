<script setup>
import Searchbar from '@/components/Searchbar.vue';
import logo from '../assets/logo.png'
import Avatar from 'primevue/avatar';


</script>

<template>
    <div class="logo flex items-center justify-between p-4 px-20 bg-white divide-x divide-[#e5e7eb] fixed top-0 left-0 w-full z-50">
        <img class="h-10 w-auto" :src="logo" alt="logo" />
        <Searchbar @search="onSearch" />
        <div class="flex items-center gap-6">
            <i class="pi pi-shopping-cart" style="font-size: 1.5rem"></i>
            <i class="pi pi-bell" style="font-size: 1.5rem"></i>
            <!-- <Avatar :image="man" class="mr-2" size="xlarge" shape="circle" /> -->
            <Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
        </div>
    </div>
    
</template>