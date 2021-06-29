## this 的在什么时候确定下来的

> this 和作用域不一样,作用域是声明的时候就定下来了,this 是在调用的时候才确定下来

### this 的绑定方式有 5 种

1. 默认绑定
   默认绑定一般发生在回调函数,函数直接调用;

```
  function test() {
       console.log(this); //window 或 严格模式下是undefined
   }
   setTimeout(function () {
       console.log(this);
  //window ，setTimeout比较奇怪,默认绑定严格模式下竟然不是undefined
   });
  arr.forEach(function(){
       console.log(this);//window 或严格模式下是undefined
   });

   ```
2. 隐式绑定
这个通俗点用一句话概括就是谁调用就是指向谁
```

    const obj = {
        name:'joy',
        getName(){
            console.log(this); //obj
            console.log(this.name); //joy
        }
    };
    obj.getName();

还有一些情况,链式调用,看最后那个

    const obj1 = {
        name:'joy',
        getName(){
            console.log(this); //obj
            console.log(this.name); //joy
        }
    };

    const obj2 = {
        name:'sam',
        friend:obj1
    };

    const obj3 = {
        name: 'jam',
        friend:obj2
    };

    obj3.friend.friend.getName()  //obj joy本质上还是obj1调用的
    const obj1 = {
        name:'joy',
        getName(){
            console.log(this);
            console.log(this.name);
        }
    };

    const obj2 = {
        name:'sam',
        getName:obj1.getName
    };

    obj2.getName()  //obj2 sam

```
3. 显示绑定call,apply,bind
 ```
    const obj1 = {
    name:'joy',
    getName(){
    console.log(this); //obj
    console.log(this.name); //joy
    }
    };

    const obj2 = {
        name:'sam'
    };

    obj1.getName.call(obj2); //obj2 sam
    obj1.getName.apply(obj2); //obj2 sam
    const fn = obj1.getName.bind(obj2);
    fn();//obj2 sam

   call 和 apply 之间的不同,就是传参的方式不同

    fn.apply(this,[1,2]); //不管多少个,都用数组包裹传参
    fn.call(this,1,2); //一个个参数列出来传

call,apply 和 bind 的区别
call 和 apply 都是即时调用,绑定既是调用,而 bind 不是,bind 会返回绑定后的函数,自行需要的时候再调用

```


### 自己实现call,apply,bind


4. new 绑定
```
function Vehicle() {
console.log(this);
}
Vehicle(); //window
 const newobj=new Vehicle(); //Vehicle 这个 new 出来的对象newobj
 ```
5. es6 的箭头函数
```
window.name = 'win';
const obj1 = {
name: 'joy',
getName: () => {
console.log(this); //window 调用前 this 是什么函数里面的 this 就是什么,//箭头函数指向问题
//箭头函数体内得this对象，就是定义时所在得对象，而不是使用时所在得对象，它是固定的
console.log(this.name); //win
}
};
obj1.getName();

```


以上就是 this 指向 5 种绑定的方式,那么问题来了,当同时拥有几种绑定方式,谁的优先级更高呢?

> 箭头函数 > new > 显式 > 隐式 > 默认绑定

#箭头函数this得描述
 >箭头函数注意：
> 1. 箭头函数体内得this对象，就是定义时所在得对象，而不是使用时所在得对象
> 2. 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
> 3. 不可以使用arguments 对象，改对象是箭头函数体内不存在，如果要使用，可以用rest 参数代替
> 4. 不可以使用yield 命令 ，因此函数箭头不能用作Generator函数
> 上面四点中，第一个尤其值得注意，this 对象得指向是可变得，但是在箭头函数中他是固定得
箭头函数中 this 是固定的，是固定指向父级上下文 this。
* **普通函数得getval**
```
var flag='996'
function person(fg){//创建对象的方式是：工厂模式创建对象=》创建对象的几种函数
    let o=new Object()
    o.flag=fg
    o.getval=function(){
        console.log(this,'getval')//{flag: "251", getval: ƒ} "getval"
    }
    console.log(this,'person')//person {} "person"
    //console.log(this,'person')在pp.getval()执行前就已经执行了(new person('251')构造函数第四步执行构造函数内的代码执行打印) =>预解析
    return o
}
let pp=new person('251');
pp.getval()

在构造函数时 new做的四件事情
1. 新建一个对象
2.把this的指向指向这个对象
3.执行构造函数内的代码
4.返回这个新对象
```
> let pp =new person('251')
> 这里创建了一个person实列pp，然后执行pp.getval()
> pp调用getval即 “谁调用，指向谁”，所以getval得this指向pp实力，打印出pp实列内容

* **箭头函数的 getval**
```
var flag='996'
function person(fg){
    let o =new object()
    o.flag=fg
    o.getval=()=>{
        console.log(this)//person{}
    }
     console.log(this)//person{}
    return o
}
let pp=new person('251');
  console.log(pp,'pp实列')//{flag: "251", getval: ƒ} 
pp.getval()
```
> 父级指向谁，当前箭头函数就指向谁
从词法作用域来看，可以看到 getval 的父级是 person 函数返回的对象 o，但是 o 对象不是一个函数作用域，没有 this 上下文，当然 getval 函数也无法指向 o 对象的上下文。
按照规则，我们继续往上查找 this，于是找到了 person 函数！
大功告成，getval 的 this 指向 person 函数的 this，所以 getval 的 this 与 person 函数 this 是完全一致的。（实际上箭头函数的 this 就是一个普通变量，指向了 父级的 this）
* **person 函数的 this 又是指向谁呢？**
```
        var flag='996'
      function persons(fg){
          let o=new Object()
          o.flag=fg
          o.getval=()=>{
              console.log(this,'箭头函数里的this')//persons{a:1}
          }
          this.a=1
          console.log(this,'a后面的打印')//persons{a:1}
          return o
      }
      let pp=new persons('251')
      console.log(pp,'pp实列')//{flag: "251", getval: ƒ} 
      pp.getval()
```
这里 getval 函数是箭头函数，我们知道，始终与父级的 person 的 this 保持一致，这里 person 的 this 上下文设置了 this.a = 1，所以打印了 {a:1}。
而 person 函数里返回的对象，这里在执行 new 操作符的时候(new persons)，使用了 person 返回的对象 o。
于是，我们看到输出 pp 实例，完全输出了 person 函数的返回对象内容： {flag: "251", getval: ƒ}。
* **person 的 this 与 pp 实例的 this 有啥区别呢？**
由于 person 函数返回的是一个对象(null 除外)，所以在 new 的时候使用了 person 的返回值 o 对象，并没有返回 person 的上下文 this 给到实例 pp。
这里如果 person 函数返回的是一个 [数字、字符串、布尔等]，那么 new 的时候，会忽略返回值，默认返回 person 函数的上下文 this 给到实例对象。
这也是为啥这里输出的 pp 实例不包含 person 函数内定义的 this.a。
而箭头函数的 this 指向 person 的 this ，输出了 this.a=1 但是确不包含 person 函数返回的 o 对象。
```
 var flag=996;
function person(fg){
    let o=new Object()
    o.flag = fg;
    o.getval=()=>{
        console.log(this);//person{a:1}
    }
    this.a = 1;
    return true;
}
var pp = new person("251");
console.log(pp);// {a:1}
```
**总结：这里箭头函数的 this 永远指向的是父级的 person 的 this，而不是这里的 pp 实例，实际上 箭头函数的 this 就类似一个普通变量，关联上了父级函数的 this**
### 箭头函数两个要点
* 箭头函数中，call 和 apply 会忽略掉 this 参数。( MDN 描述)
这其实是“表象”，实际上是因为箭头函数的 this 是指向父级的 this，因为箭头函数自身没有 this，所以无法修改自身的 this，从而言之 “忽略”。
* 箭头函数的 this ，永远是跟随父级的 this 的。
箭头函数的 this 是从当前箭头函数逐级向上查找 this，如果找到了，则作为自己的 this 指向，如果没有则继续向上查找。而父级的 this 是可变的，所以箭头函数的 this 也可跟随父级而改变。
为啥会一直跟随父级的 this 呢？因为实际上箭头函数的 this 就类似一个普通变量，变量的内容就是父级函数的 this，一个变量赋值罢了。
因此，想修改箭头函数“本身”的 this 是做不到的。
* **但是可以采用变更父级的 this 来达到变更子箭头函数的 this。**
```
function outer(){ 
    var inner = function(){
        var obj = {};
        obj.getVal=()=>{
            console.log(this,'getVal');//window
        }
        console.log(this,'inner');//window
        return obj;
    };
    console.log(this,'outer');//window
    return inner; 
}
outer()().getVal();
// 闭包函数的 inner 也是一个普通函数，仍然遵循 [谁调用，指向谁]，这里没有直接调用对象，而是最外层的“省略的” window 调用的，所以 inner 的 this 是指向 window 的。=》闭包
```
getVal 函数是箭头函数，方法里面的 this 是跟着父级的 this。
在 outer() 执行后，返回闭包函数 inner
然后执行闭包函数 inner，而闭包函数的 inner 也是一个普通函数，仍然遵循 [谁调用，指向谁]，这里没有直接调用对象，而是最外层的“省略的” window 调用的，所以 inner 的 this 是指向 window 的。
闭包函数的作用域与父级的函数作用域是一致的，我们可以理解为闭包函数作用域已经跳出父函数了，但是还可以直接访问父函数内的变量参数等(这就是闭包的强大之处了)。
这里的 inner 实际上与 outer 的作用域一致。
* **改变箭头函数的 this** ,我们可以使用 Bind 改变父级 inner 函数的 this，来达到改变子箭头函数 getVal 的 this 指向。
```
function outer(){ 
    var inner = function(){
        var obj = {};
        obj.getVal=()=>{
            console.log(this,'getVal');//f outer(){}  
        }
        console.log(this,'inner');//f outer(){}
        return obj;
    };
    console.log(this,'outer');//window
    return inner; 
}
var  aa=outer()()
console.log(outer(),'aa')//f (){} inner闭包函数
outer().bind(outer)().getVal();
```
这里执行 outer 方法，返回 inner 函数。
然后我们改变 inner 的 this 指针，使用 bind 将 inner 的 this 指向到 outer。
我们看到，输出的 this 是 outer 函数。这里我们成功改变了 getVal 的 this 指向。
箭头函数的 this 已经随同父级元素的 this 的改变而改变。（事实上也确实如此，箭头函数的 this 仅仅是父级函数 上下文 this 的赋值
>箭头函数的 this 是一个普通变量，指向了父级函数的 this，且这个指向永远不会改变，也不能改变。(指向父级函数得this不变，但是父级函数得this指向可变)
>但是如果需要修改箭头函数的 this ，可以通过修改父级的 this 指针，来达到子箭头函数 this 的修改。（根本原因是箭头函数没有 this，而是在运行时使用父级的 this）。