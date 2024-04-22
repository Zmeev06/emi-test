<script setup lang='ts'>
import { addToCard } from '../api/addToCard';

interface Props {
  product: {
    id: number
    name: string
    description: string,
    price: number,
    volume: number,
    country: string,
    effect: string,
    images: string[]
  }
}

const props = defineProps<Props>()
const addProductToCard = async () => {
  const { data, status } = await addToCard(props.product)
  if (status === 200) {
    console.log(data);
  }
}
</script>
<template>
  <button class="bg-nekoPink w-full mt-3 py-1 text-white hover:bg-nekoPink/80 rounded-md duration-300" @click.stop="addProductToCard">В
    корзину</button>
</template>
<style lang='scss'></style>