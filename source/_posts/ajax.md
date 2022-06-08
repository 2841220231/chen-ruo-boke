title: AJAX

date: 2022-03-18 7:58:00

keywords: "javascript"

tags: 

- 学习笔记
- 前端
- javascript

categories: "javascript"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/相册-动漫/wallhaven-57ro31.webp

---

## 简介

**ajax** 全名 **async javascript and XML**(**异步**JavaScript和XML)

是前后台交互的能⼒ 也就是我们客户端给服务端发送消息的⼯具，以及接受响应的⼯具

AJAX 不是新的编程语言，而是一种使用现有标准的新方法

AJAX 是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下

是⼀个 默认异步执⾏机制的功能,AJAX分为同步（async = false）和异步（async = true）

### AJAX特点

#### 优点

- 不需要插件的⽀持，原⽣ js 就可以使⽤
- ⽤户体验好（`不需要刷新⻚⾯就可以更新数据`）
- 减轻服务端和带宽的负担

#### 缺点

- 搜索引擎的⽀持度不够，因为数据都不在⻚⾯上，搜索引擎搜索不到
- 没有浏览历史，不能回退
- 存在跨域问题
- 对SEO(搜素引擎优化)不友好

浏览器天生具发送HTTP请求的能力，比如在在址栏输入内容，提交FORM表单等

使用JS脚本发送HTTP请求，不会带来页面的刷新，所以用户体验非常好

### 跨域问题

当一个请求url的**协议,域名,端口**三者之间任意一个与当前的url不同都即为**跨域**

| 当前页面url                 | 被请求页面url                     | 是否跨域 | 原因                           |
| --------------------------- | --------------------------------- | -------- | ------------------------------ |
| `https://chen-ruo.top/`     | `https://chen-ruo.top/index.html` | 否       | 同源（协议、域名、端口号相同） |
| `https://chen-ruo.top/`     | `http://chen-ruo.top/`            | 跨域     | 协议不同（http/https）         |
| `https://chen-ruo.top/`     | `https://bilibili.com/`           | 跨域     | 主域名不同（test/baidu）       |
| `https://www.chen-ruo.top/` | `https://blog.chen-ruo.top/`      | 跨域     | 子域名不同（www/blog）         |

### 什么是同源策略

- 同源策略是**Netscape**提出的一个著名的安全策略，现在所有支持JavaScript的浏览器都会使用这个策略。同源策略是浏览器最核心也最基本的安全功能，如果缺少同源策略，浏览器的正常功能可能受到影响。可以说web是构建在同源策略的基础之上的，浏览器只是针对同源策略的一种实现。
- 同源： 协议、域名、端口号 必须完全相同。 `违背同源策略就是跨域`

### 非同源限制

【1】无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB

【2】无法接触非同源网页的 DOM

【3】无法向非同源地址发送 AJAX 请求

### 为什么浏览器要使用同源策略

为了保证用户的信息安全，防止恶意网站窃取数据，如果网页之间不满足同源要求，将不能

- 共享Cookie、LocalStorage、IndexDB
- 获取DOM
- AJAX请求不能发送

## XMLHttpRequest

使用XMLHttpRequest发送请求，是一种存在很久的方案。现代浏览器支持使用fetch的异步请求方式，fetch基于promise异步操作体验更好

### 基本使用

使用**XMLHttpRequest** 发送请求需要执行以下几步

1. 使用 **new XMLHttpRequest**创建xhr对象
2. **xhr.open** 初始化请求参数
3. **xhr.send** 发送网络请求
4. **xhr.onload** 监听请求结果
5. **xhr.onerror** 请求中断等错误发生时的处理

### 响应类型

通过设置 `xhr.responseType` 对响应结果进行声明，来对结果自动进行处理

下面是可以使用的响应类型

| 类型     | 说明                                         |
| -------- | -------------------------------------------- |
| text     | 响应结果为文本                               |
| json     | 响应内容为JSON，系统会自动将结果转为JSON对象 |
| blob     | 二进制数据响应                               |
| document | XML DOCUMENT 内容                            |

**XMLHttpRequest 对象方法描述**

![](https://img-blog.csdnimg.cn/20200315104357831.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L09yaWVudGFsXw==,size_16,color_FFFFFF,t_70)

**配置链接信息**

XMLHttpRequest 对象属性描述(`用于和服务器交换数据`)

![](https://img-blog.csdnimg.cn/20200315103859777.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L09yaWVudGFsXw==,size_16,color_FFFFFF,t_70)

### 响应结果

**xhr.onload** 用于处理响应完毕后的处理

使用以下属性来处理结果

- **xhr.status** 为HTTP状态码 如 404/422/403等，当为200时为正确响应(200~300之间为可以响应)
- **xhr.statusText** HTTP状态码内容，200时为ok,404 为Not Found
- **xhr.response** 服务器端响应的内容(响应体)

如果想要拿到响应，我们需要有两个**前提条件** 

1. 本次 HTTP 请求是成功的，也就是我们下面要说的 http 状态码为 200 ~ 299
2. 2. ajax 对象也有自己的状态码，用来表示本次 ajax 请求中各个阶段

```js
// 创建 XMLHttpRequest 对象
let xhr = new XMLHttpRequest()
//超时设置 5s 设置
xhr.timeout = 5000
// 设置请求信息
xhr.open("GET", "./demo.php")
// xhr 对象中的 open ⽅法是来配置请求信息的
// 第⼀个参数是本次请求的请求⽅式 get / post / put / ...
// 第⼆个参数是本次请求的 url 
// 第三个参数是本次请求是否异步，默认 true 表示异步，false 表示同步
// xhr.open('请求⽅式', '请求地址', 是否异步)

// 发送请求
xhr.send()//get 请求不传 body 参数，只有 post 请求使用
// 使⽤ xhr 对象中的 send ⽅法来发送请求

// 接收响应
//xhr.responseXML 接收 xml 格式的响应数据
//xhr.responseText 接收文本格式的响应数据
xhr.onload = function () {
    if (300 > xhr.status >= 200) {
        console.log(xhr.response)
    }
    else {
        console.log(`状态码${xhr.status}and ${xhr.statusText}`)
    }
}
xhr.onerror = function (error) {
    console.log(error)
}
```

当你前端想设置自定义的请求头时,需要如此后端设置响应头

```js
    //表示接收任意类型的请求							
app.all('/server', (request, response) => {
    //响应头 允许跨域  
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 运行自定义响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
})
```

### AJAX 状态码

ajax 状态码 - **xhr.readyState**

是用来表示一个 `ajax 请求的全部过程中的某一个状态`

```js
readyState === 0 // 表示未初始化完成，也就是 open 方法还没有执行 
readyState === 1 // 表示配置信息已经完成，也就是执行完 open 之后 
readyState === 2 // 表示 send 方法已经执行完成
readyState === 3 // 表示正在解析响应内容
readyState === 4 // 表示响应内容已经解析完毕，可以在客户端使用了
```

这个时候我们就会发现，当一个 ajax 请求的全部过程中，`只有当 readyState === 4 的时候，我们才可以正常使用服务端给我们的数据`

所以，配合 http 状态码,`xhr.status`为 200 ~ 299 

两个条件都满足的时候，才是本次请求正常完成

#### readyStateChange

在 ajax 对象中有一个事件，叫做 readyStateChange 事件
这个事件是专⻔用来`监听 ajax 对象的 readyState 值改变的的行为`
也就是说只要 `readyState 的值发生变化了，那么就会触发该事件`
所以我们就在这个事件中来监听 `ajax 的 readyState 是不是到 4 了`

```js
let xhr = new XMLHttpRequest()
xhr.open("GET", 'https://api.apiopen.top/api/sentences')
xhr.send()
xhr.onreadystatechange = function () {
    // 每次 readyState 改变的时候都会触发该事件
    // 我们就在这里判断 readyState 的值是不是到 4
    // 并且 http 的状态码是不是 200 ~ 299
    if (xhr.readyState === 4 && /^2\d{2|$/.test(xhr.status)) {
        // 这里表示验证通过
        // 我们就可以获取服务端给我们响应的内容了
        console.log(`状态码${xhr.status}and ${xhr.response}`)
    }
}
```

#### 使用 ajax 发送请求时携带参数

我们使用 ajax 发送请求也是可以携带参数的
参数就是和后台交互的时候给他的一些信息
但是携带参数get 和 post两个方式还是有区别的

##### GET 还是 POST？

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

### GET

```js
        // 创建对象
        let xhr = new XMLHttpRequest()
        // 初始化 设置请求方法和 url
        // 直接在地址后面加一个 ?，然后以 key=value 的形式传递 // 两个数据之间以 & 分割
        xhr.open("GET", "https://chen-ruo.top/server?a=100&b=200&c=300")
        // 发送
        xhr.send()
        // 事件绑定 处理服务端返回的结果
        // on  when 当....时候
        // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
        // change  改变
        xhr.onreadystatechange = function () {
            //判断 (服务端返回了所有的结果)
            if (xhr.readyState === 4) {
                //判断响应状态码 200  404  403 401 500
                // 2xx 成功
                if (300 > xhr.status >= 200) {
                    //处理结果  行 头 空行 体
                    //响应 
                    // console.log(xhr.status);//状态码
                    // console.log(xhr.statusText);//状态字符串
                    // console.log(xhr.getAllResponseHeaders());//所有响应头
                    // console.log(xhr.response);//响应体
                    //设置 result 的文本
                    result.innerHTMK = xhr.response
                }
                else{
                    
                }
            }
        }
```

### POST

post 请求的参数是携带在请求体中的，所以`不需要再 url 后面拼接`

```js
        // 创建对象
        let xhr = new XMLHttpRequest()
        // 初始化 设置请求方法和 url
        xhr.open("POST", "https://chen-ruo.top/server")
        //设置请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader('name', 'atguigu')
        // 发送
        xhr.send('a=100&b=200&c=300')
        // 如果是用 ajax 对象发送 post 请求，必须要先设置一下请求头中的 content- type
	    // 告诉一下服务端我给你的是一个什么样子的数据格式 xhr.setRequestHeader('content-type', 'application/x-www-form- urlencoded')
	    // 请求体直接再 send 的时候写在 () 里面就行
	    // 不需要问号，直接就是 'key=value&key=value' 的形式 xhr.send('a=100&b=200')
        // xhr.send('a:100&b:200&c:300')
        // xhr.send('1233211234567')
        // 事件绑定 处理服务端返回的结果
        // on  when 当....时候
        // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
        // change  改变
        xhr.onreadystatechange = function () {
            //判断 (服务端返回了所有的结果)
            if (xhr.readyState === 4) {
                //判断响应状态码 200  404  403 401 500
                // 2xx 成功
                if (300 > xhr.status >= 200) {
                    //处理结果  行 头 空行 体
                    //响应 
                    // console.log(xhr.status);//状态码
                    // console.log(xhr.statusText);//状态字符串
                    // console.log(xhr.getAllResponseHeaders());//所有响应头
                    // console.log(xhr.response);//响应体
                    //处理服务端返回的结果
                    result.innerHTMK = xhr.response
                }
                else {

                }
            }
        }
```

### 请求超时与网络异常

> 当你的请求时间过长,或者无网络时,进行的相应处理

```js
        // 创建对象
        let xhr = new XMLHttpRequest()
        //超时设置3s 设置
        xhr.timeout = 3000
        //超时回调
        xhr.ontimeout = function () {
            alert("你的网络异常，请稍后重试")
        }
        //网络异常回调
        xhr.onerror = function () {
            alert("你的网络出了亿点异常")
        }
        // 初始化 设置请求方法和 url
        xhr.open("POST", "https://chen-ruo.top/server")
        // 发送
        xhr.send()
        // 事件绑定 处理服务端返回的结果
        // on  when 当....时候
        // readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4
        // change  改变
        xhr.onreadystatechange = function () {
            //判断 (服务端返回了所有的结果)
            if (xhr.readyState === 4) {
                //判断响应状态码 200  404  403 401 500
                // 2xx 成功
                if (300 > xhr.status >= 200) {
                    //处理结果  行 头 空行 体
                    //响应 
                    // console.log(xhr.status);//状态码
                    // console.log(xhr.statusText);//状态字符串
                    // console.log(xhr.getAllResponseHeaders());//所有响应头
                    // console.log(xhr.response);//响应体
                    //处理服务端返回的结果
                    result.innerHTMK = xhr.response
                }
                else {

                }
            }
        }
```

### 取消请求

> 在请求发出去后`但是未响应完成`时可以进行取消请求操作

```js
<body>
    <button>点击请求</button>
    <button>取消请求</button>
    <script>
        let bth = document.querySelector("button")
        let a = null
        bth[0].addEventListener("click", function () {
            a = new XMLHttpRequest()
            a.open("GET", "https://chen-ruo.top/server")
            a.send()
        })
        // abort
        bth[1].addEventListener("click", function () {
            a.abort()
        }) 
    </script>
</body>
```

### 重复请求问题

> 利用之前Ⅴ中取消请求知识点,当我点击时判断之前请求是否在发送中,如果是,则停止请求

```js
        btns[0].onclick = function () {
            //判断标识变量
            if (isSending) x.abort()// 如果正在发送, 则取消该请求, 创建一个新的请求
            x = new XMLHttpRequest()
            //修改 标识变量的值
            isSending = true
            x.open("GET", "https://chen-ruo.top/server")
            x.send()
            x.onreadystatechange = function () {
                if (x.readyState === 4) {
                    //修改标识变量
                    isSending = false
                }
            }
        }
```

### 发送表单

使用XMLHttpRequest发送POST请求

#### 后台服务

下面创建的demo.php后台脚本（你可以使用你喜欢的后台脚本进行测试）

```text
<?php
echo $_POST['title'];
```

然后启动服务器

```text
php -S localhost:8000
```

现在可以在浏览器中访问 `http://localhsot:8080/demo.php` 请求demo.php

#### 前端异步请求

```js
        let fromtwo = document.querySelector("#demo-one")
        fromtwo.addEventListener("submit",function(){
            event.preventDefault()
            demo("./demo.php",new FormData(this)) 
            //new FormData() 将form表单中的信息包装成键值对的形式，返回一个对象
        })
        function demo(url , data) {
            let xhr = new XMLHttpRequest()
            xhr.timeout = 5000
            xhr.open("GET", url)
            xhr.send(data)
            xhr.onload = function () {
                if (300 > xhr.status >= 200) {
                    console.log(xhr.response)
                }
                else {
                    console.log(`状态码${xhr.status}and ${xhr.statusText}`)
                }
            }
            xhr.onerror = function (error) {
                console.log(error)
            }
        }
```

### 封装请求类

结合Promise来构建一个XHR异步处理类，使异步请求操作的变得更简单

```JS
class DEMO {
            options = {
                responseType: 'json',
            }
            constructor(method = 'GET', url, data = null, options) {
                this.method = method
                this.url = url
                this.data = this.formatData(data)
                Object.assign(this.options, options)
            }
            formatData(data) {
                if (typeof data != 'object' || data == null) data = {}
                let form = new FormData()
                for (const [name, value] of Object.entries(data)) {
                    form.append(name, value)
                }

                return form
            }
            static get(url, options) {
                return new this('GET', url, null, options).xhr()
            }
            static post(url, data, options) {
                return new this('POST', url, data, options).xhr()
            }
            xhr() {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest()
                    xhr.open(this.method, this.url)
                    xhr.responseType = this.options.responseType
                    xhr.send(this.data)
                    xhr.onload = function () {
                        if (xhr.status != 200) {
                            reject({ status: xhr.status, error: xhr.statusText })
                        } else {
                            resolve(xhr.response)
                        }
                    }
                    xhr.onerror = function (error) {
                        reject(error)
                    }
                })
            }
        }
```

使用DEMO.get静态方法发送GET请求

```JS
DEMO.get('1.php', {
    responseType: 'text',
  }).then((response) => {
    console.log(response)
  })
```

使用DEMO.post静态方法发送POST请求

```JS
DEMO.post('2.php', data, {
  responseType: 'json',
}).then((response) => {
  console.log(response)
})
```

## fetch

fetch()方法与XMLHttpRequest类似，**fetch**也可以发起**ajax**请求，但是与XMLHttpRequest不同的是，**fetch**方式使用**Promise**，相比较XMLHttpRequest更加的简洁

fetch是JS升级后提供的更简便的网络请求的操作方法，内部使用Promise来完成异步请求

- response.json()接收JSON类型数据
- response.text()接收text类型数据
- response.blog()接收blog二进制数据

url参数是必须要填写的，option可选，设置fetch调用时的Request对象，如method、headers等
比较常用的**Request**对象有：

- method - 支持 GET, POST, PUT, DELETE, HEAD
- url - 请求的 URL
- headers - 对应的 Headers 对象
- body - 请求参数（JSON.stringify 过的字符串或’name=jim\u0026age=22’ 格式)

### 请示步骤

使用fetch方法发送异步请求需要分以下两步操作

#### 响应头解析

第一步对服务器返回的响应头进行解析，会接到Response类创建的对象实例，里面包含以下属性

- status:HTTP状态码
- ok:状态码为200-299 时为true的布尔值

#### 响应内容解析

第二步对返回的保存在response.body中的响应结果进行解析，支持了以下几种方式对结果进行解析

- response.json()接收JSON类型数据
- response.text()接收TEXT类型数据
- response.blog()接收Blog二进制数据

> 以上方法不能同时使用，因为使用一个方法后数据已经被处理，其他方法就不可以操作了

### 实例操作

下面来体验使用fetch发送请求

```js
// url (必须), options (可选)
fetch('https://api.apiopen.top/api/sentences', {
    method: "get"
})
    //第一个then  设置请求的格式
    .then(msg => {
        console.log(msg)
        return msg.json()
    })
    // 第二个then 处理回调
    .then(msg => {
        console.log(msg)
    }).catch(error => {
        // 出错了
        console.log(error)
    })
```

#### 后台服务

下面创建demo.php后台脚本（你可以使用你喜欢的后台脚本进行测试）

```php
<?php
$articles = [
    ['name' => 'demo'],
    ['name' => 'baidu.com'],
    ['name' => 'dede.com']
];
echo json_encode($articles);
```

然后启动服务器

```php
php -S localhost:8000
```

现在可以在浏览器中访问 `http://localhsot:8080/demo.php` 请求demo.php

#### 发送请求

下面使用fetch发送get请求

```js
fetch(`./1.php`)
.then(response => {
    return response.json()
})
.then(articles => {
    console.log(articles)
})
```

因为fetch结果是promise所以也可以使用async/await操作

```js
async function query() {
  const response = await fetch(`1.php`)
  const articles = await response.json()
  console.log(articles)
}
query()
```

### POST

发送POST请求需要设置请求头Request header

#### 发送请求

- 发送的JSON类型需要设置请求头为 `application/json;charset=utf-8`

```js
async function post() {
    const response = await fetch(`./demo.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ name: '陈若' }),
    })
    if (response.ok) {
        const articles = await response.json()
        console.log(articles)
    }
}
post()
```

#### 后台响应

因为前台发送的是非表单数据，而是JSON字符串所以后台使用 `php://input` 来接收数据

```php
<?php
echo file_get_contents('php://input');
```

## axios

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，简单的理解就是ajax的封装

### 特征

- 从浏览器中创建 XMLHttpRequest
- 从 node.js 发出 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防止 [CSRF/XSRF](http://baike.baidu.com/link?url=iUceAfgyfJOacUtjPgT4ifaSOxDULAc_MzcLEOTySflAn5iLlHfMGsZMtthBm5sK4y6skrSvJ1HOO2qKtV1ej_)

### 安装(常用)

利用npm安装（例如vue脚手架项目中使用）

```js
npm  install axios
```

利用cdn(常用)

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### 发送get、post请求

#### get请求

##### get请求方式一

```js
axios({
		// 默认请求方式为get
		method: 'get',
		url: 'api',
		// 传递参数
		params: {
			key: value
		},
		// 设置请求头信息
		headers: {
			key: value
		},
		responseType: 'json'
	}).then((response) => {
		// 请求成功
		let res = response.data
		console.log(res)
	}).catch((error) => {
		// 请求失败
		console.log(error)
})
```

##### get请求方式二

```js
axios.get("api", {
	// 传递参数
	params: {
		key: value
	},
    // 设置请求头信息，可以传递空值
	headers: {
		key: value
	}
}).then((response) => {
	// 请求成功
	let res = response.data
	console.log(res)
}).catch(error => {
	// 请求失败
	console.log(error)
})
```

#### post请求

##### post请求方式一

```js
// 注：post请求方法有的要求参数格式为formdata格式，此时需要借助 Qs.stringify()方法将对象转换为字符串
let obj = qs.stringify({
	key: value
})
axios({
	method: 'post',
	url: 'api',
	// 传递参数
	data: obj,
	// 设置请求头信息
	headers: {
		key: value
	},
	responseType: 'json'
}).then((response )=> {
	// 请求成功
	let res = response.data
	console.log(res)
}).catch(error => {
	// 请求失败
	console.log(error)
})
```

##### post请求方式二

```js
let data = {
	key: value
},
headers = {
	USERID: "",
	TOKEN: ""
};
// 若无headers信息时，可传空对象占用参数位置
axios.post("api", qs.stringify(data), {
	headers
}
}).then((response) => {
	// 请求成功
	let res = response.data
	console.log(res)
}).catch((error) => {
	// 请求失败，
	console.log(error)
})
```

> 注意：
> post请求的时候参数通过data进行传递
> get请求的时候参数通过params进行传递

### 发送并发请求

#### 主要用到两个函数：

#### axios.all([])

请求成功时响应的是一个数组

```html
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        axios.all([
            axios.get('https://api.apiopen.top/api/sentences'),
            axios.get('https://api.apiopen.top/api/getShortVideo?page=0&size=10')
        ]).then(res => {
            console.log(res[0])  //第一个axios请求得到的
            console.log(res[1])  //第二个axios请求得到的
        }).catch(err => {
            console.log(err)
        })
    </script>
```

#### axios.spread()

采用axios提供的**spread**函数处理响应数组结果

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    axios.all([
        axios.get('http://localhost:8888/info'),
        axios.get('http://localhost:8888/infos')
    ]).then(axios.spread((res1,res2) =>{
        console.log(res1) //第一个axios请求得到的
        console.log(res2) //第二个axios请求得到的
    })).catch((err) => {
        console.log(err)
    })
</script>
```


### axios API

可以通过将相关配置传递给 axios 来进行请求

#### axios(config)

```js
// 发送一个 POST 请求
axios({
  method: 'post',
  url: 'https://api.apiopen.top/api/sentences',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
```

#### axios(url[, config])

```js
// 发送一个 GET 请求 (GET请求是默认请求模式)
axios('https://api.apiopen.top/api/sentences')
```

####  请求方法别名

为了方便起见，已经为所有支持的请求方法提供了别名

- axios.request（config）
- axios.get（url [，config]）
- axios.delete（url [，config]）
- axios.head（url [，config]）
- axios.post（url [，data [，config]]）
- axios.put（url [，data [，config]]）
- axios.patch（url [，data [，config]]）

**注意**
当使用别名方法时，不需要在config中指定url，method和data属性

#### 并发

帮助函数处理并发请求。

- axios.all（iterable）
- axios.spread（callback）

### 创建实例

项目中网络请求可能不止一个，可以通过创建多个axios实例进行不同的配置

##### axios.create([config])

```js
<script>
    //创建一个axios的实例
    let instance=axios.create({
        baseURL:"http://localhost:8888/",
        timeout:4000.
        headers: {'X-Custom-Header': 'foobar'}
    })
    //实例的使用
    instance({
        url: "info"
    }).then(res=>{
        console.log(res)
    })
</script>
```

#### 实例方法

可用的实例方法如下所示。 指定的配置将与实例配置合并

axios＃request（config）
axios＃get（url [，config]）
axios＃delete（url [，config]）
axios＃head（url [，config]）
axios＃post（url [，data [，config]]）
axios＃put（url [，data [，config]]）
axios＃patch（url [，data [，config]]）

### 请求配置

这些是用于发出请求的可用配置选项。 只有url是必需的。 如果未指定方法，请求将默认为GET

```js
{
  // `url`是将用于请求的服务器URL
  url: '/user',
  // `method`是发出请求时使用的请求方法
  method: 'get', // 默认
  // `baseURL`将被添加到`url`前面，除非`url`是绝对的。
  // 可以方便地为 axios 的实例设置`baseURL`，以便将相对 URL 传递给该实例的方法。
  baseURL: 'https://some-domain.com/api/',
  // `transformRequest`允许在请求数据发送到服务器之前对其进行更改
  // 这只适用于请求方法'PUT'，'POST'和'PATCH'
  // 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream
  transformRequest: [function (data) {
    // 做任何你想要的数据转换
    return data;
  }],
  // `transformResponse`允许在 then / catch之前对响应数据进行更改
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],
  // `headers`是要发送的自定义 headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `params`是要与请求一起发送的URL参数
  // 必须是纯对象或URLSearchParams对象
  params: {
    ID: 12345
  },
  // `paramsSerializer`是一个可选的函数，负责序列化`params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
  // `data`是要作为请求主体发送的数据
  // 仅适用于请求方法“PUT”，“POST”和“PATCH”
  // 当没有设置`transformRequest`时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream
  data: {
    firstName: 'Fred'
  },
  // `timeout`指定请求超时之前的毫秒数。
  // 如果请求的时间超过'timeout'，请求将被中止。
  timeout: 1000,
  // `withCredentials`指示是否跨站点访问控制请求
  // should be made using credentials
  withCredentials: false, // default
  // `adapter'允许自定义处理请求，这使得测试更容易。
  // 返回一个promise并提供一个有效的响应（参见[response docs]（＃response-api））
  adapter: function (config) {
    /* ... */
  },
  // `auth'表示应该使用 HTTP 基本认证，并提供凭据。
  // 这将设置一个`Authorization'头，覆盖任何现有的`Authorization'自定义头，使用`headers`设置。
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },
  // “responseType”表示服务器将响应的数据类型
  // 包括 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
  //`xsrfCookieName`是要用作 xsrf 令牌的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default
  // `xsrfHeaderName`是携带xsrf令牌值的http头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
  // `onUploadProgress`允许处理上传的进度事件
  onUploadProgress: function (progressEvent) {
    // 使用本地 progress 事件做任何你想要做的
  },
  // `onDownloadProgress`允许处理下载的进度事件
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
  // `maxContentLength`定义允许的http响应内容的最大大小
  maxContentLength: 2000,
  // `validateStatus`定义是否解析或拒绝给定的promise
  // HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被
  // 拒绝。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
  // `maxRedirects`定义在node.js中要遵循的重定向的最大数量。
  // 如果设置为0，则不会遵循重定向。
  maxRedirects: 5, // 默认
  // `httpAgent`和`httpsAgent`用于定义在node.js中分别执行http和https请求时使用的自定义代理。
  // 允许配置类似`keepAlive`的选项，
  // 默认情况下不启用。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
  // 'proxy'定义代理服务器的主机名和端口
  // `auth`表示HTTP Basic auth应该用于连接到代理，并提供credentials。
  // 这将设置一个`Proxy-Authorization` header，覆盖任何使用`headers`设置的现有的`Proxy-Authorization` 自定义 headers。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },
  // “cancelToken”指定可用于取消请求的取消令牌
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 响应结构

某个请求的响应包含以下信息

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` 是生成此响应的请求
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

使用 then 时，您将收到如下响应

```js
axios.get("https://api.apiopen.top/api/sentences")
.then(msg=>{
    console.log(msg.data)
    console.log(msg.status)
    console.log(msg.statusText)
    console.log(msg.headers)
    console.log(msg.config)
})
```

### 配置默认值

您可以指定将应用于每个请求的配置默认值

#### 全局axios配置

首先通过axios.defaults.baseURL抽离出公共的部分，在各部分请求地址时可以省去公共的部分，适用于项目中所有的axios请求

```js
//baseURL的举例，还可以配置headers等
    axios.defaults.baseURL="http://localhost:8888/"
    axios.defaults.timeout=4000
    axios.get("info").then(res=>{
        console.log(res)
    })
```

#### 自定义实例默认值

```js
//在创建实例时设置配置默认值
var instance = axios.create（{
   baseURL：'https://chen-ruo.top'
}）
 
//在实例创建后改变默认值
instance.defaults.headers.common ['Authorization'] = AUTH_TOKEN
```

#### 配置优先级顺序

配置将与优先顺序合并。 顺序是lib / defaults.js中的库默认值，然后是实例的defaults属性，最后是请求的config参数。 后者将优先于前者。 这里有一个例子

```js
//使用库提供的配置默认值创建实例
//此时，超时配置值为`0`，这是库的默认值
let demo = axios.create()
//覆盖库的超时默认值
//现在所有请求将在超时前等待2.5秒
demo.defaults.timeout = 2500
//覆盖此请求的超时，因为它知道需要很长时间
demo.get("https://api.apiopen.top/api/sentences", {
    timeout: 5000
})
```

### axios的拦截器

#### axios提供了两种拦截器：

**1、请求拦截器（成功，失败）**

**2、响应拦截器（成功，失败）**

#### 拦截器的作用：

**1、在网络请求时发起请求**

**2、请求响应时对操作进行相应的处理**

#### 拦截器的使用案例：

**1、请求拦截器成功时，可以添加网页加载的动画等**

**2、响应拦截器成功时，可以进行数据的相应处理**

```js
//定义了两个请求拦截器，两个响应拦截器，为了看运行流程
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
       //axios的请求拦截器，在axios进行网络请求之前触发
       axios.interceptors.request.use(
           config => {
               //在发送请求之前做些什么
               console.log("请求拦截器方向成功1");
               return config;   //请求拦截成功时必须返回config
           },
           error => {
               //对请求错误做些什么
               console.log("请求拦截器方向失败1");
               return Promise.reject(error);
           }
       )
       axios.interceptors.request.use(
           config => {
               console.log("请求拦截器方向成功2");  
               return config;   //请求拦截成功时必须返回config
           },
           error => {
               console.log("请求拦截器方向失败2");
               return Promise.reject(error);
           }
       )
       //axios的响应拦截器，在axios响应数据之前触发
       axios.interceptors.response.use(
           response => {
               //对响应数据做点什么
               console.log("响应拦截器方向成功1");
               return response;  //响应拦截器成功时必须返回response
           },
           error => {
               //对错误数据做点什么
               console.log("响应拦截器方向失败1");
               return Promise.reject(error);
           }
       )
       axios.interceptors.response.use(
           response => {
               console.log("响应拦截器方向成功2");
               return response;  //响应拦截器成功时必须返回response
           },
           error => {
               console.log("响应拦截器方向失败2");
               return Promise.reject(error);
           }
       )

        //axios发送get请求
        axios.get('http://localhost:8888/info').then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
</script>

```



## 解决跨域

### 跨域的五个解决方式

 1、前端使用jsonp （不推荐使用）

 2、后台Http请求转发

 3、后台配置同源Cors （推荐）

 4、使用SpringCloud网关

 5、使用nginx做转发 (推荐)

本课程提到了其中的两种:

### JSONP 

#### JSONP 是什么

**JSONP**(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明 才智开发出来，只支持 get 请求

#### JSONP 怎么工作的

在网页有一些标签天生具有跨域能力，比如：script、img、iframe、link 等标签可以跨域的性质，来避免浏览器同源策略对跨域的限制， JSONP 就是利用 **script** 标签的跨域能力来发送请求的，其他标签均接收不到服务器数据(**俗称天生反骨**)

#### 优势

- JSONP不像使用 XMLHttpRequest 对象实现的**原生ajax**发送请求那样受到同源策略的限制，JSONP可以忽略同源策略的影响
- JSONP对浏览器的兼容性处理的更好

#### 劣势

- JSONP是使用script标签去发送的请求，因此只能处理get请求，不能处理post以及其他的http请求
- JSONP是在发送请求的时候传递了一个接受数据的函数，因此要后端配合去使用
- JSONP在发送请求失败的时候，不会返回状态码
- JSONP在发送请求的时候安全性能较低，在使用JSONP的时候必须要保证使用的JSONP服务必须是安全可信的

#### 实现步骤

1. JavaScript 实现对 URL 和 查询字符串 的拼接，并加上“callback=回调函数名”
2. 将拼接后的 URL 赋值给 script 标签的 src 属性
3. 定义全局函数 window[funcName] 用于动态回调
4. script 忽略浏览器同源策略的限制，跨域请求目标资源，服务器收到访问请求后，获取查询字符串，并得到回调函数名
5. 服务器返回的是一段 JavaScript 语法文档，因此动态调用回调函数，若使用 express 框架，即为 res.send(`${callback}('${data}')`)，此处 data 为一个变量名，存放着需要返回的数据

#### 实例

##### 封装

```js
// 接收数据的函数
function getshuju(data) {
    console.log(data, "获取到的数据")
}
// 封装JSONP函数
function jsonp(obj) {
    //创建script标签
    let script = document.createElement("script")

    if (!obj.callbackName) {
        throw Error("jsonp传递回的接受的数据必须有回调函数名称")
    }
    // 拼接字符串
    let src = `${obj.url}?callback=${obj.callbackName}`
    // 判断是否传递data 【queryString数据】
    if (obj.data) {
        // 传递了，遍历数据 进行拼接
        for (let i in obj.data) {
            src += `&${i}=${obj.data[i]}`
        }
    }
    // 给script 标签添加src 属性
    script.src = src
    // 上树标签
    document.body.appendChild(script)
}

jsonp({
    url: 'http://localhost:3000/login',
    data: {
        color: "red",
        num: 10,
    },
    callbackName: "getshuju"
})
```

##### 模拟接口数据

```js
// 引入express
const express = require("express")
// 注册程序
const app = express()
// 创建变量
const userinfo = {
    username: "root",
    password: "1234",
}
// 监听接口
app.get("/login", (req, res) => {
    // 返回数据
    res.send(`${req.query.callback}(${JSON.stringify(userinfo)})`)
})
// 监听端口
app.listen(3000, () => {
    console.log("3000端口正在运行")
})
```

## 相关文章参考

[AJAX](https://gitee.com/hongjilin/hongs-study-notes/blob/master/%E7%BC%96%E7%A8%8B_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Ajax%E3%80%81Axios%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Ajax%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.md#https://gitee.com/link?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FCORS)

[axios中文文档|axios中文网 | axios (axios-js.com)](http://www.axios-js.com/zh-cn/docs/#axios-post-url-data-config-1)