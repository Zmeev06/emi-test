<script setup lang='ts'>
import { useFavoritesStore } from '@shared/model/store'
import { IProduct } from '@shared/model/types/productTypes';
interface Props {
  product: IProduct
}
const props = defineProps<Props>()
const store = useFavoritesStore()

const addToFavorites = () => {
  store.setFavorites(props.product)
}

</script>
<template>
  <div class="w-10 h-10 bg-gray-300/80 flex items-center justify-center hover:bg-gray-200 duration-300" @click.stop="addToFavorites">
    <i class="pi" :class="store.favorites.includes(props.product) ? 'pi-heart-fill' : 'pi-heart'" />
  </div>
</template>
<style lang='scss'></style>