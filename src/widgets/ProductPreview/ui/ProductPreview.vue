<script setup lang='ts'>
import { Slider } from '@//shared/ui/Slider/ui';
import { getProduct } from '../api/getProduct';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const product = ref()
const isLoading = ref(false)

const getProductData = async () => {
  isLoading.value = true
  const { data, status } = await getProduct(+route.params.id)
  if (status === 200) {
    product.value = data[0
    ]
    isLoading.value = false
  }
}

onMounted(() => {
  getProductData()
})

</script>
<template>
  <div v-if="!isLoading && product" class="mx-auto w-fit mt-10 px-6">
    <div class="flex gap-5 flex-col lg:flex-row ">
      <div class="w-[350px] h-[400px]">
        <Slider :images="product.images" />
      </div>
      <div class="max-w-[500px] flex flex-col gap-8">
        <h3 class="text-2xl font-bold">{{ product.name }}</h3>
        <p class="text-gray-400">{{ product.description }}</p>
        <p class="text-[40px] font-bold">{{ product.price }} ₽</p>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="h-[2px] bg-gray-200" />
      <div class="flex justify-between">
        <p class="text-gray-400">Страна производства:</p>
        <p class="font-bold">{{ product.country }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Объем:</p>
        <p class="font-bold">{{ product.volume }}</p>
      </div>
      <div class="flex justify-between">
        <p class="text-gray-400">Эффект:</p>
        <p class="font-bold">{{ product.effect }}</p>
      </div>
    </div>
  </div>
</template>
<style lang='scss'></style>