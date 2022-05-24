title: CSS 

date: 2021-11-14 7:38:00

keywords: "CSS"

tags: 

- 学习笔记
- 编程
- 前端

categories: "前端"

top_img:  "https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/b8014a90f603738d459c2d22b51bb051f919ecd8.jpg"

cover: https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-gjw153.jpg

background: url(https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-4yjj9g.jpg)


---



## CSS基础

Cascading Style Sheet，层叠样式表，用于给 HTML 页面标签添加各种样式，定义网页的显示效果，通过css可以分别为网页的每一个层来设置样式，而最终我们能看到的只有网页的最上边一层

CSS 将网页内容和显示样式进行分离，增强了显示功能

### HTML 的缺陷

1.不能够适应多种设备
2.要求浏览器必须智能化足够庞大
3.数据和显示没有分开
4.功能不够强大

### CSS 优点

1.使数据和显示分开
2.降低网络流量
3.使整个网站视觉效果一致
4.使开发效率提高了

### css语法

```css
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
选择器 {
    k: v;
    k: v;
    k: v;
    k: v;
}
```

### CSS 和 HTML 结合的方式

1.行内样式：某个特定标签内使用 style 属性

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
    <P style = "color :red ; font-size : 20px;">行内样式</P>
</body>
</html>
```

2.内嵌样式表：在页面的 head 里采用 style 标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            color:darkolivegreen;
            font-size:100px;
        }
    </style>
</head>
<body>
    <P>内部样式</P>
</body>
</html>
```

3.引入外部 css 文件的方式

+ 采用 link 标签
+ 采用 import

> 两种引入方式的区别：外部样式表中不能写 link 标签，但是可以写 import 语句

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 可以将CSS样式编写到一个外部的css文件中，然后通过link标签来引入外部的css文件
         这也是实战中最佳的方案，类似于c++中的分离式编译
         外部样式表需要通过link标签进行引入，意味着只要想使用这些样式的网页都可以对其进行引用，可以使样式在不同页面之间复用
         将样式编写到外部css文件中，可以使用到浏览器的缓存机制，从而加快网页的加载速度-->
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
    <p>外部样式表</p>
</body>
</html>
```



### CSS 选择器

指定 CSS 作用的标签

选择器总共两大类：基本选择器和扩展选择器

常用的三种器的区别

1.标签选择器针对的是页面上的一类标签
2.ID 选择器针对特定的一个标签
3.类选择器可以被多种标签使用

### 基本选择器

基本语法

```css
/* 
基本语法：
    选择器   声明快
    选择器   通过选择器可以选中页面中的指定元素
    声明块   通过声明块来指定要为元素设置的样式
            声明块由一个一个的声明组成
            声明是一个名值对结构
                 一个样式对应一个样式值
                 名和值之间:连接,以;结尾   */

p{
    color:aquamarine;
    font-size:100px;
}
```

#### 注释

```css
/* 我是注释 */
```

#### 标签选择器(元素选择器)

选择所有某种类型的标签，用于描述共性

所有的标签，都可以是选择器
选择的是所有，而不是一个

```css
/* 
元素选择器
     作用：根据标签名来选中指定的元素
     语法：标签名{} 
     例子：P{}   h1{}  div{}
*/
p{
    color:aquamarine;
    font-size:100px;
}
```

p 标签内的文字大小都是 100px

#### ID 选择器

针对某一个特定的标签来使用，以#来定义

```css
/* 
id选择器
     作用：根据元素的id属性值选中一个元素
     语法：#id属性值{}
     例子：#red{} #mytitle{}
*/
#mytitle{ 
    border:3px dashed green;
}
```

任何的 HTML 标签都可以有 id 属性。表示这个标签的名字

这个标签的名字，可以任取，但是：

只能有字母、数字、下划线
必须以字母开头
不能和标签同名
HTML 页面不能出现相同的 ID
一个标签可以被多个 css 选择器选择，共同作用

#### 类选择器

用.来定义某一个类的标签

```css
/* 类选择器
     作用：根据元素的class属性值选中一组元素
     语法: .class属性值 */

.aa{
    color:bisque;
}
```

不要试图用一个类写完所有标签的样式，多写几个类
每一个类尽可能小，有公共的概念，让更多的标签使用
到底用 id 还是 class？
尽可能用 class
因为 id 是给 js 使用的，js 通过 id 来获取标签，所以 css 层面尽可能不用 id
另一方面，我们认为一个有 id 的元素，有动态效果
类上样式，id 上行为

#### 通用选择器

*, 匹配任何标签，效率低，不使用

```css
/* 
通配选择器
     作用：选中页面中的所有元素
     语法：*
*/
*{
    color:cornflowerblue;
}
```

#### 多类样式声明

一个标签可以使用多个类样式，用空格隔开

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .d1{
            color: aqua;
        }
        .d2{
            background-color:green;
            font-size: 20px;
        }
        .d3{
            border: solid 6px darksalmon;
        }
    </style>
</head>
<body>
    <div class="d1 d2 d3">我是陈若</div>
</body>
</html>
```



### CSS 的高级选择器

#### 后代选择器

如果选择的是E F，表示所有属于 E 元素的后代的 F 元素

```css

        div p {
            font-size: 19px;
            color: aqua;
        }

        div span {
            font-family: 微软雅黑;
            font-size: 3em;
            color: blue;
        }
    <div>
        <p>你好，我是陈若</p>
        <div>
            <div>
                <p>你好</p>
            </div>
        </div>
        <span>哈哈哈哈</span>
        <h2>失败</h2>
    </div>

```

#### 交集选择器

两个选择器紧密相连，以标签名开头 

如果后一个是类选择器，就写成div.food，如果后一个是 id 选择器，就写成div#food

```css
/* 
交集选择器
     作用：选中同时复合多个条件的元素
     语法：选择器1选择器2选择器3选择器n{}
     注意点：交集选择器中如果有元素选择器，必须使用元素选择器开头 */
    
div.asd{
    color:cyan;
}

.as.asd.asdw{
    color:darkblue;
}
```

##### 并集选择器

简单来说就是多选

```css
/* 
并集选择器
     作用：同时选择多个选择器对应的元素
     语法：选择器1，选择器2，选择器3，选择器n{} */
h1,p{
    color:darkmagenta;
}
```

#### CSS3 的一些选择器

##### 子代选择器

>只有是儿子的时候才能被选择

```css
div > p {
color: red;
}
```

只能选择

```css
<div>
        <p>我是div的儿子</p>
        <div>
            <p>无效</p>
        </div>
    </div>
```

不能选择

```css
<div>
    <ul>
        <p>我是div的孙子</p>
    </ul>
</div>
```

##### 序选择器

设置无序列表<ul>中的第一个<li>为红色：

```css
ul li:first-child {
    color: red;
}
```

设置无序列表<ul>中的最后一个<li>为红色：

```css
ul li:last-child {
    color: blue;
}
```

##### 下一个兄弟选择器

+ 表示选择下一个兄弟

把 h3 元素后面的一个 p 标签变成红色

```css
h3 + p{
color: red;
}
```

##### 属性选择器 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 
        标签名[属性名] 选择含有指定属性的元素
        标签名[属性名 = 属性值]  选择含有指定属性和属性值的元素
        标签名[属性名 ^= 属性值]  选择属性值以指定值开头的元素
        标签名[属性名 ~= 属性值]  选择属性值中包含指定词汇的元素
        标签名[属性名 |= 属性值]  选择属性值以指定值开头的属性值的元素，该值必须是整个单词
        标签名[属性名 $= 属性值]  选择属性值以指定值结尾的元素
        标签名[属性名 *= 属性值]  选择属性值中含有某值的元素的元素*/
        p[title *=e] {
            color: darkorange;
        }

        p[title] {
            background-color: aqua;
        }

        p[title][value] {
            border: solid 2px red;
        }
    </style>
</head>

<body>
    <p title="asdees">属性选择器</p>
    <p title value> nihao </p>
</body>

</html>
```

### 伪类选择器

伪类，也就是不存在的类，特殊的类，用来定义元素的特殊状态

例如：

- 设置鼠标悬停在元素上时的样式

- 为已访问和未访问链接设置不同的样式

- 设置元素获得焦点时的样式

  |      |      |      |
  | ---- | ---- | ---- |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |
  |      |      |      |

  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
/* 一般情况下都是使用:开头
         :first-child  第一个子元素
         :last-child   最后一个子元素
         :nth-child()    选中第n个子元素
             特殊值：
                     n  第n个 n的范围0到无穷
                     2n或even  表示选中偶数位的元素
                     2n+1或odd  表示选中奇数位的元素
                     
                     以上这些伪类都是根据所有的子元素进行排序
         :first-of-type
         :last-of-type
         :nth-of-type()
                     这几个伪类的功能和上述的类似，不同点在于它们是在同类型元素中进行排序
         :not() 否定伪类
             将符合条件的元素从选择器中去除*/

        ul >li.fired{
            color:red;
            font-size:  70px; 
        }
        /*ul >li#ide{
            color:aqua;
            font-size:80px;
        }
        */
        
        ul >li:first-child{
            color:blueviolet;
            font-size:80px; 
        }
        ul >li:last-child{
            color:coral;
            font-size:90px;
        }
        ul >li:nth-child(n){
            color:cornflowerblue;
            font-size:20px;
        }
        ul >li:not(:nth-child(4)){
            color :indianred;
            font-size:100px;

        }
    </style>
</head>
<body>
    <ul>
        <li class ="fired">第一个</li>
        <li class = "fired">第二个</li>
        <li id = "ide">第三个</li>
        <li>第四个</li>
        <li>第五个</li>
    </ul>
</body>
</html>
```

##### 超链接的伪类

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
/* :link  用来表示没访问过的链接(正常的链接) */
    a:link{
        color:darkorchid;
    }
/* :visited  用来表示访问过的链接
   由于隐私等多方面的原因，所以visited这个伪类只能修改链接的颜色 */
   a:visited{
       color:darkseagreen;
   }
/* :hover  用来表示鼠标移入的状态 */
   a:hover{
       color:darkviolet;
       font-size:100px;
   }
/* :active  用来表示鼠标点击 */
   a:active{
       color:dodgerblue;
   }
    </style>
</head>
<body>
    
</body>
</html>
```

[更多的伪类的信息](https://www.w3school.com.cn/css/css_pseudo_classes.asp)

##### 所有CSS伪元素

表示页面中一些特殊的并不真实的存在的元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<!-- 语法：
         伪元素使用::开头
             ::first-letter  表示第一个字母
             ::first-line   表示第一行
             ::selection    表示选中的内容
             ::before   元素的开始
             ::after    元素的最后
                 before和after必须结合content属性来使用 -->
    <style>
        p::first-letter{
            font-size:100px;
        }
        p::first-line{
            background-color:forestgreen;
        }
        p::selection{
            background-color:fuchsia;
        }
        p::before{
            content:"<!!!>";
        }
        p::after{
            content:">@@@<";
        }
    </style>
</head>
<body>
    <p>　天时不如地利，地利不如人和。三里之城，七里之郭，环而攻之而不胜。夫环而攻之，必有得天时者矣，然而不胜者，是天时不如地利也。城非不高也，池非不深也，兵革非不坚利也，米粟非不多也，委而去之，是地利不如人和也。

        　　故曰，域民不以封疆之界，固国不以山溪之险，威天下不以兵革之利。得道者多助，失道者寡助。寡助之至，亲戚畔之。多助之至，天下顺之。以天下之所顺，攻亲戚之所畔，故君子有不战，战必胜矣。</p>
</body>
</html>
```

### 继承

定义：样式的继承，我们为了一个元素设置的样式同时也会应用到它的后代元素上，是发生在祖先后代之间的关系

好处：

- 方便于开发而设计的
- 利用继承我们可以将一些通用的样式统一设置到共同的祖先元素上，这样只需设置一次就可以让所有的元素都具有该样式

注意事项：

- 并不是所有的样式都会继承的，例如，背景有关的，布局有关的等都不会被继承



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            color:lightgreen;
            font-size:90px;
            background-color:rgb(140, 172, 26);
        }
        
    </style>
</head>
<body>
    <p>  
        继承
        <span>子元素</span>
    </p>
</body>
</html>
```

### 选择器优先级(权重)

| ↑    | 行内样式               | 粒度 |
| ---- | ---------------------- | ---- |
| ↑    | id选择器               | 0100 |
| ↑    | 类和类属性值           | 0010 |
| ↑    | 标签选择器，伪类选择器 | 0001 |
| ↑    | 通配选择器             | 0000 |
| ↑    | 行内样式               | 1000 |

首先加载标签选择器,再加载类选择器，然后加载ID选择器，最后加载行内样式，后加载会覆盖先加载的同名样式

权重可叠加使用

在同优先级的前提下，后加载的会覆盖先加载的同名样式，所以离的越近越优先

可以在某一个样式的后边添加 !important  ，则此时该样式会获取到最高的优先级，甚至超过行内样式，但在开发中，一定要慎用

### 长度单位

像素

- 像素越小的屏幕显示的效果越清晰，不同的显示设备的像素大小是不同的

百分比

- 可以将属性值设置为相对于其父元素属性的百分比
- 设置百分比可以使子元素跟随父元素的改变而改变

em

- 是相对于元素的字体大小来计算的
- 会根据字体大小的变化而变化

rem

- 是根据根元素的字体大小来计算的

vh

- 表示相对视口高度（Viewport Height），1vh = 1% * 视口高度

### 颜色单位

单词

- 以单词的形式进行设置颜色
- 语法：#颜色单词

RGB值

- RGB通过三种颜色的不同浓度来调配出不同的颜色
- 语法：RGB(红色,绿色,蓝色)
- 每一种颜色的范围在0~255  (0%~100%)之间

RGBA值

- 在RGB的基础上在后面添加了一个a表示不透明度
- 语法：RGBA(红色,绿色,蓝色,不透明度)
- 1表示完全不透明    0表示完全透明  .5半透明

十六进制的RGB值

- 语法：#红色绿色蓝色
- 每一种颜色的浓度的范围在00~ff
- 如果颜色两位重复可以简写例如  #aabbcc  --> #abc

HSLA值

- H表示色相(0~360)
- S表示饱和度、颜色的浓度(0%~100%)
- L表示亮度、颜色的亮度(0%~100%)
- A表示不透明度(1表示完全不透明    0表示完全透明  .5半透明   0~1)

### 文档流

定义：网页是一个多层的结构，一层挨着一层，作为用户来讲只能看到最顶上一层

元素在文档流中的特点

#### 块级元素**(block element)**

其就是以块状呈现，具有块的基本特征，如高度、宽度等等

- 在新行上开始，在页面中独占一行,行高以及外边距和内边距都可控制（使用float属性除外）
- 可以设置 width, height属性和margin,padding等属性
- 默认宽度是父元素的全部，而默认高度是被内容撑开
- 它可以容纳内联元素和其他块元素

比如我们常用的div,p, h1等，都是块级元素

#### 行内元素(内联元素)**（inline element）**

- 不会独占页面一行，只占自身的大小
- 在页面中左向右水平排列,如果一行之中不能则元素会换到第二行,继续自左向右排列
- 默认宽度和高度都是被内容撑开 
- 高，行高及外边距和内边距不可改变；只能改变宽度,Margin和padding只能改变左右，上下无效
- 宽度就是它的文字或图片的宽度，不可改变
- 内联元素只能容纳文本或者其他内联元素

比如我们常用的span、a、input都是内联元素

## 盒子模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，将页面中的所有元素都设置

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素

将元素设置为矩形的盒子后，对页面的布局就变成将不同的盒子摆放到不同的位置

盒子可见框的大小，是由内容区、内边框和边框一起决定

结构

- 内容区(content)
- 内边距(padding)
- 边框(border)
- 外边距(margin)

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/src=http___images2015.3a6n91w4q600.webp)

### 内容区(content)

元素中的所有的子元素和文本内容都在内容区中排列

大小由width和height这两个属性设置

-  **width**  设置内容区的宽度
- **height**  设置内容区的高度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#bfc;
        }
    </style>
</head>
<body>
    <div class="bemo"></div>
    
</body>
</html>
```


### 内边框(padding)

定义；指的是内容区和边框之间的距离

属性值

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的内边距上
- 指定**两个**值时，第一个值会应用于**上边和下边**的内边距，第二个值应用于**左边和右边**
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的内边距
- 指定**四个**值时，依次（顺时针方向）作为**上边**，**右边**，**下边**，和**左边**的内边距

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding:20px;
        }
        .bemo1{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 1em;
        }
        .bemo2{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10% 0;
        }
        .bemo3{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10px 50px 20px;
        }
        .bemo4{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10px 50px 30px 0;
        }
        .bemo5{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 0;
        }
    </style>
</head>
<body>
    <div class="bemo">第一</div>
    <div class="bemo1">第二</div>
    <div class="bemo2">第三</div>
    <div class="bemo3">第四</div>
    <div class="bemo4">第五</div>
    <div class="bemo5">第六</div>
</body>
</html>
```

### 边框(border)

边框属于盒子的边缘，边框里边属于盒子内部，而出了边框都是盒子的外部

边框的大小会影响到整个盒子的大小

设置边框的三个样式

- 边框的宽度   border-width
- 边框的颜色   border-color
- 边框的样式   border-style

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-color:coral;
            border-style:solid;
            border-width:50px;
        }
    </style>
</head>
<body>
    <div class="bemo"></div>
    
</body>
</html>
```

#### border-color  

定义：用来指定边框的颜色，同样可以分别指定四个边的边框

border-color可以忽略不写，如果不写就会自动使用color的颜色

语法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
           /* 单值语法 */
           width:100px;
           height:100px;
           background-color:#bfc;
           border-color:darkkhaki;
           border-style:solid;
           border-width:20px;
        }
        .bemo1{
            /* 双值语法 */
           width:100px;
           height:100px;
           background-color:#bfc;
           border-color:darkkhaki rgb(135, 145, 133);
           border-style:solid;
           border-width:20px;

        }
        .bemo2{
            /* 三值语法 */
           width:100px;
           height:100px;
           background-color:#bfc;
           border-color:darkkhaki #bfa rgb(135, 145, 133) rgba(123, 167,134,.2);
           border-style:solid;
           border-width:20px;
        }
        .bemo3{
            /* 四值语法 */
           width:100px;
           height:100px;
           background-color:#bfc;
           border-color:darkkhaki rgb(179, 170, 255) rgb(135, 145, 133) rgba(123, 167,134,.2);
           border-style:solid;
           border-width:20px;
        }
        .bemo4{
            
           width:100px;
           height:100px;
           background-color:#bfc;
           border-style:solid;
           border-width:20px;
           border-top-color:darkolivegreen;
           border-left-color:darkorange;
           border-right-color:darkred;
           border-bottom-color:darkseagreen;
        }
    </style>
</head>
<body>
    <div class="bemo"></div>

    <div class="bemo1"></div>

    <div class="bemo2"></div>

    <div class="bemo3"></div>
    
    <div class="bemo4"></div>
</body>
</html>
```

#### border-style

定义：指定边框的样式，默认情况下，是none表示没有边框

属性值

- none 表示不显示边框，它的值优先级最低，意味着如果存在其他的重叠边框，则会显示为那个边框
- hidden  表示不显示边框，它的值优先级最高，意味着如果存在其他的重叠边框，则不会显示为那个边框
- dotted  一系列圆点
- dashed  一系列短的方形虚线
- solid 一条实线
- double  一条双实线
- groove  有雕刻效果的边框
- ridge  有浮雕效果的边框
- inset  有陷入效果的边框
- outset  有突出效果的边框

这里就不一一实现了，就实现一两个

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .a{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-color:deepskyblue;
            border-width:20px;
            border-style:initial;
        }
        .b{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-color:deepskyblue;
            border-width:20px;
            border-style:outset;
        }
        .c{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-color:deepskyblue;
            border-width:20px;
            border-style: dashed groove none dotted;
        }
    </style>
</head>
<body>
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
    
</body>
</html>
```

#### 简写

同时设置边框的颜色 ， 粗细和样式，设置顺序可以随便

除了border以外会有四个 border-xxx

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:#bfc 20px dashed ;
        }
        .bemo1{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-right:khaki 20px solid;
        }
        .bemo2{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-bottom:lawngreen 20px inset;
        }
        .bemo3{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-left:lightgoldenrodyellow 20px outset;
        }
        .bemo4{
            width:100px;
            height:100px;
            background-color:#bfc;
            border-top:lightpink 20px groove;
        }
    </style>
</head>
<body>
    <div class="bemo"></div>
    <div class="bemo1"></div>
    <div class="bemo2"></div>
    <div class="bemo3"></div>
    <div class="bemo4"></div>
</body>
</html>
```

### 外边距(margin)

定义：不会影响盒子可见框大小，但可以影响盒子的位置

元素在页面中是按照自右向左的顺序排列，默认情况下，如果我们设置的左和上外边距则会移动元素自身，而设置下和右外边距会移动其他元素,值可以为负数

会影响盒子的实际占用空间

属性值

- 当只指定**一个**值时，该值会统一应用到**全部四个边**的外边距上,当值为auto则元素左右居中
- 指定**两个**值时，第一个值会应用于**上边和下边**的外边距，第二个值应用于**左边和右边**
- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的外边距
- 指定**四个**值时，依次（顺时针方向）作为**上边**，**右边**，**下边**，和**左边**的外边距

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding:20px;
            /* 应用于所有边 */
            margin: 1em;
            margin: -3px;
        }
        .bemo1{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 1em;
            /* 上边下边 | 左边右边 */
            margin: 5% auto;
        }
        .bemo2{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10% 0;
            /* 上边 | 左边右边 | 下边 */
            margin: 1em auto 2em;
        }
        .bemo3{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10px 50px 20px;
            /* 上边 | 右边 | 下边 | 左边 */
            margin: 2px 1em 0 auto;
        }
        .bemo4{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 10px 50px 30px 0;
            /* 全局值 */
            margin: inherit;
            margin: initial;
            margin: unset;
        }
        .bemo5{
            width:100px;
            height:100px;
            background-color:#bfc;
            border:lightsalmon 10px  dotted;
            padding: 0;
        }
    </style>
</head>
<body>
    <div class="bemo">第一</div>
    <div class="bemo1">第二</div>
    <div class="bemo2">第三</div>
    <div class="bemo3">第四</div>
    <div class="bemo4">第五</div>
    <div class="bemo5">第六</div>
</body>
</html>
```

四个方向的外边距

- margin-top:上外边距设置一个正值，元素会向下移动
- margin-right:默认情况下设置margin-right不会产生任何效果
- margin-bottom:下外边距，设置一个正值，其下边的元素会向下移动
- margin-left:左外边距，设置一个正值，元素会相反的方向移动

margin也可以设置成负值，会向其反方向移动

#### 外边距合并

引用文章：[边距合并](https://www.jianshu.com/p/bac575c68d3f)

出现外边距合并的情境：

- 父元素与其第一个或最后一个子元素之间
- 相邻的两个元素之间的上下边距
- 空块元素自身的上下边距

##### **相邻元素**

当两个元素结构上下相邻时，上面的下外边距会与下面元素的上外边距会合并，但如果元素左右相邻，是不会合并外边距的，因为行内元素不合并外边距

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/10871310-08913f807e434041.6q4jiq0lu3g0.webp)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo1 {
            height: 200px;
            width: 200px;
            background-color: aqua;
            margin: 200px 0 ;
        }
        .demo2{
            width: 200px;
            height: 200px;
            background-color: brown;
            margin: 200px 0 ;
        }
    </style>
</head>

<body>
    <div>
        <div class="demo1">cat's paw 1</div>
        <div class="demo2">cat's paw 2</div>
    </div>

</body>

</html>
```

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/Snipaste_2022-04-22_11-26-50.6hvvbr3nbyo0.webp)

##### **父子元素**

父子元素如果都有上边距，会合并为其中较大的那一个

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/10871310-d9f1da29dde7c28e.11rwhsdp0uw0.webp)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo1 {
            height: 400px;
            width: 400px;
            border:solid 1px aqua ;
            margin: 3px 0 ;
        }
        .demo2{
            width: 200px;
            height: 200px;
            border:solid 2px red ;
            margin: 200px 0 ;
        }
    </style>
</head>

<body>
    <div class="demo1">
        <div class="demo2">cat's paw 2</div>
    </div>

</body>

</html>
```

##### **空块元素**

如果一个块级元素中不包含任何内容，并且在其 [`margin-top`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fmargin-top) 与 [`margin-bottom`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fmargin-bottom) 之间没有边框、内边距、行内内容、[`height`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fheight)、[`min-height`](https://link.jianshu.com?t=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fmin-height) 将两者分开，则该元素的上下外边距会折叠

如果这个外边距遇到另一个元素的外边距，它还会发生合并

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/10871310-afb31d9928a7e90a.335ld0vuvbg0.webp)

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/10871310-8067aa8d4091fef5.6is2g0d2xl00.webp)

##### **解决方案**

- 在其中添加一个空的div，阻止他们在同一个BFC
- 处于静态流的元素会发生合并，所以设置 float 和 position:xxx都不会发合并
- 设置为 inline-block 也不会发生合并

#### 垂直外边距的重叠

相邻的垂直方向外边距会发生重叠现象

兄弟元素

- 兄弟元素间的相邻垂直外边距会取两者之间的较大值，前提都是正值
- - 特殊情况
  - - 如果相邻的外边距一正一负，则会取两者的和
    - 如果相邻的外边距都是负值，则会取两者中的绝对值较大的
  - 兄弟元素之间的外边距的重叠，对开发是有利的，所以不需要进行处理

父子元素

- 父子元素间相邻外边距，子元素会传递给父元素(上外边距)
- 父子外边距的折叠会影响到页面的布局，必须进行处理

#### 实现水平居中

width: fit-content 根据内容自适应宽度 可以结合margin-auto 来实现居中

width: min-content 使用子元素中宽度最小的。（无论子元素是inline,还是 block，都会使用最小的宽度）

width:max-content 使用子元素中最大的开你的。无论是inline还是block

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo1 {
        
            width: fit-content ;
            height: 200px;
            margin: auto;
            background-color: aqua;
        }
        div{
            width: 500x;
            height: 400px;
            background-color: red;
        }
       
    </style>
</head>

<body>
    <div>
        <div class="demo1">我是迪迦奥特曼</div>
    </div>

</body>
</html>
```

### 水平方向布局

决定因素

- margin-left
- border-left
- padding-left
- width
- padding-right
- border-right
- margin-right

#### 等式

margin-left + border-left + padding-left + width + padding-right + border-right + margin-right  = 其父元素内容区宽度(一定成立)

如果等式不成立，则称为过度约束，则等式会自动调整

#### 调整问题

- 如果这七个值中没有为auto的情况，则浏览器会自动调整margin-right值以使等式满足
- 如果将一个宽度和一个外边距设置为auto，则宽度会调整到最大，设置为auto的外边距会自动为0
- 如果将三个值都设置为auto，则外边距都是0，宽度最大(width   margin-left   margin-right)
- 如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值，所以经常利用这一提点是一个元素在其父元素中水平居中

子元素是在父元素的内容区中排列

如果子元素的大小大于父元素，则子元素会溢出

使用overflow属性设置父元素处理溢出的子元素

属性值

- ```css
  /* 默认值。内容不会被修剪，会呈现在元素框之外 */
  overflow: visible;
  ```

- ```css
  /* 内容会被修剪，并且其余内容不可见 */
  overflow: hidden;
  ```

- ```css
  /* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
  overflow: scroll;
  ```

- ```css
  /* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
  overflow: auto;
  ```

- ``` css
  /* 规定从父元素继承overflow属性的值 */
  overflow: inherit;
  ```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo {
            width: 200px;
            height:200px;
            overflow: visible;
            font-size: 20px;
            background-color: #bfc;
        }

        .bem2 {
            width: 200px;
            height:200px;
            overflow: hidden;
            font-size: 20px;
            background-color: #bfc;
        }

        .bemo3 {
            width: 200px;
            height:200px;
            overflow: scroll;
            font-size: 20px;
            background-color: #bfc;
        }

        .bemo4 {
            width: 200px;
            height:200px;
            overflow: auto;
            font-size: 20px;
            background-color: #bfc;
        }

        .bemo5 {
            width: 200px;
            height:200px;
            overflow: inherit;
            font-size: 20px;
            background-color: #bfc;
        }
    </style>
</head>

<body>

    <div class="bemo">
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

        今当远离，临表涕零，不知所言。</div>
    <div class="bemo2">
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

        今当远离，临表涕零，不知所言。</div>
    <div class="bemo3">
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

        今当远离，临表涕零，不知所言。</div>
    <div class="bemo4">
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

        今当远离，临表涕零，不知所言。</div>
    <div class="bemo5">
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

        宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

        侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

        将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

        亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

        臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

        先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

        愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

        今当远离，临表涕零，不知所言。</div>
</body>

</html>
```

### 行内元素的盒模型

- 可以设置padding不会影响垂直方向页面的布局
- 可以设置border不会影响垂直方向页面的布局
- 可以设置margin不会影响垂直方向页面的布局

#### display 

定义：用来设置元素应该生成的框的类型

属性值

| 属性值             | 作用                                                         |
| ------------------ | ------------------------------------------------------------ |
| inline             | 默认,将元素设置为行内元素                                    |
| block              | 将元素设置为块元素，此元素前后会带有换行符                   |
| none               | 将元素不在页面中显示，隐藏                                   |
| inline-block       | 将元素设置为行内块元素（CSS2.1 新增的值）                    |
| list-item          | 将元素作为列表显示                                           |
| run-in             | 将元素根据上下文作为块级元素或内联元素显示                   |
| table              | 将元素作为块级表格来显示（类似 `<table>`），表格前后带有换行符 |
| inline-table       | 将元素作为内联表格来显示（类似 `<table>`），表格前后带有换行符 |
| table-row-group    | 将元素作为一个或多个行的分组来显示（类似 `<tbody>`）         |
| table-header-group | 将元素作为一个或多个行的分组来显示（类似 `<thead>`）         |
| table-footer-group | 将元素作为一个或多个行的分组来显示（类似 `<tfoot>`）         |
| table-row          | 将元素作为一个表格行显示（类似 `<tr>`）                      |
| table-column-group | 将元素作为一个或多个列的分组来显示（类似 `<colgroup>`）      |
| table-column       | 将元素作为一个单元格列显示（类似 `<col>`）                   |
| table-cell         | 将元素作为一个表格单元格显示（类似 `<td>` 和 `<th>`）        |
| table-caption      | 将元素作为一个表格标题显示（类似 `<caption>`）               |
| inherit            | 将规定应该从父元素继承 display 属性的值                      |

#### 常用的display 属性

##### block：块状元素

- 可容纳其他块状元素或内联元素
- 排斥其他元素与其位于同一行
- 宽度高度起作用，`block`元素可以设置宽度`width`和高度`height`，有效

##### inline：内联元素

- 位于行内，即位于块状元素或者其他内联元素内
- 只能容纳文本或者其他内联元素
- 允许其他内联元素与其位于同一行
- inline 元素的宽度高度不起作用

##### inline-block 元素

- 与`inline`元素相似的地方
  - 位于行内，即位于块状元素或者其他内联元素内
  - 允许其他内联元素与其位于同一行
- 与`block`元素相似的地方
  - 可容纳其他块状元素或内联元素
  - 宽度高度起作用
- 使用`inline-block`可以很方便解决一些问题:
  - 使元素居中
  - `inline`元素`a`/`span`设置宽高
  - 将多个块状元素放在一行

#### visibility

定义：用来设置元素的显示状态，但不会响应点击事件

属性值

- visible:默认值，元素在页面中正常显示
- hidden:元素在页面中隐藏，不显示，但占据页面位置

### 盒模型计算

默认情况下，盒子可见框的大小由内容区、内边距和边距一起决定

#### box-sizing

定义：用来设置盒子尺寸的计算方式(设置width和height的作用)

属性值

- `content-box`:默认值，宽度和高度用来设置内容区的大小
- `padding-box`:元素宽高(`width/height`)等于：`content + padding` 布局所占宽高等于：`width/height(content + padding) + border`
- `border-box`:宽度和高度用来设置整个盒子可见框的大小(这里width和height指的是内容区和内边距和边框的总和)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo{
            width:400px;
            height:400px;
            background-color:#bfc;
            padding:100px;
            border: 100px red solid;
            box-sizing:border-box;
        }
        .demo1{
            width:400px;
            height:400px;
            background-color:beige;
            padding:100px;
            border: 100px #bfc solid;
            box-sizing:content-box;
        }
    </style>
</head>
<body>
    <div class="demo"></div>
    <div class="demo1"></div>
    
</body>
</html>
```

### 圆角边框

#### border-radius

定义：用来设置圆角，设置圆角半径的大小

同时可以对单一角进行设置

- **border-top-left-radius**
- **border-top-right-radius**
- **border-bottom-left-radius**
- **border-bottom-right-radius**

可以分别指定四个角的圆角

- 四个值：左上  右上  右下  左下
- 三个值：左上  右上/左下  右上
- 两个值：左上/右下  右上/左下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius:30px;
        }
        .bemo2{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius: 25% 10%;
        }
        .bemo3{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius: 10% 30% 50% 70%;
        }
        .bemo4{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius: 10% / 50%;
        }
        .bemo5{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius: 10px 100px / 120px;
        }
        .bemo6{
            width:100px;
            height:100px;
            background-color:#Bfc;
            border-radius: 50% 20% / 10% 40%;
        }
    </style>
</head>
<body>
    <div class="bemo"></div>
    <div class="bemo2"></div>
    <div class="bemo3"></div>
    <div class="bemo4"></div>
    <div class="bemo5"></div>
    <div class="bemo6"></div>
</body>
</html>
```



### 轮廓

#### box-shadow

定义：用来设置元素的阴影效果，不会影响页面布局

属性值

- 第一个值  水平偏移量  x轴  设置阴影的水平位置  正值向右移动  负值反方向移动
- 第二个值  垂直偏移量  y轴  设置阴影的垂直位置  正值向下移动  负值反方向移动
- 第三个值  阴影的模糊半径
- 第四个值  阴影的颜色

语法

```css
/* x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: 60px -16px teal;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 10px 5px 5px black;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo{
            width:200px;
            height:200px;
            background-color:#bfc;
            box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
        }
    </style>
</head>
<body>
    <div class="demo"></div>
</body>
</html>
```

#### outline

定义：用来设置元素的轮廓线，元素轮廓的样式、颜色和宽度，用法和border一样

轮廓和边框不同点在于，轮廓不会影响可见框的大小，不会增加额外的width或者height（不会导致浏览器渲染时出现reflow或是repaint）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo1 {
            height: 400px;
            width: 400px;
            border: solid 22px red;
            /* 在一个声明中设置所有的轮廓属性*/
            outline: solid 100px #dfc;
         /* outline-style: solid ; 设置轮廓的颜色
            outline-width: 100px ; 设置轮廓的样式
            outline-color: #dfc ; 设置轮廓的宽度 */
        }
    </style>
</head>

<body>
    <div class="demo1">
    </div>

</body>
</html>
```

### 浮动

定义：使用浮动可以使一个元素向其父元素的左侧或右侧移动

#### float

定义：设置元素的浮动

##### 属性值

- none：默认值，元素不浮动
- left：元素向左浮动
- right：元素向右浮动

##### 特点

1. 会完全脱离文档流，不再占据文档流中的位置
2. 设置浮动以后元素会向父元素的左侧或右侧移动
3. 默然不会从父元素中移出
4. 向左或向右移动时，不会超过它前边的其他浮动元素
5. 如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移
6. 浮动元素不会超过它上边的浮动的兄弟元素，最多就是和它一样高
7. 行内元素浮动会自动转为块级元素

#### clear

定义：用来指定段落的左侧或右侧不允许浮动的元素，清除浮动的影响

属性值

- left:在左侧不允许浮动元素
- right:在右侧不允许浮动元素
- both:在左右两侧均不允许浮动元素
- none:默认,允许浮动元素出现在两侧
- inherit:规定应该从父元素继承 clear 属性的值

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         .demo {
            width: 800px;
            height: 500px;
            border: solid 3px darkblue;
            padding: 20px;
        }
        .demo> div {
            width: 200px;
            height: 100%;
        }

        .demo> div:nth-of-type(1) {
            background-color:blueviolet;
            float:left;
            
        }

        .demo> div:nth-of-type(2) {
            background-color: aquamarine;
            float: right;
            
        }

        .demo> div:nth-of-type(3) {
            background-color: gray;
            margin:  0  auto;
            clear: both;
        }
    </style>
</head>

<body>
    <div class="demo">
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>

</html>
```

#### 通过伪元素清除浮动的影响

随着子元素的高度的变化而变，不多增标签位置

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo {
            width: 800px;
            border: solid 3px darkblue;
        }

        .demo::after{
            content: "";
            clear: both ;
            display: block;
        }
        .demo>div {
            width: 200px;
            height: 200px;
        }

        .demo>div:nth-of-type(1) {
            background-color: blueviolet;
            float: left;

        }

        .demo>div:nth-of-type(2) {
            background-color: aquamarine;
            float: right;

        }

       
    </style>
</head>

<body>
    <div class="demo">
        <div></div>
        <div></div>
    </div>
</body>

</html>
```

#### 通过overflow触发BFC清除浮动影响

除了visible属性值外，都可触发BFCC清除浮动影响

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo {
            width: 800px;
            border: solid 3px darkblue;
            overflow: auto;
        }
        .demo>div {
            width: 200px;
            height: 200px;
        }

        .demo>div:nth-of-type(1) {
            background-color: blueviolet;
            float: left;

        }

        .demo>div:nth-of-type(2) {
            background-color: aquamarine;
            float: right;

        }

       
    </style>
</head>

<body>
    <div class="demo">
        <div></div>
        <div></div>
    </div>
</body>

</html>
```



#### 左右浮动应用场景与和边界

父元素作为浮动的载体，左浮动，父元素的内容区的水平最左边，右浮动，父元素的内容区的水平最右边，子元素在父元素内容区

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
         .demo {
            width: 800px;
            height: 250px;
            border: solid 3px darkblue;
            padding: 20px;
        }
        .demo> div {
            width: 200px;
            height: 200px;
        }

        .demo> div:nth-of-type(1) {
            background-color:blueviolet;
            float:left;
        }

        .demo> div:nth-of-type(2) {
            background-color: aquamarine;
            float: right;
        }

        .demo> div:nth-of-type(3) {
            background-color: gray;
            margin:  0  auto;
        }
    </style>
</head>

<body>
    <div class="demo">
        <div></div>
        <div></div>
        <div></div>
    </div>
</body>

</html>
```

### 高度塌陷

定义：当父元素不设置高度的时候靠子元素撑大，也就是说子元素有多高，父元素就有多高，当子元素浮动后，父元素就会高度塌陷。父元素高度塌陷后，父元素下面的元素就会向上移动，这样会导致整个页面的布局混乱

效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .bemo{
            border:#bfc 10px solid;
        }
        .bemo1{
            width:100px;
            height:100px;
            background-color:brown;
            float:left;
        }
        .bemo2{
            width:200px;
            height:200px;
            background-color:green;

        }
        .clear_fix:after{
            content:"";
            clear:both;
            display:block;
            height:0;
            overflow:hidden;
            visibility:hidden;
        }
    </style>
</head>
<body>
    <!-- 可以看到父元素高度塌陷后，下面的子元素都往上移动了，脱离了文档流 -->
    <div class="bemo clear_fix">
        <div class="bemo1"></div>
    </div>
    <div class="bemo2"></div>
</body>
</html>
```

#### 解决方案

1. 给父元素设置固定的高度，固定高度后，父元素的高度就无法自适应子元素的高度了 

   弊端：但是不能让元素高度自适应了

   ```css
   .box1 {
   		border: 10px red solid;
   		height:100px;
   		}
   
   ```

   

2. 给父元素设置overflow：hidden，解决高度塌陷并能实现高度自适应的方法（遵循BFC的显示原则）
   弊端：只要里面的内容或者元素超出父元素以外，就会被隐藏

   ```css
   .box1 {
   		border: 10px red solid;
   		overflow: hidden;
   		}
   
   ```

   #### overflow

   定义：用来控制内容溢出元素框时在对应的元素区间内添加滚动条
   
   | 属性值  | 作用                                                   |
   | ------- | ------------------------------------------------------ |
   | visible | 默认值，内容不会被修剪，会呈现在元素框之外             |
   | hidden  | 内容会被修剪，并且其余内容是不可见的                   |
   | scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容 |
   | auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容 |
   | inherit | 规定应该从父元素继承 overflow 属性的值                 |
   
   
   
3. 在浮动元素的下方添加一个空元素，并且给他设置一下属性
   弊端：会添加很多空标记，增加结构负担，产生代码冗余

   ```html
   <!DOCTYPE html>
   <html>
   	<head>
   		<meta charset="utf-8" />
   		<title></title>
   		<style type="text/css">
   			.box1 {
   				border: 10px red solid;
   			}
   			
   			.box2 {
   				width: 100px;
   				height: 100px;
   				background-color: blue;
   				float: left;
   			}
   			
   			.clear_fix{   /*空白div的属性*/
   				clear:both; /*清除两侧浮动*/
   				height:0;
   				overflow:hidden;
   			}
   		</style>
   	</head>
   	<body>
   		<div class="box1">
   			<div class="box2"></div>
   			<div class="clear_fix"></div> /*添加空白div*/
   		</div>
   	</body>
   
   ```

   

4. display:table; 给父元素添加display：table；让父元素转换元素类型跟表格的特性一样
   弊端：会改变当前元素的元素类型

   ```html
   <!DOCTYPE html>
   <html>
   	<head>
   		<meta charset="utf-8" />
   		<title></title>
   		<style type="text/css">
   			.box1 {
   				border: 10px red solid;
   				display: table; /* 改变元素类型为表格 */
   			}
   			
   			.box2 {
   				width: 100px;
   				height: 100px;
   				background-color: blue;
   				float: left;
   			}
   		</style>
   	</head>
   	<body>
   		<div class="box1">
   			<div class="box2"></div>
   		</div>
   	</body>
   
   ```

   

5. 通过after伪类元素添加一个空白的块元素，css加下列属性，**并给要清除的div加上clear_fix的类名**
   **推荐使用的方式，没有什么副作用**

   ```html
   <!DOCTYPE html>
   <html>
   	<head>
   		<meta charset="utf-8" />
   		<title></title>
   		<style type="text/css">
   			.box1 {
   				border: 10px red solid;
   			}
   
   			.box2 {
   				width: 100px;
   				height: 100px;
   				background-color: blue;
   				float: left;
   			}
   
   			.clear_fix:after { /* 要加的属性 */
   				content: ""; /* 添加内容 */
   				clear: both; /* 清楚两侧浮动 */
   				display: block; /* 转换元素类型为块元素 */
   				height: 0;
   				overflow: hidden; /* 溢出隐藏属性 */
   				visibility: hidden;/* 隐藏属性 */
   			}
   		</style>
   	</head>
   	<body>
   		<div class="box1 clear_fix">
   			<div class="box2"></div>
   		</div>
   	</body>
   
   ```

   

### BFC

定义：是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列

#### 布局规则

1. 内部的Box会在垂直方向，一个接一个地放置
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会`发生重叠`
3. 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
4. BFC的区域不会与float box重叠
5. BFC就是页面上的一个`隔离的独立容器`，`容器里面的子元素不会影响到外面的元素`。反之也如此
6. 计算BFC的高度时，`浮动元素也参与计算`

#### 创建

1. float的值不是none
2. position的值不是static或者relative
3. display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4. overflow的值不是visible

#### 作用

- 利用BFC避免margin重叠
- 自适应两栏布局
- 清除浮动

## 定位

定义：通过定位可以将元素摆放到页面的任何位置

通过position属性来设置定位

属性值

- **static:**(**静止定位**)默认值，元素只静止的没有开启定位
- **relative**:(**相对定位**)开启元素的相对定位
- **absolute**:(**绝对定位**)开启元素的绝对定位
- **fixed**:(**固定定位**)开启元素的固定定位
- **sticky**:(**粘滞定位**)开启元素的粘滞定位

### 偏移量(offset)

定义：当元素开启了定位以后，可以通过偏移量来设置元素的位置

**top**:定位元素和定位位置上边的距离
**bottom**:定位元素和定位位置下边的距离
**left**:定位元素和定位位置左边的距离
**right**:定位元素和定位位置右边的距离

#### 结论

1.定位元素垂直方向的位置由top和bottom两个属性来控制，通常情况下只会使用其一

- top值越大，定位元素越向下移动
- bottom值越大，定位元素越向上移动

2.定位元素水平方向的位置由left和right两个属性控制，通常情况下只会使用其一

- left值越大，定位元素越向右移动
- right值越大，定位元素越向左移动

### 相对定位

定义：设置为相对定位的元素框会偏移某个距离。元素仍然保持其未定位前的形状，它原本所占的空间仍保留

对一个元素进行相对定位，它将出现在它所在的位置上。然后，可以通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动

在使用相对定位时，无论是否进行移动，元素仍然占据原来的空间。因此，移动元素会导致它覆盖其它框

特点

1.元素开启相对定位以后 如果不设置偏移量(offset) 元素不会发生任何变化

2.相对定位是参照与元素在文档流中的位置进行定位的
3.相对定位会提升元素的层级
4.相对定位不会使元素脱离文档流
5.相对定位不会改变元素的性质 块还是块 行内还是行内

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .demo1 {
            width: 200px;
            height: 200px;
            background-color: aqua;
            position: relative;
        }

        .demo1:hover {
            top: 400px;
            left: 400px;
        }

        .demo2 {
            width: 200px;
            height: 200px;
            background-color: chocolate;
        }
    </style>
</head>

<body>
    <div class="demo1"></div>
    <div class="demo2"></div>
</body>

</html>
```

### 绝对定位

特点

1.开启绝对定位后 如果不设置偏移量 元素位置不会发生变化
2.开启绝对定位后 元素会从文档流中脱离
3.绝对定位会改变元素的性质，行内变成块，块的宽高被内容撑开
4.绝对定位会使元素提升层级
5.绝对定位是相对于其包含块进行定位的

**包含块(containing block)**:正常情况下包含块就是离当前元素最近的祖先块元素
绝对定位的包含块： 离它最近的开启定位的祖先元素
如果所有的祖先元素都没有开启定位
则相对于根元素进行定位
html(根元素，初始包含块)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .wnehezhiyuan{
            position: relative;
            width: 700px;
            height:700px;
            border: solid 3px cornflowerblue;
        }
        .demo1 {
            width: 200px;
            height: 200px;
            background-color: aqua;
            position: absolute;  
            
        }

        .demo1:hover {
            top: 30%;
            left:30%;
        }

        .demo2 {
            width: 300px;
            height: 300px;
            background-color: chocolate;
        }
    </style>
</head>

<body>
    <div class="wnehezhiyuan">
        <div class="demo1"></div>
        <div class="demo2"></div>
    </div>
</body>

</html>
```

### 固定定位

特点

1.固定定位也是一种绝对定位 所以固定定位的大部分特点和绝对定位一样
2.唯一不同的是 固定定位永远参照于浏览器的视口(浏览器可视窗口)进行定位
3.固定定位的元素不会随滚动条滚动上去 而是跟随可视窗口的移动而移动

### 粘滞定位

特点

1.粘滞定位的特点和相对定位基本一样
2.粘滞定位可以在元素到达某个位置时固定

绝对定位元素的布局

**水平方向布局**

等式

left+margin-left+border-left+padding-left+width+padding-left+width+padding-right+margin-right+right=包含块内容区的宽度

当开启绝对定位后：
水平方向的布局等式就要添加left和right两个值
此时规则和之前一样只是多添加了两个值
当发生过渡约束时：
如果九个值中没有auto 则自动调整right值 以使等式满足
如果有auto则自动调整auto的值以使等式满足
可以设置auto的值：margin width left right
left和right的值默认是auto 则等式不满足时，会自动调整这两个值

**垂直方向布局**

等式

top+margin-top+margin-bottom+padding—top/bottom+border-top/bottom+height+bottom=包含块的高度

### 元素堆叠（层级）

#### z-index

有关`z-index`的说明：

1. 无`z-index`或者`z-index`值相等时，堆叠顺序均由元素在文档中的先后位置决定，后出现的会在上面
2. 当向上追溯找不到含有`z-index`值的父元素的情况下，则可以视为自由的`z-index`元素
3. 自由的`z-index`元素可以与其他自由的定位元素或者父元素的同级兄弟定位元素来比较`z-index`的值，决定其堆叠顺序
4. `z-index`值只决定同一父元素中的同级子元素的堆叠顺序
5. 父元素的`z-index`值为子元素定义了堆叠顺序，即子元素依赖于父元素`z-index`值来获得页面中的堆叠顺序

- 对于开启定位的元素，可以通过z-index属性来指定元素的层级
- z-index需要一个整数作为参数，值越大的元素的层级越高
- 元素层级越高的越优先显示
- 如果元素层级一样 则优先显示靠下的
- 祖先元素层级再高，不会盖住后代元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .demo{
            width:400px;
            height:400px;
            background-color:#bfc;
            position:relative;
            z-index:4;
        }
        .demo1{
            width:400px;
            height:400px;
            background-color:#000;
            position:relative;
            z-index:3;
            bottom:200px;
            left:200px;
        }
        
    </style>
</head>
<body>
    <div class="demo"></div>
    <div class="demo1"></div>
</body>
</html>
```

## 弹性布局

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/Snipaste_2022-04-25_10-23-09.5ohkuguuqlg0.webp)

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。设为Flex布局以后，子元素的float、clear和vertical-align属性将失效

### Flex容器

#### display（必备定义弹性布局）

定义：用来定义弹性布局

| 属性值       | 作用                               |
| ------------ | ---------------------------------- |
| -webkit-flex | 在webkit内核的浏览器上使用要加前缀 |
| flex         | 将对象作为弹性伸缩盒显示           |
| inline-flex  | 将对象作为内联块级弹性伸缩盒显示   |

#### flex-direction

定义：用来规定灵活项目的方向

| 属性值         | 作用                                      |
| -------------- | ----------------------------------------- |
| row            | 默认,灵活的项目将水平显示，正如一个行一样 |
| row-reverse    | 与 row 相同，但是以相反的顺序             |
| column         | 灵活的项目将垂直显示，正如一个列一样      |
| column-reverse | 与 column 相同，但是以相反的顺序          |
| initial        | 设置该属性为它的默认值                    |
| inherit        | 从父元素继承该属性                        |

#### flex-wrap

定义：规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向

| 属性值       | 作用                                                   |
| ------------ | ------------------------------------------------------ |
| nowrap       | 默认,规定灵活的项目不拆行或不拆列                      |
| wrap         | 规定灵活的项目在必要的时候拆行或拆列                   |
| wrap-reverse | 规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序 |
| initial      | 设置该属性为它的默认值                                 |
| inherit      | 从父元素继承该属性                                     |

#### flex-flow

此属性是 **flex-direction** 和 **flex-wrap** 属性的复合属性

定义：用来设置或检索弹性盒模型对象的子元素排列方式

| 属性值         | 作用                   |
| -------------- | ---------------------- |
| flex-direction | 此属性的值都可以使用   |
| flex-wrap      | 此属性的值都可以使用   |
| initial        | 设置该属性为它的默认值 |
| inherit        | 从父元素继承该属性     |

```css
{display: flex;
    flex-flow: row wrap;}
```

#### justify-content

定义：用来设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式

| 属性值        | 作用                                                     |
| ------------- | -------------------------------------------------------- |
| flex-start    | 默认,从行首起始位置开始排列                              |
| flex-end      | 从行尾位置开始排列                                       |
| center        | 居中排列                                                 |
| space-between | 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点 |
| space-evenly  | 均匀排列每个元素，每个元素之间的间隔相等                 |
| space-around  | 均匀排列每个元素，每个元素周围分配相同的空间             |
| initial       | 设置该属性为它的默认值                                   |
| inherit       | 从父元素继承该属性                                       |

#### align-items

定义：flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式

| 属性值     | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| stretch    | 默认,元素被拉伸以适应容器（如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制）元素位于容器的中心。 |
| center     | 弹性盒子元素在该行的侧轴（纵轴）上居中放置（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度） |
| flex-start | 元素位于容器的开头,弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界 |
| flex-end   | 元素位于容器的结尾,弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界 |
| baseline   | 元素位于容器的基线上,如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐 |
| initial    | 设置该属性为它的默认值                                       |
| inherit    | 从父元素继承该属性                                           |

#### align-content

定义：用来在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）

| 属性值        | 作用                                           |
| ------------- | ---------------------------------------------- |
| stretch       | 默认,元素被拉伸以适应容器                      |
| center        | 元素位于容器的中心                             |
| flex-start    | 元素位于容器的开头                             |
| flex-end      | 元素位于容器的结尾                             |
| space-between | 元素位于各行之间留有空白的容器内               |
| space-around  | 元素位于各行之前、之间、之后都留有空白的容器内 |
| initial       | 设置该属性为它的默认值                         |
| inherit       | 从父元素继承该属性                             |

### Flex子项目

#### order

定义：用来设置或检索弹性盒模型对象的子元素出现的順序

| 属性值  | 作用                           |
| ------- | ------------------------------ |
| number  | 默认值是 0。规定灵活项目的顺序 |
| 数字    | 设置该属性为它的默认值         |
| inherit | 从父元素继承该属性             |

#### flex-grow

定义：用来设置或检索弹性盒子的扩展比率

| 属性值  | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 默认值是 0。一个数字，规定项目相对于其他灵活的项目进行扩展的量 |
| 数字    | 设置该属性为它的默认值                                       |
| inherit | 从父元素继承该属性                                           |

#### flex-shrink

定义：指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值

| 属性值  | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 默认值是 1,一个数字，规定项目将相对于其他灵活的项目进行收缩的量 |
| 数字    | 设置该属性为它的默认值                                       |
| inherit | 从父元素继承该属性                                           |

#### flex-basis

定义：用来设置或检索弹性盒伸缩基准值

| 属性值  | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| number  | 一个长度单位或者一个百分比，规定灵活项目的初始长度           |
| auto    | 默认，长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定 |
| initial | 设置该属性为它的默认值                                       |
| inherit | 从父元素继承该属性                                           |

#### align-self

定义：用来定义flex子项单独在侧轴（纵轴）方向上的对齐方式

| 属性值     | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| auto       | 默认，元素继承了它的父容器的 align-items 属性，如果没有父容器则为 "stretch" |
| stretch    | 元素被拉伸以适应容器                                         |
| center     | 元素位于容器的中心                                           |
| flex-start | 元素位于容器的开头                                           |
| flex-end   | 元素位于容器的结尾                                           |
| baseline   | 元素位于容器的基线上                                         |
| initial    | 设置该属性为它的默认值                                       |
| inherit    | 从父元素继承该属性                                           |

## 网格布局

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/Snipaste_2022-04-26_05-24-48.dibvn6w9pxs.webp)



## 字体

### 定义字体

```less
// 定义字体
@font-face {
    font-family: "hahah" ;
    src: url("https://npm.elemecdn.com/@fortawesomsdas/xxxx/xxxx/xxx.ttf") format("字体格式");
}
// 使用字体
h1{
    font-family: "hahah";
}
```

#### 字体格式

1. truetype - ttf
   - Windows 和 Mac 最常见字体
   - RAW 格式，不为任何网站优化
   - IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile Safari4.2+
2. opentype - otf
   - 原始字体格式，内置在 truetype 基础之上
   - 提供更多功能
   - Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile Safari4.2+
3. web-open-font-format - woff
   - Web 字体最佳格式
   - 是一个开放的 truetype、opentype 压缩版本
   - 支持元数据包的分离
   - IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+
4. embedded-opentype - eot
   - IE 专用字体
   - 可以从 truetype 创建此格式
   - IE4+
5. svg - svg
   - 基于 svg 渲染
   - Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+

### color

定义：用来设置字体的颜色

### font-size

定义：字体的大小

### font-family

定义：用来设置字体类型，另外使用font属性也可以定义字体类型

对于英文或其他西文字体来说，CSS提供了五类通用字体。所谓通用字体就是一种备用机制，即指定的所有字体都不可用时，能够在用户系统中找到一个类似字体进行替代显示

- serif:衬线字体
- sans-serif:无衬线字体
- cursive:草书，表现为斜字型、联笔或其他草体的特征
- fantasy:奇异字体，主要是装饰性的，但保持了字符的呈现效果，换句话就是艺术字
- monospace:等宽字体，唯一标准就是所有的字型宽度都是一样的

可以同时指定多个字体，多个字体间使用,隔开

字体生效时优先使用第一个，第一个无法使用则使用第二个，如法抛掷

### font-weight

定义：用来设置字体的粗细

属性值

- normal:默认值，不加粗，相当于取值为400
- bold:加粗，相当于取值为700
- 100~900 九个级别

### font-style

定义：用来设置字体的风格

属性值

- normal:正常
- italic:斜体

### vertical-align

定义：用来设置元素垂直对齐的方式

属性值

- baseline:默认值  基线对齐
- top:顶部对齐
- bottom:底部对齐
- middle:居中对齐

### text-decoration

定义：用来设置文本修饰

属性值

- none:默认,没有
- blink:闪烁效果
- underline:下划线
- line-through:贯穿线或称为删除线
- overline:上划线

### text-transform

定义：用来转换字母大小写的

属性值

- none:默认，定义带有小写字母和大写字母的标准文本
- capitalize:文本中的每个单词以大写字母开头
- lowercase:定义无大写字母，仅有小写字母
- uppercase:定义无小写字母，仅有大写字母
- inherit:规定应该从父元素继承text-transform属性的值

### text-shadow

定义：用来阴影文本内容

属性值

```css
        // h-shadow:必需,水平阴影的位置。允许负值,数字形式,正值向右，负值向左
        // v-shadow:必需,垂直阴影的位置。允许负值,数字形式,正值向下，负值向上
        // blur:可选,模糊的距离,模糊程度
        // color:可,阴影的颜色
        // text-shadow: h-shadow v-shadow blur color;
        text-shadow: 10px 10px 2px rgba(29, 99, 78, 0.8);
```

### text-overflow

定义：用来指定当文本溢出包含它的元素时，应该如何显示

属性值

- clip:剪切文本
- elipsis:显示省略符号 **...** 来代表被修剪的文本
- string:使用给定的字符串来代表被修剪的文本
- initial:设置为属性默认值
- inherit:从父元素继承该属性值

**text-overflow** 需要配合以下两个属性使用：

- white-space: nowrap;
- overflow: hidden;

### text-align

定义：用来规定元素中的文本的水平对齐方式

属性值

- left:把文本排列到左边。默认值
- right:把文本排列到右边
- center:把文本排列到中间
- justify:实现两端对齐文本效果
- inherit:规定应该从父元素继承 text-align 属性的值

### text-indent

定义：用来规定文本块中首行文本的缩进

属性值

- length:定义固定的缩进。默认值：0,带单位,推荐em
- %:定义基于父元素宽度的百分比的缩进
- inherit:规定应该从父元素继承 text-indent 属性的值

### letter-spacing

定义：增加或减少字符间的空白（字符间距）

参数是：定义字符间的固定空间（允许使用负值）,默认为0

### word-spacing 

定义：增加或减少字与字之间或单词之间的空白

参数是：定义单词间的固定空间（允许使用负值）

### writing-mode 

定义：用来在文本在水平或垂直方向上进行排布

属性值

- horizontal-tb：水平方向自上而下的书写方式。即左-右-上-下
- vertical-rl：垂直方向自右而左的书写方式。即 上-下-右-左
- vertical-lr：垂直方向内内容从上到下，水平方向从左到右
- sideways-rl：内容垂直方向从上到下排列
- sideways-lr：内容垂直方向从下到上排列

### white-space

定义：用来设置网页如何处理空白

属性值

- normal:正常
- nowrap:不换行
- pre:保留空白

简写

定义：用来设置字体相关的所有属性

语法

```html
font: 字体大小/行高  字体族
<!-- 行高  可以不写  -->
```



### 行高

定义：文字占有的实际高度

通过使用line-height来设置行高

推荐使用em

属性值

- 可以直接指定一个大小单位

- 可以直接指定设置一个整数，行高将会是字体的指定的倍数

  行间距 =  行高 - 字体大小 

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .demo{
              font-size:100px;
              color:#bfc;
              line-height:150px;
              text-decoration:underline red ;
          }
      </style>
  </head>
  <body>
      <div class="demo">wsy</div>
      
  </body>
  </html>
  ```

  

## 背景

定义：用来设置网页背景的属性

### background-color

定义：设置背景颜色

属性值

- 颜色单位



### background-image

定义：用来单个元素设置一个或者多个背景图像，同时可以设置图片和背景颜色，这样背景颜色会形成图片的背景颜色

属性值

- url("图片的地址")

问题

- 如果背景的图片小于元素，则背景图片会自动在元素中平铺将元素铺满
- 如果背景的图片大于元素，将会一个部分背景无法完全显示
- 如果背景图片和元素一样大，则会直接正常显示



### background-repeat

定义：用来设置背景的重复方式

属性值

- repeat:默认值，背景会沿着x轴 y轴双方向重复
- repeat-x:沿着x轴方向重复
- repeat-y:沿着y轴方向重复
- no-repeat:背景图片不重复

语法

```css
/* 单值语法 */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 双值语法: 水平horizontal | 垂直vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

background-repeat: inherit;
```

### background-position

定义：用来设置背景图片的位置

属性值

- 关键字 `center`，用来居中背景图片
- 关键字 `top`, `left`, `bottom`, `right` 中的一个。用来指定把这个项目*（原文为 item）放在哪*一个边缘。另一个维度被设置成 50%，所以这个项目（原文为 item）被放在指定边缘的中间位置

- 如果一个值是 `top` 或 `bottom`，那么另一个值不应该是 `top` 或 `bottom`
- 如果一个值是 `left` 或  `right`，那么另一个值不应该是 `left` 或 `right` 

- +50px（将图片的左边界对齐容器的中线）
- 0px（图片的左边界与容器左边界重合）
- -100px（将图片相对容器左移100px，这意味着图片中部的100px内容将出现在容器中）
- -200px（将图片相对容器左移200px，这意味着图片右部分的100px内容将出现在容器中）
- -250px（将图片相对容器左移250px，这意味着图片的右边界对齐容器的中线）



### background-clip

定义：用来设置背景的范围

属性值

- border-box:默认值，背景会出现在边框的下边
- padding-box:背景不会出现的边框，只出现在内容区和内边距
- content-box:背景只会出现在内容区



### background-origin

定义：用来设置背景图片的偏移量计算的原点

属性值

- padding-box:默认值，background-position从内边距处开始计算
- content-box:背景图片的偏移量从内容区处计算
- border-box:背景图片的变量从边框处开始计算



### background-size

定义：用来设置背景图片的大小

属性值

- contain:图片比例不变，将图片在元素中完整显示
- cover:图片比例不变，将元素铺满
- 值：第一个值表示宽度，第二个值表示高度，如果只写一个，则第二个值默认是auto
- 百分比:调整图片到指定大小。百分比是相对于包含元素的尺寸的



### background-attachment

定义：用来设置背景图片跟随元素移动

属性值

- scroll:默认值，背景图片会跟随元素移动
- fixed:背景会固定在页面中，不会随元素移动
- scroll:背景相对于元素本身固定， 而不是随着它的内容滚动

语法

```css
/* 关键 属性值 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 全局 属性值 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

### opacity

定义：指定了一个元素的**不透明度**，该属性指定了一个元素后面的背景的被覆盖程度

```css
/* 完全不透明 */
opacity: 1;
opacity: 1.0;

/* 半透明 */
opacity: 0.6;

/* 完全透明 */
opacity: 0.0;
opacity: 0;

opacity: inherit;
```

### cursor

定义：定义了鼠标指针放在一个元素边界范围内时所用的光标形状

| 属性      | 作用                                              |
| --------- | ------------------------------------------------- |
| *url*     | 需使用的自定义光标的 URL                          |
| default   | 默认光标（通常是一个箭头）                        |
| auto      | 默认，浏览器设置的光标                            |
| crosshair | 光标呈现为十字线                                  |
| pointer   | 光标呈现为指示链接的指针（一只手）                |
| move      | 此光标指示某对象可被移动                          |
| e-resize  | 此光标指示矩形框的边缘可被向右（东）移动          |
| ne-resize | 此光标指示矩形框的边缘可被向上及向右移动（北/东） |
| nw-resize | 此光标指示矩形框的边缘可被向上及向左移动（北/西） |
| n-resize  | 此光标指示矩形框的边缘可被向上（北）移动          |
| se-resize | 此光标指示矩形框的边缘可被向下及向右移动（南/东） |
| sw-resize | 此光标指示矩形框的边缘可被向下及向左移动（南/西） |
| s-resize  | 此光标指示矩形框的边缘可被向下移动（南）          |
| w-resize  | 此光标指示矩形框的边缘可被向左移动（西）          |
| text      | 此光标指示文本                                    |
| wait      | 此光标指示程序正忙（通常是一只表或沙漏）          |
| help      | 此光标指示可用的帮助（通常是一个问号或一个气球）  |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            border: solid 3px #dfc;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

### 雪碧图

定义：将小图标和背景图像合并到一张图片上，然后利用css的背景定位来显示需要显示的图片部分

优点

 ①减少加载网页图片时对服务器的请求次数；

 可以合并多数背景图片和小图标，方便在任何位置使用，这样不同位置的请求只需要调用一个图片，从而减少对服务器的请求次数，降低服务器压力，同时提高了页面的加载速度，节约服务器的流量。

 ②提高页面的加载速度

 sprite技术的其中一个好处是图片的加载时间(在有许多sprite时，单张图片的加载时间)。由所需图片拼成的一张 GIF 图片的尺寸会明显小于所有图片拼合前的大小。单张的 GIF 只有相关的一个色表，而单独分割的每一张 GIF 都有自己的一个色表，这就增加了总体的大小。因此，单独的一张 JPEG 或者 PNG sprite 在大小上非常可能比把一张图分成多张得来的图片总尺寸小。

缺点

 ①在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景；这些还好，最痛苦的是在宽屏，高分辨率的屏幕下的自适应页面，你的图片如果不够宽，很容易出现背景断裂；

 ②CSS Sprites在维护的时候比较麻烦，如果页面背景有少许改动，一般就要改这张合并的图片，无需改的地方最好不要动，这样避免改动更多的css，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动css

线性渐变

定义：颜色沿着一条直线发生变化

### linear-gradient()

定义：用来创建一个表示两种或多种颜色线性渐变的图片

线性渐变的开头，我们可以指定一个渐变的方向

- to left
- to right
- to bottom
- to top
- deg deg表示度数
- turn 表示圈

渐变可以同时指定多个颜色，多个颜色默认情况下平均分布，也可以手动指定渐变的分布情况

```css
/* 从上到下，蓝色渐变到红色 */
background-image:linear-gradient(blue, red);
 
/* 渐变轴为45度，从蓝色渐变到红色 */
background-image:linear-gradient(45deg, blue, red);
 
/* 从右下到左上、从蓝色渐变到红色 */
background-image:linear-gradient(to left top, blue, red);
 
/* 从下到上，从蓝色开始渐变、到高度40%位置是绿色渐变开始、最后以红色结束 */
background-image:linear-gradient(0deg, blue, green 40%, red);
```

### radial-gradient()

定义：将径向渐变设置为背景图像

| 属性                             | 值                     | 作用                                                         |
| -------------------------------- | ---------------------- | ------------------------------------------------------------ |
| shape                            | 固定值                 | 定义渐变的形状                                               |
|                                  | ellipse（默认）        | 指定椭圆形的径向渐变                                         |
|                                  | circle                 | 指定圆形的径向渐变                                           |
| size                             | 可能值                 | 定义渐变的尺寸                                               |
|                                  | farthest-corner (默认) | 指定径向渐变的半径长度为从圆心到离圆心最远的角               |
|                                  | closest-side           | 指定径向渐变的半径长度为从圆心到离圆心最近的边               |
|                                  | closest-corner         | 指定径向渐变的半径长度为从圆心到离圆心最近的角               |
|                                  | farthest-side          | 指定径向渐变的半径长度为从圆心到离圆心最远的边               |
| poition                          | 可能值                 | 定义渐变的位置。默认值是 "center"                            |
|                                  | center（默认）         | 设置中间为径向渐变圆心的纵坐标值                             |
|                                  | top                    | 设置顶部为径向渐变圆心的纵坐标值                             |
|                                  | bottom                 | 设置底部为径向渐变圆心的纵坐标值                             |
| *start-color*, ..., *last-color* |                        | 色标是您要在其间呈现平滑过渡的颜色。该值由一个颜色值组成，其后是一个可选的停止位置（0％ 到 100％ 之间的百分比值，或沿渐变轴的长度值），用于指定渐变的起止颜色 |

```css
 background-image: radial-gradient(closest-side at 60% 55%, blue, green, yellow, black);
 background-image: radial-gradient(farthest-side at 60% 55%, blue, green, yellow, black);
 background-image: radial-gradient(circle, red, yellow, green);
```



### repeating-linear-gradient()   

### repeating-radial-gradient() 

 定义：可以平铺的线性渐变，径向渐变

默认情况下，径向渐变的形状根据元素的形状来计算的

正方形  ---->  圆形    circle

长方形  ---->  椭圆形   ellipse

指定渐变的位置

语法

```css
ragial-gradient(大小 at  位置 , 颜色  位置 , 颜色  位置 , 颜色  位置);
```

大小

- circle:圆形
- ellipse:椭圆
- closest-side:近边
- closest-corner:近角
- farthest-side:远边
- farthest-corner:远角

位置

top  right  left  center  bottom



## 表格

组成部分

- thead(头部)
- tbody(主体)
- tfoot(底部)
- th(表示头部的单元格)

代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1" width="50%" align="center">
        <thead>
            <!-- tr表示表格中的一行，有几个tr就有几行 -->
            <tr>
                <!-- td表示一个单元格，有几个td就有几个单元格 -->
                <th>日期</th>
                <th>名字</th>
                <th>输入</th>
                <th>输出</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2021</td>
                <td>王五</td>
                <td>学习</td>
                <!-- rowspan  纵向的合并单元格 -->
                <td rowspan = "2">时间</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>学习</td>
                <td>坚持</td>
                <td>刻苦</td>
                <td colspan = "2">智慧</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

## 表单

定义：用于将本地的数据提交给远程的服务器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>
<body>
    <!-- from  属性
    action  表单要提交的服务器地址 -->
    <form action="bemo.html">
        <!-- 文本框
             注意：数据要提交到服务器中，必须要为元素指定一个name属性值 -->
             <!-- autocomplete="off" 关闭自动补全
                  readonly  将表单项设置为只读，数据会提交
                  disabled  将表单项设置为禁用，数据不会提交
                  autofocus  设置表单项自动获取焦点 -->
        <input type="text" name="username">
         <!--密码框  -->
         <input type="password"  name="password">

         <!-- 单选按钮
                 必须要指定一个value属性，value属性最终会作为用户的填写值
                 checked  可以将单选按钮设置为默认选中 -->
        <input type="radio" name="hello" value="a">
        <input type="radio" name="hello" value="b" checked>

        <!-- 多选框 -->
        <input type="checkbox" name="test" value="1">
        <input type="checkbox" name="test" value="2">
        <input type="checkbox" name="test" value="3" checked>

        <!-- 下拉列表 -->
        <select name="haha" >
            <option value="i"></option>
            <option value="ii"></option>
            <option value="iii"></option>
        </select>

        <!-- 提交按钮 -->
        <input type="submit" value="注册">

        <!-- 重置按钮 -->
        <input type="reset">

        <!-- 普通的按钮 -->
        <input type="button" value="按钮">

    </form>
    
</body>
</html>
```

## 变形动画

### 坐标系统

要使用元素变形操作需要掌握坐标轴，然后通过改变不同坐标来控制元素的变形

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/博客-文章/Snipaste_2022-04-26_07-08-15.1l3y0a7rutvk.webp)

- X轴是水平轴
- Y轴是垂直轴
- Z轴是纵深轴

### 变形操作

定义：使用 `transform` 规则控制元素的变形操作，包括控制移动、旋转、倾斜、3D转换等操作

### transform

| 属性值                        | 作用                                |
| ----------------------------- | ----------------------------------- |
| none                          | 定义不进行转换，默认                |
| translate(*x*,*y*)            | 定义 2D 转换                        |
| translate3d(*x*,*y*,*z*)      | 定义 3D 转换                        |
| translateX(*x*)               | 定义转换，只是用 X 轴的值           |
| translateY(*y*)               | 定义转换，只是用 Y 轴的值           |
| translateZ(*z*)               | 定义 3D 转换，只是用 Z 轴的值       |
| scale(*x*,*y*)                | 定义 2D 缩放转换                    |
| scale3d(*x*,*y*,*z*)          | 定义 3D 缩放转换                    |
| scaleX(*x*)                   | 通过设置 X 轴的值来定义缩放转换     |
| scaleY(*y*)                   | 通过设置 Y 轴的值来定义缩放转换     |
| scaleZ(*z*)                   | 通过设置 Z 轴的值来定义 3D 缩放转换 |
| rotate(*angle*)               | 定义 2D 旋转，在参数中规定角度      |
| rotate3d(*x*,*y*,*z*,*angle*) | 定义 3D 旋转                        |
| rotateX(*angle*)              | 定义沿着 X 轴的 3D 旋转             |
| rotateY(*angle*)              | 定义沿着 Y 轴的 3D 旋转             |
| rotateZ(*angle*)              | 定义沿着 Z 轴的 3D 旋转             |
| skew(*x-angle*,*y-angle*)     | 定义沿着 X 和 Y 轴的 2D 倾斜转换    |
| skewX(*angle*)                | 定义沿着 X 轴的 2D 倾斜转换         |
| skewY(*angle*)                | 定义沿着 Y 轴的 2D 倾斜转换         |
| perspective(*n*)              | 为 3D 转换元素定义透视视图          |

> 注意：Y轴参数不可以使用百分比

transition

transform-origin

## 过渡

定义：可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果

帧动画：通过一帧一帧的画面按照固定顺序和速度播放

### transition-property

定义：指定应用过渡属性的名称

多个属性间使用,隔开

属性值

- none:没有过渡动画
- all:所有可被动画的属性都表现出过渡动画
- 属性名称，由小写字母 `a` 到 `z`，数字 `0` 到 `9`，下划线（`_`）和破折号（`-`）。第一个非破折号字符不能是数字。同时，不能以两个破折号开头



### transition-duration

定义：指定过渡效果的持续时间

属性值

- 以秒或毫秒为单位



### transition-timing-function

定义：指定过渡的执行方式(过渡的时序函数)

属性值

- ease:默认值，慢速开始，先加速，再减速
- linear:匀速运动
- ease-in:加速运动
- ease-out:减速运动
- ease-in-out:先加速，后减速
- cubic-bezier():指定时序函数([网站](https://cubic-bezier.com))
- steps():分步执行过渡效果
- - 设置第二个值
  - end:在时间结束时执行过渡(默认值)
  - start:在时间开始时执行过渡



### transition-delay

定义：过渡效果的延迟，等待一段时间后在执行过渡

属性值

- 时间单位



### 简写

transition: 要过渡的属性  花费时间  运动曲线  何时开始;

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>过渡</title>
    <style>
        .bemo1{
            width:800px;
            height:800px;
            background-color:cornflowerblue;
            overflow:hidden;
        }
        .bemo{
            width:100px;
            height:100px;
            background-color:coral;
            transition: margin-left 4s ease-out 2s;
        }
        .bemo:hover{
            margin-left:700px;
        }
    </style>
</head>
<body>
    <div class="bemo1">
        <div class="bemo"></div>

    </div>
</body>
</html>
```

## 动画

要创建 CSS3 动画，你需要了解 @keyframes 规则

@keyframes 规则是创建动画

@keyframes 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式

```css
@keyframes name{
    /* from  表示动画的开始位置，相当于0% */
    from{

    }
    /* to  表示动画的结束位置，相当于100% */
    to{

    }
}
```

### animation-name

定义：指定应用的一系列动画，每个名称代表一个由[`@keyframes`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes)定义的动画序列，规定 @keyframes 动画的名称



### animation-duration

定义：规定动画完成一个周期所花费的秒或毫秒，默认是 0



### animation-delay

定义：规定动画何时开始，默认是 0



### animation-timing-function

定义：规定动画的速度曲线。默认是 "ease"

属性值

- linear:动画从头到尾的速度是相同的
- ease:动画以低速开始，然后加快，在结束前变慢
- ease-in:动画以低速开始
- ease-out: 动画以低速结束
- ease-in-out:动画以低速开始和结束
- steps(int,start|end):指定了时间函数中的间隔数量（步长）。有两个参数，第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。含义分别如下：
  - start：表示直接开始
  - end：默认值，表示戛然而止
- cubic-bezier(*n*,*n*,*n*,*n*):在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值



### animation-iteration-count

定义：规定动画被播放的次数，默认是 1

属性值

- 数字：执行循环次数
- infinite:无限执行



### animation-direction

定义：规定动画是否在下一周期逆向地播放，默认是 "normal"

属性值

- normal:每个循环内动画向前循环，默认设置
- alternate:动画交替反向运行，反向运行时，动画按步后退，同时，带时间功能的函数也反向
- reverse:反向运行动画，每周期结束动画由尾到头运行
- alternate-reverse:动画第一次运行时是反向的，然后下一次是正向，后面依次循环



### animation-play-state

定义：规定动画是否正在运行或暂停，，默认是"running"

属性值

- running:动画执行，这是默认值
- paused:动画暂停



### animation-fill-mode

定义：规定动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式

属性值

- none:当动画未执行时，动画将不会将任何样式应用于目标,默认值
- forwards:目标将保留由执行期间遇到的最后一个[关键帧](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)计算值。 最后一个关键帧取决于animation-direction和animation-iteration-count的值
- backwards:在应用于目标时立即应用第一个关键帧中定义的值，并在animation-delay期间保留此值。 第一个关键帧取决于animation-direction的值
- both:动画将遵循`forwards`和`backwards`的规则，从而在两个方向上扩展动画属性



关键帧





## 媒体查询

Media Queries能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果

### viewport

手机是在电脑后出现的，早期网页设置没有考虑到手机的存在。把一个电脑端访问的网页拿到手机上浏览，我们需要告诉手机该怎么做

我们不能让手机浏览器使用PC端的分辨率来展示网页，这会让高分辨率的手机上造成文字过小

使用viewport可以将手机物理分辨率合理转为浏览器分辨率

viewport是虚拟窗口，虚拟窗口大于手机的屏幕尺寸。手机端浏览器将网页放在这个大的虚拟窗口中，我们就可以通过拖动屏幕看到网页的其他部分

但有时需要控制viewport虚拟窗口的尺寸或初始的大小，比如希望viewport完全和屏幕尺寸一样宽。就需要学习viewport的知识

### 媒体设备

下面是常用媒体类型，当然主要使用的还是**screen**

| 属性值 | 作用                               |
| ------ | ---------------------------------- |
| all    | 所有媒体类型                       |
| screen | 用于电脑屏幕，平板电脑，智能手机等 |
| print  | 打印设备                           |
| speech | 应用于屏幕阅读器等发声设备         |

> 注：tty, tv, projection, handheld, braille, embossed, aural 设备类型已经被废弃

- 可以使用 link 与 style 中定义媒体查询
- 也可以使用 `@import url(screen.css) screen` 形式媒体使用的样式
- 可以用逗号分隔同时支持多个媒体设备
- 未指定媒体设备时等同于all

### style

下面是在屏幕显示与打印设备上不同的CSS效果

```html
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
    <style media="screen">
        h1 {
            font-size: 3em;
            color: blue;
        }
    </style>
    <style media="print">
        h1 {
            font-size: 8em;
            color: red;
        }

        hr {
            display: none;
        }
    </style>
</head>

<body>
    <h1>你好，陈若</h1>
    <hr>
</body>

</html>
```

### link

在 `link` 标签中通过 `media` 属性可以设置样式使用的媒体设备。

- `common.css` 没有指定媒体所以全局应用
- `screen.css` 应用在屏幕设备
- `print.css` 应用在打印设备

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
    <link rel="stylesheet" href="common.css">
    <link rel="stylesheet" href="screen.css" media="screen">
    <link rel="stylesheet" href="print.css" media="print">
</head>

<body>
    <h1>hello.world</h1>
    <hr>
</body>
```

#### **common.css**

```html
h1 {
    outline: solid 5px #e74c3c;
}
```

#### **screen.css**

```html
h1 {
    font-size: 3em;
    color: blue;
}
```

#### **print.css**

```html
h1 {
    font-size: 8em;
    color: red;
}

h2,hr {
    display: none;
}
```

### @import

使用`@import` 可以引入指定设备的样式规则。文件中引入一个样式文件，在这个文件中再引入其他媒体的样式文件

```html
<link rel="stylesheet" href="style.css">
```

#### **style.css**

```css
@import url(screen.css) screen;
@import url(print.css) print;
```

> 具体的 screen.css 与 print.css 与上面介绍的一样，在这里就不重复罗列了

### @media

可以使用 `@media` 做到更细的控制，即在一个样式表中为多个媒体设备定义样式

```html
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
    <style>
        @media screen {
            h1 {
                font-size: 3em;
                color: blue;
            }
        }

        @media print {
            h1 {
                font-size: 8em;
                color: red;
            }

            h2,
            hr {
                display: none;
            }
        }
    </style>
</head>

<body>
    <h1>你好</h1>
    <hr>
    <h2>陈若</h2>
</body>

</html>
```

### 多设备支持

可以用逗号分隔同时支持多个媒体设备

```css
@import url(screen.css) screen,print;

<link rel="stylesheet" href="screen.css" media="screen,print">
 
@media screen,print {...}
```

### 设备方向

使用 `orientation` 属性可以定义设备的方向

| 属性值    | 作用                   |
| --------- | ---------------------- |
| portrait  | 竖屏设备即高度大于宽度 |
| landscape | 横屏设备即宽度大于高度 |

下面是尺寸小于768px或是横屏时使用蓝色字体

```html
<style media="screen and (min-width: 768px),screen and (orientation:landscape)">
  body {
    color: blue;
  }
</style>
<h1>陈若</h1>
```

### 查询条件

可以使用不同条件限制使用的样式

- 条件表达式需要放在扩号中

#### 逻辑与

需要满足多个条件时才使用样式，多个条件使用`and` 连接。下例中满足以下要求才使用样式

- 横屏显示
- 宽度不能超过600px

```html
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>主页</title>
    <style>
        @media screen and (orientation: landscape) and (max-width: 600px) {
            body {
                background: #8e44ad;
            }

            h1 {
                font-size: 3em;
                color: white;
            }
        }
    </style>
</head>

<body>
    <h1>陈若</h1>
</body>

</html>
```

#### 逻辑或

多个`或` 条件查询使用逗号连接，不像其他程序中使用 `or` 语法

下面的示例中如果设备是横屏显示或宽度不超600px时就使用样式规则

```html
<html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>主页</title>
        <style>
            @media screen and (orientation: landscape),
            screen and (max-width: 600px) {
                body {
                    background: #8e44ad;
                }
    
                h1 {
                    font-size: 3em;
                    color: white;
                }
            }
        </style>
    </head>
    
    <body>
        <h1>陈若</h1>
    </body>

</html>
```

####  不应用

`not` 表示不应用样式，即所有条件**都满足**时**不应用**样式

必须将not写在查询的最前面

```html
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>主页</title>
        <style>
            @media not screen and (orientation: landscape) and (max-width:600px) {
                body {
                    background: #8e44ad;
                }
    
                h1 {
                    font-size: 3em;
                    color: white;
                }
            }
        </style>
    </head>
    
    <body>
        <h1>陈若</h1>
    </body>

</html>
```

#### only

用来排除不支持媒体查询的浏览器

- 对支持媒体查询的设备，正常调用样式，此时就当only不存在
- 对不支持媒体查询的设备不使用样式
- only 和 not 一样只能出现在媒体查询的开始

```css
@media only screen and (orientation: landscape) and (max-width: 600px) {
	...
}
```

###  查询特性

根据查询特性筛选出使用样式的设备

#### 常用特性

| 特性                              | 作用                            |
| --------------------------------- | ------------------------------- |
| orientation: landscape \|portrait | landscape是横屏，portrait是竖屏 |
| width                             | 设备宽度                        |
| height                            | 设备高度                        |
| min-width                         | 最小宽度                        |
| max-width                         | 最大宽度                        |
| min-height                        | 最小高度                        |
| max-height                        | 最大高度                        |

#### 案例

在设备宽度为568px时使用样式

```css
@media only screen and (width:568px) {
    ...     
}
```

在设备不小于 569px时使用样式

```css
@media only screen and (min-width:569px) {
	...
}
```

橫屏设备并且宽度大于569px时使用样式

```css
@media only screen and (orientation: landscape) and (min-width:569px) {
	...
}
```



## 响应式布局

定义：网页可以根据不同的设备或窗口大小展现出不同的效果

关键：媒体查询(可以为不同的设备，或设备不同状态来分别设置样式)

语法

```css
@media  属性值 {

}
```

属性值

- all:所有设备
- print:打印设备
- screen:带屏幕的设备
- speech:屏幕阅读器
-  可以使用，连续多个媒体类型，这样它们之间就是一个或的关系

可以在属性值前添加一个only，表示只有

- 作用：为了兼容老的浏览器

媒体特性

- width:视口的宽度
- height:视口的高度
- min-width:视口的最小宽度(视口大于指定宽度时生效)
- max-width:视口的最大宽度(视口小于指定宽度时生效)
- min-height:视口的最小高度(视口大于指定高度时生效)
- max-height:视口的最大高度(视口小于指定高度时生效)

