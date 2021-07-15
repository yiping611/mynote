### js数据类型（七种）
* undefined
* null
* 布尔值（Boolean）
* 字符串(String)
* 数值（Number）
* 对象(Object)
* Symbol
### typeof
js是一门弱语言，它在声明变量时无需确定变量的类型，js在运行时会自动判断。那么如何判断一个变量的类型呢，js提供了typeof运算符，用来检测一个变量的类型。
1. typeof的语法
  >typeof是一个运算符，有2种使用方式：typeof(表达式)和typeof 变量名，第一种是对表达式做运算，第二种是对变量做运算。
2. typeof的返回值
      typeof运算符的返回类型为字符串，值包括如下几种：
     1. 'undefined'    --未定义的变量或值
     2. 'boolean'      --布尔类型的变量或值
     3. 'string'        --字符串类型的变量或值
     4. 'number'        --数字类型的变量或值
     5. 'object'         --对象类型的变量或值，或者null(这个是js历史遗留问题，将null作为object类型处理)
     6. 'function'      --函数类型的变量或值
3. 简单的示例
   > console.log(typeof a);    //'undefined'
     console.log(typeof(true));  //'boolean'
     console.log(typeof '123');  //'string'
     console.log(typeof 123);   //'number'
     console.log(typeof NaN);   //'number'
     console.log(typeof null);  //'object' 
     var obj = new String();
     console.log(typeof(obj));    //'object'
     var  fn = function(){};
     console.log(typeof(fn));  //'function'
     console.log(typeof(class c{}));  //'function'
     console.log(typeof([]),'[]')//Object
     typeof对于丰富的对象实例，只能返回"Object"字符串
 ```
 var a = [34,4,3,54],
  b = 34,
  c = 'adsfas',
  d = function(){console.log('我是函数')},
  e = true,
  f = null,
  g 
  console.log(typeof(a));//object
  console.log(typeof(b));//number
  console.log(typeof(c));//string
  console.log(typeof(d));//function
  console.log(typeof(e));//boolean
  console.log(typeof(f));//object
  console.log(typeof(g));//undefined
  let s=Symbol()
  console.log(typeof(s),'symbol')//symbol
  ```
 ** typeof在判断null、array、object以及函数实例（new + 函数）时，得到的都是object。这使得在判断这些数据类型的时候，得不到真实的数据类型。**
 typeof运算符用于判断对象的类型，但是对于一些创建的对象，它们都会返回'object'，有时我们需要判断该实例是否为某个对象的实例，那么这个时候需要用到instanceof运算符，后续记录instanceof运算符的相关用法。
 * instanceof
 instance中文翻译为实例，因此instanceof的含义就不言而喻，判断该对象是谁的实例，同时我们也就知道instanceof是对象运算符。
 这里的实例就牵扯到了对象的继承，它的判断就是根据原型链进行搜寻，在对象obj1的原型链上如果存在另一个对象obj2的原型属性，那么表达式（obj1 instanceof obj2）返回值为true；否则返回false。
 >总结：
  想必到这里大家也都明白两者的含义和用法，总之，typeof和instanceof都是用来判断变量类型的，两者的区别在于：
  typeof判断所有变量的类型，返回值有number，boolean，string，function，object，undefined。symbol
  typeof对于丰富的对象实例，只能返回"Object"字符串。
  instanceof用来判断对象，**代码形式为obj1 instanceof obj2（obj1是否是obj2的实例）**，obj2必须为对象，否则会报错！其返回值为布尔值。(可以理解为**obj2能否能生成obj1** )
  instanceof可以对不同的对象实例进行判断，判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true。

 ### instanceof详解
 instanceof检测的是原型
我们可以用一段代码模拟一下内部执行过程：
```
instanceof (A,B) => {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        //A的内部属性__proto__指向B的原型对象
        return true;
    }
    return false;
}
```
https://www.jianshu.com/p/3956a2204644
https://es6.ruanyifeng.com/?search=ymbol&x=0&y=0#docs/symbol