import { createApp } from "vue";
import { router, store } from "./providers";
import App from "./index.vue";

const initializeApp = createApp(App).use(router).use(store);

export const app = initializeApp;
