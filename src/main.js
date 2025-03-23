import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/main.css'
import 'primeicons/primeicons.css'
import Card from 'primevue/card';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import router from './router/index'




// import 'primevue/resources/themes/saga-blue/theme.css'; // Theme
// import 'primevue/resources/primevue.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons

const app = createApp(App)
app.use(router);
app.use(PrimeVue)
app.component('Card', Card);
app.component('Button', Button);
app.mount('#app')
