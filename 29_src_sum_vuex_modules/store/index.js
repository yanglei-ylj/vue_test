//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

//使用vuex
Vue.use(Vuex)

//求和相关的配置
// const countOptions = {
//     namespaced:true,
//     actions:{
//         jiaOdd(context,value){
//             if(context.state.sum%2){
//                 context.commit('JIA',value)
//             }
//         },
//         jiaWait(context,value){
//             setTimeout(() => {
//                 context.commit('JIA',value)
//             },1000)
//         }
//     },
//     mutations:{
//         JIA(state,value){
//             state.sum += value
//         },
//         JIAN(state,value){
//             state.sum -= value
//         },
//     },
//     state:{
//         sum:0,//当前的和
//         school:'尚硅谷',
//         subject:'前端',
//     },
//     getters:{
//         bigSum(state){
//             return state.sum*10
//         }
//     }
// }

//人员管理相关配置
// const personOptions = {
//     namespaced:true,
//     actions:{
//         addPersonWang(context,value){
//             if(value.name.indexOf('王')===0){
//                 context.commit('ADD_PERSON',value)
//             }else{
//                 alert('添加的人必须姓王！')
//             }
//         }
//     },
//     mutations:{
//         ADD_PERSON(state,value){
//             state.personList.unshift(value)
//         }
//     },
//     state:{
//         personList:[
//             {id:'001',name:'李锦'}
//         ],
//     },
//     getters:{
//         firstPersonName(state){
//             return state.personList[0].name
//         }
//     }
// }



//创建并暴露(导出)store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})
