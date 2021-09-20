

title: CSS 总结 (一)

keywords: "编程"

tags: "CSS"

categories: "编程"

top_img:  "https://w.wallhaven.cc/full/1k/wallhaven-1kx39w.jpg"

cover: https://w.wallhaven.cc/full/gj/wallhaven-gjw153.jpg

background: url(https://cdn.jsdelivr.net/npm/akilar-candyassets/image/index.webp)

subtitle: 有时会重构
description: 希望你可以学到点什么


---



# 样式表和选择器

Cascading Style Sheet，层叠样式表，用于给 HTML 页面标签添加各种样式，定义网页的显示效果

CSS 将网页内容和显示样式进行分离，增强了显示功能。

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

2.内嵌样式表：在页面的 head 里采用 style 标签

3.引入外部 css 文件的方式

+ 采用 link 标签
+ 采用 import

> 两种引入方式的区别：外部样式表中不能写 link 标签，但是可以写 import 语句

### CSS 选择器

指定 CSS 作用的标签

选择器总共两大类：基本选择器和扩展选择器

常用的三种器的区别

1.标签选择器针对的是页面上的一类标签
2.ID 选择器针对特定的一个标签
3.类选择器可以被多种标签使用

### 基本选择器

#### 标签选择器

选择所有某种类型的标签，用于描述共性

所有的标签，都可以是选择器
选择的是所有，而不是一个

```css
p{ font-size:14px; }
```

p 标签内的文字都是 14px

#### ID 选择器

针对某一个特定的标签来使用，以#来定义

```css
#mytitle{ border:3px dashed green;}
```

任何的 HTML 标签都可以有 id 属性。表示这个标签的名字。

这个标签的名字，可以任取，但是：

只能有字母、数字、下划线
必须以字母开头
不能和标签同名
HTML 页面不能出现相同的 ID
一个标签可以被多个 css 选择器选择，共同作用

#### 类选择器

用.来定义某一个类的标签

```css
.eat{
font-size: 18px;
font-weight: 900;
}
```

不要试图用一个类写完所有标签的样式，多写几个类
每一个类尽可能小，有公共的概念，让更多的标签使用
到底用 id 还是 class？
尽可能用 class
因为 id 是给 js 使用的，js 通过 id 来获取标签，所以 css 层面尽可能不用 id
另一方面，我们认为一个有 id 的元素，有动态效果
类上样式，id 上行为
通用选择器
*, 匹配任何标签，效率低，不使用

### CSS 的高级选择器

#### 后代选择器

如果选择的是E F，表示所有属于 E 元素的后代的 F 元素

```css
div p{
font-size: 19px;
}
div span{
font-family:微软雅黑;
font_size: 3em;
}
<div> <p> wtf </p> </div>
<div> <span> omg </span> </div>
```

#### 交集选择器

两个选择器紧密相连，以标签名开头

如果后一个是类选择器，就写成div.food，如果后一个是 id 选择器，就写成div#food

```css
div.food{
font-family: 微软雅黑;
font-size: 3em;
}
```

##### 并集选择器

简单来说就是多选

```css
p,
h1,
#mytitle,
.one {
    color: red;
}
```

#### CSS3 的一些选择器

##### 子代选择器

>，只有是儿子的时候才能被选择

```css
div > p {
color: red;
}
```

只能选择

```css
<div>
 <p>我是div的儿子</p>
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

