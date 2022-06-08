---
title: HTML

keywords: "前端"

tags: "前端"

categories: "前端"


cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/%E8%83%8C%E6%99%AF/wallhaven-j8eyw5-(1).webp


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

**万维网**（World Wide Web）是作为欧洲核子研究组织的一个项目发展起来的，在那里 Tim Berners-Lee 开发出万维网的雏形

Tim Berners-Lee - 万维网的发明人 - 目前是万维网联盟的主任

W3C 在 1994 年被创建的目的是，为了完成**麻省理工学院**（MIT）与**欧洲粒子物理研究所**（CERN）之间的协同工作，并得到了**美国国防部高级研究计划局**（DARPA）和**欧洲委员会**（European Commission）的支持 

网页三剑客

- HTML(主要用于网页的结构)
- CSS(主要用于网页中元素的样式)
- JavaScript(主要用于网页中的响应用户的操作)

![](https://i.loli.net/2021/10/01/haS3xv5GJkRypQu.png)

网页结构

- HTML(**结构**)
- CSS(**表现**)
- JavaScript(**行为**)

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



## HTML5

定义：是超文本标记语言，所谓的超文本指的是超连接，使用超连接可以让我们从一个网页跳转到另一个网页，它并不是一种编程语言而是一种**标记**语言，主要负责网页中的骨架结构，也就是其核心

HTML5是Web中核心语言HTML的规范，用户使用任何手段进行网页浏览时看到的内容原本都是HTML格式的，在浏览器中通过一些技术处理将其转换成为了可识别的信息，HTML5在从前HTML4.01的基础上进行了一定的改进

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

### 语法规则

- HTML中不区分大小写，但是我们一般都使用小写
- HTML中的注释不能嵌套
- HTML标签必须结构完整，要么成对出现，要么自结束标签
- HTML标签可以嵌套，但是不能交叉嵌套
- HTML标签中的属性必须有值，且值必须加引号(双引号单引号都可以)

```html
<!--   我是注释
-->
```

### 标签规则

**单标签**

```html
<标签名 [属性名=属性值,...]>
```

**成对标签**

```html
<标签名 [属性名=属性值,...]></标签名>
```

## HTML5基础结构

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

| 显示结果 | 描述              | 实体名称  | 实体编号 |
| -------- | ----------------- | --------- | -------- |
|          | 空格              | & nbsp;   | & #160;  |
| <        | 小于号            | & lt;     | &# 60;   |
| >        | 大于号            | & gt;     | & #62;   |
| &        | 和号              | & amp;    | & #38;   |
| "        | 引号              | & quot;   | & #34;   |
| '        | 撇号              | & apos;   | & #39;   |
| ￠       | 分（cent）        | & cent;   | & #162;  |
| £        | 镑（pound）       | & pound;  | & #163;  |
| ¥        | 元（yen）         | & yen;    | & #165;  |
| ©        | 版权（copyright） | & copy;   | & #169;  |
| ®        | 注册商标          | & reg;    | & #174;  |
| ™        | 商标              | & trade;  | & #8482; |
| ×        | 乘号              | & times;  | & #215;  |
| ÷        | 除号              | & divide; | & #247;  |

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

## 语义标签

| 标签           | 作用                                             |
| -------------- | ------------------------------------------------ |
| `<header>`     | 规定文档或节的页眉                               |
| `<footer>`     | 定义文档或节的页脚                               |
| `<main>`       | 规定文档的主内容                                 |
| `<section>`    | 定义文档的节                                     |
| `<article>`    | 定义文档的文章                                   |
| `<aside>`      | 定义页面内容以外的内容                           |
| `<nav>`        | 定义导航链接                                     |
| `<mark>`       | 定义重要的或强调的文本                           |
| `<figure>`     | 规定自包含内容，比如图示、图表、照片、代码清单等 |
| `<figcaption>` | 定义 `<figure>` 元素的标题                       |
| `<details>`    | 定义用户能够查看或隐藏的额外细节                 |
| `<summary>`    | 定义 `<details>` 元素的可见标题                  |
| `<time>`       | 定义日期/时间                                    |

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

## 表格标签

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>表格</title>
</head>
<body>
    <!-- 表格由 <table> 标签来定义
    每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义) -->
    <!--   border="1" 使用边框属性来显示一个带有边框的表格 -->
    <table border="1">
        <tr>
            <!-- 表格的表头使用 <th> 标签进行定义
            大多浏览器会把表头显示为粗体居中的文本 -->
            <th>2019</th>
            <th>2020</th>
            <th>2021</th>
        </tr>
        <tr>
             <!-- td:指表格数据（table data），是指数据单元格的内容
            数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等 -->
            <td>html</td>
            <td>css</td>
            <td>javascript</td>
        </tr>
        <tr>
            <td>学习</td>
            <!-- 这个空的单元格的边框没有被显示出来。为了避免这种情况，在空单元格中添加一个空格占位符，就可以将边框显示出来 -->
            <td>&nbsp;</td>  
            <td>自律</td>
        </tr>
    </table>
</body>
</html>
```

## 列表标签

### 分类

- 有序列表
- 无序列表
- 定义列表

可以嵌套

### 有序列表

```html
<!-- 有序列表,使用ol标签来创建有序列表
         使用li表示列表项 -->
    <ol>
        <li>html结构</li>
        <li>css表现</li>
        <li>javascript行为</li>
    </ol>
```

#### 属性值

| 属性     | 值                    | 作用                                   |
| -------- | --------------------- | -------------------------------------- |
| type     | 1（默认），a或A，i或I | 项目符号显示为数字、字母或罗马字母排序 |
| start    | 数字                  | 规定项目符号的起始值                   |
| reversed |                       | 规定列表顺序为降序                     |



### 无序列表

```html
 <!-- 无序列表，使用ul标签来创建无序列表
         使用li表示列表项 -->
    <ul>
        <li>html结构</li>
        <li>css表现</li>
        <li>javascript行为</li>
    </ul>
```

#### 属性值

| 属性 | 值           | 作用     |
| ---- | ------------ | -------- |
| type |              | 类型     |
|      | disc(默认值) | 实心圆   |
|      | circle       | 空心圆   |
|      | square       | 实心方块 |
|      | none         | 不显示   |

### 自定义列表

```html
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
```

### 分组标签

```html
<div>具体内容</div>
```

```html
<span>具体内容</span>
```



## 超链接标签

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
    <a href="https://chen-ruo.top/video/">链接</a>
    <a href="../src/index.html">我的主页</a>
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

| 属性   | 值            | 作用                                                         |
| ------ | ------------- | ------------------------------------------------------------ |
| href   | url(网页地址) | 规定链接的目标 URL,网页链接                                  |
| title  | 文本内容      | 为超链接设置一些介绍信息                                     |
| target |               | 规定在何处打开目标 URL，仅在 href 属性存在时使用             |
|        | _self         | 默认,在当前页面所在窗口打开链接的网页                        |
|        | _blank        | 在当前浏览器中打开一个新窗口加载链接的网页                   |
|        | _parent       | 在父窗口打开链接的网页（有些页面可以通过等方式打开一些子窗口） |
|        | _top          | 清除当前窗口中打开的所有框架（子窗口），并在整个窗口打开链接的网页 |
|        | framename     | 在指定的框架中打开链接的网页                                 |

使用得最最频繁的属性值是`_self`和`_blank`,至于`_parent`、`_top`和`framename`基本已不再使用

### 具体应用

#### 可点击图片

在一些网站上存在一些图片，当点击图片时，就会跳转到另一个页面。这其实是将图片作为了a标签的内容

```html
 <a href="https://bilibili.com">
    <img width="300px" height="200px" src="https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/%E8%83%8C%E6%99%AF/wallhaven-v9gvz5.jpg" alt="">
  </a>
```

#### 邮件链接

在很多网站中，都会有一个可点击的邮箱地址，当点击后，会打开邮箱发送邮件。这其实是将a标签中的href属性值设置为了邮件发送的相关内容

发送邮件时使用的是`mailto`：链接，这类型的连接有几个参数：

- `name@email.com`：这是第一个参数，也是必填参数。它指的是接收方的邮件地址

- `cc=name@email.com`：抄送地址（可选）

- `bcc=name@email.com`：密送地址（可选）

- `subject=subject text`：邮件主题（可选）

- `body=body text`：邮件内容（可选）

- `?`：第一个参数与第二个参数的分隔符（可选）

  `&`：除第一和第二个参数之间的分隔之外的其他参数之间的分隔符（可选）

```html
  <a href="mailto:2841220231@qq.com">陈若的QQ邮箱</a>
  <a href="mailto:2841220231@qq.com ? cc=name1@qq.com">陈若的QQ邮箱</a>
  <a href="mailto:2841220231@qq.com ? bcc=name2@qq.com">陈若的QQ邮箱</a>
  <a href="mailto:2841220231@qq.com ? cc=name1@qq.com & bcc=name2@qq.com">陈若的QQ邮箱</a>
  <a href="mailto:2841220231@qq.com ? subject=陈若要继续学习呀 & body=天天学习">陈若的QQ邮箱</a>
```

`mailto`的第一个参数是必须的，其他参数可以没有，也可以是任意一个或几个的组合，毕竟邮件地址不能没有不是

**注意**：参数`subject`和`body`的值不应该直接使用中文和特殊字符以及空格，否则会造成乱码以及一些意想不到的结果。中文和特殊字符应该使用[URL编码](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)，如空格使用“%20”代替

#### 下载链接

有一些链接在点击后可以下载文件、图片、音视频等，这一类链接称为下载链接。其实现方法是将`href`属性的值设为被下载资源的路径，然后再添加`download`属性

```html
 <!-- 下载链接的download属性值为“陈若的2022年新春烟花.mp4”，这表示图片下载后命名为"陈若的2022年新春烟花.mp4"。当然文件后缀也可以不写 -->
  <a href="https://chen-ruo.top/Gallery/01.mp4" download="陈若的2022年新春烟花.mp4">陈若的2022年新春烟花</a>
  <!-- 下载链接的download属性没有属性值，这表明下载后图片的文件名为资源文件的文件名，即“1.mp4” -->
  <a href="https://chen-ruo.top/Gallery/01.mp4" download>烟花</a>
```

### 超链接样式

#### a标签的伪类

伪类选择器：

- :link：超链接未被访问时的状态，也是超链接的初始样式，可以不设置
- :visited：超链接已被访问的状态
- :hover：光标悬停在标签上的状态（该伪类不局限于a标签使用）
- :active：光标在标签上被按下时（鼠标单击按下还没释放时）的状态（该伪类不局限与a标签使用）

当不适用这些伪类修改a标签的样式时，标签的**默认样式**：

- `:link`：蓝色，有下划线
- `:visited`：紫色，有下划线
- `:hover`：和hover前一样
- `:active`：红色，有下划线

#### 伪类顺序

a标签的4个伪类选择器要求遵循顺序：`:link`→ `:visited` → `:hover` → `:active`

##### 原理

一个超链接要么已经访问过，要么未访问过，因此访问过与未访问过两种状态不可能同时存在，因此:link和:visited的先后顺序可以随意。但从逻辑上，链接是先未访问过，然后到已访问过的。所以顺序应该先:link，后:visited

当光标移动到标签上时，标签的:hover伪类样式将被激活，覆盖:link或:visited的样式。因此:hover应该在:link和:visited之后，否则:hover的样式将被覆盖，无法显示。此时伪类选择器的顺序是：:link → :visited → :hover

当鼠标按下时，标签的:active伪类样式被激活。这时光标是停留在标签上的，而且是未访问或已访问的状态。因此，为了能够样:active样式能够正常的显示出来，:active应该将:hover、:visited、:link的样式覆盖。这时就可以得出四个伪类选择器的顺序就是：:link → :visited→ :hover → :active

## 图像标签

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

## 内联框架标签

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

## 音视频标签

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

## 表单标签

| 标签         | 作用                                         |
| ------------ | -------------------------------------------- |
| `<form>`     | 定义供用户输入的表单                         |
| `<input>`    | 定义输入域                                   |
| `<label>`    | 定义了 `<input>` 元素的标签，一般为输入标题  |
| `<textarea>` | 定义文本域 (一个多行的输入控件)              |
| `<fieldset>` | 定义了一组相关的表单元素，并使用外框包含起来 |
| `<legend>`   | 定义了 `<fieldset>` 元素的标题               |
| `<select>`   | 定义了下拉选项列表                           |
| `<optgroup>` | 定义选项组                                   |
| `<option>`   | 定义下拉列表中的选项                         |
| `<button>`   | 定义一个点击按钮                             |
| `<datalist>` | 指定一个预先定义的输入控件选项列表           |
| `<keygen>`   | 定义了表单的密钥对生成器字段                 |
| `<output>`   | 定义一个计算结果                             |

### form标签

| 属性           | 值                                | 作用                                                         |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| accept-charset | character_set                     | 规定服务器可处理的表单数据字符集，表单提交时使用的字符编码   |
| action         | *URL*                             | 规定当提交的服务器地址  ，值，绝对 URL - 指向另一个网站（比如 action="http://www.example.com/example.htm"） 相对 URL - 指向网站内的一个文件（比如 action="example.htm"） |
| autocomplete   | on                                | 默认,规定启用自动完成功能,浏览器会基于用户之前键入的值自动完成值 |
|                | off                               | 规定禁用自动完成功能,用户必须在每次使用时输入值到每个字段中，浏览器不会自动完成输入 |
| enctype        |                                   | 指定将数据回发到服务器时浏览器使用的编码类型                 |
|                | application/x-www-form-urlencoded | 默认，在发送前对所有字符进行编码（将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值） |
|                | multipart/form-data               | 不对字符编码，当使用有文件上传控件的表单时，该值是必需的     |
|                | text/plain                        | 将空格转换为 "+" 符号，但不编码特殊字符                      |
| method         |                                   | 规定用于发送表单数据的 HTTP 方法，提交的方式 GET(默认值)或 POST |
|                | get                               | 默认,将表单数据（form-data）以名称/值对的形式附加到 URL 中：URL?name=value&name=value |
|                | post                              | 以 HTTP post 事务的形式发送表单数据（form-data）             |
| name           | 文本                              | 规定表单的名称                                               |
| novalidate     | novalidate                        | 如果使用该属性，则提交表单时不进行验证                       |
| target         |                                   | 规定在何处打开 action URL                                    |
|                | _blank                            | 在新窗口/选项卡中打开                                        |
|                | _self                             | 在同一框架中打开（默认）                                     |
|                | _parent                           | 在父框架中打开                                               |
|                | _top                              | 在整个窗口中打开                                             |
|                | framename                         | 在指定的 iframe 中打开                                       |

**表单提交的时候**，**数据没有发送给服务器的三种情况**

1. 没有设 name 属性值
2. 单选、复选（下拉列表中的 option 标签）都需要添加 value 属性，以便发送给服务器
3. 表单项不在提交的 form 标签中

#### 拓展

**get 请求的特点是**：

1. 浏览器地址栏中的地址是：action 属性[+?+请求参数],`请求参数的格式是：name=value&name=value`

2. 不安全

3. 它有数据长度的限制

**post 请求的特点是**：

1. 浏览器地址栏中只有 action 属性值

2. 相对于 GET 请求要安全

3. 理论上没有数据长度的限制

**Web窗体**

Web窗体上面的数据多是动态从数据库读取的，故加载较慢。WEB窗体是一个动态网页的组合，分为.aspx和相应的.cs文件，.aspx文件可以用html标记语言实现网页前台，.cs则是服务器代码，用来进行交互

### input标签

`<input>` 元素在 `<form>` 元素中使用，用来声明允许用户输入数据的 input 控件

| 属性           | 值                                | 作用                                                         |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| accept         |                                   | 规定了可通过文件上传提交的服务器接受的文件类型,该属性仅适用于 `<input type="file">` |
|                | audio/*                           | 接受所有的声音文件                                           |
|                | video/*                           | 接受所有的视频文件                                           |
|                | image/*                           | 接受所有的图像文件                                           |
|                | MIME_type                         | 一个有效的 MIME 类型，不带参数                               |
| alt            | 文本                              | 定义图像输入的替代文本，该属性只能与 `<input type="image">` 配合使用 |
| autocomplete   |                                   | 规定输入字段是否应该启用自动完成功能,该属性适用于下面的 `<input>` 类型：text、search、url、tel、email、password、datepickers、range 和 color |
|                | on                                | 默认,规定启用自动完成功能                                    |
|                | off                               | 规定禁用自动完成功能                                         |
| checked        |                                   | 规定在页面加载时应该被预先选定的 `<input>` 元素，布尔属性 该属性适用于 `<input type="checkbox">` 和 `<input type="radio">` |
| disabied       |                                   | 规定应该禁用的 `<input>` 元素，被禁用的 input 元素是无法使用和无法点击的，布尔属性，该属性不适用于 `<input type="hidden">` |
| form           | form_id                           | 属性规定 `<input>` 元素所属的一个或多个表单                  |
| formaction     | url                               | 规定当表单提交时处理输入控件的文件的 URL                     |
| formenctype    |                                   | 规定当表单数据提交到服务器时如何编码（仅适用于 method="post" 的表单） |
|                | application/x-www-form-urlencoded | 默认,在发送前对所有字符进行编码,将空格转换为 "+" 符号，特殊字符转换为 ASCII HEX 值 |
|                | multipart/form-data               | 不对字符编码,当使用有文件上传控件的表单时，该值是必需的      |
|                | text/plain                        | 将空格转换为 "+" 符号，但不编码特殊字符                      |
| formmethod     |                                   | 规定发送表单数据到 action URL 的 HTTP 方法                   |
|                | get                               | 默认,将表单数据（form-data）以名称/值对的形式附加到 URL：URL?name=value&name=value |
|                | post                              | 以 HTTP post 事务的形式发送表单数据（form-data）             |
| formnovalidate | formnovalidate                    | 规定当表单提交时 `<input>` 元素不进行验证，布尔属性          |
| height         | 数值                              | 规定 `<input>` 元素的高度(仅适用于 `<input type="image">`)   |
| list           | id名                              | 规定绑定到 `<input>` 元素的 datalist 的 id                   |
| max            |                                   | 规定 `<input>` 元素的最大值,与min属性配合使用，可创建合法值范围(适用于以下 input 类型：number、range、date、datetime、datetime-local、month、time 和 week) |
|                | 数字值                            | 数字值,规定输入字段允许的最大值                              |
|                | 日期值                            | 日期,规定输入字段允许的最大值                                |
| maxlength      | 数字值                            | 规定 `<input>` 元素中允许的最大字符数                        |
| min            |                                   | 规定 `<input>` 元素的最小值(适用于以下 input 类型：number、range、date、datetime、datetime-local、month、time 和 week) |
|                | 数字值                            | 规定输入字段允许的最小值                                     |
|                | 日期值                            | 规定输入字段允许的最小值                                     |
| multiple       |                                   | 规定允许用户输入到 `<input>` 元素的多个值,简单的讲，增加输入值的数量，就是一个开放闸口，是布尔属性 |
| name           | 文本值                            | 规定 `<input>` 元素的名称(只有设置了 name 属性的表单元素才能在提交表单时传递它们的值) |
| pattern        | 正则表达式                        | 规定用于验证 `<input>` 元素的值的正则表达式(适用于下面的 input 类型：text、search、url、tel、email 和 password) |
| placeholder    | 文本值                            | 规定可描述输入字段预期值的简短的提示信息(适用于下面的 input 类型：text、search、url、tel、email 和 password) |
| readonly       |                                   | 规定输入字段是只读的,只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本,布尔属性 |
| required       |                                   | 规定必需在提交表单之前填写输入字段,不填写会有警告(适用于下面的 input 类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio 和 file)布尔属性 |
| size           | 数字值                            | 规定以字符数计的 `<input>` 元素的可见宽度(适用于下面的 input 类型：text、search、tel、url、email 和 password) |
| src            | url                               | 规定显示为提交按钮的图像的 URL,该属性对于 `<input type="image">` 是必需的属性，且只能与 `<input type="image">` 配合使用 |
| step           | 数字值                            | 规定输入字段的合法数字间隔(适用于下面的 input 类型：number、range、date、datetime、datetime-local、month、time 和 week) |
| type           |                                   | 规定要显示的 `<input>` 元素的类型                            |
|                | button                            | 定义可点击的按钮（通常与 JavaScript 一起使用来启动脚本）     |
|                | checkbox                          | 定义复选框                                                   |
|                | color                             | 定义拾色器                                                   |
|                | date                              | 定义 date 控件（包括年、月、日，不包括时间）                 |
|                | datetime                          | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，基于 UTC 时区） |
|                | datetime-local                    | 定义 date 和 time 控件（包括年、月、日、时、分、秒、几分之一秒，不带时区） |
|                | email                             | 定义用于 e-mail 地址的字段                                   |
|                | file                              | 定义文件选择字段和 "浏览..." 按钮，供文件上传                |
|                | hidden                            | 定义隐藏输入字段                                             |
|                | image                             | 定义图像作为提交按钮                                         |
|                | month                             | 定义 month 和 year 控件（不带时区）                          |
|                | number                            | 定义用于输入数字的字段                                       |
|                | password                          | 定义密码字段（字段中的字符会被遮蔽）                         |
|                | radio                             | 定义单选按钮                                                 |
|                | range                             | 定义用于精确值不重要的输入数字的控件（比如 slider 控件）     |
|                | reset                             | 定义重置按钮（重置所有的表单值为默认值）                     |
|                | search                            | 定义用于输入搜索字符串的文本字段                             |
|                | submit                            | 定义提交按钮                                                 |
|                | tel                               | 定义用于输入电话号码的字段                                   |
|                | text                              | 默认,定义一个单行的文本字段（默认宽度为 20 个字符）          |
|                | time                              | 定义用于输入时间的控件（不带时区）                           |
|                | url                               | 定义用于输入 URL 的字段                                      |
|                | week                              | 定义 week 和 year 控件（不带时区）                           |
| value          | 文本值                            | 规定 `<input>` 元素的值(对于 `<input type="checkbox">` 和 `<input type="radio">` 是必需的，但不适用于 `<input type="file">`) |
| width          | 数字值                            | 规定 `<input>` 元素的宽度(只适用于 `<input type="image">`)   |

**value属性**

- 对于 "button"、"reset"、"submit" 类型 - 定义按钮上的文本
- 对于 "text"、"password"、"hidden" 类型 - 定义输入字段的初始（默认）值
- 对于 "checkbox"、"radio"、"image" 类型 - 定义与 input 元素相关的值，当提交表单时该值会发送到表单的 action URL
- 对于 `<input type="checkbox">` 和 `<input type="radio">` 是必需的，但不适用于 `<input type="file">`

### textarea标签

定义一个多行的文本输入控件

| 属性        | 值      | 作用                                                         |
| ----------- | ------- | ------------------------------------------------------------ |
| autofocus   |         | 规定文本区域应该在页面加载时自动获得焦点，布尔属性           |
| cots        | 数字值  | 属性规定文本区域的可见宽度                                   |
| disabled    |         | 规定文本区域应该被禁用，既不可用，文本也不可选择（不能被复制），布尔属性 |
| form        | form_id | 规定文本区域所属的一个或多个表单的 id 列表，以空格分隔       |
| maxlength   | 数字值  | 在文本区域中允许的最大字符数                                 |
| name        | 文本值  | 规定文本区域的名称                                           |
| placheolder | 文本值  | 规定一个简短的提示，它描述了文本区域的期望值，当文本区域为空，且当字段获得焦点后又失去焦点时，文本区域中显示该提示 |
| readonly    |         | 规定文本区域为只读。                                         |
| required    |         | 在只读的文本区域中，无法对内容进行修改，但用户可以通过 tab 键切换到该控件，选取或复制其中的内容，布尔属性 |
| rows        | 数字值  | 规定文本区域的可见高度，以行数计，默认值为2                  |
| wrap        |         | 规定在表单提交时文本区域中的文本是如何换行的                 |
|             | soft    | 默认，在到达元素最大宽度的时候，换行显示，但不会自动插入换行符，也就是提交表单时没有换行符 |
|             | hard    | 在文本到达元素最大宽度的时候，浏览器自动插入换行符(CR+LF) 。在也就是提交表单也提交来换行符。当使用 "hard" 时，需要指定 cols 属性 |

### label标签

该标签不会向用户呈现任何特殊效果，但为鼠标用户改进了可用性，如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上

| 属性 | 值         | 作用                                |
| ---- | ---------- | ----------------------------------- |
| for  | element_id | 规定 label 与哪个表单元素绑定       |
| form | form_id    | 规定 label 字段所属的一个或多个表单 |

### fieldset标签

会在相关表单元素周围绘制边框

| 属性     | 值      | 作用                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| disabled |         | 规定应该禁用一组表单元素（一个 fieldset），既不可用，文本也不可选择（不能被复制），布尔属性 |
| form     | form_id | 规定 fieldset 所属的一个或多个表单                           |
| name     | 文本值  | 规定 fieldset 的名称                                         |

### select标签

用来创建下拉列表

| 属性      | 值      | 作用                                                         |
| --------- | ------- | ------------------------------------------------------------ |
| autofocus |         | 规定下拉列表在页面加载时自动获得焦点，布尔属性               |
| disabled  |         | 规定下拉列表应该被禁用，既不可用，也不可点击，布尔属性       |
| form      | form_id | 规定下拉列表所属的一个或多个表单的 id 列表，以空格分隔       |
| multiple  |         | 规定可同时选择多个选项，  对于 windows：按住 Ctrl 按钮来选择多个选项 对于 Mac：按住 command 按钮来选择多个选项，布尔属性 |
| name      |         | 定义下拉列表的名称                                           |
| required  |         | 规定用户在提交表单前必须选择一个下拉列表中的选项             |
| size      | 数字值  | 规定下拉列表中可见选项的数目                                 |

### optgroup标签

| 属性     | 值     | 作用                                                 |
| -------- | ------ | ---------------------------------------------------- |
| disabled |        | 规定选项组应该被禁用，既不可用，也不可点击，布尔属性 |
| label    | 文本值 | 为选项组规定标签/描述                                |

### option标签

定义下拉列表中的一个选项

注意：

**注释：**`<option>` 标签能够在不带任何属性的情况下使用，但是通常需要 value 属性，该属性定义了发送到服务器的数据

**注释：**请与 `<select>` 或 `<datalist>` 标签结合使用。在其他地方，`<option>` 标签是无意义的

| 属性     | 值     | 作用                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| disabled |        | 规定某个选项应该被禁用，既不可用，也不可点击，布尔属性       |
| label    | 文本值 | 选项的更短的版本，长的选项的，选项的简写                     |
| selected |        | 规定在页面加载时预先选定该选项，被预选的选项会显示在下拉列表最前面的位置，布尔属性 |
| value    | 文本值 | 规定在表单被提交时被发送到服务器的值                         |

### button标签

定义一个按钮

| 属性           | 值                                | 作用                                                         |
| -------------- | --------------------------------- | ------------------------------------------------------------ |
| autofocus      |                                   | 规定当页面加载时按钮应当自动地获得焦点，布尔属性             |
| disabled       |                                   | 规定应该禁用该按钮，被禁用的按钮是无法使用和无法点击的，布尔属性 |
| form           | form_id                           | 按钮所属表单的 id。 如需引用一个以上的表单，请使用空格分隔的列表 |
| formaction     | url                               | 规定将表单数据发送到的地址                                   |
| formenctype    |                                   | 规定在向服务器发送表单数据之前如何对其进行编码(覆盖 form 元素的 enctype 属性，该属性与 type="submit" 配合使用) |
|                | application/x-www-form-urlencoded | 默认选项，在发送前对所有字符进行编码                         |
|                | multipart/form-data               | 不对字符编码。当使用有文件上传控件的表单时，该值是必需的     |
|                | text/plain                        | 将空格转换为 "+" 符号，但不编码特殊字符                      |
| formmethod     |                                   | 规定用于发送表单数据的 HTTP 方法(覆盖 form 元素的 method 属性，该属性与 type="submit" 配合使用) |
|                | get                               | 向 URL 追加表单数据（form-data）：URL?name=value&name=value  |
|                | post                              | 以 HTTP post 事务的形式发送表单数据（form-data）             |
| formnovalidate |                                   | 使用该属性，则提交表单时按钮不会执行验证过程，布尔属性       |
| formtarget     |                                   | 规定在何处打开 action URL(覆盖 form 元素的 target 属性，该属性与 type="submit" 配合使用) |
|                | _blank                            | 在新窗口/选项卡中将表单提交到文档                            |
|                | _self                             | 默认选项，在同一框架中将表单提交到文档                       |
|                | _parent                           | 在父框架中将表单提交到文档                                   |
|                | _top                              | 在整个窗口中将表单提交到文档                                 |
|                | framename                         | 在指定的框架中将表单提交到文档                               |
| name           | 文本值                            | 规定按钮的名称                                               |
| type           |                                   | 规定按钮的类型                                               |
|                | button                            | 该按钮是提交按钮                                             |
|                | reset                             | 该按钮是可点击的按钮                                         |
|                | submit                            | 该按钮是重置按钮                                             |
| value          | 文本值                            | 规定按钮的初始值。可由脚本进行修改                           |

### output标签

| 属性 | 值         | 作用                                     |
| ---- | ---------- | ---------------------------------------- |
| for  | element_id | 描述计算中使用的元素与计算结果之间的关系 |
| form | form_id    | 定义输入字段所属的一个或多个表单         |
| name | 文本值     | 定义对象的唯一名称（表单提交时使用）     |

## 其他标签

```html
水平线：<hr>
换行：<br>
<b>粗体文本</b>
<code>计算机代码</code>
<em>强调文本</em>
<i>斜体文本</i>
<kbd>键盘输入</kbd>
<pre>预格式化文本</pre>
<small>更小的文本</small>
<strong>重要的文本</strong>
<abbr>缩写词或者首字母缩略词</abbr>
<address>联系信息</address>
<bdo>文字方向</bdo>
<blockquote>从另一个源引用的部分</blockquote>
<cite>工作的名称</cite>
<del>删除的文本</del>
<ins>插入的文本</ins>
<sub>下标文本</sub>
<sup>上标文本</sup>

```

## 通用属性

| 通用属性        | 作用                                                       |
| --------------- | ---------------------------------------------------------- |
| accesskey       | 设置访问元素的键盘快捷键                                   |
| class           | 规定元素的类名                                             |
| contenteditable | 规定是否可编辑元素的内容                                   |
| contextmenu     | 指定一个元素的上下文菜单，当用户右击该元素，出现上下文菜单 |
| data-*          | 用于存储页面的自定义数据                                   |
| dir             | 设置元素中内容的文本方向                                   |
| draggable       | 指定某个元素是否可以拖动                                   |
| dropzone        | 指定是否将数据复制，移动，或链接，或删除                   |
| hidden          | 规定对元素进行隐藏                                         |
| id              | 规定元素的唯一 id                                          |
| lang            | 设置元素中内容的语言代码                                   |
| spellcheck      | 检测元素是否拼写错误                                       |
| style           | 规定元素的行内样式                                         |
| tabindex        | 设置元素的 Tab 键控制次序                                  |
| title           | 规定元素的额外信息                                         |
| translate       | 指定是否一个元素的值在页面载入时是否需要翻译               |

编程的路还很长，不要停下脚步呀
