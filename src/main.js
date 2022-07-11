import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueChartJs from 'vue-chartjs';

createApp(App).use(store).use(router).use(VueChartJs).mount("#app");
