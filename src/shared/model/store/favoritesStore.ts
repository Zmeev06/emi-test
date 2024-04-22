import { defineStore } from "pinia"
import { ref } from "vue"
import { IProduct } from "../types/productTypes"

export const useFavoritesStore = defineStore("favorites", () => {
	const favorites = ref<IProduct[]>([])

	const setFavorites = (value: IProduct) => {
		if (favorites.value.includes(value)) {
			favorites.value = favorites.value.filter(
				(item: IProduct) => item.id !== value.id
			)
		} else {
			favorites.value.push(value)
		}
	}

	return { favorites, setFavorites }
})
