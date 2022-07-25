//该文件是整个项目的入口文件

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入插件
import plugins from './plugins'

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用(使用)插件
Vue.use(plugins)

//创建Vue实例对象-----vm
new Vue({
  el:'#app',
  //将APP组件放入容器中
  render: h => h(App),
})
