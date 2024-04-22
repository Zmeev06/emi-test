import { AxiosError } from "axios";
import { ApiClient } from "@shared/api/Client";


export const addToCard = async (product: any) => {
  try {
    const response = await ApiClient({
      data: product,
      method: "POST",
      url: "card",
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    console.error("Ошибка:", error);
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
