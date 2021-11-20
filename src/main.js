import { createApp } from 'vue';

import '../resources/neutralino.js';

import App from './app.vue';
const app = createApp(App);

app.mount('#app');

Neutralino.init();
