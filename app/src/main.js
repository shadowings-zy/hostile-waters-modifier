import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import store from './store'
import en from './languages/en/en'
import zh from './languages/zh/zh'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh,
    en,
  },
})

new Vue({
  store,
  i18n,
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
