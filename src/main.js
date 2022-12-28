import { createApp } from 'vue';
import App from './App.vue';
import { plural, splitThousands } from '@/assets/js/utils';

const app = createApp(App);

// Global filters
app.config.globalProperties.$filters = {
    plural,
    splitThousands,
};

// Global CSS
import './assets/scss/common.scss';

app.mount('#app');
