import axios, { AxiosRequestConfig, ResponseType } from "axios";

interface Client {
  data?: unknown | undefined;
  method?: string | undefined;
  url: string | undefined;
  params?: string | undefined;
  body?: unknown | undefined;
  headers?:
    | {
        [key: string]: string;
      }
    | undefined;
  responseType?: ResponseType;
}

const API = axios.create({
  baseURL: "http://localhost:3000/",
});

export const ApiClient = async ({
  data,
  method = "GET",
  url,
  params,

}: Client) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,

  };


  return API(requestParams)
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => {
      console.error(
        "\nERROR MESSAGE:",
        err.response.data.message,
        `\nSTATUS: ${err.response.data.status}`,
      );

      return { data: "isError", status: err.response.status };
    });
};
