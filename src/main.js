// main.js
import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const store = reactive({
    signer: null,
});

const app = createApp(App);
app.provide('store', store);
app.config.globalProperties.$http = axios;
app.use(router);
app.mount("#app");
