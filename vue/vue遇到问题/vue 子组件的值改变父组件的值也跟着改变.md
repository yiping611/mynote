分析：
随着使用vue越来越多，慢慢的也遇到了一些vue中的坑，前几天利用父组件给子组件传了一个queryInfo，按照以前的经验，我们需要使用 this.$emit()将值传回父组件，
但是，神奇的事情发生了，子组件修改后，父组件的queryInfo也同样发生了改变。

去官网以及各大网站查找后得知，个人发现了vue组件传值遵循这样一个规则
vue的组件传值对于引用数据类型来说，是一个 浅拷贝。

遇到问题的第一想法，是将父组件传值给子组件一个新的值
然后，在子组件props中接收到父组件的传值，并赋值给一个新的空值
```
props: ['queryInfo'],
created() {
this.subQueryInfo = this.queryInfo
},
methods: {
   handleSubmit() { 
      this.$emit('fromSubmit', this.subQueryInfo)
}
}
```
方法一
此时queryInfo赋给新值的是原值的物理地址(浅拷贝),
因此，值的隔离失败，原因是父子组件此时共用的是同一个堆内存中的值

因此，我们将值进行stringfly转换，
原理就是，将父组件中的堆内存中的数据，使用JSON.stringify修改成字符串，
然后使用JSON.Parse再将字符串变成引用类型的值，放到堆内存里面去。
这是我们就解决了父子组件同时使用一个地址的问题
```
props: ['queryInfo'],
created() {
this.subQueryInfo = JSON.Parse(JSON.stringify(this.queryInfo
)),

methods: {
   handleSubmit() { 
      this.$emit('fromSubmit', this.subQueryInfo)
}
}
```
优点:能深拷贝的对象有Number、String、Array等能够被json表示的数据结构
缺点:遇到不能被json格式正确表示的数据不能正确处理

方法二
最近封装组件的时候，突然想起了assign方法，利用assign进行父子组件的“深拷贝”，我们同样可实现方法一json的效果。

缺点： assign方法对于对象的拷贝只能拷贝对象数据中的基本数据类型，遇到对象中存在引用数据类型的，只能对引用类型进行浅拷贝
```
props: {
    formList: {
      type: Object,
      default: () => Object.assign({}, { name: '', id: 0 })
    }
},
data () {
    return {
      formListBack: Object.assign({}, this.formList)
    }
  },
methods: {
    handleCancel () {
      this.dialogVisible = false
    },
    handleConfirm () {
      this.$emit('confirm', this.formListBack)
      this.dialogVisible = false
      this.formList = []
    }
  }
```
作者：阿里P9王者
链接：https://www.jianshu.com/p/78fac61440b4
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。