<script setup lang='ts'>
import { usePaginationStore } from '../model/store/paginationStore';
interface Props {
  total: number
}

const props = defineProps<Props>()

const store = usePaginationStore()

const nextPage = () => {
  if (store.currentPage !== props.total) {
    store.setCurrentPage(store.currentPage + 1)
  }
}

const prevPage = () => {
  if (store.currentPage !== 1) {
    store.setCurrentPage(store.currentPage - 1)
  }
}

console.log(props.total);
</script>
<template>
  <div class="flex items-center gap-4 w-fit">
    <i class="pi pi-angle-left cursor-pointer" @click="prevPage" />
    <div class="flex items-center gap-2">
      <p class="px-2  text-white cursor-pointer"
        :class="index + 1 === store.currentPage ? 'bg-cyan-400' : 'bg-nekoPink'" @click="store.setCurrentPage(index + 1)"
        v-if="props.total" v-for="(item, index) in [...Array(props.total)]" :key="index">{{ index + 1 }}</p>
    </div>
    <i class="pi pi-angle-right cursor-pointer" @click="nextPage" />
  </div>
</template>
<style lang='scss'></style>