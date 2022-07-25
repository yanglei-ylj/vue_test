//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About,
            meta:{
                title:'关于'
            }
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{
                title:'主页'
            },
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    },
                },
                {
                    name:'message',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        {
                            name:'detail',
                            path:'detail',
                            component:Detail,
                            meta:{
                                isAuth:true,
                                title:'详情'
                            },
                            //props的第三种写法，值为函数，
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            },
                        }
                    ]
                },
            ]
        }
    ]
})

//全局前置路由守卫---初始化的时候被调用、每次路由切换之前被调用
//beforeEach：在每一次路由切换之前
router.beforeEach((to,from,next) => {
    //鉴别path路径
    // if(to.path==='/home/news' || to.path==='/home/message'){
    //     if(localStorage.getItem('school')==='atguigu'){
    //         next()
    //     }else{
    //         alert('学校名称不对，没有权限查看！')
    //     }
    // }else{
    //     next()
    // }

    //鉴别name名字
    // if(to.name==='news' || to.name==='message'){
    //     if(localStorage.getItem('school')==='atguigu'){
    //         next()
    //     }else{
    //         alert('学校名称不对，没有权限查看！')
    //     }
    // }else{
    //     next()
    // }

    
    if(to.meta.isAuth){    //判断是否需要鉴权
        if(localStorage.getItem('school')==='atguigu'){
            //document.title = to.meta.title || '测试系统'
            next()
        }else{
            alert('学校名称不对，没有权限查看！')
        }
    }else{
        //document.title = to.meta.title || '测试系统'
        next()
    }
})



//全局后置路由守卫---初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from) => {
    document.title = to.meta.title || '测试系统'
})



export default router