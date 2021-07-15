##### 是什么
用于构建用户界面的JavaScript库
构建页面
1. 发送请求获取数据
2. 处理数据(过滤，整理格式等)
3. **操作DOM呈现页面**
> react 是一个将数据渲染为HTML试图的开源JavaScript库
#### 为什么要学
> document.getElementById('app')
  document.querySelector('#app')
  document.getelementsByTagName('span')
* 原生的js操作DOM频繁，效率低(，DOM-API操作ui)
* 使用js直接操作DOM，浏览器进行大量的重绘重排
* 原生js没有组件化编码方案，代码复用率低
 #### react特点
 * 采用组件化模式，声明式编码，提高开发效率及组件复用率
   (js命令式编码，比如盒子颜色改变，js操作DOM样式改变颜色)
   (声明式编码：不用操作DOM样式，声明以后，直接改了颜色)
 * 在**React Native**中可以使用react语法进行移动端开发
 * 使用虚拟DOM+优秀得Diff算法，尽量减少与真实DOM得交互
 react js基础
 * 判断this指向
 * class(类)
 * es6语法规范
 * npm 包管理器
 * 原型，原型链
 * 数组常用方法
 * 模块化
官网：中文官网：https://react.docschina.org/
     英文官网: https://reactjs.org/
react依赖包
1. babel.min.js:解析jsx语法代码转换为js代码得库 ，(babel也可以es6转换为es5)
2. react.development.js :react核心库
3. react-dom.developement.js :扩展库(操作dom得react代码库)
4. prop-types.js 16版本 专门用于对标签属性进行限制的
>//  React 有一个内置对象PropTypes（15版本）   ，
>   Person.propTypes={
>       name:React.PropTypes.string
>   }
>   // 16版本 专门用于对标签属性进行限制的
 基础案例1
 ```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <!-- 准备一个容器 -->
    <div id="test"></div>
    <!-- 引入库顺序不能乱，核心库=》react-dom=>babel -->
    <!-- 1.引入react核心库 React  -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 2.引入react-dom用于支持react操作dom   ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <!-- 3.引入babel用于将jsx转换为js -->
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">//此处写的是type="text/babel"
    //   1.创建虚拟DOM,
    const VDOM=<h1>hello,react</h1> //此处不加双引号，因为不是字符串是jsx
    //   2.渲染虚拟页DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
    </script>
</body>
</html>
 ```
### hello-react-虚拟DOM得两种创建方式
 ```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>创建虚拟DOM</title>
</head>
<body>
    <!-- 准备一个容器 -->
    <div id="test"></div>
    <div id="demo"></div>
    <!-- 引入库顺序不能乱，核心库=》react-dom=>babel -->
    <!-- 1.引入react核心库 React  -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 2.引入react-dom用于支持react操作dom   ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <!-- 3.引入babel用于将jsx转换为js ,js创建虚拟dom无需引入babel -->
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <!-- ................................................................................ -->
    <!--  1.jsx创建虚拟dom ：jsx创建虚拟dom 简单理解为js创建虚拟DOM得语法糖 -->
    <script type="text/babel">//此处写的是type="text/babel"
    //   1.创建虚拟DOM,(1.使用jsx创建虚拟dom,2.使用js创建虚拟dom)
    // 1.使用jsx  const VDOM=<h1 id="title">hello,react</h1>
    const VDOM=<h1 id="title">hello,react</h1> //此处不加双引号，因为不是字符串是jsx
    // const VDOM=(
    //     <h1 id="jdjei">
    //         <span>11</span>
    //     </h1>
    // ) //可以用()包裹，表示属于整体部分，括号内标签可换行 ，
    //   2.渲染虚拟页DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
  
    </script>
  <!-- ................................................................................ -->
    <!-- 2.使用js创建虚拟dom -->
    <script type="text/javascript">
        //   1.创建虚拟DOM,(1.使用jsx创建虚拟dom,2.使用js创建虚拟dom)
        // document.createElement(标签名，标签属性，标签内容) 创建节点
        const VDOM=React.createElement("h1",{id:'title'},"hello-ract-js创建方法")
        // 缺点=》js创建虚拟DOM 繁琐
        // const VDOM=React.createElement("h1",{id:'title'},React.createElement("span",{},"hello-ract-js创建方法嵌套多span"))
        //   2.渲染虚拟页DOM到页面
        ReactDOM.render(VDOM,document.getElementById('test'))
        
        </script>
        <script type="text/javascript">
        // 真实dom
         const  TDom=document.getElementById('demo')
            
              console.log(VDOM)//就是个js对象
              console.log(TDom)//打印就是<div id="demo"></div>
        </script>
        <!-- 
            关于虚拟DOM
            1.本质上就是Object类型得对象(一般对象)
            2.虚拟dom比较“轻”，真实dom比较重，因为虚拟DOM是react内部在用，无需真实DOM上那么多得属性
            3.虚拟DOM最终会被react转化为真实DOM，呈现在页面上
         -->
</body>
</html>
 ```
 #### jsx语法规则
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
    <style>
        .title{
            background-color: pink;
            width: 200px;
        }
    </style>
</head>
<body>
    <!-- 准备一个容器 -->
    <div id="test"></div>
    <!-- 引入库顺序不能乱，核心库=》react-dom=>babel -->
    <!-- 1.引入react核心库 React  -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 2.引入react-dom用于支持react操作dom   ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <!-- 3.引入babel用于将jsx转换为js -->
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">//此处写的是type="text/babel"
    /*
      一定注意区分js语句和js表达式
      1.表达式：一个表达式会产生一个值，可以放在任何一个需要值得地方 a,a+b,demo(1),arr.map(),function(){}
      2.语句：if,for,switch
      
    */
    //   1.创建虚拟DOM,
       const myid="muds"
       const shuju="数据变量"
       const  data=['vue','react','anglar']
    const VDOM=(
        <div>
            <h1 id="hehs" className="title">
            <span id={myid}>
              <span>{shuju}</span>
              <span style={{color:'red',fontSize:'20px'}}>直接写</span>
            </span>
        </h1>
        <input type="text"></input>
          <Good>若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错</Good>
          <h1>jsx练习</h1>
          <ul>
            {
              data.map((item,index)=>{
                  return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
        ) 
    //   2.渲染虚拟页DOM到页面
    ReactDOM.render(VDOM,document.getElementById('test'))
    /*
    jsx语法规则：
      1. 定义虚拟DOM树，不要写引号
      2.标签重混入js表达式时要用{}
      3.样式得类型指定不要用class ，要用className
      4.内联样式，要用style={{}}形式写
      5.虚拟DOM必须只有一个根标签
      6.标签必须组合
      7.标签首字母
           （1）若小写字母开头，则将标签转为html中同名标签，若html中无标签对应的同名元素，则报错
           （2）若大写字母开头，react 就去渲染对应的组件，若组件没有定义，则报错

    */
    </script>
</body>
</html>
```
模块：向外提供特定功能的js程序, 一般就是一个js文件
模块化：当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
作用：当应用是以多组件的方式实现, 这个应用就是一个组件化的应用
组件：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
组件化：当应用是以多组件的方式实现, 这个应用就是一个组件化的应用
作用：当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
### react 中定义组件的两种方法
* 创建函数组件 =>函数式组件   【简单组件（无状态state）】
* 创建类组件 （es6 中class类 =》知识点 ） =》类式组件 【复杂组件（有状态state）】
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <div id="test1"></div>
    <!-- 1.引入react核心库 React  -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 2.引入react-dom用于支持react操作dom   ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <!-- 3.引入babel用于将jsx转换为js -->
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">//此处写的是type="text/babel"
    //  1.创建函数组件
              function Mycomponents(){
                   console.log(this)//此处得this是underfined，因为babel编译后，开启了严格模式
                   return <h2>我是用函数定义得组件是应用于简单组件得定义</h2>
               }
        ReactDOM.render(<Mycomponents/>,document.getElementById('test'))
        /*
        执行了 ReactDOM.render(<Mycomponents/>,....)值后发生了什么？
          1.React解析组件标签，找到了，Mycomponents组件
          2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现页面中
          */
     /* ......................................................................................................... */
    // 2.创建类组件
        //  1.创建类式组件  继承React.Component
            class MycomponentsClass extends React.Component{
                 render(){
                    //  render 在MycomponentsClass原型对象上，供实例使用
                    // render中的this指向MycomponentsClass的实列对象《=》MycomponentsClass组件实例对象
                    console.log(this,'classrender')//MycomponentsClass {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}context: {}props: {}refs: {}state: nullupdater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}_reactInternalFiber: FiberNode {tag: 1, key: null, stateNode: MycomponentsClass, elementType: ƒ, type: ƒ, …}_reactInternalInstance: {_processChildContext: ƒ}[[Prototype]]: Componentconstructor: ƒ MycomponentsClass()render: ƒ render()[[Prototype]]: Object "classrender"
                     return <h2>我是用类定义得组件是应用于复杂组件得定义Class</h2>
                 } 
            }
        //  2.渲染组件到页面
        ReactDOM.render(<MycomponentsClass/>,document.getElementById('test1'))
       /*
        执行了 ReactDOM.render(<MycomponentsClass/>,....)值后发生了什么？
          1.React解析组件标签，找到了，MycomponentsClass组件
          2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render的方法
          3.将render返回的虚拟DOM转为真实DOM，随后呈现页面中
          */
    </script>
    <!-- es6 中class类 =》知识点 -->
    <script type="text/javascript">
    // 创建一个Person类
     class Person{
        //  构造器方法
        constructor(name,age){
            // 构造器中得this指向=》 类的实列对象
            console.log(this,'this')//Person(){...}
            this.name=name
            this.age=age
        }
        // 一般方法:放在类得原型对象上,供实例使用
        speak(){
            // 通过Person实例调用speak时，speak中得this就是person实例
           console.log(this,'speak')
        //    通过call apply bind 等方法可以改变this得指向
            console.log(`我叫${this.name}年龄${this.age}`)
        }
        
     }
     const p1=new Person('张三',12)
     const p2=new Person('张无',11)
     console.log(p1,'p1')//Person {name: "张三", age: 12} "p1"
     console.log(p2,'p2')//Person {name: "张无", age: 11} "p2"
     p1.speak()//我叫张三年龄12
     p2.speak()//我叫张无年龄11
     p1.speak.call({name:'call',age:99})//我叫call年龄99//通过call改变speak中得this指向
     class Student extends Person{
        constructor(name,age,grade){
              super(name,age)//必须写在最开始位置继承父组类
              this.grade=grade
        }
        speak(){
            // 重写从父类继承过来的方法
            console.log(this,'thisstudentspeak')
            console.log(`我叫${this.name}年龄${this.age}我读得是${this.grade}`)
        }
        study(){
            console.log(this,'study')
            // study方法放在类的原型对象上，供实例使用
            //通过student实例调用study时，speak中的this就是student实例(包括继承过来的)
            console.log('我学习呢')
        }
     }
    const s1=new Student('小三',14,'高一')
    console.log(s1,'s1')//Student {name: "小三", age: 14, grade: "高一"}age: 14grade: "高一"name: "小三"[[Prototype]]: Person "s1"
    s1.speak()//我叫小三年龄14
    s1.study()
    /*
     总结：
      1.类中得构造器不是必须写的，要对实例进行一些初始化得操作，如添加指定实例才写
      2.如果A类继承了B类，且A类中写了构造器，那么A类构造器中得super是必须要调用的，且必须写在最开始位置继承父组类。
      3.类中所定义得方法，都是放在类得原型对象上，供实例去使用
    */
    </script>
    
    
</body>
</html>
```
### 组件实例的三大核心属性
* state
* props
* refs与事件处理
>state
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <button id="btn1">按钮1</button>
    <button id="btn2">按钮2</button>
    <button id="btn3" onclick="demo()">按钮3</button>
    <!-- 准备一个容器 -->
    <div id="test"></div>
    <!-- 1.引入react核心库 React  -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 2.引入react-dom用于支持react操作dom   ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <!-- 3.引入babel用于将jsx转换为js -->
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">//此处写的是type="text/babel"
    //    1.创建组件
     class Weather extends React.Component{
        //  构造器调用一次
         constructor(props){
             console.log('constructor')
             super(props)
            //  初始化状态
             this.state={isHot:true,wind:'微风'}//为什么叫state=>也可以起其他合法的命名，但是状态更改是用原型上的setState方法且只能改state对象里的值，对应关系
             this.changeWeath=this.changeWeath.bind(this)//添加该方法的实例对象，onClick={this.changeWeath} 此时是在自身的，非原型上的方法
         }
         // render 调用1+n次（1是初始化一次，n是状态更新的次数，所以是n+1次）
          render(){
              console.log(this,'renderthis12')//Weather实例对象
            //   读取状态
              const {isHot,wind}=this.state
              return <h1 id="title" onClick={this.changeWeath}>今天天气很{isHot?'炎热':'凉爽'}{wind}</h1>
            //   <h1 id="title" onClick={this.changeWeath}>今天天气很{isHot?'炎热':'凉爽'}</h1> 并不是通过Weather实列调用的，this.changeWeath并未调用，只是赋值给了onClick
          }
          changeWeath(){
            //   changeWeath放在Weather原型上
            // 通过weather实例调用changeWeath，changeWeath中的this指向Weather实列
            //<h1 id="title" onClick={this.changeWeath}>今天天气很{isHot?'炎热':'凉爽'}</h1>  由于changeWeath是作为onClick回调，而不是通过实例调用的，是直接调用，
            // 类中的方法，默认开启了局部的严格模式，所以changeWeath中的this为underfined
            console.log(this,'title')//bind 指定了this的指向为Weather
            // 状态不可直接更改，要借助一个内置的API去更改
            // this.state.isHot=!this.state.isHot  错误做法
            // z状态必须通过setState进行更改，且是更新是一种合并，不是替换，同名的直接覆盖掉
             this.setState({isHot:!this.state.isHot})
             console.log(this.state,'微风')
          }
     }
    // 渲染组件
    ReactDOM.render(<Weather/>,document.getElementById('test'))
   
   
    </script>
    <!-- ................................................................. -->
    <script type="text/javascript">
    // 原生事件的绑定三种方式
    const btn1=document.getElementById('btn1')//react中反复操作document
    btn1.addEventListener('click',()=>{
        alert('按钮1点击了')
    })
    const btn2=document.getElementById('btn2')//react中反复操作document
    btn2.onclick=()=>{
        alert('按钮2点击了')
    }
    function demo(){//react 中使用该方法
        alert('按钮3 被点击了')
    }
    
    </script>
     <!-- ................................................................. -->
     <script type="text/javascript">
    //  es6=> js类中this指向问题
      class Person{
          constructor(name,age){
              this.name=name
              this.age=age
          }
          study(){
            //   study方法放在类的原型对象上，供实例使用
            //   通过Person实例调用study，study中的this指向Person实列
            console.log(this,'js中类的指向-speak')
          }
      }
      const p1=new Person('TOM',18)
      p1.study()//通过实例调用speak  study中的this指向Person实列
      const x=p1.study
      x()//   console.log(this,'js中类的指向-speak') 中的this undefined（为什么不是window=>，类中所有方法都在局部开启了严格模式（use strict））
     </script>
</body>
</html>
<!-- 。。。。。。。。。。。。。。。。。。。。。 -->
<!-- 组件实例的三大核心属性之一state-简写方式 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
   
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
     class Weather extends React.Component{
        //  类中可以直接写赋值语句 a=1 ,=>给类添加一个属性
           state={isHot:true,wind:'微风'}//初始化状态、
           a={qq:11}
         
          render(){
              const {isHot,wind}=this.state
              return <h1 id="title" onClick={this.changeWeath}>今天天气很{isHot?'炎热':'凉爽'}{wind}{this.a.qq}</h1>
             
          }
          //自定义方法=要用赋值语句的形式+箭头函数
          changeWeath=()=>{
            // this.a.qq=2,//虽然可 以改变值，但是页面并未实时更新，所以状态都写在state里，
            // this.state.isHot=!this.state.isHot//这种打印虽然可以改变值，但是页面视图并不能实时更新
             this.setState({isHot:!this.state.isHot})
          }
     }
         
     ReactDOM.render(<Weather/>,document.getElementById('test'))
   
   
    </script>
   
</body>
</html>
```
>props
``` 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
   
    <div id="test"></div>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>
    <div id="test4"></div>
    <!-- 全局多了个React -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 全局多了个ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <!--  全局多了个PropTypes -->
    <script type="text/javascript" src="../practice-base/js/prop-types.js"></script>
    <!-- 引入prop-types用于对组件标签属性进行限制 -->
    <script type="text/babel">
     class Person extends React.Component{
         state={name:'tom',age:18,sex:'女'}
         render(){
             /*
               注意事项:
                  props是只读的属性=》  this.props.name='jack'//报错
                  可以参与运算[(this.props.sex+1)]，不可以重新赋值[this.props.sex=12]
             */
             return (
                 <ul>
                   <li>{this.props.name}</li>
                   <li>{this.props.age}</li>
                   <li>{this.props.sex}</li>
                 </ul>
             )
         }
     }
     ReactDOM.render(<Person name="tom" age="18" sex="女" />,document.getElementById('test'))
    //  <Person name="tom" age="18" sex="女" />   name="tom" age="18" sex="女"存到了props对象中
     ReactDOM.render(<Person name="tom1" age={181} sex="女1" />,document.getElementById('test1'))
     const p={name:'jerry',age:19,sex:'男'}
       //  展开运算符展开对象时候可以在标签里使用，<Person {...p} />  
     ReactDOM.render(<Person {...p} />,document.getElementById('test2'))//test1写法的一种语法糖
     ReactDOM.render(<Person name={p.name} age={p.age} sex={p.sex} />,document.getElementById('test3'))
    // 对传递标签的属性类型的限制，以及必传的属性进行限制
    //  React 有一个内置对象PropTypes（15版本） [React.ProtoTypes]  =>16版本引入prop-types.js ,全局对象，PropTypes
    Person.propTypes={//要写在 ReactDOM.render 渲染之前否则不起效果
        name:PropTypes.string.isRequired,//字符串类型且必传
        sex:PropTypes.string,//限制未字符串
        age:PropTypes.number,//限制未数值
        speak:PropTypes.func//限制为函数
    }
    Person.defaultProps={//指定默认的标签属性值
         sex:'不男不女',
         age:18
    }
    // 16版本 专门用于对标签属性进行限制的prop-types.js 
    const pp={name:'jerry',age:19,sex:'男'}
    ReactDOM.render(<Person name={pp.name} age={pp.age} sex={pp.sex} speak={speak} />,document.getElementById('test4'))
    function speak(){
       console.log('我说话了')
    }
   
    </script>
    <script type="text/javascript">
    // 展开运算符 ...   reduce  es6  =》https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // 展开运算符不能直接展开对象，若想展开对象可{...obj}相当于拷贝
    
     
    </script>
   
</body>
</html>
<!-- ................................................. -->
//props简写方式
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
   
    <div id="test"></div>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>
    <div id="test4"></div>
    <!-- 全局多了个React -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 全局多了个ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <!--  全局多了个PropTypes -->
    <script type="text/javascript" src="../practice-base/js/prop-types.js"></script>
    <!-- 引入prop-types用于对组件标签属性进行限制 -->
    <script type="text/babel">
    // 定义组件
     class Person extends React.Component{
         state={name:'tom',age:18,sex:'女'}
         render(){
             return (
                 <ul>
                   <li>{this.props.name}</li>
                   <li>{this.props.age}</li>
                   <li>{this.props.sex}</li>
                 </ul>
             )
         }
         static propTypes={
                     name:PropTypes.string.isRequired,
                     sex:PropTypes.string,
                     age:PropTypes.number,
                     speak:PropTypes.func
                     }
         static defaultProps={
                       sex:'女',
                       age:18
                  }     
      
                }
    
   //使用组件
    const pp={name:'jerry',age:19,sex:'男'}
    ReactDOM.render(<Person name={pp.name} age={pp.age} sex={pp.sex} speak={speak} />,document.getElementById('test4'))
    function speak(){
       console.log('我说话了')
    }
   
    </script>
  
   
</body>
</html>

```
### 构造器 construtor
> https://zh-hans.reactjs.org/docs/react-component.html#constructor
```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
   
    <div id="test"></div>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>
    <div id="test4"></div>
    <!-- 全局多了个React -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 全局多了个ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <!--  全局多了个PropTypes -->
    <script type="text/javascript" src="../practice-base/js/prop-types.js"></script>
    <!-- 引入prop-types用于对组件标签属性进行限制 -->
    <script type="text/babel">
    // 定义组件
     class Person extends React.Component{
         constructor(props){
             console.log(props,'props构造器中的')
             super(props)
             /*
             构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props 
             https://zh-hans.reactjs.org/docs/react-component.html#constructor
             */
         }
         //构造器可省略不写
         state={name:'tom',age:18,sex:'女'}
         render(){
             return (
                 <ul>
                   <li>{this.props.name}</li>
                   <li>{this.props.age}</li>
                   <li>{this.props.sex}</li>
                 </ul>
             )
         }
         static propTypes={
                     name:PropTypes.string.isRequired,
                     sex:PropTypes.string,
                     age:PropTypes.number,
                     }
         static defaultProps={
                       sex:'女',
                       age:18
                  } 
                }
    
   //使用组件
    const pp={name:'jerry',age:19,sex:'男'}
    ReactDOM.render(<Person name={pp.name} age={pp.age} sex={pp.sex} speak={speak} />,document.getElementById('test4'))
  
   
    </script>
  
   
</body>
</html>
```
>函数定义组件 使用props
```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
   
    <div id="test"></div>
    <div id="test1"></div>
    <div id="test2"></div>
    <div id="test3"></div>
    <div id="test4"></div>
    <!-- 全局多了个React -->
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <!-- 全局多了个ReactDom -->
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <!--  全局多了个PropTypes -->
    <script type="text/javascript" src="../practice-base/js/prop-types.js"></script>
    <!-- 引入prop-types用于对组件标签属性进行限制 -->
    <script type="text/babel">
    // 1.类定义组件
    //  class Person extends React.Component{
    //      constructor(props){
    //          console.log(props,'props构造器中的')
    //          super(props)
    //          /*
    //          构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
    //          https://zh-hans.reactjs.org/docs/react-component.html#constructor
    //          */
    //      }

    //      state={name:'tom',age:18,sex:'女'}
    //      render(){
    //          return (
    //              <ul>
    //                <li>{this.props.name}</li>
    //                <li>{this.props.age}</li>
    //                <li>{this.props.sex}</li>
    //              </ul>
    //          )
    //      }
    //      static propTypes={
    //                  name:PropTypes.string.isRequired,
    //                  sex:PropTypes.string,
    //                  age:PropTypes.number,
    //                  }
    //      static defaultProps={
    //                    sex:'女',
    //                    age:18
    //               } 
    //             }
    // 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
                // 2.函数定义组件 使用props
                // 函数式定义组件只能用到props (state,refs都用不了)
                function Person(props) {
                   console.log(props) 
                   const {age,name,sex}=props
                   return (
                 <ul>
                   <li>{name}</li>
                   <li>{age}</li>
                   <li>{sex}</li>
                 </ul>
             )
                }
                Person.propTypes={
                     name:PropTypes.string.isRequired,
                     sex:PropTypes.string,
                     age:PropTypes.number,
                     }
                Person.defaultProps={
                       sex:'女',
                       age:18
                  } 
// 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
   //使用组件
    const pp={name:'jerry',age:19,sex:'男'}
    ReactDOM.render(<Person name={pp.name} age={pp.age} sex={pp.sex} speak={speak} />,document.getElementById('test4'))
  
   
    </script>
  
   
</body>
</html>
```
> 总结：
> * 每个组件对象都会有props属性
> * 组件标签的所有属性都保存在props中
> * 通过标签属性从组件外向组件内传递变化的数据
> * 组件内部不能修改props 可参与运算，

>组件实例三大属性之refs
* 组件内的标签可以定义refs 属性来标识自己

>字符串形式使用 ref 
```
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
       class Demo extends React.Component{
           showData=()=>{
              console.log(this.refs.input1,'this.refs.input1')//拿到的并非虚拟dom 而是真实的DOM
              alert(this.refs.input1.value)
           }
           showData2=()=>{
              console.log(this.refs.input2,'this.refs.input2')//拿到的并非虚拟dom 而是真实的DOM
              alert(this.refs.input2.value)
           }
           render(){
               console.log(this,'this')
                return (
                    <div>
                        <input ref="input1" type="text" placeholder="点击按钮显示数据"/>
                        <button ref="button12" onClick={this.showData}>点我显示左边数据</button>
                        <input type="text" onBlur={this.showData2} ref="input2"   placeholder="失去焦点显示数据"/>
                    </div>
                )
           }
       }
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    </script>
</body>
</html>
```
>回调函数形式的ref
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
       class Demo extends React.Component{
           showData=()=>{
               console.log(this.input1,'this.refs.input1')//真实的DOM
            alert(this.input1.value)
           }
           showData2=()=>{
            alert(this.input2.value)
           }
           render(){
                return (
                    <div>
                        <input ref={refval=>this.input1=refval} type="text" placeholder="点击按钮显示数据"/>
                        <button ref="button12" onClick={this.showData}>点我显示左边数据</button>
                        <input type="text" onBlur={this.showData2} ref={(refval)=>{this.input2=refval}}   placeholder="失去焦点显示数据"/>
                    </div>
                )
           }
       }
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    </script>
</body>
</html>
```
>回调函数形式的ref-执行次数的问题
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
       class Demo extends React.Component{
           
        state={ishot:false}
           showData=()=>{
               console.log(this.input1,'this.refs.input1')//真实的DOM
            alert(this.input1.value)
           }
           showData2=()=>{
            alert(this.input2.value)
           }
           changeWeather=()=>{
               const {ishot}=this.state
               this.setState({ishot:!ishot})
           }
           saveinput=(refval)=>{//class得绑定函数得方式定义
            this.input1=refval
            console.log('class',refval)
           }
           render(){
                return (
                    <div>
                        <h1>{this.state.ishot?'热':'冷'}</h1>
                        {/* ref回调函数 ：内联函数得方式定义 */}
                        {/*<input ref={refval=>{this.input1=refval; console.log(refval,'@')}} type="text" placeholder="点击按钮显示数据"/>*/}
                         {/* ref回调函数 ：class得绑定函数得方式定义 */}
                        <input ref={this.saveinput} type="text" placeholder="点击按钮显示数据"/>
                        <button ref="button12" onClick={this.showData}>点我显示左边数据</button>
                        <button ref="button12" onClick={this.changeWeather}>改变天气</button>
                    </div>
                )
           }
       }
       /*
        关于回调refs 的说明
         1 .如果ref回调函数是以内联函数得方式定义的，在 更新过程（state状态更新） 中它会被执行两次，
         2.内联函数得方式定义: 第一次传入参数null,然后第二次会传入参数DOM元素，这是因为在每次渲染时会创建一个新的函数实列，
         所以react 清空旧的ref（之前得函数实列清空） 并且设置新的(函数实列)，
         3. 通过将ref得回调函数定义为 class得绑定函数得方式 可以避免
       */
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    </script>
</body>
</html>
```
>createRef
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
       class Demo extends React.Component{
          /*
            React.createRef回调后可以返回一个容器，该容器可以存储被ref所标识得节点
            React.createRef 创建得一个容器 ， 该容器中是只能存储一个被ref所标识的节点，后面的会被覆盖掉前面的
            React.createRef 可以创建多个容器 (专属专用)
        
           */  
           myref=React.createRef()
           myref2=React.createRef()
          
           showData=()=>{
           console.log(this.myref,'myref')//存储被ref所标识得节点
           console.log(this.myref.current,'this.myref.current')//   <input type="text" placeholder="点击按钮显示数据"/>
           alert(this.myref.current.value)
           }
          
         
           render(){
                return (
                    <div>

                        <input ref={this.myref} type="text" placeholder="点击按钮显示数据"/>
                        <button ref="button12" onClick={this.showData}>点我显示左边数据</button>
                     
                    </div>
                )
           }
       }
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    </script>
</body>
</html>
```
### 事件处理
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
       class Demo extends React.Component{
          /*
           通过onXxxx属性指定事件处理函数（注意大小写）
           1.React 使用的是自定义（合成）事件，而不是使用的原生Dom [为了更好得兼容性 react对原生事件都进行了重新封装]
           2.React中得事件是通过《 事件委托方式 》处理的（委托给组件最外层得元素）【为了高效】 【复习事件委托 ，冒泡 捕捉】
           通过event.target 得到发生事件得DOM元素对象【不要过度使用ref】
           
          */
           myref=React.createRef()
           myref2=React.createRef()
          
           showData=()=>{
           console.log(this.myref,'myref')
           console.log(this.myref.current,'this.myref.current')
           alert(this.myref.current.value)
           }
           showData2=(e)=>{// 通过event.target 得到发生事件得DOM元素对象
               //e 事件对象  e.target事件源
               alert(e.target.value)
             console.log(e.target)
           }
          
         
           render(){
                return (
                    <div>

                        <input ref={this.myref} type="text" placeholder="点击按钮显示数据"/>
                        <button ref="button12" onClick={this.showData}>点我显示左边数据</button>
                        <input onBlur={this.showData2} type="text" placeholder="失去焦点显示数据"/>
                     
                    </div>
                )
           }
       }
    ReactDOM.render(<Demo/>,document.getElementById('test'))
    </script>
</body>
</html>
```
### 收集表单数据
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
      <!--非受控组件 ，现用现取 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <!-- <script type="text/babel">//非受控组件 ，现用现取
    //创建组件
     class Login extends React.Component{
        hanleSubmit=(e)=>{
             e.preventDefault()//阻止表单提交
            const {username,password}=this
            alert(`输入用户名${username.value},密码${password.value}`)
        }
         render(){
             return (
                 <form action="https://www.baidu.com/" onSubmit={this.hanleSubmit}>
                    用户名：<input ref={c=>this.username=c} type="text" name="username" />
                    密码： <input ref={c=>this.password=c} type="password" password="password" />
                     <button>登录</button>
                 </form>
             )
         }
     }
    ReactDOM.render(<Login/>,document.getElementById('test'))
    </script> -->
    <!--受控组件 ， 维护state 更改state \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <script type="text/babel">//受控组件 ， 维护state 更改state [省掉ref]
        //创建组件
         class Login extends React.Component{
             state={
                 username:'',
                 password:''
             }
            hanleSubmit=(e)=>{
                 e.preventDefault()//阻止表单提交
                 const {username,password}=this.state
                 alert(`输入用户名${username},密码${password}`)
              
            }
            demo=(e)=>{
                  this.setState({username:e.target.value})
            }
            demo1=(e)=>{
                  this.setState({password:e.target.value})
            }
             render(){
                 return (
                     <form  onSubmit={this.hanleSubmit}>
                        用户名：<input onChange={this.demo}  type="text" name="username" />
                        密码： <input  onChange={this.demo1}  type="password" password="password" />
                         <button>登录</button>
                     </form>
                 )
             }
         }
        ReactDOM.render(<Login/>,document.getElementById('test'))
        </script>
</body>
</html>
```
#### 高阶函数-函数柯里化
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
    // #region
    /*
         高阶函数：如果一个函数符合下面2个规范中得任何一个，那该函数就是高阶函数
           1.若a函数，接收得参数是一个函数，那么A就可以称之为高阶函数
           2.若A函数调用的返回值仍是一个函数，那么A就可以称之为高阶函数 setTimeout
           常用得高阶函数有：Promise,  setTimeout ,arr.map
        函数得柯里化：通过函数调用继续返回函数得方式，实现多次接收参数最后统一处理函数编码形式
    */
//    #endregion
         class Login extends React.Component{
             state={
                 username:'',
                 password:''
             }
            hanleSubmit=(e)=>{
                 e.preventDefault()
                 const {username,password}=this.state
                 alert(`输入用户名${username},密码${password}`)
              
            }
            savedata=(data)=>{
              return (e)=>{  //该函数就用到函数柯里化 
                  console.log([data],'datas')
             this.setState({[data]:e.target.value})
              }
            }
            savedata1=(data,e)=>{//不用函数柯里化
                console.log([data],'datas')
             this.setState({[data]:e.target.value})
            }
             render(){
                 return (
                     <form  onSubmit={this.hanleSubmit}>
                        用户名：<input onChange={this.savedata('username')}  type="text" name="username" />
                        {/*  不用柯里化 */}
                        {/* 用户名：<input onChange={(e)=>this.savedata('username',e)}  type="text" name="username" />*/}
                        密码： <input  onChange={this.savedata('password')}  type="password" password="password" />
                         <button>登录</button>
                     </form>
                 )
             }
         }
        ReactDOM.render(<Login/>,document.getElementById('test'))
        </script>
        <!-- 对象相关知识 ...................................................................... -->
        <script type="text/javascript">
         let a='tome'
         var obj={
             ['shenme']:'zhege'
         }
         obj[a]='jerry'
          obj.a='shazi'
          console.log(obj,'obj')//{shenme: "zhege", tome: "jerry", a: "shazi"} 
        </script>
        <!--函数得柯里化 ............................................................................ -->
        <script type="text/javascript">
        function sum(a) {
           return(b)=>{
               return(c)=>{
                   return a+b+c
               }
           }
        }
        const result=sum(1)(2)(3)
        </script>
</body>
</html>
```
#### 组件得生命周期
>引出生命周期
```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hellow-react</title>
</head>
<body>
    <div id="test"></div>
    <script type="text/javascript" src="../practice-base/js/react.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/react-dom.development.js"></script>
    <script type="text/javascript" src="../practice-base/js/babel.min.js"></script>
    <script type="text/babel">
    // 生命周期回调函数<=>生命周期钩子函数<=>生命周期函数
    class Life extends React.Component{
        state={opacity:1}
        death=()=>{
          
            ReactDOM.unmountComponentAtNode(document.getElementById('test')) //卸载组件
        }
        action=()=>{
              setInterval(()=>{//这种方式必须触发才可以 //定时器放在这使得render 多次调用（状态每隔200就改变状态，render就调用一次）
                let {opacity}=this.state
                  opacity -= 0.1
                if(opacity<=0) opacity=1
                this.setState({opacity})
            },200)
        }
     
        //render 调用得时机:初始化渲染,状态更新更新之后调用
        render(){ //render n+1 次，只要状态改变就会调用render  n就是状态改变 render 调用的次数
            // setInterval(()=>{ //定时器放在这使得render 多次调用（状态每隔200就改变状态，render就调用一次）,//调用次数逐渐增多大爆炸
            
            //     let {opacity}=this.state
            //       opacity -= 0.1
            //     if(opacity<=0)opacity=1
            //     this.setState({opacity})
            // },200)
            // console.log('调用了')
            return(
                <div>
                    <h1 style={{opacity:this.state.opacity}}>react学的咋样了</h1>
                    <button onClick={this.death}>吼叫</button>
                    <button onClick={this.action}>开始变化</button>
                </div>
            )
        }
        componentDidMount(){//组件挂载完成调用
            // console.log('@s')
            this.timr=setInterval(()=>{ //一挂载就调用定时器
                let {opacity}=this.state
                  opacity -= 0.1
                if(opacity<=0) opacity=1
                this.setState({opacity})
            },200)
         
        }
        componentWillUnmount(){ // 组件将要卸载时候调用
            console.log('即将卸载')
            //清除定时器
            clearInterval( this.timr)
        }
    }
    ReactDOM.render(<Life/>,document.getElementById('test'))
    </script>
</body>
</html>
```
* 组件从创建到死亡会经历一些特定的阶段
* React组件中包含一系列钩子函数(生命周期回调函数)会在特定的时刻调用
* 我们在定义组件时,会在特定的生命周期回调函数中做特定的工作
#### 生命周期流程图(旧)
