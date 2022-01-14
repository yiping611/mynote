//引入得不再是vue 得构造函数  ，引入得是一个名为createApp得工厂函数
// 构造函数需要new 来调用,且首字母大写 ，工厂函数无需用new 
//js中构建函数的几种方法，工厂函数模式  ，构造函数模式，构造函数 + 原型模式
import { createApp } from 'vue'
import App from './App.vue'
//const app=createApp(App)  app.mount('#app')
// 创建应用实例对象-app(类似于vue2中得vm ，但app 比vm 更“轻”，（没那么多方法）)
createApp(App).mount('#app')
/*
vue2   import Vue from 'vue' 
1. new Vue({
    render:(h)=>{return h(App)} //render:h=>h(App)
}).$mount('#app')
2. const vm=new Vue({
    render:(h)=>{return h(App)} //render:h=>h(App)
})
vm.$mount('#app')
*/
