//该文件是整个项目的入口文件

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'


//完整引入ElementUI
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
//按需引入ElementUI


//关闭Vue的生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI);

// Vue.component(Button);
// Vue.component(Row);
// Vue.component(DatePicker);
/* 或写为*/

 

//创建Vue实例对象-----vm
new Vue({
  el:'#app',
  //将APP组件放入容器中
  render: h => h(App),
})
