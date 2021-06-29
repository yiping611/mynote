#### 全局代码处理过程
1. 预解析阶段
 * 读取整个源代码
 * 先查找函数声明，在查找变量声明
 * 函数声明有冲突，会覆盖
 * 变量声明有冲突，会忽略
 * 将找到的函数和变量保存到一个对象中（全局的保存到window对象中）
 * 变量的值是undefined，函数的值则指向该函数（函数字符串）
    { a: undefined, f: ‘function(){…}’ }
2. 运行阶段
   从上至下，顺序执行
#### 函数处理过程
1. 预解析阶段
   * 读取整个函数源代码
   * 将函数的参数添加到词法对象中
   * 先查找函数声明，再查找变量声明
   * 若有重复的函数声明，则后面的会把前面的覆盖
   * 若有重复的变量声明，
   * 将找到的函数和变量保存到一个词法对象中
   * 变量的值是undefined，函数的值则指向该函数（函数字符串）
         { a: undefined, f: ‘function(){…}’ }
2. 运行阶段
    从上至下，顺序执行
```
// examp1
console.log(a)
var a=1
console.log(a)
function a(){
    console.log(2)
}
console.log(a)
var a=3
console.log(a)
function a(){
    console.log(4)
}
console.log(a)
a()
/**
 * 预解析：
 *   先扫描函数
 *     function a(){console.log(2)} => a:function a(){console.log(2)}
 *     function a(){console.log(4)} => 函数声明有冲突会覆盖 a:function a(){console.log(4)}
 *   在扫描变量
 *     var a=1 => 变量声明有冲突会忽略 a:function a(){console.log(4)}
 *     var a=3 => a:function a(){console.log(4)}
 * 执行阶段：
 *   var a=1 => a:1
 *   var a=3 => a:3
 * 打印结果：
 *   function a(){console.log(4)}
 *   1
 *   1
 *   3
 *   3
 *   报错：a is not a function
 */
```
```
// examp2
console.log(a)
console.log(b)
fn1()
fn2()
var a=1
b=2
function fn1(){
    console.log(1)
}
var fn2=function(){
    console.log(2)
}
/**
 * 预解析：
 *   先扫描函数
 *     function fn1(){console.log(1)} => fn1:function a(){console.log(1)}
 *   在扫描变量
 *     var a=1 => a:undefined
 *     var fn2=function(){console.log(2)} => fn2:undefined
 * 执行阶段：
 *   console.log(a) => undefined
 *   console.log(b) => 报错，将这行注释，看下面的结果
 *   fn1() => 1
 *   fn2() => undefined不是函数
 * 打印结果：
 *   undefined （定义但未赋值）
 *   报错：b is not defined （未定义报错）
 *   1
 *   报错：fn2 is not a function
 */
```
```
// examp3
function fn(a,b){
    console.log(a)
    console.log(b)

    var b=10
    function a(){}
}
fn(1,2)
/**
 * 函数内的解析执行
 * 预解析：
 *   查找函数参数
 *     a:undefined
 *     b:undefined
 *   查找函数声明
 *     function a(){} => a:function a(){}
 *   查找变量声明
 *     var b=10 => b:undefined
 * 执行阶段：
 *   fn(1,2) => 第一个参数1赋值给a，可a是个函数，赋值失效，第二个参数2赋值给b，b是变量。复制成功
 *   console.log(a) => function a(){}
 *   console.log(b) => 2
 * 打印结果：
 *   function a(){}
 *   2
 */
```
```
// examp4
var a=1
function fn(){
    console.log(a)
    var a=2
}
fn()
console.log(a)
/**
 * 全局作用域
 * 预解析：
 *   查找函数声明
 *     fn:function fn(){
 *          console.log(a)
 *          var a=2
 *        }
 *   查找变量声明
 *     var a=1 => a:undefined
 * 函数内的作用域
 * 预解析：
 *   查找函数参数
 *     无
 *   查找函数声明
 *     无
 *   查找变量声明
 *     var a => a:undefined
 * 执行阶段：
 *   fn() => console.log(a) => 访问fn内的a
 *   console.log(a) => 访问你全局a
 * 打印结果：
 *   undefined
 *   1
 */
```
```
//examp5
var a=1
function fn(){
    console.log(a)
    a=2
}
fn()
console.log(a)
/**
 * 全局作用域
 * 预解析：
 *   查找函数声明
 *     fn:function fn(){
 *          console.log(a)
 *          a=2
 *        }
 *   查找变量声明
 *     var a=1 => a:undefined
 * 函数内的作用域
 * 预解析：
 *   查找函数参数
 *     无
 *   查找函数声明
 *     无
 *   查找变量声明
 *     无
 * 执行阶段：
 *   fn() => console.log(a) => fn内没有定义a，就访问全局的a
 *   fn() => a=2
 *   console.log(a) => 访问你全局a
 * 打印结果：
 *   1
 *   2
 */
```
```
// examp6
var a=1
function fn(a){
    console.log(a)
    a=2
}
fn()
console.log(a)
/**
 * 全局作用域
 * 预解析：
 *   查找函数声明
 *     fn:function fn(a){
 *          console.log(a)
 *          var a=2
 *        }
 *   查找变量声明
 *     var a=1 => a:undefined
 * 函数内的作用域
 * 预解析：
 *   查找函数参数
 *     a:undefined
 *   查找函数声明
 *     无
 *   查找变量声明
 *     无
 * 执行阶段：
 *   fn() => console.log(a) => 访问fn内的a，未传参数
 *   console.log(a) => 访问你全局a
 * 打印结果：
 *   undefined
 *   1
 */
```
```
// examp7
var a=1
function fn(a){
    console.log(a)
    a=2
}
fn(a)
console.log(a)
/**
 * 全局作用域
 * 预解析：
 *   查找函数声明
 *     fn:function fn(a){
 *          console.log(a)
 *          a=2
 *        }
 *   查找变量声明
 *     var a=1 => a:undefined
 * 函数内的作用域
 * 预解析：
 *   查找函数参数
 *     a:undefined
 *   查找函数声明
 *     无
 *   查找变量声明
 *     无
 * 执行阶段：
 *   fn(a) => console.log(a) => 访问fn内的变量a，参数a访问全局变量a，赋值给fn内的变量a
 *   console.log(a) => 访问你全局a
 * 打印结果：
 *   1
 *   1
 */
```
```
// examp8
var a=1
function fn(a){
    arguments[0]=3
    console.log(a)
    var a=2
    console.log(arguments[0])
}
fn(a)
console.log(a)
/**
 * 全局作用域
 * 预解析：
 *   查找函数声明
 *     fn:function fn(a){
 *          arguments[0]=3
 *          console.log(a)
 *          var a=2
 *          console.log(arguments[0])
 *        }
 *   查找变量声明
 *     var a=1 => a:undefined
 * 函数内的作用域
 * 预解析：
 *   查找函数参数
 *     a:undefined
 *   查找函数声明
 *     无
 *   查找变量声明
 *     a:undefined
 * 执行阶段：
 *   fn(a) => 参数a访问全局变量a
 *   arguments[0]=3 => 局部变量a=3
 *   var a=2 => 局部变量a=2
 *   这里arguments[0]与a是相通的
 * 打印结果：
 *   3
 *   2
 *   1
 */
// examp9
var x= 123;
function f(){
    var x = 100;
    //g.[[scope]]  == window
    var g = new Function("","alert(x)");
    g();
}
f();
/**
 * 通过new Function()创建的函数，它的作用域是window对象，所以只能访问全局环境下的x，无法访问f函数内部的x
 * 打印结果：
 *   123
 */
```