//该文件是整个项目的入口文件

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//引入vue-resource插件
//import vueResource from 'vue-resource'

//引入store
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false


//使用插件vueResource
//Vue.use(vueResource)


//创建Vue实例对象-----vm
new Vue({
  el:'#app',
  //将APP组件放入容器中
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
