## Window pageXOffset 和 pageYOffset 属性
>pageXOffset 和 pageYOffset 属性返回文档在窗口左上角水平和垂直方向滚动的像素。

>pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。>pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。

>pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。
pageYOffset属性是scrollY属性的别名，与scrollY对应的属性是scrollX。 由于此属性属于window对象，所以可以直接使用，无需使用window引用。 语法结构： window.scrollY 此属性与scrollX原理完全相同。 浏览器支持： （1）.IE9+浏览器支持此属性。 （2）.edge浏览器支持此属性。 （3）.谷歌浏览器支持此属性。 （4）.opera浏览器支持此属性。 （5）.火狐浏览器支持此属性。 （6）.safria浏览器支持此属性。 代码实例：
 拖动滚动条，然后再点击按钮可以获取垂直滚动的尺寸。
>
>这些属性是只读的。
语法
```
window.pageXOffset
window.pageYOffset
```
## 元素位置pageX,pageY,clientX,clientY,scrollX,scrollY,screenX,screenY,offsetX,offsetY
```
总结:

event.clientX 设置或获取鼠标指针位置相对于当前窗口的 x 坐标，其中客户区域不包括窗口自身的控件和滚动条。 (可见区域)
event.clientY 设置或获取鼠标指针位置相对于当前窗口的 y 坐标，其中客户区域不包括窗口自身的控件和滚动条。 （可见区域）
event.offsetX 设置或获取鼠标指针位置相对于触发事件的对象的 x 坐标。 （触发事件的元素,ie,chrome支持此属性，ff不支持）
event.offsetY 设置或获取鼠标指针位置相对于触发事件的对象的 y 坐标。 （触发事件的元素,ie,chrome支持此属性，ff不支持）
event.screenX 设置或获取获取鼠标指针位置相对于用户屏幕的 x 坐标。(用户屏幕左上角) 
event.screenY 设置或获取鼠标指针位置相对于用户屏幕的 y 坐标。 (用户屏幕左上角) 
event.x 设置或获取鼠标指针位置相对于父文档的 x 像素坐标(亦即相对于当前窗口)。(ff不支持)
event.y 设置或获取鼠标指针位置相对于父文档的 y 像素坐标(亦即相对于当前窗口)。(ff不支持)

event.layerX 鼠标相比较于当前坐标系的位置,即如果触发元素没有设置绝对定位或相对定位,

                  以页面为参考点,如果有,将改变参考坐标系,从触发元素盒子模型的border区域的左上角为参考点(未理解)

event.laylerY 鼠标相比较于当前坐标系的位置,即如果触发元素没有设置绝对定位或相对定位,

                   以页面为参考点,如果有,将改变参考坐标系,从触发元素盒子模型的border区域的左上角为参考点(未理解)

event.pageX 设置或获取鼠标指针位置相对于当前窗口的 x 坐标，其中客户区域包括窗口自身的控件和滚动条。

event.pageY 设置或获取鼠标指针位置相对于当前窗口的 y 坐标，其中客户区域包括窗口自身的控件和滚动条。
```
## pageY、clientY、offsetY的区别
pageY：鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化；
clientY：鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点；
offsetY：IE特有,鼠标相比较于触发事件的元素的位置,以元素盒子模型的内容区域的左上角为参考点,如果有boder,可能出现负值
## element.offsetHeight	返回元素的高度。
```
element.offsetWidth	返回元素的宽度。
element.offsetLeft	返回元素的水平偏移位置。
element.offsetTop	返回元素的垂直偏移位置。
element.offsetParent	返回元素的偏移容器。offsetParent  获取的是距离元素最近的有定位的父节点，如果没有找到，找body
offsetWidth如何计算宽度
计算方式
offsetWidth = width + border + padding
```
## offset系列：以下5个属性返回值不带单位。

    el.offsetParent:（元素中带有最近定位的祖先元素）值有可能是父亲（position：relative），如果没有一直往上回溯祖先。

        区别：[parentnode:始终是上一级父亲]

    el.offsetTop:表示元素距离其offsetParent上方的偏移；

    el.offsetLeft:表示元素距离其offsetParent左边框的偏移；

   el.offsetWidth:表示元素实际宽度；

        包括：左右border+左右padding+width

    el.offsetHeight:表示元素实际高度；

        包括：上下border+上下padding+height

    con:

        offset              VS                 style

     获得数据无单位                         带单位的字符串

     任意样式                               只获取行内样式

     offsetWidth：包含3部分                 style.width:只包含width

[属于只读属性，ele.offsetWidth=300px;无效]   style.width:可读可写

## client系列：结果不带单位

    可以动态获取元素边框大小、元素大小。{跟边框紧绑定}

    el.clientTop            :      返回元素上边框的宽度

    el.clientLeft                  返回元素左边框的宽度

    el.clientWidth                  返回元素宽度：padding+内容宽

    el.clientHeight                 返回元素高度：padding+内容高

scroll系列：结果不带单位

    el.scrollTop:          

    el.scrollLeft:         

    el.scrollWidth:         自身实际内容宽度，不包含边框

    el.scrollHeight:        自身实际内容高度，不包含边框
## offset系列
1/offsetWidth 和 offsetHeight
得到对象的宽度和高度(自己的，与他人无关)
offsetWidth = width + border + padding

div { width:220px; border-left:2px solid red; padding:10px;}
div.offsetWidth = 220 + 2 + 20
为什么不用 div.style.width 因为东西 只能得到行内的数值

2/offsetLeft 和 offsetTop
返回距离上级盒子（最近的带有定位）左边的位置
如果父级都没有定位则以body 为准
这里的父级指的是所上一级 不仅仅指的是 父亲 还可以是 爷爷 曾爷爷 曾曾爷爷。。。。
offsetLeft 从父级的padding 开始算 父亲的border 不算
总结一下： 就是子盒子到定位的父盒子边框到边框的距离

3/offsetParent
offsetParent返回该对象的父级 （带有定位） 不一定是亲的爸爸
前面学过一个返回父亲(亲的) parentNode 有所区别
offsetParent 和 parentNode的区别：
如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。
如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。
# js三大系列
> offset-位移
> scroll-卷页
> client-可视区
1.元素偏移量offset系列
1.1offset
1.获取元素距离带有定位父元素的位置;

2.获得元素自身的大小;

3.返回的数值都不带单位;



//返回该元素带有定位的父级元素,如果父级元素都没有定位则返回body
element.offsetParent
//返回元素相对带有定位父元素上方的偏移
element.offsetTop
//返回元素相对带有定位父元素左边框的偏移
element.offsetLeft
//返回自身包括padding,边框,内容区的宽度,返回数值不带单位
element.offsetWidth
//返回自身包括padding,边框,内容区的宽度,返回数值不带单位

1.2offset与style区别
offset

1.offset可以得到任意样式表的样式值;

2.offset系列获得的数值是没有单位的;

3.offsetWidth包含padding+border+width;

4.offsetWidth等属性是只读属性,只能获取不能赋值;

style

1.style只能得到行内样式表中的样式值;

2.style.width获得的是带有单位的字符串;

3.style.width获得不包含padding和border的值;

4.style.width是可读可写属性,可以获取也可以赋值;

想要给元素更改值,则需要style改变;

2.元素可视区client系列
2.1client系列属性


//返回元素上边框的大小
element.clientTop
//返回元素左边框的大小
element.clientLeft
//返回自身包括padding,内容区的高度,不含边框,返回数值不带单位
element.clientWidth
//返回自身padding,内容区的宽度,不含边框,返回数值不带单位
element.clientHeight

3.元素滚动scroll系列
scroll系列属性

//返回被卷去的上侧距离,返回数值不带单位
element.scrollTop
//返回卷去的左侧距离,返回数值不带单位
element.scrollLeft
//返回自身实际的宽度,不含边框,返回数值不带单位
element.scrollWidth
//返回自身实际的高度,不含边框,返回数值不带单位
element.scrollHeight
被卷去的头部:

如果浏览器高度不足以显示整个页面时,会自动出现滚动条,当滚动条向下滚动时,页面上面被隐藏掉的高度,就是页面被卷去的头部;

页面被卷去的头部：可以通过window.pageYOffset 获得 如果是被卷去的左侧window.pageXOffset

**注意:**元素被卷去的头部是element.scrollTop , 如果是页面被卷去的头部 则是 window.pageYOffset

4.刷新页面触发load的三种情况
1,a标签的超链接;

2.F5或者刷新按钮(强制刷新);

3,前进后退按钮;

特殊情况: 在火狐浏览器中,有个往返缓存,这个缓存不仅保存着页面数据,还保存了DOM和JavaScript的状态,整个页面被保存在了内存中,所以后退按钮不能刷新页面;

解决方法: 使用pageshow事件触发,这个事件在页面显示时触发,无论页面是否来自缓存,重新加载页面中,pageshow会在load事件后触发,根据事件对象中的persisted来判断是否是缓存中的页面触发的pageshow事件;
