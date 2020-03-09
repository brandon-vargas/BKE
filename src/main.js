import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import HomePage from '@/components/HomePage'
import ContentForm from '@/components/ContentForm.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      name: 'content-form',
      path: '/create-card', 
      component: ContentForm,
    }
  ]
})

new Vue({
  router, 
  vuetify,
  render: h => h(App)
}).$mount('#app')
