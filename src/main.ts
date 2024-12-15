import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueShowdownPlugin } from 'vue-showdown';

const app = createApp(App)

app.use(router)

// the second parameter of app.use() is optional
app.use(VueShowdownPlugin, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: true,
  },
});

app.mount('#app')
