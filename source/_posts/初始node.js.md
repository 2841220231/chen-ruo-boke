title: 初识node.js

date: 2022-06-8 7:58:00

keywords: "node.js"

tags: 

- 学习笔记

categories: "node.js"

cover: https://jsdelivr.bili33.top/gh/2841220231/image-my-web@master/博客-文章/wallhaven-e7g71w.3m3nj1ea7ae0.webp

---

## 什么是node.js

![](https://jsdelivr.bili33.top/gh/2841220231/image-my-web@master/%E5%8D%9A%E5%AE%A2-%E6%96%87%E7%AB%A0/Snipaste_2022-06-07_09-53-45.5fcpjadw2iw0.webp)

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它让js可以开发后端程序，与后端语言几乎平起平坐的地步
>
> Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效
>
> Node.js 的包管理器 npm，是全球最大的开源库生态系统

上述都是[node.js官网](http://nodejs.cn/)的说明

node.js 的出现使JS能用于服务器端编程,node.js 含有一系列内置模块，使得程序可以脱离 Apache HTTP Server 或 IIS，作为独立服务器运行

node.js 主要用于编写像 Web 服务器一类的网络应用开发，这和 PHP 和 Python 类似，但是 node.js 与其他语言最大的不同之处在于，PHP 等后端语言是阻塞的（只有前一条命令执行完毕才会执行后面的命令,简称**同步操作**)，而 node.js 是非阻塞的（多条命令可以同时被运行，通过回调函数得知命令已结束运行,简称**异步操作**)

开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器,这正是其他服务端语言无法比拟的，也正是因为这个特点才被创造出来

node.js 实则是 JS 与 Unix 网络编程的优点结合

### 有什么特点

- node.js语法完全是js语法，但凡你会一点js基础都可以学会node.js后端开发
- node.js有超强的高并发能力，可以实现高性能服务器
- 开发周期短，开发成本低，学习成本低

总而言之，学就完了，淦

### 那我们学完node.js可以实现什么

- 基于 [Express 框架 (opens new window)](http://www.expressjs.com.cn/)，可以快速构建 Web 应用
- 基于 [Electron 框架 (opens new window)](https://electronjs.org/)，可以构建跨平台的桌面应用
- 基于 [restify 框架 (opens new window)](http://restify.com/)，可以快速构建 API 接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…

### 浏览器环境与node.js环境之间有什么区别

![](https://jsdelivr.bili33.top/gh/2841220231/image-my-web@master/%E5%8D%9A%E5%AE%A2-%E6%96%87%E7%AB%A0/Snipaste_2022-06-07_10-18-51.5dc5374kq7c0.webp)

在node的环境中，无法使用DOM和BOM等操作，能使用纯JS来进行操作

node.js可以解析js的代码，是不受浏览器安全级别的限制，提供很多内置好用的API

- 文件的读写操作
- 进程的管理
- 网络通信

## 开发环境搭建

首先我们先检查自己的电脑是否安装了 node

打开 cmd 输入如下命令，如果正常返回了版本号，则说明已经安装成功

```js
node -v
```

到官网下载即可，配置系统环境

[node官网下载地址](http://nodejs.cn/)

使用 node ，就可以实现服务

```js
node  xxx.js
```

使用 nodemon ,就可以实现自动重启服务

安装，需要注意的是 nodemon 是需要全局安装的，毕竟，你不想每创建一个新的项目的时候，重新下载一次，是吧

```js
npm install -g nodemon
```

使用 nodemon 运行 node 服务，之后保存时自动重启服务

```js
nodemon  xxx.js
```

学带英，好用就用到死的传统，用它就没错了，奥利给

## CommonJS

### CommonJS为什么会出现

随着 JavaScript 在前端的应用越来越广泛，以及在服务端 JavaScript 的推动，现有的 JS 规范显得十分薄弱，不利于未来的大前端时代的到来，那些以 JS 为宿主语言的环境中，只有本身的基础对象和类型，但更多的是基于宿主语言所提供的对象和API，所以 JS 的弱势逐暴露出来，主要是这几项：

- JS 没有**模块系统**。没有原生的支持密闭作用域或依赖管理
- JS 没有**标准库**。除了一些核心库外，没有文件系统的 API，没有 IO 流 API 等
- JS 没有**标准接口**。没有如 Web Server 或者数据库的统一接口
- JS 没有**包管理系统**。不能自动加载和安装依赖

![](https://jsdelivr.bili33.top/gh/2841220231/image-my-web@master/%E5%8D%9A%E5%AE%A2-%E6%96%87%E7%AB%A0/Snipaste_2022-06-07_15-02-38.3lwkb5yzt6s0.webp)

CommonJS 规范的出现，其目标是为了构建 JavaScript 在包括 Web 服务器，桌面，命令行工具，及浏览器方面的生态系统

为了解决这些弱势，CommonJS 制定了一些规范，来解决问题，而 node.js 就是这些规范的一种实现。node.js 自身实现了 require 方法作为其引入模块的方法，同时 npm 也基于 CommonJS 定义的包规范，实现了依赖管理和模块自动安装等功能

呜呜呜，这关我什么事-v-

### 模块化

#### 什么是模块化

- 模块化指的是解决一个复杂问题时，自顶向下逐层把系统划分为若干模块的过程，模块是可组合、分解和更换的单元
- 模块化可以提高代码的复用性和可维护性，实现按需加载
- 模块化规范是对代码进行模块化拆分和组合时需要遵守的规则，如使用语法格式引用模块和向外暴露成员

总而言之，就是说，模块化好，可以理解成，将一个垄断企业，进行拆分为很多个小企业，来阻止企业操控市场

#### 模块定义

1. 模块中，上下文提供`require()`方法来引入外部模块。
2. 对应引入功能，上下文提供了 exports 对象用于导出当前模块的方法或者变量，exports 对象是唯一导出的出口
3. 模块中，存在一个 module 对象，代表模块自身，而 exports 是 module 的属性

node.js 中，一个文件就是一个模块，将方法挂载在 exports 对象上作为属性即可定义导出方式

就有一种人剑合一的感觉，非常的微妙

#### 模块标识

模块标识是传递给`require()`方法的参数，必须是符合小驼峰命名的字符串，或者以`.`、`..`开头的相对路径或者绝对路径，可以没有文件名后缀`.js`

#### 模块的到导入和导出

模块可以是 node.js 内置模块和第三方模块，>-<

使用 `require` 导入一个其他模块，用一个变量来接收

```js
// 使用 require 导入其他模块
let demo = require("./导出的模块")
demo.getname("罗翔")
let aaa = "导入模块"
console.log(aaa) //导入模块
console.log(demo.aaa) 
```

使用 `exports` 导出一个模块，可以导出方法，变量

```js
// node.js中两个互相引用的js如果变量名称相同不会相互受影响
let  aaa = "06导出"
// 使用 exports 导出方法和变量
exports.getname = function (name) {
    console.log(name)
}
exports.aaa = aaa
```

除了单独导出外也可以批量导出,(开始资本扩张了bushi)

```js
function fun1() {
    console.log("方法1")
}
function fun2() {
    console.log("方法2")
}
// 模块导出
module.exports = {
    fun1,
    fun2
}
```

使用 `{ }` 接收批量导出的内容，用到几个引入几个

```js
let { fun1 } = require("./导出的模块")
fun1( ) //直接调用方法
```

接下来我们分析一下

#### `exports` 和 `module.exports` 的区别

每个模块都有一个 module 对象, module 对象中有一个 exports 对象

当我们需要时，可以把需要导出的成员都挂载到 `module.exports` 接口对象中，也就是以 `module.exports.XXX = XXX` 的方式，但每次都 `module.exports.XXX` 很麻烦，所以 node.js 为了方便（方便程序员偷懒bushi)，同时在每一个模块对象中都提供了一个成员叫做 exports , `exports === module.exports` 结果为 true，所以对于 module.exports.XXX 的方式可以写成 exports.XXX  (后面有反转)

```js
console.log(exports === module.exports) // true
```

当一个模块需要导出单个成员的时候，这个时候必须写成 `module.exports = XXX`,不要使用 `exports = XXX`，这种方式不管用(反转这不就来了吗),因为每个模块最终向外 return 的是 `module.exports`,而 exports 只是 `module.exports` 的引用,所以即便对 `exports = XXX` 重新赋值，也不影响 module.exports,但是有一种赋值方式为 `exports = module.exports` 这种赋值表示重新建立起两者的引用(这里我就不科普引用类型了)

ES模块化，算了不写了，不推荐使用，node.js 里互操作仍有很多问题

给爷冲冲冲

## node.js模块

### 模块的类型

node.js 的模块分为两类，一类为内置（核心）模块，一类为文件模块。内置模块在 node.js 源代码编译的时候编译进了二进制执行文件，加载的速度是最快的，文件模块是动态加载的，加载速度比内置模块要慢

node.js 中存在 4 类模块（内置模块和 3 种文件模块），其中 3 种文件模块为

1. `.js`：通过 fs 模块同步读取 js 文件并编译执行
2. `.node`：通过 C/C++进行编写的 Addon。通过 dlopen 方法进行加载
3. `.json`：读取文件，调用 JSON.parse 进行解析加载

其中文件模块还包括路径形式自定义文件模块（如`.`、`..`和`./`开头的标识符）和第三方文件模块（第三方 npm 包）

第三方文件模块的查找最耗时也是最慢的一种，查找顺序为：

1. 当前目录下`node_modules`目录
2. 父目录下`node_modules`目录
3. 向上逐级递归直到根目录下下`node_modules`目录

### 模块作用域

和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，所以叫做模块作用域，其目的是为了防止全局变量污染

### 模块载入策略

Node 引入模块，经历的三个步骤：路径分析、文件定位、编译执行。

`require` 方法接受以下几种参数的传递：

- 原生模块(也就是内置模块)（http、fs、path 等）
- 相对路径的文件模块
- 绝对路径的文件模块
- 非原生模块(也就是第三方)的文件模块

node.js 对原生模块和文件模块都进行了缓存，于是在第二次 `require` 时，是不会有重复开销的
require 方法中的文件查找策略：

![](https://github-imglib-1255459943.cos.ap-chengdu.myqcloud.com/image1.jpg)

#### 从文件模块缓存中加载

尽管原生模块与文件模块的优先级不同，但是都不会优先于从文件模块的缓存中加载已经存在的模块

#### 从原生模块加载

原生模块的优先级仅次于文件模块缓存的优先级。require 方法在解析文件名之后，优先检查模块是否在原生模块列表中
以 **http** 模块为例，尽管在目录下存在一个`http`/`http.js`/`http.node`/`http.json`等等文件，`require("http")`都不会从这些文件中加载，而是从原生模块中加载

同样原生模块也有一个缓存区的，同样也是优先从缓存区加载的，如果缓存区没有被加载过，则调用原生模块的加载方式进行加载和执行

#### 从文件加载

当文件模块在缓存中不存在时，而且又不是原生模块的时候，node.js 会解析 require 方法传入的参数，并从文件系统中加载实际的文件

### node.js 模块与前端模块之间有什么不同

node.js 在载入到最终的执行中，进行了包装，使得每个文件中的变量,天然的形成在一个闭包之中，不会污染全局变量。而浏览器端则通常是裸露(这是可以说的吗)的 JavaScript 代码片段

为了解决前后端一致性的问题，类库开发者需要将类库代码包装在一个闭包内

## 相关技术点

### V8

V8 是为 Google Chrome 设计的 JavaScript 运行引擎,是运用 C++写成，它将 JavaScript 源代码编译成本地机器码而不是随时解释,node.js 用 libuv 来处理异步事件，而 V8 提供了 JavaScript 的实时运行环境, libuv 是一个网络和文件系统功能的抽象层，可以用于 Windows 又可以用于匹配 POSIX 标准的系统

### npm

npm 是 node.js 附带的包管理器
npm 是一个命令行工具，用于从 npm registry 中下载、安装 node.js 程序，同时解决依赖问题
npm 提高了开发的速度，因为它能够负责第三方 node.js 程序的安装与管理

[npm官网](https://www.npmjs.com/)

我们这既然讲到 npm 了，那我们就顺便讲一下，npm 包文件和常用命令吧

#### 包文件说明

每个项目中最好都有一个 package.json 文件，可以简单理解为一个项目的说明书，这个文件中记载了项目名称，版本号，依赖包文件等等信息

首先在空白项目中执行 npm init 然后设置相关信息

```js
PS E:\demo\node-demo> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (demo) demo  // 项目名称
version: (1.0.0) 0.0.1  // 版本号
description: 这是我的第一个node项目  // 项目描述信息
entry point: (index.js) main.js  // 项目入口文件
test command:  // 测试指令，暂无
git repository:  // git 地址
keywords:  // 项目关键字，用来发布 npm 包用，暂无
author: chen_ruo  // 作者
license: (ISC)  // 开源协议
About to write to E:\demo\node-demo\package.json:

{
  "name": "demo",
  "version": "0.0.1",
  "description": "这是我的第一个node项目",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "chen_ruo",
  "license": "ISC"
}


Is this OK? (yes) yes // 输入 yes 自动创建 package.json
```

除了采用上面手动创建 pacjage.json 文件外，也可以使用 `npm init -y` 跳过向导，快速生成 package.json

 pacjage-lock.json 是锁定版本文件，防止无故升版本

简称,有好的方法不早说系列，非放在后面，但我就喜欢这样，嘻嘻

然后在安装第三方包是加上 --save 会自动在 package.json 中添加本次安装了那些包和这些包的版本号，例如输入 npm install jquery --save，然后打开 package.json

```js
"dependencies": {
    "jquery": "^3.6.0"
}
```

可以在 dependencies 属性中看到本次安装了 3.6 版本的 jquery。如果我们后续包 node_modules 文件删除后，只需要执行 npm install 就可以吧项目依赖的所有包自动安装回来

#### 常用命令

```
npm init
```

- 初始化项目，创建 package.json

- 还可以写：npm init -y 跳过向导，直接生成 package.json

```
npm install
```

- 一次性把 dependencies 选项中的依赖包全部安装
- 简写：npm i

```
npm install XXX --save
```

- 下载并保存依赖项到 package.json
- 简写：npm i -S

```
npm uninstall XXX
```

- 只删除包，不删除依赖项
- 简写：npm un

```
npm uninstall XXX --save
```

- 删除包的同时删除依赖项
- 简写：npm uni -S

```
npm list -g 
```

- 不加 -g ，则会列举当前目录下的安装包

```
npm info XXX
```

- 查看包的详细信息

```
npm info XXX version
```

- 获取最新版本信息

```
npm i XXX@1    //指定1版本安装
```

- 指定版本安装

```
npm  outdated 
```

- 检查包是否已经过时

package.json 中 dependencies 属性中的内容

```js
"dependencies ": { "XXX":"^2.1.0"}   ^表示  如果直接  npm i  将会 安装 XXX 2.*.*  最新版本
"dependencies ": { "XXX":"~2.1.0"}  ~表示  如果直接  npm i  将会 安装 XXX  2.1.* 最新版本
"dependencies ": { "XXX":"*"}  *表示  如果直接  npm i  将会 安装 XXX 最新版本
```

关于配置淘宝镜像，我就不写了，因为我也用不到嘻嘻

### 统一API

node.js 模块的API形式简单 ，易懂 ，node.js 将浏览器、数据（例如 MongoDB 或 CouchDB）等组合到一起，通过 JSON 提供一个统一的接口

node.js 支持客户端和服务端重新利用相同的模型和接口

### 单线程

node.js 以单线程运行，使用非阻塞 I/O 调用，从而可以支持数以万计的并发连接，又不会因多线程本身的特点而带来麻烦，基于这个特点就可以用于创建高并发应用程序

但 node.js 应用程序的设计目标是任何需要操作 I/O 的函数都使用回调函数，由于这个的缺憾，如果不使用 cluster、StrongLoop Process Manager 或 pm2 等模块，node.js 就难以处理多核或多线程等情况

### 事件循环

node.js 将其注册到操作系统中，这样可以及时注意到新连接的产生,每当新连接产生时，操作系统就会产生一个回调
在 node.js 运行时内部，每个连接都被分配一个小型的堆空间,与其他服务器程序不同的是，node.js 不使用进程或线程处理连接，而是采用事件循环来处理并发连接
而且 node.js 的事件循环不需要手动调用,在回调函数定义之后，服务器进入事件循环。当回调函数均被执行完毕之后，node.js 会结束事件循环

### 异步执行的运行机制

1. 所有同步任务都是在主线程上执行，就形成了一个执行栈（execution context stack）
2. 主线程之外，还存在一个“任务队列”（task queue），只要异步任务有了运行结果，就在“任务队列”之中放置一个事件
3. 一旦“执行栈”中的所有同步任务执行完毕，系统就会读取“任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行
4. 主线程不断重复上面的第三步
