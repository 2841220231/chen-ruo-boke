---
title: HTML

date: 2021-11-14 7:38:00

keywords: "HTML"

tags: 

- 学习笔记
- 编程
- 前端

categories: "前端"

top_img:  "https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-z857qy.jpg"

cover: https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/src=http___wallpaperm.cmcm.com_22f6d8f1a26c09806941c29b38b83e7b.jpg&refer=http___wallpaperm.cmcm.jpg
background: url(https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-j858jq.jpg)


---

学习笔记仅供参考

要学习前端知识就要先从客户端和服务器开始

## 客户端和服务器

### 客户端

形式

- 文字客户端(通过命令行进行)
- 图形化界面(通过拖动等命令进行，软件的主要形式)
- 网页(不需要安装和更新，并且可以跨平台使用，而且开发成本低**B/S架构**)

定义

- 硬件上说的客户端指电脑、手机、pad等
- 软件上说的客户端指IE浏览器、QQ、暴风影音等
- 通过浏览器客户端访问淘宝，会返回整个网页的html文本，html文本里很多样式是修饰属性；而对于手机客户端，性能有限，主要关注数据信息(xml、json数据传输格式)，不需要过多html的修饰

### 服务器

- 硬件上说的服务器指一台或多台电脑
- 软件上说的服务器指web服务器，如Apache，对外发布服务，来提供服务，安装在硬件上使用。对于简单的Apache，就是给电脑开一个web服务，设置端口，客户端可以通过浏览器访问该服务器电脑。JaveEE写的web的项目，部署到web服务器上后，客户端才能访问这些项目

## W3C

万维网（World Wide Web）是作为欧洲核子研究组织的一个项目发展起来的，在那里 Tim Berners-Lee 开发出万维网的雏形。

Tim Berners-Lee - 万维网的发明人 - 目前是万维网联盟的主任。

W3C 在 1994 年被创建的目的是，为了完成麻省理工学院（MIT）与欧洲粒子物理研究所（CERN）之间的协同工作，并得到了美国国防部高级研究计划局（DARPA）和欧洲委员会（European Commission）的支持 

网页三剑客

- HTML(主要用于网页的结构)
- CSS(主要用于网页中元素的样式)
- JavaScript(主要用于网页中的响应用户的操作)

![](https://i.loli.net/2021/10/01/haS3xv5GJkRypQu.png)

网页结构

- HTML(结构)
- CSS(表现)
- JavaScript(行为)

## 字符编码

陈若  ->  10010110010010001000001011100101

10010110010010001000001011100101 ->  陈若

所有的数据在计算机中存储时都是以二进制的形式存储的，当人们需要读取这段数据是，再将机器语言转换成字符

### 编码

将字符转换为二进制码的过程

### 解码

将二进制码转换为字符的过程

### 常见的乱码问题

就与解码和编码的字符集不相等就会出现乱码

常见的字符集

- ASCII
- ISO88591
- GB2312
- GBK
- UTF-8(当前主流  万国码)

### 文件的相对路径

当我们需要跳转一个服务器内部的页面时，一般我们都会使用相对路径

相对路径都会使用.或..开头

- ./  表示当前文件所在的目录，可写可不写
- ../  表示当前文件所在目录的上一级目录，一定要写



# HTML

定义：是超文本标记语言，所谓的超文本指的是超连接，使用超连接可以让我们从一个网页跳转到另一个网页，它并不是一种编程语言而是一种标记语言，主要负责网页中的骨架结构，也就是其核心

## 标签

通常是成对出现的,但是也存在一些自结束标签

标签对中的第一个标签是开始标签，第二个标签是结束标签

### 语法

```html
<标签名>内容</标签名>
<标签名>
```

## 注释

注释中的内容会被浏览器所忽略，不会在网页中直接显示，但是可以在源码中查看注释，注释用来对代码进行解释说明，开发中一定要养成良好的习惯，注释要简单清楚

注意：注释不可被嵌套

### 语法

```html
<!--   我是注释
-->
```

## HTML基础架构

```html
<!-- 文档声明 DOCTYPE
     文档声明来告诉浏览器当前网页的版本
      HTML5 的声明-->
      <!DOCTYPE html>
<!-- html的根标签，网页中的所有内容都要写在根元素的里面 -->
      <html >
<!-- head是网页的头部，head中的内容不会在网页中直接出现，主要用来帮助浏览器或搜索引擎来解析网页 -->
      <head>
<!-- meta标签用来设置网页的元数据，这里meta用来设置网页的字符集，避免乱码问题 -->
          <meta charset = "utf-8">
<!-- title标签用来会显示在浏览器的标题栏，搜索引擎会主要根据title中的内容来判断网页的主要内容 -->
          <title>标题</title>
      </head>
<!-- body是html的子元素，表示网页的主体，网页中所有的可见内容都应该写在body里面 -->
      <body>
<!-- h1  网页的一级标题 -->
         <h1>我是一级标题</h1>
          
      </body>
      </html>
```

## 属性

定义：在标签中(开始标签或自结束标签)还可以设置属性

是一种名值对(属性名  =  "属性值")结构

属性和标签名或其他属性应该使用空格隔开

注意：

- 属性值应该始终被包括在引号内，双引号是最常用的，不过使用单引号也没有问题，在某些个别的情况下，比如属性值本身就含有双引号，那么您必须使用单引号
- 属性不能瞎写，应该根据权威的网站中规定编写

代码

```html
<!DOCTYPE html>
<html >
<head>
    <title>Document</title>
</head>
<body>
    <!-- 属性名 = "属性值" -->
    <p  title= "我是这段段落的标题">我是陈若</p>
</body>
</html>


```

## 实体

有些字符，像(<)这类的，对HTML（标准通用标记语言下的一个应用）来说是有特殊意义的，所以这些字符是不允许在文本中使用的。要在HTML中显示(<)这个字符，我们就必须使用实体字符

### 语法

```html
&实体名称；
或
&#实体编号；
```

### 常用的实体

记得把空格去掉

| 显示结果 | 描述              | 实体名称           | 实体编号 |
| -------- | ----------------- | ------------------ | -------- |
|          | 空格              | & nbsp;            | & #160;  |
| <        | 小于号            | & lt;              | &# 60;   |
| >        | 大于号            | & gt;              | & #62;   |
| &        | 和号              | & amp;             | & #38;   |
| "        | 引号              | & quot;            | & #34;   |
| '        | 撇号              | & apos; (IE不支持) | & #39;   |
| ￠       | 分（cent）        | & cent;            | & #162;  |
| £        | 镑（pound）       | & pound;           | & #163;  |
| ¥        | 元（yen）         | & yen;             | & #165;  |
| ©        | 版权（copyright） | & copy;            | & #169;  |
| ®        | 注册商标          | & reg;             | & #174;  |
| ™        | 商标              | & trade;           | & #8482; |
| ×        | 乘号              | & times;           | & #215;  |
| ÷        | 除号              | & divide;          | & #247;  |

## meta元素

meta主要用于设置网页中的一些元数据，元数据不是给用户看的

### 属性  

- charset    指定网页的字符集
- name    指定的数据的名称
- - keywords    表示网站的关键字，可以同时指定多个关键字，关键字间使用，隔开
  - description    表示由于指定网站的描述
- content  指定的数据的内容

代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- charset 表示网站的字符集-->
    <meta charset="UTF-8">
    <!-- keywords  表示网站的关键字，可以同时指定多个关键字，关键字间使用，隔开-->
    <meta name = "keywords" content = "博客，学习，知识，心得">
    <!-- description  用于指定网站的描述
    网站的描述会显示在搜索引擎的搜索的结果中
    title标签的内容作为搜索结果的超链接上的文字显示-->
    <meta name = "description" content = "对经济学和心理学和编程学习的一些总结和心得，一个不错的网站，欢迎学术交流">
    <!-- 将网页重定向到另一个网站   
    数据内容  2 两秒后跳转   url  -->
    <meta http-equiv = "refresh" content = "2 , url = https://bilibili.com">
    <title>Document</title>
</head>
<body>
    
    
</body>
</html>
```

## 块和行内元素

### 块元素

在网页中一般通过块元素来对页面进行布局

自动换行，每个块元素独占一行，可以设置宽高属性，多个块标签默认从上至下排列。最典型块标签< div >，多用于页面布局

### 行内元素

主要用于包括文字

不会自动换行，多个行内元素可在同一行，不能设置宽（width）高（height）属性，多个行内标签默认从左至右排列。最典型行内标签< span >，其高宽由标签内容撑开

### 行内块元素

同时具有行内元素和块元素的特征，不能自动换行，但可以设置宽高属性，默认排列方式从左至右。如标签< img >

常见行内元素：< span >、< a >、< strong >、< b> 、< em >、< I >、< del >、< u >
常见块元素：< div >、< h1 >…< h6 >、< p >、< table >、< form >、< ul >、< ol >、< dl >、< tr >、< body >
常见行内块元素：< img >、< input >、< td>

## 语义化标签

```html
<!DOCTYPE html>
<html >
<head>
</head>
<body>
    <!-- 在使用html标签时，该关注的是标签的语义，而不是它的样式
    标题标签
    h1~h6 有六个级别 其中h1最重要  h6最不重要 -->
    <h1>这是一级标题</h1>
    <h2>这是二级标题</h2>
    <h3>这是三级标题</h3>
    <h4>这是四级标题</h4>
    <h5>这是五级标题</h5>
    <h6>这是六级标题</h6>
    <!-- hgroup标签用来为标题分组，可以将一组相关的标题同时放入到hgroup中 -->
    <hgroup>
        <h1>陈若的博客空间</h1>
        <h2>作者:陈若</h2>
    </hgroup>
    <!-- p标签表示网页中的一个段落 -->
    <p>这是一个段落</p>
    <!-- em标签用于表示语音语调的一个加重 -->
    <p>今天又是<em>元气满满</em>的一天</p>
    <!-- strong表示强调，重要内容 -->
    <p>好好学习<strong>天天向上</strong></p>
    <!-- blockquote表示一个长引用 -->
    陈若说：
    <blockquote>
        好好学习，你才可以更上我的脚步
    </blockquote>
    <!-- q表示一个短引用 -->
    陈若曰<q>学习！学习！还是学习</q>

    <!-- 结构化语义标签 -->


    <!-- header  表示网页的头部 -->
    <header></header>
    <!-- main 表示网页的主体部分，一个网页中只会有一个main -->
    <main></main>
    <!-- footer 表示网页中的底部 -->
    <footer></footer>


    <!-- nav 表示网页中的导航 -->
    <nav></nav>
    <!-- aside 侧边栏 -->
    <aside></aside>
    <!-- article 表示一个独立的文章 -->
    <article></article>
    <!-- section 表示一个独立的区块，上边的标签都不能表示使用section -->
    <section></section>

    <!-- div 没有语义，就用来表示一个区块，目前div是最常见的布局标签 -->
    <div></div>
    <!-- span  没有任何的语义，一般用于在网页中选中的文字 -->
    <span></span>
</body>
</html>
```

## 列表

### 分类

- 有序列表
- 无序列表
- 定义列表

可以嵌套

代码

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <!-- 有序列表,使用ol标签来创建有序列表
         使用li表示列表项 -->
    <ol>
        <li>html结构</li>
        <li>css表现</li>
        <li>javascript行为</li>
    </ol>

    <!-- 无序列表，使用ul标签来创建无序列表
         使用li表示列表项 -->
    <ul>
        <li>html结构</li>
        <li>css表现</li>
        <li>javascript行为</li>
    </ul>

    <!-- 定义列表，使用dl标签来创建一个定义列表
         使用dt表示定义的内容
         使用dd表示内容进行解释说明 -->
    <dl>
        <dt>html结构</dt>
        <dd>html就是网页的内核</dd>
        <dt>css表现</dt>
        <dd>css就是网页的外壳</dd>
        <dt>javascript行为</dt>
        <dd>javascript就是网页的对外接口和交互</dd>
    </dl>
</body>
</html>
```

## 超链接

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

    <!-- 使用a标签定义超链接
         属性：
            href  指定跳转的目标的路径
                值可以是一个外部网站的地址
                也可以是一个内部文件夹的地址
        a标签除了自身不可以嵌套自己外可以嵌套任何元素-->
    <a href="https://bilibili.com">链接</a>
    <!--     target 指定超链接打开的位置
                可选值
                     _self  默认值  在当前页面中打开链接
                     _blank  在一个新的页面中打开超连接 -->
    <a href ="https://wallhaven.cc" target="_blank">链接</a>
    <!-- 可以直接将超链接的href属性设置为#，这样点击超链接以后页面不会发生跳转，而是转到当前页面的顶部的位置 -->
    <!-- 可以跳转到页面的指定位置，只需将href属性设置#目标元素的id属性值 -->
    <!-- id 属性(唯一不重复的)
                 每一个标签都可以添加一个id属性
                 id属性就是元素的唯一标识，同一个页面中不能出现重复的id属性-->
    <a href ="#bottom">去底部</a>
    <P>先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
        
        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
        
        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
        
        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
        
        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
        
        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
        
        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
        
        今当远离，临表涕零，不知所言。</P>
    <a id ="bottom" href ="#">回到顶部</a>
    <!-- 在开发中可以使用javascript:; 来作为href的属性，此时点击这个超链接什么也不会发生 -->
    <a href = "javascript:;">为想好链接</a>
</body>
</html>
```

## 图像

图片标签用于向当前页面中引入一个外部图片

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
    <!-- 
        img标签来引入外部图片，img标签是一个自结束标签
        img属于替换元素
        属性：
             src    属性指定的是外部图片的路径
             alt    图片的描述，这个描述默认情况下不会显示，有些浏览器会图片无法加载时会显示
                    搜索引擎会根据alt中的内容来识别图片，如果不写alt属性则图片不会被搜索引擎所发现
            width   图片的宽度(单位：像素)
            height  图片的高度
                     宽度和高度如果只改一个，则另一个会等比例缩放 -->
    <img src = "https://w.wallhaven.cc/full/y8/wallhaven-y8vlyk.jpg" alt = "阳光">
    <img width = "300" src = "https://w.wallhaven.cc/full/y8/wallhaven-y8vlyk.jpg">
</body>
</html>
```

### 格式

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
    <!-- 
        格式
        jpg(jpeg)
            支持的颜色比较丰富，不支持透明效果，不支持动图
            一般用来显示照片
        gif
            支持的颜色比较少，支持简单透明，支持动图
            颜色单一的图片，动图
        png  
            支持的颜色丰富，支持复杂透明，不支持动图
            颜色丰富，复杂透明图片(专为网页而生)
        webp
            这种格式是谷歌新推出的专门用来表示网页中的图片的一种格式
            具备其他图片格式的所有优点，而且文件还特别的小
            但兼容性不好
        base64
            将图片使用base64编码，这样可以将图片转换为字符，通过字符的形式来引入图片
            一般都是一些需要和网页一起加载的图片才会使用base64
            
     -->
</body>
</html>
```

## 内联框架

定义：用于向当前页面中引入一个其他网页

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
    <!-- 属性
            src  指定要引入的页面的路径 -->
    <iframe src= "https:bilibili.com"  width ="200" frameborder = "0"></iframe>
</body>
</html>
```

## 音视频

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
    <!-- 
    audio   标签用来向页面中引入一个外部的音频文件的
            音视频文件引入时，默认情况下不允许用户自己控制播放器停止
         属性
             controls    是否允许用户控制播放
             autoplay    音频文件是否自动播放
                     如果设置了autoplay则音乐在打开页面时会自动播放
                     但是目前来讲大部分浏览器都不会自动对音乐进行播放
            loop    音乐是否循环播放          
     -->
     <audio src="./source/1.mp3"  controls  autoplay  loop></audio>
    <!-- 
    除了通过src来指定外部文件的路径以外，还可以通过source来指定文件
     -->
     <audio controls >
         <!-- 有时候可以使用“兼容模式”，由于有些网页不支持某些格式或无法播放某音乐，所以需要“多个源” -->
         <source src="./source/1.mp3">
         <source src="./source/001.mp3">
     </audio>
    <!-- 
        使用video标签来向网页中引入一个视频
         -使用方式和audio是一样的
     -->
     <video controls>
         <source src="./source/001.mp4">
         <source src="./source/002.mp4">
     </video>
</body>
</html>
```

