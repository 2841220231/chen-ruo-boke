

title: BOM

date: 2022-03-19 7:58:00

keywords: "javascript"

tags: 

- 学习笔记
- 前端
- javascript

categories: "javascript"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/相册-动漫/wallhaven-72rxxe.webp

---

## BOM概述

### 什么是 BOM

`BOM`是`Browser Object Model`，浏览器对象模型。主要处理浏览器窗口和框架，不过通常浏览器特定的`JavaScript`扩展都被看做`BOM`的一部分。
`BOM`是各个浏览器厂商根据`DOM`在各自浏览器上的实现，表现为不同浏览器定义有差别，实现方式不同

`javacsript`是通过访问`BOM`对象来访问、控制、修改客户端(浏览器)



浏览器对象模型（BOM）可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作，常见的BOM对象如下：

Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象
Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效
Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

由于BOM的window包含了document，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM（Document Object Model）模型的根节点

{% btn '(https://blog.csdn.net/chen_zw/article/details/7515713?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164809807416782184629683%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164809807416782184629683&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-5-7515713.142^v3^pc_search_result_cache,143^v4^register&utm_term=javascript++bom&spm=1018.2226.3001.4187',BOM对象的详细使用,far fa-hand-point-right,orange larger %}

> BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用

## Window对象

### 弹出框

#### 警示框

如果要确保信息传递给用户，通常会使用警告框。当警告框弹出时，用户将需要单击“确定”来继续

使用`alert()`需要注意的是：

1. `alert()`会阻塞进程
2. `alert(param)`中`param`只能是`number`、`string`类型或者它们组成的数组

##### 语法

```js
window.alert("内容")
或
alert("内容")
```

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-05-06_07-27-29.4agrr36e5vg0.webp)

#### 确认框

如果您希望用户验证或接受某个东西，则通常使用“确认”框,用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false

###### 语法

```js
window.confirm("内容");
或
confirm("内容");
```

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-05-06_07-21-53.4talhuldua00.webp)

#### 提示框

如果您希望用户在进入页面前输入值，通常会使用提示框,如果用户单击“确定”，该框返回输入值，如果用户单击“取消”，该框返回 NULL

###### 语法

```js
window.prompt("提示内容","提示框的内容");
或
prompt("提示内容","提示框的内容")；
```

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-05-06_07-25-56.2u2w17v05wu0.webp)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script> 
   var bth = document.getElementById("btn1");
   bth.onclick = function()
   {
       alert("这是警示栏");
       confirm("这是确认栏");
       var demo  = prompt("这是提示栏","2841220231");
       if (demo == 2841220231)
       {
        var dd = navigator.appCodeName;
           alert(dd);
       }
   }
</script>
</body>
</html>
```

### 定时事件

window 对象允许以指定的时间间隔执行代码，这些时间间隔称为定时事件

 JavaScript 使用的有两个关键的方法：

`setTimeout`(function, milliseconds)

定义：在等待指定的毫秒数后执行函数

`setInterval`(function, milliseconds)

定义：等同于 setTimeout()，但持续重复执行该函数

#### 超时定时器

在给定的时间间隔执行一次

语法

```html
window.setTimeout(funtion,毫秒数)
或
setTimeout(funtion,毫秒数)
```

##### 属性

- 1.是要执行的函数
- 2.指示执行之前的毫秒数

#### 循环定时器

在每个给定的时间间隔重复给定的函数

语法

```html
window.setInterval(function,毫秒数);
或
setInterval(function,毫秒数);
```

##### 属性

- 1.要执行的函数
- 2.每个执行之间的时间间隔的长度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="demo">点击</button>
    <script>
        var demo1 = document.getElementById("demo");
        var i = 0 ;
        demo1.onclick = function()
        {   
            //创建定时器
            var an = setInterval(function()
            {
                 //当i=10时，停止重复
                alert("这是定时器"+i);
                i = i+1;
                if(i == 10 )
                {
                    //清除定时器
                    clearInterval(an);
                    //创建延时器
                    var wei = setTimeout(function()
                    {
                        alert("延时器");
                    },300);
                    //清除延时器
                    //clearTimeout(wei);
                }
            },300);
        }
    </script>
</body>
</html>
```

### 常用窗口属性

两个属性可用用于确定浏览器窗口的尺寸

这两个属性都以像素返回尺寸：

- `window.innerHeight` - 浏览器窗口的内高度（以像素计）
- `window.innerWidth` - 浏览器窗口的内宽度（以像素计）
  浏览器窗口（浏览器视口）不包括工具栏和滚动条

对于 Internet Explorer 8, 7, 6, 5：

- document.documentElement.clientHeight
- document.documentElement.clientWidth
  或

- document.body.clientHeight
- document.body.clientWidth

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //兼容其他浏览器,万恶的ie
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ;
         alert ("高度是"+ height+"px");
         alert("宽度是"+width+"px");
</script>
</body>
</html>
```

### 其他window方法

[Window 对象](https://www.runoob.com/jsref/obj-window.html)

##### 打开新窗口

语法

```html
window.open(URL,name,specs,replace);
或
open(URL,name,specs,replace);
```

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/786bc5b7eacc1a8aba149c0741484aee.4ks9x5w6xpm0.webp)

##### 关闭当前窗口

语法

```html
window.close();
或
close();
```

##### 移动当前窗口

语法

```html
window.moveTo(x,y);
或
moveTo(x,y);
```

##### 调整当前窗口的大小

语法

```html
window.resizeTo(width,height);
或
resizeTo(width,height);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="openwin()">打开新窗口</button>
    <button onclick="closewin()">关闭当前窗口</button>
    <button onclick="movewin()">移动当前窗口</button>
    <button onclick="sizewin()">调整当前窗口的大小</button>
    <script>
        function openwin()
        {
            demo = window.open("","哔哩哔哩","height=200,width=200");
        };
        function closewin()
        {
            demo.close();
        };
        function movewin()
        {
            demo.moveTo(400,400);
            demo.focus();
        };
        function sizewin()
        {
            demo.resizeTo(500,500);
            demo.focus();
        };
    </script>
</body>
</html>
```

## Navigator对象

通过该对象可以来识别不同的浏览器，由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了，一般我们只会使用userAgent来判断浏览器的信息，userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var ua = navigator.userAgent;
if (/firefox/i.test(ua)) {
    alert("你是火狐浏览器");
} else if (/chrome/i.test(ua)) {
    alert("你是谷歌浏览器");
} else if (/msie/i.test(ua)) {
    alert("你是IE5-IE10浏览器");
} else if ("ActiveXObject" in window) {
    alert("你是IE11浏览器");
}
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
	
<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>"
txt+= "<p>浏览器名称: " + navigator.appName + "</p>"
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>"
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>"
txt+= "<p>硬件平台: " + navigator.platform + "</p>"
txt+= "<p>用户代理: " + navigator.userAgent + "</p>"
txt+= "<p>用户代理语言: " + navigator.language + "</p>"
document.getElementById("example").innerHTML=txt
</script>

</body>
</html>
```

### 警告

来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本

- navigator 数据可被浏览器使用者更改
- 一些浏览器对测试站点会识别错误
- 浏览器无法报告晚于浏览器发布的新操作系统

[Navigator 对象](https://www.runoob.com/jsref/obj-navigator.html)

> 注意：在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了，如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息，比如：ActiveXObject

## Location对象

封装了浏览器的地址栏的信息，如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）

### 常用属性

```html
console.log(location);          //输出location对象 ,可以改值
console.log(location.href);     //输出当前地址的全路径地址，可以改值
console.log(location.origin);   //输出当前地址的来源
console.log(location.protocol); //输出当前地址的协议
console.log(location.hostname); //输出当前地址的主机名
console.log(location.host);     //输出当前地址的主机
console.log(location.port);     //输出当前地址的端口号
console.log(location.pathname); //输出当前地址的路径部分
console.log(location.search);   //输出当前地址的?后边的参数部分
```

### 常用方法

#### assign()

定义：用来跳转到其它的页面，作用和直接修改location一样

```html
location.assign("https://chen-ruo.top")
```

#### reload()

定义：用于重新加载当前页面，作用和刷新按钮一样，如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面

```html
location.reload(true)
```

#### replace()

定义：可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，它不会生成历史记录，不能使用回退按钮回退

```html
location.replace("https://chen-ruo.top")
```

## History对象

用来操作浏览器向前或向后翻页

### 常用属性

```html
console.log(history);           //输出history对象
console.log(history.length);    //可以获取到当成访问的链接数量
```

### 常用方法

#### back()

可以回退到上一个页面，作用和浏览器的回退按钮一样

```html
history.back();
```

#### forward()

可以跳转到下一个页面，作用和浏览器的前进按钮一样

```html
history.back();
```

#### go()

可以用来跳转到指定的页面，它需要一个整数作为参数

- 1：表示向前跳转一个页面，相当于forward()
- 2：表示向前跳转两个页面
- -1：表示向后跳转一个页面，相当于back()
- -2：表示向后跳转两个页面

```js
history.go(1)
history.go(2)
history.go(-1)
history.go(-2)
```

## Screen对象

有关客户端显示屏幕的信息

每个 Window 对象的 screen 属性都引用一个 Screen 对象。

Screen 对象中存放着有关显示浏览器屏幕的信息

JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求

| 属性                 | 作用                                       |
| -------------------- | ------------------------------------------ |
| availHeight          | 返回显示屏幕的高度 (除 Windows 任务栏之外) |
| availWidth           | 返回显示屏幕的宽度 (除 Windows 任务栏之外) |
| height               | 返回显示屏幕的高度                         |
| width                | 返回显示器屏幕的宽度                       |
| bufferDepth          | 设置或返回调色板的比特深度                 |
| colorDepth           | 返回目标设备或缓冲器上的调色板的比特深度   |
| deviceXDPI           | 返回显示屏幕的每英寸水平点数               |
| deviceYDPI           | 返回显示屏幕的每英寸垂直点数               |
| logicalXDPI          | 返回显示屏幕每英寸的水平方向的常规点数     |
| logicalYDPI          | 返回显示屏幕每英寸的垂直方向的常规点数     |
| pixelDepth           | 返回显示屏幕的颜色分辨率（比特每像素）     |
| updateInterval       | 设置或返回屏幕的刷新率                     |
| fontSmoothingEnabled | 返回用户是否在显示控制面板中启用了字体平滑 |