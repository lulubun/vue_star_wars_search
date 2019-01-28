import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdContent, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdField)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
