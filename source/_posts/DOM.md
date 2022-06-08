title: DOM

date: 2022-03-20 7:58:00

keywords: "javascript"

tags: 

- 学习笔记
- 前端
- javascript

categories: "javascript"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/相册-动漫/wallhaven-e7w6y8.webp

---

## 什么是 DOM

文档对象模型 (`DOM`) 是`HTML`和`XML`文档的编程接口
`DOM`将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合

尽管通常会使用`JavaScript`来访问`DOM`， 但它并不是`JavaScript`的一部分，它也可以被其他语言使用

### DOM 解析

我们常见的`HTML`元素，在浏览器中会被解析成节点

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-01-17_07-37-16.webp)

## 	DOM节点

### 节点对象

JS中操作DOM的内容称为**节点对象**（node)，即然是对象就包括操作node的属性和方法

- 包括12种类型的节点对象
- 常用了节点为document、标签元素节点、文本节点、注释节点
- 节点均继承自Node类型，所以拥有相同的属性或方法
- document是DOM操作的起始节点

```html
<body id="chenruo">
</body>
<script>
    // document节点 noteType为9
    console.log(document.nodeType)

    // 第一个子节点为<!DOCTYPE html>，且nodetype为10
    console.log(document.childNodes.item(0).nodeType)

    // body 是标签节点 nodeType为1
    console.log(document.body.nodeType)

    // body的属性节点 nodeType 为2
    console.log(document.body.attributes[0].nodeType)

    // body的第一个节点为文本节点，nodeType为3
    console.log(document.body.childNodes.item(0).nodeType)

    // body的第二个节点为注释，nodeType类型为8
    console.log(document.body.childNodes[1].nodeType)
</script>
```

常用类型：

- **文档节点**：整个HTML文档

- **元素节点**：HTML的标签

- **属性节点**：标签的属性

- **文本节点**:标签中的文本内容，也就是文字

  

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-01-17_07-42-27.webp)

### 节点属性

| -        | nodeName  | nodeType | nodeValue |
| -------- | --------- | -------- | --------- |
| 文档节点 | #document | 9        | null      |
| 元素节点 | 标签名    | 1        | null      |
| 属性节点 | 属性名    | 2        | 属性值    |
| 文本节点 | #text     | 3        | 文本内容  |

### 文档节点

定义：代表的是整个HTML文档，网页中的所有节点都是它的子节点

document对象作为window对象的属性存在，可以直接使用

通过对象可以在整个文档访问内查找节点对象，并可以通过对象创建各种节点对象

#### 常用节点

JS 提供了访问常用节点的 api

| 方法                     | 说明                        |
| ------------------------ | --------------------------- |
| document                 | document是DOM操作的起始节点 |
| document.documentElement | 文档节点即html标签节点      |
| document.body            | body标签节点                |
| document.head            | head标签节点                |
| document.links           | 超链接集合                  |
| document.anchors         | 所有锚点集合                |
| document.forms           | form表单集合                |
| document.images          | 图片集合                    |

#### document

原型链中也包含Node，所以可以使用有关节点操作的方法如nodeType/NodeName等

使用title获取和设置文档标题

```js
    //获取文档标题
    console.log(document.title)
    //设置文档标签
    document.title = "我是迪迦奥特曼"
    //输出修改的文档标题内容
    console.log(document.title)
```

获取当前URL

```js
    console.log(document.URL)
```

获取域名

```js
    console.log(document.domain)
```

获取来源地址

```js
    console.log(document.referrer)
```

#### ID

可以直接使用 ID 获取元素（这是非标准操作，对浏览器有挑剔）

```js
<body id="chenruo">
    <script>
        // 直接通过 ID 获取元素（非标准操作）
        chenruo.onload = function () {
            alert("你好")
        }
    </script>
</body>
```

####  links

获取所有a标签

```html
    <a href="https://chen-ruo.top">你好</a>
    <a href="script:;">hahhah</a>
    <script>
        let demo = document.links
        console.dir(demo)
    </script>
```

####  anchors

获取锚点集合后能过 锚点 name 属性获取元素

```html
<body>
    <a href="https://chen-ruo.top" name = "你好">你好</a>
    <a href="script:;" name="你好呀">hahhah</a>
    <script>
        // 通过锚点获取元素
        let demo = document.anchors.你好
        console.dir(demo)
    </script>
</body>
```

### 元素节点

浏览器会将页面中的所有的标签都转换为一个元素节点，可以通过document的方法来获取元素节点

例如：

```js
var bth = document.getElementById("xxx")  //根据id属性值获取一个元素节点的对象
```

### 属性节点

定义：标签中的一个一个属性，并不是元素节点的子节点，而是元素节点的一部分，可以通过元素节点获取指定的属性节点

例如：

```js
var bth = 元素节点.getAttributeNode("属性名")  //根据元素节点的属性名获取一个属性节点的对象
```

### 文本节点

定义：HTML标签以外的文本内容任意非HTML的文本都是文本节点，一般作为元素节点的子节点存在，获取文本节点时，一般先要获取元素节点，在通过元素节点获取文本节点

例如：

```js
var bth = 元素节点.firstChild ;   //获取元素节点的第一个子节点，通常为文本节点
```

### 节点属性

#### nodeType

nodeType指以数值返回节点类型

| **nodeType** | **说明**     |
| ------------ | ------------ |
| 1            | 元素节点     |
| 2            | 属性节点     |
| 3            | 文本节点     |
| 8            | 注释节点     |
| 9            | document对象 |



### 节点集合

Nodelist与HTMLCollection都是包含多个节点标签的集合，大部分功能也是相同的

- getElementsBy...等方法返回的是HTMLCollection
- querySelectorAll 返回的是 NodeList
- NodeList节点列表是动态的，即内容添加后会动态更新

```html
<body>
    <h1>你好呀</h1>
    <h1>陈若</h1>
    <script>
        //结果为NodeList
        console.log(document.querySelectorAll("h1"))
        //结果为HTMLCollection
        console.log(document.getElementsByTagName("h1"))
    </script>
</body>
```

#### length

Nodelist与HTMLCollection都包含length属性，记录了节点元素的数量

```html
<body>
    <h1>你好呀</h1>
    <h1>陈若</h1>
    <script>
        let demo = document.getElementsByTagName("h1")
        console.log(demo.length) //2
        for (let i = 0; i < demo.length; i++) {
            console.log(demo[0])
        }
    </script>
</body>
```

#### item()方法

Nodelist与HTMLCollection提供了item()方法来根据索引获取元素

```html
<body>
    <h1>你好呀</h1>
    <h1>陈若</h1>
    <script>
        let demo = document.getElementsByTagName("h1")
        console.log(demo.item(0)) 
        //使用数组索引获取更方便
        console.log(demo[0])
    </script>
</body>
```

#### namedItem()方法

HTMLCollection具有namedItem方法可以按name或id属性来获取元素

```html
<body>
    <h1 id="demo1">你好呀</h1>
    <h1 name="demo2">陈若</h1>
    <script>
        let demo = document.getElementsByTagName("h1")
        console.log(demo.namedItem("demo1"))
        console.log(demo.namedItem("demo2"))
        //可以使用数组或属性方式获取
        console.log(demo.demo1)
        console.log(demo[1])
    </script>
</body>
```

#### 动态与静态

通过 getElementsByTagname 等getElementsBy... 函数获取的Nodelist与HTMLCollection集合是动态的，即有元素添加或移动操作将实时反映最新状态

- 使用getElement...返回的都是动态的集合
- 使用querySelectorAll返回的是静态集合

[推荐视频](https://www.bilibili.com/video/BV1aT4y1T7Zx?share_source=copy_web)

##### 动态特性

通过按钮动态添加元素后，获取的元素集合是动态的，而不是上次获取的固定快照

```html
<body>
    <h1>你好</h1>
    <h1>陈若</h1>
    <button id="add">添加元素</button>

    <script>
        let elements = document.getElementsByTagName('h1')
        console.log(elements)
        let button = document.querySelector('#add')
        button.addEventListener('click', () => {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>凯撒</h1>')
            console.log(elements)
        })
    </script>
</body>
```

##### 静态特性

如果需要保存静态集合，则需要对集合进行复制

```html
<body>
    <div>nihao</div>
    <div>hahhah</div>

    <script>
        const nodes = document.getElementsByTagName('div')
        const clone = Array.prototype.slice.call(nodes)
        console.log(nodes.length);//2
        document.body.appendChild(document.createElement('div'))
        console.log(nodes.length);//3
        console.log(clone.length);//2
    </script>
</body>
```

### 遍历节点

#### forOf

Nodelist与HTMLCollection是**类数组**的可迭代对象所以可以使用for...of进行遍历

```html
<body>
    <div>你好呀</div>
    <div>我不好</div>
    <div>哦不</div>
    <script>
        let divs = document.getElementsByName("div")
        for (let item of divs) {
            console.log(item)
        }
    </script>
</body>
```

#### forEach

Nodelist节点列表也可以使用forEach来进行遍历，但HTMLCollection则不可以

```html
<body>
    <div>你好呀</div>
    <div>我不好</div>
    <div>哦不</div>
    <script>
        let divs =document.querySelectorAll("div")
        divs.forEach((divs,key)=>{
            console.log(divs)
        })
    </script>
</body>
```

#### call/apply

节点集合对象原型中不存在map方法，但可以借用Array的原型map方法实现遍历

```html
<body>
    <div>你好呀</div>
    <div>我不好</div>
    <div>哦不</div>
    <script>
        let divs = document.querySelectorAll("div")
        Array.prototype.map.call(divs, (divs, index) => {
            console.log(divs,index)
        })
    </script>
</body>
```

####  Array.from

Array.from用于将类数组转为组件，并提供第二个迭代函数。所以可以借用Array.from实现遍历

```html
<body>
    <div>你好呀</div>
    <div>我不好</div>
    <div>哦不</div>
    <script>
        let divs = document.querySelectorAll("div")
        Array.from(divs,(divs,index)=>{
            console.log(divs,index)
        })
    </script>
</body>
```

### 标签关系 

使用childNodes等获取的节点包括文本与注释，但这不是我们常用的，为此系统也提供了只操作元素的关系方法

处理标签关系的常用 API

| 节点属性               | 说明                                             |
| ---------------------- | ------------------------------------------------ |
| parentElement          | 获取父元素                                       |
| children               | 获取所有子元素                                   |
| childElementCount      | 子标签元素的数量                                 |
| firstElementChild      | 第一个子标签                                     |
| lastElementChild       | 最后一个子标签                                   |
| previousElementSibling | 上一个兄弟标签                                   |
| nextElementSibling     | 下一个兄弟标签                                   |
| contains               | 返回布尔值，判断传入的节点是否为该节点的后代节点 |

```html
<body>
    <div id="zhu">
        <div id="demo1"></div>
        <div id="demo2"></div>
        <div id="demo3"></div>
    </div>
    <script>
        let a = document.getElementById("demo1").parentElement
        console.log(a)//获取父元素
        let b = document.getElementById("zhu").children
        console.log(b)//所有子元素 
        let c = document.getElementById("zhu").childElementCount //3
        console.log(c)//子标签元素的数量
        let d = document.getElementById("zhu").firstElementChild
        console.log(d)//第一个子标签
        let e = document.getElementById("zhu").lastElementChild
        console.log(d)//最后一个子标签
        let f = document.getElementById("demo2").previousElementSibling
        console.log(f)//上一个兄弟标签
        let j = document.getElementById("demo2").nextElementSibling
        console.log(j)//下一个兄弟标签
    </script>
</body>
```

```html
<body>
    <div id="app">
        <div class="demo1" data="hd">ha</div>
        <div class="demo2">chenruo</div>
        <div class="demo3">陈若</div>
    </div>
    <script>
        const node = document.querySelector(`#app`)
        console.log(node.childNodes) //所有子节点
        console.log(node.firstChild) //第一个子节点是文本节点
        console.log(node.lastChild) //最后一个子节点也是文本节点
    </script>
</body>
```

document是顶级节点html标签的父节点是document

```html
<script>
  console.log(document.documentElement.parentNode === document)
</script>
```

## DOM文档操作

文档对象代表您的网页,，如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始

一些常用的 API 如下：

- `document.getElementById(id)`：根据`id`获取元素
- `document.getElementsByTagName(name)`：根据`tag`获取元素
- `document.createElement(name)`：创建元素
- `parentNode.appendChild(node)`：添加子元素
- `element.innerHTML`：设置/获取元素内容
- `element.styles`：设置/获取元素样式
- `element.setAttribute()`：设置元素属性值
- `element.getAttribute()`：获取元素属性值
- `element.addEventListener()`：添加事件绑定

通常什么时候会用呢，最常见的便是列表的维护，包括增加新的选项、删除某个、修改某个等等

### 查找HTML元素

| 方法                                  | 作用                        |
| ------------------------------------- | --------------------------- |
| document.getElementById(id)           | 运用元素id来查找元素        |
| document.getElementsByTagName(name)   | 运用标签名来查找元素        |
| document.getElementsByClassName(name) | 运用类名来查找元素          |
| document.querySelelctor(CSS选择器)    | 运用CSS选择器来选择一个元素 |
| document.querySelectorAll(CSS选择器)  | 运用CSS选择器来选择多个元素 |

### 标签获取

#### getElementById

使用ID选择是非常方便的选择具有ID值的节点元素，但注意ID应该是唯一的,只能通过document对象上使用

拥有ID的元素可做为window的属性进行访问,如果声明了变量这种访问方式将无效

```html
<body>
    <div id="zhu">
    </div>
    <div id="demo"></div>
    <script>
        let demo1 = document.getElementById("zhu")
        console.log(demo1)
        // let demo = "你好"
        // console.log(demo.innerHTHL)//声明了变量这种访问方式将无效,声明了变量这种访问方式将无效
        console.log(demo.innerHTML)
    </script>
</body>
```

#### getElementsByName

使用getElementByName获取设置了name属性的元素，虽然在div等元素上同样有效，但一般用来对表单元素进行操作时使用

- 返回NodeList节点列表对象
- NodeList顺序为元素在文档中的顺序
- 需要在 document 对象上使用

```html
<body>
    <div name="demo1">你好啊</div>
    <div name="demo2">匆匆从</div>
    <script>
        let demo1 = document.getElementsByName("demo1")
        console.log(demo1)
        let demo2 = document.getElementsByName("demo2")
        console.log(demo2)
    </script>
</body>
```

#### getElementsByTagName

使用getElementsByTagName用于按标签名获取元素

- 返回HTMLCollection节点列表对象
- 是不区分大小的获取

```html
<body>
    <div name="demo1">你好啊</div>
    <div name="demo2">匆匆从</div>
    <script>
        let divs = document.getElementsByTagName("div")
        console.log(divs.length)
    </script>
</body>
```

**通配符**

可以使用通配符 ***** 获取所有元素

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
    <div name="demo1">你好啊</div>
    <div name="demo2">匆匆从</div>
    <h1>hello world</h1>
    <script>
        let divs = document.getElementsByTagName("*")
        console.log(divs)
    </script>
</body>

</html>
```

某个元素也可以使用通配置符 ***** 获取后代元素，下面获取 id为demo的所有后代元素

```html
<body>
    <div id="demo">
        <div>nihao</div>
        <div>aaa</div>
        <div>aaaaa</div>
    </div>
    <script>
        let divs = document.getElementsByTagName("*").namedItem("demo").getElementsByTagName("*")
        console.log(divs)
    </script>
</body>
```

#### getElementsByClassName

getElementsByClassName用于按class样式属性值获取元素集合

- 设置多个值时顺序无关，指包含这些class属性的元素

```html
<body>
    <div class="demo"></div>
    <div class="demo demo2"></div>
    <div class="demo demo3 demo2"></div>
    <script>
        let demo = document.getElementsByClassName("demo")
        console.log(demo)
        let demo1 =document.getElementsByClassName("demo demo2")
        console.log(demo1)
    </script>
</body>
```

### 样式选择器

#### querySelectorAll

使用querySelectorAll根据CSS选择器获取Nodelist节点列表

- 获取的NodeList节点列表是静态的，添加或删除元素后不变

##### 获取id:app下的所有div元素

```html
<body>
    <div id="app">
        <div>demo1</div>
        <div>demo2</div>
        <div>demo3</div>
    </div>
    <script>
        let app = document.getElementById("app")
        let demo = app.querySelectorAll("div")
        console.log(demo)
    </script>
</body>
```

##### 获取id为app元素的，class 为demo1的后代元素

```html
<body>
    <div id="app">
        <div class="demo1">demo1</div>
        <div>demo2</div>
        <div>demo3</div>
    </div>
    <script>
        let demo = document.querySelectorAll("#app .demo1")
        console.log(demo)
    </script>
</body>
```

##### 根据元素属性值获取元素集合

```html
<body>
    <div id="app">
        <div class="demo1" data="demo1o">demo1</div>
        <div class="demo1 demo2" data="demo1o">demo2</div>
        <div>demo3</div>
    </div>
    <script>
        let demo = document.querySelectorAll(`#app .demo1[data='demo1o']`)
        console.log(demo.length) //2
    </script>
</body>
```

##### 通过样式选择器查找元素

```html
<body>
    <div id="app">
        <div class="demo1" data="demo1o">demo1</div>
        <div class="demo1 demo2" data="demo1o">demo2</div>
        <div>demo3</div>
    </div>
    <script>
        //查找最后一个 div 子元素
        let demo = document.querySelector(`#app div:last-of-type`)
        console.log(demo)
        //查找第二个 div 元素
        let demo2 = document.querySelector(`#app div:nth-of-type(2)`).innerHTML
        console.log(demo2)
    </script>
</body>
```

#### querySelector

querySelector使用CSS选择器获取一个元素，下面是根据属性获取单个元素

```html
<body>
    <div id="app">
        <div class="demo1" data="demo1o">demo1</div>
        <div class="demo1 demo2" data="demo1o">demo2</div>
        <div>demo3</div>
    </div>
    <script>
        //查找最后一个 div 子元素
        let demo = document.querySelector(`#app div:last-of-type`)
        console.log(demo)
    </script>
</body>
```

#### closest

查找最近的符合选择器的祖先元素（包括自身）

```html
<body>
    <div class="demo">再见
        <div  id="a">
            <div class="demo">你好</div>
        </div>
    </div>
    <script>
        let demo = document.getElementById("a")
        let shi = demo.closest(".demo")
        console.log(shi.innerHTML)
    </script>
</body>
```

例子

1.问题：**创建一个按钮，通过id获取按钮节点对象**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="idor"> 这是一个按钮 </button>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var idor = document.getElementById("idor");
        console.log(idor);
    </script>
</body>
</html>
```

2.问题：**创建一个按钮，通过标签名获取按钮节点对象数组**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button> 这是一个按钮 </button>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var lie = document.getElementsByTagName("button");
        console.log(lie);
    </script>
</body>
</html>
```

 3.问题：**创建一个按钮，通过类名获取按钮节点对象数组**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class = "kind"> 这是一个按钮 </button>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var lie = document.getElementsByClassName("kind");
        console.log(lie);
    </script>
</body>
</html>
```

4.问题：**创建一个按钮，通过CSS选择器选择该按钮**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class = "kind"> 这是一个按钮 </button>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var lie = document.querySelector(".kind");
        console.log(lie);
    </script>
</body>
</html>
```

5.问题：**创建一个无序列表，通过CSS选择器选择该列表的所有li**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul class = "kind">
        <li>我是列表一</li>
        <li>我是列表二</li>
        <li>我是列表三</li>
    </ul>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var lie = document.querySelectorAll(".kind li") ;
        console.log(lie);
    </script>
</body>
</html>
```

### 获取HTML的值

| 方法                             | 作用                     |
| -------------------------------- | ------------------------ |
| 元素节点.innerText               | 获取HTML元素的innerText  |
| 元素节点.innerHTML               | 获取HTML元素的innerHTML  |
| 元素节点 .属性                   | 获取HTML元素的属性值     |
| 元素节点.getAttribute(attribute) | 获取HTML元素的属性值     |
| 元素节点.style.样式              | 获取HTML元素的行内样式值 |

方法实践

1.问题：**创建一个按钮，然后获取按钮的文本内容**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id = "idor">点击继续使用</button>
    <script> // 因为javascript是由上下文执行的，所以写在此处
        var huo = document.getElementById("idor");
        console.log(huo.innerText);
    </script>
</body>
</html>
```

2.问题：**创建一个div，然后在div中插入一个h1标题，获取div中的html代码**

```JS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id = "box">
        <h1>这是一级标题</h1>
    </div>
    <script> // 因为javascript是由上下文执行的，所以写在此处
    var box = document.getElementById("box");
    console.log(box.innerHTML);
    </script>
</body>
</html>
```

3,问题：**创建一个超链接，默认为空，设置href属性为`https://chen-ruo.top` ，使用JavaScript代码读取href属性**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a id = "idor" href="https://chen-ruo.top">陈若的博客网站，分享学习心得</a>
    <script> // 因为javascript是由上下文执行的，所以写在此处
    var idor = document.getElementById("idor");
    console.log(idor.href);
    </script>
</body>
</html>
```

4.问题：**创建一个正方形div，默认颜色为红色，使用JavaScript代码获取div的宽度**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
<div id = "home" style= "width:100px;height:100px;background:red ;"></div>
    <!-- <style>
        #home{
            width:100px;
            height:100px;
            background-color:red ;
        }
    </style> -->
    <script>
        var home = document.getElementById("home");
        console.log(home.style.width);
    </script>
</body>
</html>
```

值得注意的是，如果CSS的样式名中含有-这样的符号，这种名称在JS中是不合法的比如background-color，需要将样式名修改为**驼峰命名法**，去掉-，然后将-后的字母大写，我们通过style属性设置的样式都是行内样式有较高的优先级，通过JS修改的样式往往会立即显示，但是可以在样式中写**!important**，则可以将样式的优先级调到最高，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important

我们可以通过style属性来设置和读取内联样式，但无法读取样式表中的样式，如果想要读取当前正在应用的样式属性可以使用**元素.currentStyle.样式名**来获取元素的当前显示的样式，如果当前元素没有设置该样式，则获取它的默认值，但是**currentStyle**只有IE浏览器支持，其它的浏览器都不支持，在其它浏览器中可以使用**getComputedStyle()**这个方法来获取元素当前的样式，这个方法是window的方法，可以直接使用，但是需要两个参数：

第一个参数：要获取样式的元素
第二个参数：可以传递一个伪元素，一般都传null
该方法会返回一个对象，对象中封装了当前元素对应的样式，可以通过 **对象.样式名** 来读取样式，如果获取的样式没有设置，则会获取到真实的值，而不是默认值，比如：没有设置width，它不会获取到auto，而是一个长度，但是该方法不支持IE8及以下的浏览器，所以通过**currentStyle**和**getComputedStyle()**读取到的样式都是只读的，不能修改，要修改就必须通过style属性，但我们可以写一个适配各个浏览器的读取元素样式的方法啊

理论存在，实践开始

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>标题</title>
</head>
<body>
    <div id="idor" style="width:200px;">理论存在，实践开始</div>
    <style>
        #idor{
            width:100px;   /*优先级*/
            height:500px;
            background-color:coral;
        }
    </style>
    <script>
        // 通用的获取元素样式的函数
        function home (obj , name)
        {
            if(window.getComputedStyle)  //正常浏览器
            {
                return getComputedStyle(obj ,null)[name];
            }
            else  //针对IE8
            {   
                return obj.currentstyle[name];
            }
        }

        var shi = document.getElementById("idor");

        console.log(home(shi,"width"));
        console.log(home(shi,"height"));
        console.log(home(shi,"background-color"));
    </script>
</body>
</html>
```

### 改变HTML的值

| 方法                                   | 作用                     |
| -------------------------------------- | ------------------------ |
| 元素节点.innerText=new  text  content  | 改变元素的文本内容       |
| 元素节点.innerHTML=new  html  constent | 改变元素的inner  HTML    |
| 元素节点.属性=new  value               | 改变HTML元素的属性值     |
| 元素节点.setAttribute(attribute,value) | 改变HTML元素的属性值     |
| 元素节点.style.样式=new  style         | 改变HTML元素的行内样式值 |

方法实例

1.问题：**创建一个按钮，然后改变按钮的文本内容**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id = "idor">一个按钮</button>
    <script>
        var idor = document.getElementById("idor");
        idor.innerText="这是一个修改的按钮";
        console.log(idor);
    </script>
</body>
</html>
```

2.问题：**创建一个div，然后在div中插入一个h1标题**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id ="idor"></div>
    <script>
        var home = document.getElementById("idor");
        home.innerHTML="<h1>这是一个大标题</h1>";
        console.log(home);
    </script>
</body>
</html>
```

3.问题：**创建一个超链接，默认为空，使用JavaScript代码设置href属性为`https://chen-ruo.top` **

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="" id = "idor">一个菜鸡的网站</a>
    <script>
        var home = document.getElementById("idor");
        home.href="https://chen-ruo.top";
        console.log(home);
    </script>
</body>
</html>
```

4.问题：**创建一个正方形div，默认颜色为红色，使用JavaScript代码改变为绿色**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="idor" style="width:100px;  height:100px;  background:red;"></div>
    <script>
        var home = document.getElementById("idor");
        home.style.background="green";
        console.log(home);
    </script>
</body>
</html>
```

如果我们想在指定的地方插入内容可以使用**insertAdjacentHTML**和**insertAdjacentText**方法、

语法

```js
object.insertAdjacentHTML(where,html);
object.insertAdjacentText(where,text);
```

参数

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-01-23_16-54-29.3zxl3dc31v80.webp)

where:

- beforeBegin:插入到开始标签的前面
- beforeEnd:插入到结束标签的前面
- afterBegin:插入到开始标签的后面
- afterEnd:插入到结束标签的后面

html:一段html代码

text:一段文本内容

注意事项：

1.这两个方法必须等文档加载好后才能执行，否则会出错
2.**insertAdjacentText**只能插入普通文本，insertAdjacentHTML插入html代码
3.使用insertAdjacentHTML方法插入script脚本文件时，必须在script元素上定义**defer属性**
4.使用insertAdjacentHTML方法插入html代码后，页面上的元素集合将发生变化
5.insertAdjacentHTML方法不适用于单个的空的元素标签(如img，input等)，有其局限性

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id ="idor"> 好好学习，天天向上</div>
    <script>
        var home = document.getElementById("idor");
        home.insertAdjacentHTML("beforebegin","<p>你好，我是未来人</p>");
        console.log(home);
    </script>
</body>
</html>
```

### 修改HTML元素

| 方法                                | 作用                             |
| ----------------------------------- | -------------------------------- |
| document.createElement(elelment)    | 创建HTML元素节点                 |
| document.createAttribute(attribute) | 创建HTML属性节点                 |
| document.createTextNode(test)       | 创建HTML文本节点                 |
| 元素节点.removeChild(element)       | 删除HTML元素                     |
| 元素节点.appendChild(element)       | 添加HTML元素                     |
| 元素节点.replaceChild(element)      | 替换HTML元素                     |
| 元素节点.insertBefore(element)      | 在指定的子节点前面插入新的子节点 |

方法实例

1.问题：**创建一个ul列表，然后在该列表中追加4个li标签**

{% tabs test4 %}
<!-- tab 第一种方法 -->

```js
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
        var ulor = document.createElement("ul");

        var li1 = document.createElement("li");
        li1.innerHTML = "这是列表1";
        ulor.appendChild(li1);

        var li2 = document.createElement("li");
        li2.innerHTML = "这是列表2";
        ulor.appendChild(li2);

        var li3 = document.createElement("li");
        li3.innerHTML = "这是列表3";
        ulor.appendChild(li3);

        var li4 = document.createElement("li");
        li4.innerHTML = "这是列表4";
        ulor.appendChild(li4);

        document.getElementsByTagName("body")[0].appendChild(ulor);

    </script>
    
</body>
</html>
```

<!-- endtab -->

<!-- tab 第二种方法-->

```js
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
        var ulor = document.createElement("ul");

        var li1 = document.createElement("li");
        var text1 = document.createTextNode("这是列表1");
        li1.appendChild(text1);
        ulor.appendChild(li1);

        var li2 = document.createElement("li");
        var text2 = document.createTextNode("这是列表2");
        li2.appendChild(text2);
        ulor.appendChild(li2);

        var li3 = document.createElement("li");
        var text3 = document.createTextNode("这是列表3");
        li3.appendChild(text3);
        ulor.appendChild(li3);

        var li4 = document.createElement("li");
        var text4 = document.createTextNode("这是列表4");
        li4.appendChild(text4);
        ulor.appendChild(li4);

        document.getElementsByTagName("body")[0].appendChild(ulor);

    </script>
    
</body>
</html>
```

<!-- endtab -->

<!-- tab 第三种方法-->

```js
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
        var ulor = document.createElement("ul");

        var li1 = "<li>列表1</li>";
        var li2 = "<li>列表2</li>";
        var li3 = "<li>列表3</li>";
        var li4 = "<li>列表4</li>";
        ulor.innerHTML = li1+li2+li3+li4 ;

        document.getElementsByTagName("body")[0].appendChild(ulor);

    </script>
    
</body>
</html>
```

<!-- endtab -->
{% endtabs %}

2.问题：**创建一个ul列表，里边有四个li子元素，删除第一个li，替换最后一个li**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id = "ul1">
        <li id = "li1">列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li id = "li4">列表4</li>
    </ul>
    <script>
        var ul1 = document.getElementById("ul1");
        var li1 = document.getElementById("li1");
        var li4 = document.getElementById("li4");

        //删除第一个列表
        ul1.removeChild(li1);

        var end = document.createElement("li");
        end.innerHTML = "替换第四列表";
        ul1.replaceChild(end,li4);

    </script>
</body>
</html>
```

3.问题：**创建一个ul列表，里边有四个li子元素，在第一个li前边插入一个id为zero的li**

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul id = "ul1">
        <li id = "li1">列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li >列表4</li>
    </ul>
    <script>
        var ul1 = document.getElementById("ul1");
        var li1 = document.getElementById("li1");

        var zero = document.createElement("li");
        zero.innerHTML = "列表0新增";

        ul1.insertBefore(zero , li1);
    </script>
</body>
</html>
```

### 查找HTML父子

| 方法                            | 作用                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| 元素节点.parentNode             | 返回元素的父节点                                             |
| 元素节点.parentElement          | 返回元素的父元素                                             |
| 元素节点.childNodes             | 返回元素的一个子节点的数组(包含空白的文本节点)               |
| 元素节点.children               | 返回元素的一个子元素的集合(不包含空白的文本节点)             |
| 元素节点.firstChild             | 返回元素的第一个子节点(包含空白的文本节点)                   |
| 元素节点.firstElementChild      | 返回元素的第一个子元素(不包含空白的文本节点)                 |
| 元素节点.lastChild              | 返回元素的最后一个子节点(包含空白的文本节点)                 |
| 元素节点.lastElementChild       | 返回元素的最后一个子元素(不包含空白的文本节点)               |
| 元素节点.previousSibling        | 返回某个元素紧接之前节点(包含空白的文本节点)                 |
| 元素节点.previousElementSibling | 返回指定元素的前一个兄弟元素（相同节点的树层中的下一个元素节点） |
| 元素节点.nextSibling            | 返回某个元素紧接之后节点(包含空白的文本节点)                 |
| 元素节点.nextElementSibling     | 返回指定元素的最后一个兄弟元素（相同节点的树层中的下一个元素节点） |

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    div id="container">
    <p>前面的P标签</p>
    <b>加粗文本</b>
    <a href="https://chen-ruo.top" id="a">百度一下</a>
    <i>斜体文本</i>
    <p>最后的P标签</p>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /*第一个子元素*/
    var firstNode = getfirstElementChild(document.getElementById("container"));
    console.log(firstNode.innerHTML);
    /*最后一个子元素*/
    var lastNode = getLastElementChild(document.getElementById("container"));
    console.log(lastNode.innerHTML);
    /*指定元素的前一个子元素*/
    var node1 = getPreviousElementSibling(document.getElementById("a"));
    console.log(node1.innerHTML);
    /*指定元素的后一个子元素*/
    var node2 = getNextElementSibling(document.getElementById("a"));
    console.log(node2.innerHTML);

    /*获取任意一个父级元素的第一个子元素*/
    function getfirstElementChild(element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }

    /*获取任意一个父级元素的最后一个子元素*/
    function getLastElementChild(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }

    /*获取任意一个子元素的前一个兄弟元素*/
    function getPreviousElementSibling(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            var node = element.previousSibling;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }

    /*获取任意一个子元素的后一个兄弟元素*/
    function getNextElementSibling(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        } else {
            var node = element.nextSibling;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
</script>
</body>
</html>
```

## 标准属性

元素的标准属性具有相对应的DOM对象属性

- 操作属性区分大小写
- 多个单词属性命名规则为第一个单词小写，其他单词大写
- 属性值是多类型并不全是字符串，也可能是对象等
- 事件处理程序属性值为函数
- style属性为CSSStyleDeclaration对象
- DOM对象不同生成的属性也不同

### 属性别名

有些属性名与JS关键词冲突，系统已经起了别名

| 属性  | 别名      |
| ----- | --------- |
| class | className |
| for   | htmlFor   |

### 操作属性

元素的标准属性可以直接进行操作

直接设置元素的className

```html
<body>
    <div class="demo1">ni</div>
    <div class="demo2">hi</div>
    <script>
        let demo = document.querySelector(".demo1")
        demo.className ="demo3"
    </script>
</body>
```

设置图像元素的标准属性

```html
<body>
    <img src="" alt="">
    <script>
        let demo = document.images[0]
        demo.src = "https://img1.baidu.com/it/u=4096419636,635686539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        demo.alt = "头像"
    </script>
</body>
```

使用hidden隐藏元素

```html
<body>
    <div id="demo">demo哦</div>
    <script>
        let demo = document.querySelector("#demo")
        demo.addEventListener('click', function () {
            this.hidden = true
        })
    </script>
</body>
```

### 多类型

大部分属性值是都是字符串，但并不是全部，下例中需要转换为数值后进行数据运算

```html
<body>
    <input type="number" name="age" value="88" />

    <script>
        let input = document.getElementsByName('age').item(0)
        input.value = parseInt(input.value) + 100
    </script>
</body>
```

## 元素特征

对于标准的属性可以使用DOM属性的方式进行操作，但对于标签的非标准的定制属性则不可以。但JS提供了方法来控制标准或非标准的属性

可以理解为元素的属性分两个地方保存，DOM属性中记录标准属性，特征中记录标准和定制属性

- 使用特征操作时属性名称不区分大小写
- 特征值都为字符串类型

| 方法            | 作用     |
| --------------- | -------- |
| getAttribute    | 获取属性 |
| setAttribute    | 设置属性 |
| removeAttribute | 删除属性 |
| hasAttribute    | 属性检测 |

#### 特征是可迭代对象

使用removeAttribute删除元素的class属性，并通过hasAttribute进行检测删除结果

```html
<body>
    <div class="app">你好</div>
    <script>
        let app = document.querySelector(".app")
        app.removeAttribute("class")
        let duan = app.hasAttribute("class")
        console.log(duan)//false
    </script>
</body>
```

特征值与HTML定义是一致的，这和属性值是不同的

```html
<body>
    <a href="#chenruo" class="demo"></a>
    <script>
        let demo = document.querySelector(".demo")
        // http://127.0.0.1:5500/demo.html#chenruo
        console.log(demo.href)
        // #chenruo
        console.log(demo.getAttribute("href"))
    </script>
</body>
```

#### attributes

元素提供了attributes 属性可以只读的获取元素的属性

```html
<body>
    <div class="demo" data-content="dd">demo.com</div>
    <script>
        let demo = document.querySelector('.demo')
        console.log(demo.attributes['class'].nodeValue) //demo
        console.log(demo.attributes['data-content'].nodeValue) //dd
    </script>
</body>
```

#### 自定义特征

虽然可以随意定义特征并使用getAttribute等方法管理，但很容易造成与标签的现在或未来属性重名。建议使用以data-为前缀的自定义特征处理，针对这种定义方式JS也提供了接口方便操作

- 元素中以data-为前缀的属性会添加到属性集中
- 使用元素的dataset可获取属性集中的属性
- 改变dataset的值也会影响到元素上

使用属性集设置DIV标签内容

```html
<body>
    <div class="demo" dtat-color="red">迪迦</div>
    <script>
        let demo = document.querySelector(".demo")
        let demo1 = demo.dataset.color = "#dfc"
        demo.innerHTML = `<span style="color:${demo1}">${demo1}</span>`
    </script>
</html>
```

改变dataset值也会影响到页面元素上

```html
<body>
    <div class="demo" data-title-color="red">demo.com</div>
    <script>
        let demo = document.querySelector('.demo')
        demo.addEventListener('click', function () {
            this.dataset.titleColor = ['red', 'green', 'blue'][Math.floor(Math.random() * 3)]
            this.style.color = this.dataset.titleColor
        })
    </script>
</body>
```

#### 属性同步

特征和属性是记录元素属性的两个不同场所，大部分更改会进行同步操作

使用属性更改了className，会自动同步到了特征集中，反之亦然

```html
<body>
    <div id="app" class="demo">你好</div>
    <script>
        let app = document.querySelector("#app")
        console.log(app.getAttribute("class"))
        app.setAttribute("class", "dijia")
        console.log(app.className)
    </script>
</body>
```

对input值使用属性设置，但并没有同步到特征

```html
<body>
    <input type="text" name="package" value="demo" />
    <script>
        const package = document.querySelector(`[name='package']`)
        package.value = '陈若'
        console.log(package.getAttribute('value'))//demo
    </script>
</body>
```

但改变input的特征value会同步到DOM对象属性

```html
<body>
    <input type="text" name="package" value="demo" />
    <script>
        const package = document.querySelector(`[name='package']`)
        package.setAttribute('value', "陈若")
        console.log(package.value)//陈若
    </script>
</body>
```

##  创建节点

创建节点的就是构建出DOM对象，然后根据需要添加到其他节点中

### append

append 也是用于添加元素，同时他也可以直接添加文本等内容

```js
        document.body.append("demo")
        document.body.append((document.createElement('div').innerText = '陈若'))
```

#### createTextNode

创建文本对象并添加到元素中

```html
<body>
    <div id="app"></div>
    <script>
        let app = document.querySelector("#app")
        let demo = document.createTextNode("hihaoyachengruo")
        app.append(demo)
    </script>
</body>
```

#### createElement

使用createElement方法可以标签节点对象

```html
<body>
    <div id="app"></div>
    <script>
        let app = document.querySelector("#app")
        let demo = document.createElement("div")
        demo.innerHTML="nihao"
        app.append(demo)
    </script>
</body>
```

#### cloneNode&importNode

使用cloneNode和document.importNode用于复制节点对象操作

- cloneNode是节点方法
- cloneNode 参数为true时递归复制子节点即深拷贝
- importNode是documet对象方法

复制div#app节点并添加到body元素中

```html
<body>
    <div id="app">chengruo</div>
    <script>
        let app = document.querySelector('#app')
        let newApp = app.cloneNode(true)
        document.body.appendChild(newApp)
    </script>
</body>
```

document.importNode方法也是复制节点对象的方法

- 第一个参数为节点对象
- 第二个参数为true时递归复制

```html
<body>
    <div id="app">hahhah</div>
    <script>
        let app = document.querySelector('#app')
        let newApp = document.importNode(app, true)
        document.body.appendChild(newApp)
    </script>
</body>
```

## 节点内容

### innerHTML

inneHTML用于向标签中添加html内容，同时触发浏览器的解析器重绘DOM

- innerHTML中只解析HTML标签语法，所以其中的 script 不会做为JS处理

```html
<body>
    <div id="app">
        <div class="demo1" data="hd">demo1</div>
        <div class="demo2">demo2</div>
    </div>
    <script>
        let app = document.querySelector('#app')
        console.log(app.innerHTML)

        app.innerHTML = '<h1>dijia</h1>'
    </script>
</body>
```

**重绘节点**

使用innertHTML操作会重绘元素，下面在点击第二次就没有效果了

- 因为对#app内容进行了重绘，即删除原内容然后设置新内容
- 重绘后产生的button对象没有事件
- 重绘后又产生了新img对象，所以在控制台中可看到新图片在加载

```html
<div id="app">
  <button>demo</button>
  <img src="https://img0.baidu.com/it/u=3524086258,727431468&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="" />
</div>
<script>
  const app = document.querySelector('#app')
  app.querySelector('button').addEventListener('click', function () {
    alert(this.innerHTML)
    this.parentElement.innerHTML += '<hr/>实施'
  })
</script>
```

### outerHTML

outerHTML与innerHTML的区别是包含父标签

- outerHTML不会删除原来的旧元素
- 只是用新内容替换替换旧内容，旧内容（元素）依然存在

使用innerHTML内容是被删除然后使用新内容

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        console.log(app)
        app.innerHTML = '实施'
        console.log(app)
    </script>
</body>
```

而使用outerHTML是保留旧内容，页面中使用新内容

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        console.log(app)
        app.outerHTML  = '实施'
        console.log(app)
    </script>
</body>
```

### outerText

与innerText差别是会影响所操作的标签

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        app.outerText = "试一试吧"
    </script>
</body>
```

### insertAdjacentText

将文本插入到元素指定位置，不会对文本中的标签进行解析

| 选项        | 作用         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部前面 |

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        app.insertAdjacentText("beforebegin","<h1>你好呀</h1>")
    </script>
</body>
```

## 节点管理

将文本插入到元素指定位置，不会对文本中的标签进行解析

### 推荐方法

| 选项        | 作用                       |
| ----------- | -------------------------- |
| append      | 节点尾部添加新节点或字符串 |
| prepend     | 节点开始添加新节点或字符串 |
| before      | 节点前面添加新节点或字符串 |
| after       | 节点后面添加新节点或字符串 |
| replaceWith | 将节点替换为新节点或字符串 |

在标签内容后面添加新内容

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        app.append("我相信这个世界有光")
    </script>
</body>
```

同时添加多个内容，包括字符串与元素标签

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        let demo = document.createElement("h2")
        demo.append("我相信这个世界有光")
        app.append("####",demo)
    </script>
</body>
```

将标签替换为新内容

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        let app = document.querySelector('#app')
        let h1 = document.createElement('h1')
        h1.append('我可以试试')
        app.replaceWith(h1)
    </script>
</body>
```

使用remove方法可以删除节点

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        let app = document.querySelector('#app')
        app.remove()
    </script>
</body>
```

### insertAdjacentHTML

将html文本插入到元素指定位置，浏览器会对文本进行标签解析

| 选项        | 作用         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

在div#app前添加HTML文本

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        app.insertAdjacentHTML("beforebegin","<h1>你好呀</h1>")
    </script>
</body>
```

### insertAdjacentElement

insertAdjacentElement() 方法将指定元素插入到元素的指定位置

- 第一个参数是位置
- 第二个参数为新元素节点
| 选项        | 作用         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

```html
<body>
    <div id="app">
        试样
    </div>
    <script>
        const app = document.querySelector('#app')
        let demo = document.createElement("h1")
        demo.innerHTML="哈哈哈哈"
        app.insertAdjacentElement("beforebegin",demo)
    </script>
</body>
```

### 老方法

下面列表过去使用的操作节点的方法，现在不建议使用了。但在阅读老代码时可来此查看语法

| 方法         | 作用                           |
| ------------ | ------------------------------ |
| appendChild  | 添加节点                       |
| insertBefore | 用于插入元素到另一个元素的前面 |
| removeChild  | 删除节点                       |
| replaceChild | 进行节点的替换操作             |

## 表单控制

### 表单查找

JS为表单的操作提供了单独的集合控制

- 使用document.forms获取表单集合
- 使用form的name属性获取指定form元素
- 根据表单项的name属性使用form.elements.title获取表单项，
- 也可以直接写成form.name形式，不需要form.elements.title
- 针对radio/checkbox获取的表单项是一个集合

```html
<form action="" name="hd">
  <input type="text" name="title" />
</form>
<script>
  const form = document.forms.hd
  console.log(form.elements.title)
</script>
```

通过表单项可以反向查找form

```htm
<form action="" name="hd">
  <input type="text" name="title" />
</form>
<script>
  const form = document.forms.hd
  console.log(form.title.form === form) //true
</script>
```

## 样式管理

通过DOM修改样式可以通过更改元素的class属性或通过style对象设置行样式来完成

- 建议使用class控制样式，将任务交给CSS处理，更简单高效

### 批量设置

使用JS的className可以批量设置样式

```html
<body>
    <div id="app" class="jian">shihsi</div>
    <script>
        let app = document.getElementById('app')
        app.className = 'demo'
    </script>
</body>
```

也可以通过特征的方式来更改

```html
<body>
    <div id="app" class="jian">shihsi</div>
    <script>
        let app = document.getElementById('app')
        app.setAttribute("class","demo")
    </script>
</body>
```

### classList

如果对类单独进行控制使用 classList属性操作

| 方法                    | 作用     |
| ----------------------- | -------- |
| node.classList.add      | 添加类名 |
| node.classList.remove   | 删除类名 |
| node.classList.toggle   | 切换类名 |
| node.classList.contains | 类名检测 |

在元素的原有class上添加新class

```html
<body>
    <div class="demo">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.classList.add("demo1")
        console.log(demo.className)
    </script>
</body>
```

使用classList也可以移除class列表中的部分class

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.classList.remove("demo1")
        console.log(demo.className)
    </script>
</body>
```

使用toggle切换类，即类已经存在时删除，不存在时添加

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.addEventListener("click", function () {
            demo.classList.toggle("demo2")
        })
    </script>
</body>
```

使用contains检查class是否存在

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        console.log(demo.classList.contains("demo"))
    </script>
</body>
```

### 设置行样式

使用style对象可以对样式属性单独设置，使用cssText可以批量设置行样式

**样式属性设置**

使用节点的style对象来设置行样式

- 多个单词的属性使用驼峰进行命名

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.style.backgroundColor = "red"
        demo.style.color = "#dfc"
    </script>
</body>
```

**批量设置行样式**

使用 cssText属性可以批量设置行样式，属性名和写CSS一样不需要考虑驼峰命名

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.style.cssText = `
        background-color:red;
        color:#dfc`
    </script>
</body>
```

也可以通过setAttribute改变style特征来批量设置样式

```html
<body>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        demo.setAttribute("style", `background-color:red;color:#dfc`)
    </script>
</body>
```

### 获取样式

可以通过style对象，window.getComputedStyle对象获取样式属性

#### style

可以使用DOM对象的style属性读取行样式

- style对象不能获取行样式外定义的样式

```html
<body>
    <style>
        .demo {
            color: aqua;
            background-color: blueviolet;
            font-size: 3em;
        }
    </style>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        console.log(demo.style.color)
        console.log(demo.backgroundColor)
        console.log(demo.fontSize)
    </script>
</body>
```

#### getComputedStyle

使用window.getComputedStyle可获取所有应用在元素上的样式属性

- 函数第一个参数为元素
- 第二个参数为伪类
- 这是计算后的样式属性，所以取得的单位和定义时的可能会有不同

```html
<body>
    <style>
        .demo {
            color: aqua;
            background-color: blueviolet;
            font-size: 3em;
        }
    </style>
    <div class="demo demo1">第一</div>
    <script>
        let demo = document.querySelector(".demo")
        let color = window.getComputedStyle(demo).color
        console.log(color)
    </script>
</body>
```

## DOM事件

定义：在文档、浏览器、标签元素等元素在特定状态下触发的行为即为事件，比如用户的单击行为、表单内容的改变行为即为事件，我们可以为不同的事件定义处理程序。JS使用异步事件驱动的形式管理事件

### 事件类型

JS为不同的事件定义的类型，也可以称为事件名称

### 事件目标

定义：是指产生事件的对象，比如a标签被点击那么a标签就是事件目标。元素是可以嵌套的，所以在进行一次点击行为时可能会触发多个事件目标

### 事件处理（监听）程序

当在对象上触发事件时就会执行定义的事件处理程序

#### HTML绑定

可以在html元素上设置事件处理程序，浏览器解析后会绑定到DOM属性中

```html
<button onclick="alert('恭喜成功啦')">陈若</button>
```

往往事件处理程序业务比较复杂，所以绑定方法或函数会很常见

- 绑定函数或方法时需要加上括号

```html
<body>
    <button onclick="demo()">陈若</button>
    <script>
        function demo(){
            alert("你成功了")
        }
    </script>
</body>
```

当然也可以使用方法做为事件处理程序

```html
<body>
    <button onclick="D.demo()">陈若</button>
    <script>
        class D {
            static demo() {
                alert("你成功了")
            }
        }
    </script>
</body>
```

可以传递事件源对象与事件对象

```html
<body>
    <button onclick="demo('迪迦奥特曼','戴拿')">陈若</button>
    <script>
        function demo(...value){
            alert("你成功了"+value)
        }
    </script>
</body>
```

#### DOM绑定

可以将事件处理程序绑定到DOM属性中

- 使用setAttribute方法设置事件处理程序无效
- 无法为事件类型绑定多个事件处理程序
- 属性名区分大小写

```Html
<body>
    <button >陈若</button>
    <script>
        let demo = document.querySelector("button")
        demo.onclick = function (){
            this.innerHTML="杰哥，不要啊"
            alert(this.innerHTML)
        }
    </script>
</body>
```

### 事件监听

建议使用新的事件监听绑定方式addEventListener 操作事件

#### 特点

- transtionend / DOMContentLoaded 等事件类型只能使用 addEventListener 处理
- 同一事件类型设置多个事件处理程序，按设置的顺序先后执行
- 也可以对未来添加的元素绑定事件

| 方法                | 作用             |
| ------------------- | ---------------- |
| addEventListener    | 添加事件处理程序 |
| removeEventListener | 移除事件处理程序 |

addEventListener的参数说明如下

1. 参数一事件类型
2. 参数二事件处理程序
3. 参数三为定制的选项，可传递object或boolean类型

#### 绑定多个事件

使用addEventListener来多个事件处理程序

```html
<body>
    <button>点击一下</button>
    <script>
        let demo = document.querySelector("button")
        demo.addEventListener("click", function () {
            this.innerHTML = "杰哥，不要啊"
            alert(this.innerHTML)
        })
        demo.addEventListener("click", function () {
            this.innerHTML = "让我看看"
            alert(this.innerHTML)
        })
    </script>
</body>
```

#### 通过对象绑定

如果事件处理程序可以是对象，对象的 handleEvent 方法会做为事件处理程序执行

```html
<body>
    <div id="app">你试试</div>
    <script>
        const app = document.querySelector('#app')
        class HD {
            handleEvent(e) {
                this[e.type](e)
            }
            click() {
                console.log('单击事件')
            }
            mouseover() {
                console.log('鼠标移动事件')
            }
        }
        app.addEventListener('click', new HD())
        app.addEventListener('mouseover', new HD())
    </script>
</body>
```

#### 移除事件

使用removeEventListener删除绑定的事件处理程序

```html
<body>
    <button id="demo1">点击触发事件</button>
    <button id="demo2">自毁模式</button>
    <script>
        let demo1 = document.querySelector("#demo1")
        let demo2 = document.querySelector("#demo2")
        function shi() {
            console.log("触发了")
        }
        demo1.addEventListener("click", shi)
        demo2.addEventListener("click", function () {
            demo1.removeEventListener("click", shi)
        })
    </script>
</body>
```

### 事件选项

addEventListener的第三个参数为定制的选项，可传递object或boolean类型

传递对象时的说明

| **选项** | 可选参数   | 作用                                                         |
| -------- | ---------- | ------------------------------------------------------------ |
| once     | true/false | 只执行一次事件                                               |
| capture  | true/false | 事件是在捕获/冒泡哪个阶段执行，true:捕获阶段 false:冒泡阶段  |
| passive  | true/false | 声明事件里不会调用 `preventDefault()`，可以减少系统默认行为的等待 |

使用once:true 来指定事件只执行一次

```html
<body>
    <button id="demo1">点击触发事件</button>
    <script>
        let demo1 = document.querySelector("#demo1")
        function shi() {
            alert("触发了")
        }
        demo1.addEventListener("click", shi, { once: true })
    </script>
</body>
```

设置 `{ capture: true }` 或直接设置第三个参数为true用来在捕获阶段执行事件

> addEventListener的第三个参数传递true/false 和设置 {capture:true/false}是一样

```html
<body>
    <button id="demo1">点击触发事件</button>
    <script>
        let demo1 = document.querySelector("#demo1")
        function shi() {
            alert("触发了")
        }
        demo1.addEventListener("click", shi, { capture: true })
    </script>
</body>
```

设置 `{ capture: false }` 或直接设置第三个参数为false用来在冒泡阶段执行事件

```html
<body>
    <button id="demo1">点击触发事件</button>
    <script>
        let demo1 = document.querySelector("#demo1")
        function shi() {
            alert("触发了")
        }
        demo1.addEventListener("click", shi, { capture: false })
    </script>
</body>
```

### 事件对象

执行事件处理程序时，会产生当前事件相关信息的对象，即为事件对象。系统会自动做为参数传递给事件处理程序

- 大部分浏览器将事件对象保存到window.event中
- 有些浏览器会将事件对象做为事件处理程序的参数传递

#### 事件对象常用属性

| 属性               | 作用                                                         |
| ------------------ | ------------------------------------------------------------ |
| type               | 事件类型                                                     |
| target             | 事件目标对象，冒泡方式时父级对象可以通过该属性找到在哪个子元素上最终执行事件 |
| currentTarget      | 当前执行事件的对象                                           |
| timeStamp          | 事件发生时间                                                 |
| x                  | 相对窗口的X坐标                                              |
| y                  | 相对窗口的Y坐标                                              |
| clientX            | 相对窗口的X坐标                                              |
| clientY            | 相对窗口的Y坐标                                              |
| screenX            | 相对计算机屏幕的X坐标                                        |
| screenY            | 相对计算机屏幕的Y坐标                                        |
| pageX              | 相对于文档的X坐标                                            |
| pageY              | 相对于文档的Y坐标                                            |
| offsetX            | 相对于事件对象的X坐标                                        |
| offsetY            | 相对于事件对象的Y坐标                                        |
| layerX             | 相对于父级定位的X坐标                                        |
| layerY             | 相对于父级定位的Y坐标                                        |
| path               | 冒泡的路径                                                   |
| altKey             | 是否按了alt键                                                |
| shiftKey           | 是否按了shift键                                              |
| metaKey            | 是否按了媒体键                                               |
| window.pageXOffset | 文档参考窗口水平滚动的距离                                   |
| window.pageYOffset | 文档参考窗口垂直滚动的距离                                   |



### 窗口事件

| 属性             | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| onblur           | 当窗口失去焦点时，会运行此脚本                               |
| onfocus          | 当窗口获取焦点时，会运行此脚本                               |
| onload           | 当页面加载成功时，会运行此脚本                               |
| onresize         | 当调整窗口大小时，会运行此脚本                               |
| onstorage        | 当Web  Storage 区域更新时，会运行此脚本                      |
| DOMContentLoaded | 文档解析后执行，不需要等待图片/样式文件等外部资源加载，该事件只能通过addEventListener设置 |
| beforeunload     | 文档刷新或关闭时                                             |
| unload           | 文档卸载时                                                   |
| scroll           | 页面滚动时                                                   |

#### onload

window.onload事件在文档解析后及图片、外部样式文件等资源加载完后执行

```js
        window.onload = ()=>{
            alert("hahhahah")
        }
```

#### DOMContentLoaded

DOMContentLoaded事件在文档标签解析后执行，不需要等外部图片、样式文件、JS文件等资源加载

```js
        window.addEventListener("DOMContentLoaded", () => {
            alert("初步加载完成")
        })
```

#### beforeunload

当浏览器窗口关闭或者刷新时，会触发beforeunload事件，可以取消关闭或刷新页面。

- 返回值为非空字符串时，有些浏览器会做为弹出的提示信息内容
- 部分浏览器使用addEventListener无法绑定事件

```js
        window.onbeforeunload = function (e) {
            return '真的要离开吗？=_+'
        }
```

#### unload

window.unload事件在文档资源被卸载时执行，在beforeunload后执行

- 不能执行alert、confirm等交互指令
- 发生错误也不会阻止页面关闭或刷新

```js
        window.addEventListener('unload', function (e) {
            localStorage.setItem('name', 'hahha')
        })
```

**当窗口失去焦点时，输出信息**

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
    window.onblur = function()
    {
        console.log("当前窗口失去焦点-——-");
    }
</script>
</body>
</html>
```

**当窗口获取焦点时，输出信息**

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
    window.onfocus = function()
    {
        console.log("当前窗口获取焦点");
    }
</script>
</body>
</html>
```

**当页面文档加载完成后，输出信息**

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
    window.onload = function()
    {
        console.log("恭喜页面加载成功");
    }
</script>
</body>
</html>
```

**当窗口大小发生调整时，输出信息**

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
    window.onresize = function()
    {
        console.log("当前窗口大小正在改变");
    }
</script>
</body>
</html>
```

**当Web Storage 区域更新时（存储空间中的数据发生变化时），输出信息**

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
    window.onstorage = function()
    {
        console.log("当前页面存储空间数据发生变化");
    }
</script>
</body>
</html>
```

### 表单事件

可以用在表单上的事件类型

| 属性            | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| onblur          | 失去焦点事件                                                 |
| onfocus         | 获取焦点事件                                                 |
| onchange        | 文本框在内容发生改变并失去焦点时触发，select/checkbox/radio选项改变时触发事件 |
| oninvalid       | 当元素无效时运行脚本                                         |
| onselect        | 当选取元素时运行脚本                                         |
| onsubmit        | 当提交表单时运行脚本                                         |
| oninput         | Input、textarea或 select 元素的 `value` 被修改时，会触发 `input` 事件。而 change 是鼠标离开后或选择一个不同的option时触发 |
| element.focus() | 让元素强制获取焦点                                           |
| element.blur()  | 让元素失去焦点                                               |

**当文本框获取焦点时，框背景是红色，失去焦点时，为蓝色**

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
    <form >
        <input type="text" id = "text">
    </form>
<script>
    var demo = document.getElementById("text");
    // 当文本框获取焦点，文本框背景为红色
    demo.onfocus = function ()
    {
        this.style.background = "red";
    };
    // 当文本框失去焦点，文本框背景为蓝色
    demo.onblur = function ()
    {
        this.style.background = "blue";
    };
    </script>
</body>
</html>
```

> 注意：这里为什么要用this，你不用this也可以，就直接`textInput.style.background = "red";`也不是不可以的，但是方法的调用规则就是谁调用this，this就指向谁，这样我们就可以简化代码

**当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台**

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
<form>
    <input type="text" id="text">
</form>
<script>
    // 当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台
    var demo = document.getElementById("text");
    demo.onchange = function ()
    {
        console.log(this.value);
    };
</script>
</body>
</html>
```

**当文本框内容改变时，立即将改变的内容输出到控制台**

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
<form>
    <input type="text" id="text">
</form>
<script>
    // 当文本框内容改变时，立即将改变的内容输出到控制台
    var demo = document.getElementById("text");
    demo.oninput = function ()
    {
        console.log(this.value);
    };
</script>
</body>
</html>
```

**如果单击“确定”，则不填写文本字段，将发生警报消息**

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
<form>
<input type="text" id="text" required>
<input type="submit" value="确定">
</form>
<script>
    var demo = document.getElementById("text");
    // 如果单击**确定**，则不填写文本字段，将发生警报消息
    demo.oninvalid = function()
    {
        console.log("请完善文本框内容");
    }
</script>
</body>
</html>
```

**当选中文本框的内容时(双击文本框内容)，输出信息**

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
<form action="">
    <input type="text" id="text">
</form>
<script>
    var demo = document.getElementById("text");

    demo.onselect = function()
    {
        console.log("已选择内容");
    }
</script>
</body>
</html>
```

**当提交的时候，控制台输出信息**

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
<form id="myform">
    <input type="submit" value="提交试试">
</form>
<script>
    var demo = document.getElementById("myform");
    demo.onsubmit = function()
    {
        console.log("恭喜提交成功");
        // 用来阻止表单提交的，你不写它会跳转请求
        return  false ;
    }
</script>
</body>
</html>
```

### 键盘事件

针对键盘输入操作的行为有多种事件类型

| 属性       | 作用                                              |
| ---------- | ------------------------------------------------- |
| onkeydown  | 键盘按下时，一直按键不松开时keydown事件会重复触发 |
| onkeyup    | 当松开按键时会运行脚本                            |
| onkeypress | 当按下并松开按键时会运行脚本                      |

#### 事件对象

键盘事件产生的事件对象包含相对应的属性

| 属性     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| keyCode  | 返回键盘的ASCII字符数字                                      |
| code     | 按键码，字符以Key开始，数字以Digit开始，特殊字符有专属名子。左右ALT键字符不同。<br/>不同布局的键盘值会不同 |
| key      | 按键的字符含义表示，大小写不同。不能区分左右alt等。不同语言操作系统下值会不同 |
| altKey   | 是否按了alt键                                                |
| ctrlKey  | 是否按了ctlr键                                               |
| shiftKey | 是否按了shift键                                              |
| metaKey  | 是否按了媒体键                                               |

**当键盘按下判断当前的按键是不是 a ，如果是就输出成功，否则输出失败**

[keycod对照表]([event.keyCode列表 - 水木 - 博客园 (cnblogs.com)](https://www.cnblogs.com/hsapphire/archive/2009/12/16/1625642.html))

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
    window.onkeydown = function(event)
    {
        event = event || window.event ;
        if (event.keyCode == 65)
        {
            console.log("成功");
        }
        else
        {
            console.log("失败");
        }
    }
</script>
</body>
</html>
```

**使div可以根据不同的方向键向不同的方向移动**

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
<div id="box"></div>
<style>
    #box{
        width: 100px ;
        height: 100px;
        background: green;
        position: absolute;
    }
</style>
<script>
    var box = document.getElementById("box");
    document.onkeydown = function (event)
    {
        event = event || window.event;
        var speed = 10;
        switch(event.keyCode) 
        {
            case 37:
              box.style.left = box.offsetLeft - speed +"px";
              break;
            case 39:
              box.style.left = box.offsetLeft + speed +"px" ;
              break;
            case 38:
              box.style.top = box.offsetTop - speed +"px";
              break;
            case 40:
              box.style.top = box.offsetTop + speed +"px";
              break;
        }
    }
</script>
</body>
</html>
```

知识

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标的状态

在IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的
解决事件对象的兼容性问题：`event = event || window.event;`

### 鼠标事件

针对鼠标操作的行为有多种事件类型

- 鼠标事件会触发在Z-INDEX 层级最高的那个元素上

| 属性         | 作用                                                      |
| ------------ | --------------------------------------------------------- |
| onclick      | 鼠标单击事件，同时触发 mousedown/mouseup                  |
| ondblclick   | 鼠标双击事件                                              |
| onmousedown  | 鼠标按下                                                  |
| onmouseup    | 鼠标抬起时                                                |
| onmousemove  | 鼠标移动时                                                |
| onmouseover  | 鼠标移动时，不可以阻止冒泡                                |
| onmouseout   | 鼠标从元素上离开时，不可以阻止冒泡                        |
| onmouseenter | 鼠标移入时触发，可以阻止冒泡                              |
| onmouseleave | 鼠标移出时触发，可以阻止冒泡                              |
| onmousewheel | 当转动鼠标滚轮时，会运行该脚本                            |
| onscroll     | 当页面滚动条滚动时，会运行该脚本                          |
| oncopy       | 复制内容时触发                                            |
| scroll       | 元素滚动时，可以为元素设置overflow:auto; 产生滚动条来测试 |
| contextmenu  | 点击右键后显示的所在环境的菜单                            |

#### 事件对象

鼠标事件产生的事件对象包含相对应的属性

| 属性          | 作用                                                         |
| ------------- | ------------------------------------------------------------ |
| which         | 执行mousedown/mouseup时，显示所按的键 1左键，2中键，3右键    |
| clientX       | 相对窗口X坐标                                                |
| clientY       | 相对窗口Y坐标                                                |
| pageX         | 相对于文档的X坐标                                            |
| pageY         | 相对于文档的Y坐标                                            |
| offsetX       | 目标元素内部的X坐标                                          |
| offsetY       | 目标元素内部的Y坐标                                          |
| altKey        | 是否按了alt键                                                |
| ctrlKey       | 是否按了ctlr键                                               |
| shiftKey      | 是否按了shift键                                              |
| metaKey       | 是否按了媒体键                                               |
| relatedTarget | mouseover事件时从哪个元素来的，mouseout事件时指要移动到的元素。当无来源（在自身上移动）或移动到窗口外时值为null |

#### 禁止复制

```html
<body>
    sdadeasdsadasdasdas
    <div>siiiiisiisisiis</div>
    <script>
        document.addEventListener("copy", () => {
            event.preventDefault()
            alert("警告禁止复制内容")
        })
    </script>
</body>
```

#### relatedTarget

relatedTarget是控制鼠标移动事件的来源和目标对象的

- 如果移动过快会跳转中间对象

```html
<body>
    <div id="app" style="background-color: red;">你试试</div>
    <div id="cms" style="background-color: #dfc;">我偏不</div>
    <script>
        const app = document.querySelector(`#app`)
        const cms = document.querySelector(`#cms`)
        app.addEventListener('mouseout', () => {
            console.log(event.target)
            console.log(event.relatedTarget)
        })
    </script>
</body>
```

#### mouseenter与mouseleave

mouseenter与mouseleave事件从子元素移动到父元素时不触发父元素事件

```html
<body>
    <style>
        #app {
            background: red;
            padding: 80px;
            width: 500px;
        }

        #cms {
            background: teal;
            padding: 30px;
        }
    </style>
    <div id="app">
        的天
        <div id="cms">我的</div>
    </div>

    <script>
        const app = document.querySelector(`#app`)
        const cms = document.querySelector(`#cms`)

        app.addEventListener('mouseenter', () => {
            console.log('app')
        })
        cms.addEventListener('mouseenter', () => {
            console.log('cms')
        })
    </script>
</body>
```

**创建一个正方形div，默认颜色为黑色，当鼠标移入div，背景颜色变为蓝色，当鼠标移出div，背景颜色变为粉色**

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
  <div  id="demo"></div>
  <style>
    #demo{
      width: 400px;
      height: 400px;
      background: black;
    }
  </style>
  <script>
    var demo = document.getElementById("demo");
    demo.onmouseenter = function()
    {
      demo.style.background = "blue";
    }
    demo.onmouseout = function()
    {
      demo.style.background = "pink";
    }
  </script>
</body>
</html>
```

**编写一个通用的拖拽元素函数，创建两个div，进行拖拽演示，要求兼容IE8、火狐、谷歌等主流浏览器**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box1" style="width: 100px;height: 100px;background: red;position: absolute;"></div>
<div id="box2" style="width: 100px;height: 100px;background: green;position: absolute;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    drag(box1);
    drag(box2);

    /*
     * 提取一个专门用来设置拖拽的函数
     * 参数：开启拖拽的元素
     */
    function drag(obj) {
        //当鼠标在被拖拽元素上按下时，开始拖拽
        obj.onmousedown = function (event) {
            // 解决事件的兼容性问题
            event = event || window.event;

            // 设置obj捕获所有鼠标按下的事件
            /**
             * setCapture()：
             * 只有IE支持，但是在火狐中调用时不会报错，
             * 而如果使用chrome调用，它也会报错
             */
            obj.setCapture && obj.setCapture();

            // obj的偏移量 鼠标.clentX - 元素.offsetLeft
            // obj的偏移量 鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;

            // 为document绑定一个鼠标移动事件
            document.onmousemove = function (event) {
                // 解决事件的兼容性问题
                event = event || window.event;
                // 当鼠标移动时被拖拽元素跟随鼠标移动
                // 获取鼠标的坐标
                var left = event.clientX - ol;
                var top = event.clientY - ot;
                // 修改obj的位置
                obj.style.left = left + "px";
                obj.style.top = top + "px";
            };

            // 为document绑定一个鼠标松开事件
            document.onmouseup = function () {
                // 取消document的onmousemove事件
                document.onmousemove = null;
                // 取消document的onmouseup事件
                document.onmouseup = null;
                // 当鼠标松开时，取消对事件的捕获
                obj.releaseCapture && obj.releaseCapture();
            };

            /*
             * 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，
             * 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，
             * 如果不希望发生这个行为，则可以通过return false来取消默认行为，
             * 但是这招对IE8不起作用
             */
            return false;
        };
    }
</script>
</body>
</html>

```

### 媒体事件

定义：通过视频，图像或音频触发该事件

| 属性               | 作用                                                         |
| ------------------ | ------------------------------------------------------------ |
| onabort            | 当发生中止事件时运行脚本                                     |
| oncanplay          | 当媒介能够开始播放但可能因缓冲而需要停止时运行脚本           |
| oncanplaythrough   | 当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本           |
| ondurationchange   | 当媒介长度改变时运行脚本                                     |
| onemptied          | 当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本     |
| onended            | 当媒介已抵达结尾时运行脚本                                   |
| onerror            | 当在元素加载期间发生错误时运行脚本                           |
| onloadeddata       | 当加载媒介数据时运行脚本                                     |
| onloadedmetadata   | 当媒介元素的持续时间以及其它媒介数据已加载时运行脚本         |
| onloadstart        | 当浏览器开始加载媒介数据时运行脚本                           |
| onpause            | 当媒介数据暂停时运行脚本                                     |
| onplay             | 当媒介数据将要开始播放时运行脚本                             |
| onplaying          | 当媒介数据已开始播放时运行脚本                               |
| onprogress         | 当浏览器正在取媒介数据时运行脚本                             |
| onratechange       | 当媒介数据的播放速率改变时运行脚本                           |
| onreadystatechange | 当就绪状态（ready-state）改变时运行脚本                      |
| onseeked           | 当媒介元素的定位属性不再为真且定位已结束时运行脚本           |
| onseeking          | 当媒介元素的定位属性为真且定位已开始时运行脚本               |
| onstalled          | 当取回媒介数据过程中（延迟）存在错误时运行脚本               |
| onsuspend          | 当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本 |
| ontimeupdate       | 当媒介改变其播放位置时运行脚本                               |
| onvolumechange     | 当媒介改变音量亦或当音量被设置为静音时运行脚本               |
| onwaiting          | 当媒介已停止播放但打算继续播放时运行脚本                     |

### 其它事件

| 属性     | 作用                                  |
| -------- | ------------------------------------- |
| onshow   | 当 <menu> 元素在上下文显示时触发      |
| ontoggle | 当用户打开或关闭 <details> 元素时触发 |

### 事件冒泡

定义：冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡可以通过事件对象来取消冒泡

- 大部分事件都会冒泡，但像focus事件则不会
- event.target 可以在事件链中最底层的定义事件的对象
- event.currentTarget == this 即当前执行事件的对象



需求：**创建三个div，叠放在一起，分别绑定单击事件，点击最里边的div，不会触发三个div的单击事件，只会触发自己的单击事件，这时候可以取消事件冒泡，当点击a标签的时候，阻止a标签的默认跳转事件，采用事件阻止**

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
    <a href="https://chen-ruo.top" id="website">你点一点，有惊喜</a>
    <div id="outside">
        我在外面
        <div id="inside">
            我在里面
            <div id="on">
                我在最里面
            </div>
        </div>
    </div>
    <style>
        #outside{
            width: 200px;
            height: 200px;
            background-color: aquamarine;
        }
        #inside{
            width: 100px;
            height: 100px;
            background-color: bisque;
        }
        #on{
            width: 50px;
            height: 50px;
            background-color: blue;
        }
    </style>
    <script>
        var outside = document.getElementById("outside");
        var inside = document.getElementById("inside");
        var on = document.getElementById("on");
        var website = document.getElementById("website");
        //单击触发outside
        outside.onclick = function()
        {
            console.log("单击点击该事件");
            stopBubble();
        };
        //单击触发inside
        inside.onclick = function()
        {
            console.log("点击第二个div的事件");
            stopBubble();
        };
        //单击触发on
        on.onclick = function()
        {
            console.log("点击最里面的的事件")
            stopBubble();
        }
        website.onclick = function()
        {
            stopDefault();
        }
        //取消事件冒泡函数
        function stopBubble (event)
        {
            // 提供了事件对象，则这是一个非IE浏览器
            if(event && event.stopPropagation)
            {
                event.stopPropagation();
            }
            else{
                // 否则，使用IE的方式来取消事件冒泡
                window.event.cancelBubble= true ;
            }
        }
        // 阻止浏览器的默认行为的函数
        function stopDefault(event)
        {
            if (event && event.preventDefault)
            {
                event.preventDefault();
            }
            else
            {
                window.event.returnValue = false ;
            }
            return false;
        }
    </script>
    
</body>
</html>
```

#### 阻止冒泡

冒泡过程中的任何事件处理程序中，都可以执行 `event.stopPropagation()` 方法阻止继续进行冒泡传递

- event.stopPropagation() 用于阻止冒泡
- 如果同一类型事件绑定多个事件处理程序 event.stopPropagation() 只阻止当前的事件处理程序
- event.stopImmediatePropagation() 阻止事件冒泡并且阻止相同事件的其他事件处理程序被调用

需求：为h2的事件处理程序添加了阻止冒泡动作，将不会产生冒泡，也就不会执行父级中的事件处理程序了

```html
<body>
    <style>
        #app {
            background: #34495e;
            width: 300px;
            padding: 30px;
        }

        #app h2 {
            background-color: #f1c40f;
            margin-right: -100px;
        }
    </style>
    <div id="app">
        <h2>陈若</h2>
    </div>
    <script>
        const app = document.querySelector('#app')
        const h2 = document.querySelector('h2')
        app.addEventListener('click', (event) => {
            console.log(`event.currentTarget:${event.currentTarget.nodeName}`)
            console.log(`event.target:${event.target.nodeName}`)
            console.log('app event')
        })
        h2.addEventListener('click', (event) => {
            event.stopPropagation()
            console.log(`event.currentTarget:${event.currentTarget.nodeName}`)
            console.log(`event.target:${event.target.nodeName}`)
            console.log(`h2 event`)
        })
        h2.addEventListener('click', (event) => {
            console.log('h2 的第二个事件处理程序')
        })
    </script>
</body>
```

以上代码如果将 event.stopPropagation() 替换为 event.stopPropagation() ，那么h2的其他同类型的事件处理程序将不执行，同时阻止冒泡

#### 未来元素

使用事件代理来对未来元素进行事件绑定

```html
<body>
    <div id="app">
        <h2>陈若</h2>
    </div>

    <script>
        function show() {
            console.log(this.textContent)
        }
        const app = document.querySelector('#app')
        const h2 = document.querySelectorAll('h2')
        app.addEventListener('click', () => {
            show.call(event.target)
        })
        let newH2 = document.createElement('h2')
        newH2.textContent = '康康'
        app.append(newH2)
    </script>
</body>
```

### 事件委派

只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素，也就是事件的委派

**事件的委派**，是指将事件统一绑定给元素的共同的祖先元素，当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。事件委派是利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序的性能

借助冒泡思路，我们可以不为子元素设置事件，而将事件设置在父级。然后通过父级事件对象的event.target查找子元素，并对他做出处理。

- 这在为多个元素添加相同事件时很方便
- 会使添加事件变得非常容易

需求：**为ul列表中的所有a标签都绑定单击事件**

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
    <ul id="ulde">
        <li><a href="javascript:;" class="link">点击一下有惊喜</a></li>
        <li><a href="https://chen-ruo.top" class="link">点击一下有惊喜</a></li>
        <li><a href="https://bilibili.com" class="link">点击一下有惊喜</a></li>
    </ul>
    <script>
        var ulde = document.getElementById("ulde");
        // 为ul绑定一个单击响应函数
        ulde.onclick = function(event)
        {
            event = event || window.event;
            //如果触发事件的对象是我们期望的元素，则执行，否则不执行
            if(event.target.className == "link")
            {
                console.log("我是ul的点击");
            }
        }
    </script>
</body>
</html>
```

#### 事件的绑定

以前绑定事件代码只能一个事件绑定一个函数，那我们要是想一个事件对应多个函数，并且不存在兼容性的问题该如何解决呢

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
    function f1() {
        console.log("output1 ...");
    };

    function f2() {
        console.log("output2 ...");
    };

    //    addEventListener()
    //    - 通过这个方法可以元素绑定响应函数、
    //    - 只用该函数可以同时为一个元素的相同事件同时绑定多个响应函数
    //      当事件触发时响应函数将会按照函数的绑定顺序执行
    //    - 参数
    //       1. 事件的字符串，不要on
    //       2.回调函数，当事件触发时该函数时该函数会被调用
    //       3.是否在捕获阶段触发事件，需要一个布尔值，默认是false

    // attachEvent()
    // - 在IE8中可以使用attachEvent()来绑定事件
    // - 可以同时为一个事件绑定多个处理函数
    //   不同的是此函数是后绑定，先执行，执行顺序和addEventListener()相反
    // - 参数
    //     1. 事件的字符串，要on
    //     2.回调函数

    // 为按钮1的单击事件绑定两个函数
    addEventListener(document.getElementById("btn1"), "click", f1);
    addEventListener(document.getElementById("btn1"), "click", f2);

    // 点击按钮2取消按钮1的单机事件绑定函数f1
    document.getElementById("btn2").onclick = function () {
        removeEventListener(document.getElementById("btn1"), "click", f1);
    };

    /*为元素绑定事件兼容性代码*/
    function addEventListener(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }

    /*为元素解绑事件兼容性代码*/
    function removeEventListener(element, type, fnName) {
        if (element.removeEventListener) {
            element.removeEventListener(type, fnName, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fnName);
        } else {
            element["on" + type] = null;
        }
    }
</script>
</body>
</html>
```

#### 事件的传播

W3C将事件传播分成了三个阶段：

捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件
冒泡阶段：事件从目标元素向它的祖先元素传递，依次触发祖先元素上的事件

![](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/博客-文章/Snipaste_2022-03-24_08-25-10.1eb9f0i8xhq8.webp)

> 注意：如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false，并且注意，IE8及以下的浏览器中没有捕获阶段，我们可以使用event.stopPropagation();取消事件传播

事件执行顺序为 捕获 > 事件目标 > 冒泡，在向下传递到目标对象的过程即为事件捕获。事件捕获在实际使用中频率不高。

- 通过设置第三个参数为true或{ capture: true } 在捕获阶段执行事件处理程序

### 默认行为

JS中有些对象会设置默认事件处理程序，比如A链接在点击时会进行跳转

一般默认处理程序会在用户定义的处理程序后执行，所以我们可以在我们定义的事件处理中取消默认事件处理程序的执行

- 使用onclick绑定的事件处理程序，return false 可以阻止默认行为
- 推荐使用`event.preventDefault()`阻止默认行为

阻止超链接的默认行为

```html
<body>
    <a href="###">店一家</a>
    <script>
        let aa = document.querySelector("a")
        aa.addEventListener("click",()=>{
            event.preventDefault()
        })
    </script>
</body>
```

### 虚拟DOM

一个`DOM`节点元素，其实是很复杂的，包含了很多的属性和方法。

我们来简单打印一下一个`DOM`元素：

![](https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/1512633321%281%29.webp)

看到右边的滚动条了没，有如此之多的属性。

所以随着应用程序越来越复杂，`DOM`操作越来越频繁，需要监听事件和在事件回调用更新页面的 DOM 操作也越来越多，性能消耗则会比较大。于是乎，虚拟`DOM`的想法便被人提出并实现了。

虚拟`DOM`其实是用来模拟真实`DOM`的中间产物，主要包括以下功能：

**1. 用`JS`对象模拟`DOM`树，简化`DOM`对象。**

简单来说，就是用一个对象模拟，保留主要的一些`DOM`属性，其他的则去掉。

**2. 使用虚拟`DOM`，结合操作`DOM`的接口，来生成真实`DOM`。**

使用假`DOM`生成真`DOM`，同时保持真实`DOM`对象的引用，以便 3 步骤的执行。

**3. 更新`DOM`时，比较两棵虚拟`DOM`树的差异，局部更新真实`DOM`。**

这个就比较有意思，可以根据数据的变化，来最小化地移动、替换、删除原有的`DOM`元素

## Console 对象

`console`常用的几个方法有：

- `console.log()`：打印字符串，以及对象、变量什么的都可以

- `console.info()`：打印以感叹号字符开始的信息，使用方法和`log`相同

- `console.error()`：打印一条错误信息

- ```
  console.dir()
  ```

  ：打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性

  > `console.dir()`常用于打印`DOM`元素的属性

[console对象](https://www.runoob.com/jsref/obj-console.html)
