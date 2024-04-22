<script setup lang='ts'>
import logo from '@assets/logo.webp'
import { useRoute } from 'vue-router';

const route = useRoute()
</script>
<template>
  <div class="w-screen flex sm:flex-row flex-col sm:justify-between px-20 py-4 bg-nekoPink text-white justify-center">
    <div class="flex items-center gap-4 w-fit mx-auto sm:mx-0">
      <img :src="logo" class="size-14 rounded-full object-cover" />
      <h2 class="text-xl">NekoNails</h2>
    </div>
    <div class="flex items-center gap-10 mx-auto sm:mx-0 mt-2 sm:mt-0">
      <RouterLink to="/catalog" class="underline-offset-4" :class="route.path === '/catalog' ? 'underline' : ''">Каталог</RouterLink>
      <RouterLink to="/about" class="underline-offset-4" :class="route.path === '/about' ? 'underline' : ''">О нас</RouterLink>
      <RouterLink to="/favorites"><i class="pi" :class="route.path === '/favorites' ? 'pi-heart-fill' : 'pi-heart'" /></RouterLink>
    </div>
  </div>
</template>
<style lang='scss'></style>