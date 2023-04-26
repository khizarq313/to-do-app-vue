import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');

// Optional configurations
app.config.productionTip = false;
app.config.devtools = true;
