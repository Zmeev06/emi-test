import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";

export const getProduct = async (id: number) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `products?id=${id}`,
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка при входе:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
