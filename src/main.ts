import { createApp } from "vue";
import { store, key } from "@/store";
import App from "./app";

createApp(App).use(store, key).mount("#app");
