<script setup lang='ts'>
import { ProductCard } from '@entities/ProductCard';
import { getProducts } from '../api/getProducts';
import { onMounted, ref, watch } from 'vue';
import { Loader } from '@//shared/ui/Loader';
import { Pagination } from '@features/Pagination';
import { useRouter, useRoute } from 'vue-router';
import { usePaginationStore } from '@features/Pagination/model/store/paginationStore';
import { ToCardButton } from '@features/ToCardButton';
import { FavoriteButton } from '@features/FavoriteButton';
import { useFavoritesStore } from '../../../shared/model/store/favoritesStore';


const products = ref()
const isLoading = ref(false)
const totalPages = ref(1)
const favoritesStore = useFavoritesStore()

const store = usePaginationStore()
const router = useRouter()
const route = useRoute()

const getProductsData = async () => {
  isLoading.value = true
  const { data, status } = await getProducts(store.currentPage)
  if (status === 200) {
    products.value = data.data
    totalPages.value = data.last
    isLoading.value = false
  } else {
    isLoading.value = false
  }
}

onMounted(() => {
  if (route.path === '/catalog') {
    getProductsData()
  } else {
    products.value = favoritesStore.favorites
  }
})

watch(() => store.currentPage, () => {
  getProductsData()
})

watch(() => route.path, () => {
  if (route.path === '/catalog') {
    getProductsData()
  } else {
    products.value = favoritesStore.favorites
  }
})

watch(() => favoritesStore.favorites, () => {
  products.value = favoritesStore.favorites
})
</script>
<template>
  <div v-if="!isLoading && route.path === '/catalog'">
    <div class="flex flex-wrap w-[90%] gap-4 mx-auto mt-10">
      <ProductCard @click="router.push(`/product/${item.id}`)" class="cursor-pointer" v-if="products"
        v-for="(item, index) in products" :key="index" :product="item">
        <template #button>
          <ToCardButton :product="item" />
        </template>
        <template #favorite>
          <FavoriteButton :product="item" class="absolute top-2 right-2" />
        </template>
      </ProductCard>
      <p v-else class="mx-auto mt-32">Товары не найдены</p>
    </div>
    <Pagination class="mx-auto mt-4" v-if="totalPages" :total="totalPages" />
  </div>
  <div class="flex flex-wrap w-[90%] gap-4 mx-auto mt-10" v-else>
    <ProductCard @click="router.push(`/product/${item.id}`)" class="cursor-pointer" v-if="products"
      v-for="(item, index) in products" :key="index" :product="item">
      <template #button>
        <ToCardButton :product="item" />
      </template>
      <template #favorite>
        <FavoriteButton :product="item" class="absolute top-2 right-2" />
      </template>
    </ProductCard>
    <p v-if="favoritesStore.favorites.length === 0" class="mx-auto mt-32">Товары не найдены</p>
  </div>
  <Loader v-if="isLoading" />

</template>
<style lang='scss'></style>