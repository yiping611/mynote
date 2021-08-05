## transition  动画
> 过渡:从一个(A)状态到另外一个(B)状态的过程 就称之为过渡
>过渡transition是一个复合属性，包括transition-property、transition-duration、transition-timing-function、transition-delay这四个子属性。通过这四个子属性的配合来完成一个完整的过渡效果
```
transition-property: 过渡属性(默认值为all)
transition-duration: 过渡持续时间(默认值为0s)
transiton-timing-function: 过渡函数(默认值为ease函数)
transition-delay: 过渡延迟时间(默认值为0s)
```
## transform 转换变换
1. css3引入了一些可以对网页元素进行变换的属性，比如旋转，缩放，移动，或者沿着水平或者垂直方向扭曲（斜切变换）等等。这些的基础都是transform属性，transform属性有一项奇怪的特性，就是它们对于其周围的元素不会产生影响。换句话说，如果将一个元素旋转45度，它实际上是重叠在元素的上方，下方或者旁边。而不会移动其周围的内容。
```
属性参数：

1、translate(x,y) 设置盒子位移
2、scale(x,y) 设置盒子缩放
3、rotate(deg) 设置盒子旋转
4、skew(x-angle,y-angle) 设置盒子斜切
5、perspective 设置透视距离//透视距离: 塑造一个近大远小的效果 取值的大小代表眼睛距离屏幕的大小 取值越大  代表眼眼睛距离屏幕越远  近大远小的效果越弱  取值越小  代表眼眼睛距离屏幕越近  近大远小的效果越强 常用的取值: 900 - 1000

6、transform-style flat | preserve-3d 设置盒子是否按3d空间显示
7、translateX、translateY、translateZ 设置三维移动
8、rotateX、rotateY、rotateZ 设置三维旋转
9、scaleX、scaleY、scaleZ 设置三维缩放
10、tranform-origin 设置变形的中心点
11、backface-visibility 设置盒子背面是否可见
```
## animation动画
>transition只能从一组css属性变成另一组css属性。animation则可以在多组属性之间变换。transition必须使用触发器触发，animation可以使用触发器，也可以在页面加载完成的时候自动触发
```
属性参数：

1、@keyframes 定义关键帧动画
2、animation-name 动画名称
3、animation-duration 动画时间
4、animation-timing-function 动画曲线

linear 匀速
ease 开始和结束慢速
ease-in 开始是慢速
ease-out 结束时慢速
ease-in-out 开始和结束时慢速
steps 动画步数
5、animation-delay 动画延迟
6、animation-iteration-count 动画播放次数 n|infinite(无穷次)
7、animation-direction设置动画在循环中是否反向运动 
normal 默认动画结束不返回
Alternate 动画结束后返回
normal：从from到to
    reverse: 从to到from
8、animation-play-state 动画状态

paused 停止
running 运动
9、animation-fill-mode 动画前后的状态

none 不改变默认行为
forwards 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）
backwards 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
both 向前和向后填充模式都被应用
10、animation:name duration timing-function delay iteration-count direction;同时设置多个属性
///////////////
  过渡: 从一个状态到另外一个状态的改变  中间的 过程

      特点:
      1. 必须手动触发
      2. 有且只有两个状态

      动画: 

      特点:
      1. 可以自动触发
      2. 可以有多组状态 
      3. 可以无限执行


      动画的组成

      1. 声明动画

        @keyframes 自定义的动画名 {}

          1.1 简单动画
            from {}
            to {}

          1.2 复杂动画
            0% {}
            25% {}
            50% {}
            75% {}
            100% {}



      2. 调用动画

        animation: 动画名称 动画持续时间 动画的延迟时间  动画的速率曲线;

```