<template>
<!-- vue3组件中得模板结构可以没有根标签  （vue2 <template><div></div></template>） -->
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<div @click="sayhifn">111{{name}}</div>
</template>

<script>
// import {h} from 'vue'   //渲染函数类型
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    //数据
    let name="zhansan"
    let age=18
    let obj=ref([{a:1,b:{aa:2}}])
    //方法
    function sayhifn(){
      console.log(obj.value[0].a)
        alert(name,age)
    }
   //组件中所用的数据、方法、等等，均要配置在setup中
   return{
     name,
     age,
     sayhifn
   }
  //  return()=>{return h('h1','nihaoa ')} //渲染函数类型
  },
  components: {
   
  }
}
</script>

<style>
#app{

}
</style>
