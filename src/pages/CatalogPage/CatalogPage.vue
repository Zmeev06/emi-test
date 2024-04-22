<script setup lang='ts'>
import { Products } from '@//widgets/Products';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
  <div class=" bg-gray-200 py-4 px-5  min-h-screen">
    <h2 class="text-2xl">{{route.path === '/catalog' ? 'Все товары:' : 'Избранные товары:'}}</h2>
   <Products />
  </div>
</template>
<style lang='scss'>
    
</style>