import { defineStore } from "pinia";
import { ref } from "vue";

export const usePaginationStore = defineStore("pagination", () => {
  const currentPage = ref(1);

  const setCurrentPage = (
    value: number
  ) => {
    currentPage.value = value
  };

  return { currentPage, setCurrentPage };
});
