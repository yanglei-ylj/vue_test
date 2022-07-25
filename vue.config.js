const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  pages:{
    index:{
      //入口
      entry:'src/main.js',
    }
  },
  //开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atguigu': {   //匹配所有以 '/atguigu' 开头的请求路径
        target: 'http://localhost:5000',   //代理目标的基础路径
        pathRewrite:{'^/atguigu':''},   //代理往后端服务器的请求去掉 /atguigu 前缀
        ws: true,   //用于支持websocket
        changeOrigin: true   //用于控制请求头中的host值
      },
      '/demo': {   //匹配所有以 '/atguigu' 开头的请求路径
        target: 'http://localhost:5001',   //代理目标的基础路径
        pathRewrite:{'^/demo':''},   //代理往后端服务器的请求去掉 /atguigu 前缀
      },
    }
  }
})
