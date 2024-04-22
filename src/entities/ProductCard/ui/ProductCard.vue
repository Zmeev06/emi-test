<script setup lang='ts'>
import { Slider } from '@//shared/ui/Slider/ui';
import { IProduct } from '@shared/model/types/productTypes';

interface Props {
  product: IProduct
}

const props = defineProps<Props>()

</script>
<template>
  <div class="bg-white sm:w-[230px] w-full p-3 hover:shadow-md duration-300">
    <div class="sm:h-52 h-[350px] relative">
      <Slider :images="props.product.images" />
      <slot name="favorite" class="" />
    </div>
    <div class="mt-2">
      <p class="font-bold">{{ props.product.price }} ₽</p>
      <p>{{ props.product.name }}</p>
    </div>
    <slot name="button" />
  </div>
</template>
<style lang='scss'></style>