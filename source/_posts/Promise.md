title: Promise

date: 2022-03-22 7:58:00

keywords: "javascript"

tags: 

- 学习笔记
- 前端
- javascript

categories: "javascript"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/相册-动漫/wallhaven-e7wlok.webp

---

## Promise

`JavaScript` 中存在很多异步操作,`Promise` 将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。可以通过链式调用多个 `Promise` 达到我们的目的

含义:Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。简单点说，它就是用于处理异步操作的，异步处理成功了就执行成功的操作，异步处理失败了就捕获错误或者停止后续操作。

发展:Promise 是异步编程的一种解决方案，比传统的解决方案–回调函数和事件－－更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了语法，原生提供了Promise

Promise 在各种开源库中已经实现，现在标准化后被浏览器默认支持。

> promise 是一个拥有 `then` 方法的对象或函数

**resolve**作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

**reject**作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

.then()
1、接收两个函数作为参数，分别代表**fulfilled**（成功）和**rejected**（失败）
2、.then()返回一个新的 实例，所以它可以链式调用
3、当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态响应函数执行
4、状态响应函数可以返回新的promise，或其他值，不返回值也可以我们可以认为它返回了一个null；
5、如果返回新的promise，那么下一级.then()会在新的promise状态改变之后执行
6、如果返回其他任何值，则会立即执行下一级.then()

错误处理两种做法：
第一种：reject('错误信息').then(() => {}, () => {错误处理逻辑})
第二种：throw new Error('错误信息').catch( () => {错误处理逻辑})
推荐使用第二种方式，更加清晰好读，并且可以捕获前面所有的错误（可以捕获N个then回调错误）



通过多个示例来感受一下不使用 `promise` 时，处理相应问题的不易，及生成了不便阅读的代码

### 定时嵌套

一个定时器执行结束后，执行另一个定时器，这种嵌套造成代码不易阅读

```html
<style>
    div {
        width: 100px;
        height: 100px;
        background-image: url(https://w.wallhaven.cc/full/q2/wallhaven-q2k2w7.jpg);
        background-size: cover;
        border-radius: 20%;
        position: absolute;
    }
</style>

<body>
    <div></div>
</body>
<script>
    function demo(calback, shijian = 100) {
        let id = setInterval(() => {
            calback(id)
        }, shijian)
    }
    let divs = document.querySelector("div")
    demo(demo1 => {
        let left = parseInt(window.getComputedStyle(divs).left)
        divs.style.left = left + 10 + "px"

        if (left > 200) {
            clearInterval(demo1)

            demo(demo2 => {
                let width = parseInt(window.getComputedStyle(divs).width)
                divs.style.width = width - 1 + "px"
                if (width <= 0) {
                    clearInterval(demo2)
                }
            }, 10)

        }

    }, 100)
</script>
```

### 图片加载

图片后设置图片边框，也需要使用回调函数处理，代码嵌套较复杂

```html
    <script>
        function demo(file, resolve, reject) {
            let image = new Image()
            image.src = file
            image.onload = () => {
                resolve(image)
            }
            image.onerror = () => {
                reject(new Error("load fail"))
            }
            document.body.appendChild(image)
        }
        demo(
            "https://w.wallhaven.cc/full/6o/wallhaven-6o19el.jpg",
            resolve => {
                resolve.style.border = "solid 10px #dfc"
                resolve.style.width = "500px"

            },
            reject => {
                console.log(reject)
            }
        )
    </script>
```

### 加载文件

异步加载外部`JS`文件，需要使用回调函数执行，并设置的错误处理的回调函数

```html
    <script>
        function demo(file, resolve, reject) {
            let script = document.querySelector("script")
            script.src = file
            script.onload = resolve
            script.onerror = reject
            document.body.appendChild(script)
        }

        demo("./demo.js",
            script => {
                console.log(`${script.path[0].src} 加载成功`)
            }),
            error => {
                console.log(`${error.srcElement.src} 加载失败`)
            }
    </script>
```

### 异步请求

使用传统的异步请求也会产生回调嵌套的问题

```html
    <script>
        function ajax(url, resolve, reject) {
            let xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.send()
            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(JSON.parse(this.response))
                }
                else {
                    reject(this)
                }
            }
        }
        ajax("https://api.apiopen.top/api/sentences",
            resolve => {
                console.log(resolve.result.name)
                console.log("恭喜成功了")
            }),
            reject => {
                console.log(reject)
                console.log("失败")
            }
    </script>
```

### 麦当劳

模拟麦当劳吃饭的事情，使用 `promise` 操作异步的方式每个阶段会很清楚

```html
    <script>
        let kfc = new Promise((resolve, reject) => {
            console.log("厨房开始做菜")
            resolve("我是麦当劳，你的餐，已经完成")
        })
        let dad = kfc.then(msg => {
            console.log(`成功接到麦当劳的消息,${msg}`)
            return {
                then(resolve) {
                    setTimeout(() => {
                        resolve("这个不辣")
                    }, 2000)
                }
            }
        })
        let son = dad.then(msg => {
            return new Promise((resolve, reject) => {
                console.log("收到信息:" + msg)
                console.log("来将可留姓名")
                setTimeout(() => {
                    resolve("我是郭杰瑞")
                }, 2000)
            })
        })
        let ma = son.then(msg => {
            console.log(msg)
        })
    </script>
```

#### 回调地狱

以往的回调方式，就会让人苦不堪言

```html
    <script>
        function notice(msg, then) {
            then(msg)
        }
        function meal() {
            notice("厨房开始做菜", msg => {
                console.log(msg)
                notice("我是麦当劳，你的餐，已经完成", msg => {
                    console.log(`成功接到麦当劳的消息,${msg}`)
                    setTimeout(() => {
                        notice("这个不辣", msg => {
                            console.log(msg)
                            console.log("来将可留姓名")
                            setTimeout(() => {
                                notice("我是郭杰瑞", msg => {
                                    console.log(msg)
                                })
                            }, 2000)
                        })

                    }, 2000)
                })
            })
        }
        meal()
    </script>
```

## 异步状态

Promise 可以理解为**承诺**，就像我给你的承诺，成功会回来娶你，失败会雪藏起来

- 一个 `promise` 必须有一个 `then` 方法用于处理状态改变

注意:并且这个状态转化是单向的，不可逆转，已经确定的状态（fulfilled/rejected）无法转回初始状态（pending）



### 状态说明

Promise包含`pending`、`fulfilled`、`rejected`三种状态

- `pending` 指初始等待状态，初始化 `promise` 时的状态
- `resolve` 指已经解决，将 `promise` 状态设置为`fulfilled`
- `reject` 指拒绝处理，将 `promise` 状态设置为`rejected`
- `promise` 是生产者，通过 `resolve` 与 `reject` 函数告之结果
- `promise` 非常适合需要一定执行时间的异步任务
- 状态一旦改变将不可更改

promise 是队列状态，就像多米诺骨牌游戏，状态一直向后传递，当然其中的任何一个promise也可以改变状态

promise 没有使用 `resolve` 或 `reject` 更改状态时，状态为 `pending`

```js
console.log(
  new Promise((resolve, reject) => {
  })
) //Promise {<pending>}
```

当更改状态后

```js
console.log(
  new Promise((resolve, reject) => {
    resolve("fulfilled")
  })
); //Promise {<resolved>: "fulfilled"}

console.log(
  new Promise((resolve, reject) => {
    reject("rejected")
  })
); //Promise {<rejected>: "rejected"}
```

`promise` 创建时即立即执行即同步任务，`then` 会放在异步微任务中执行，需要等同步任务执行后才执行

```js
        let demo = new Promise((resolve, reject) => {
            resolve("我是郭杰瑞")
            console.log("这个不辣")
        })
        demo.then(msg => {
            console.log(msg)
        })
        console.log("来将可留姓名")
```

`promise` 操作都是在其他代码后执行

- `promise` 的 then、catch、finally的方法都是异步任务
- 程序需要将主任务执行完成才会执行异步队列任务

```js
        let demo = new Promise(resolve=>{
            resolve("成功的异步回调")
        })
        demo.then(alert)
        alert("这是迪迦吗")
        demo.then(()=>{
            alert("这就是光")
        })
```

在三秒后将 `Promise` 状态设置为 `我是陈若` ，然后执行 `then` 方法

```js
        let demo = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("我是陈若")
            }, 3000)
        }).then(msg => {
            console.log(msg)
        }, error => {
            console.log(error)
        })
```

状态被改变后就不能再修改了，下面先通过`resolve` 改变为成功状态，表示`promise` 状态已经完成，就不能使用 `reject` 更改状态了

```js
new Promise((resolve, reject) => {
  resolve("操作成功")
  reject(new Error("请求失败"))
}).then(
  msg => {
    console.log(msg)
  },
  error => {
    console.log(error)
  }
)
```

### 动态改变

下例中p2 返回了p1 所以此时p2的状态已经无意义了，后面的then是对p1状态的处理

```js
        let p1 = new Promise((resolve , reject)=>{
            reject("失败")
        })
        let p2 = new Promise(resolve=>{
            resolve(p1)
        })
        p2.then(
            msg=>{
                console.log("成功")
                console.log(msg)
            },
            error=>{
                alert("大失败")
                console.log(error)
            }
        )
```

如果 `resolve` 参数是一个 `promise` ，将会改变`promise`状态

下例中 `p1` 的状态将被改变为 `p2` 的状态

```js
        let p1 = new Promise((resolve, reject) => {
            resolve(
                new Promise((resolve, reject) => {
                    reject("大失败")
                })
            )
        }).then(msg => {
            alert("成功的回调")
            console.log(msg)
        }, error => {
            alert("失败的回调")
            console.log(error)
        })
```

当**promise**做为参数传递时，需要等待promise执行完才可以继承，下面的p2需要等待p1执行完成

- 因为`p2` 的`resolve` 返回了 `p1` 的promise，所以此时`p2` 的`then` 方法已经是`p1` 的了
- 正因为以上原因 `then` 的第一个函数输出了 `p1` 的 `resolve` 的参数

```js
        let p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("操作成功")
            }, 2000)
        })
        let p2 = new Promise((resolve, reject) => {
            resolve(p1)
        }).then(msg => {
            alert("成功的回调")
            console.log(msg)
        }, error => {
            alert("失败的回调")
            console.log(error)
        })
```

## then()

一个promise 需要提供一个then方法访问promise 结果，`then` 用于定义当 `promise` 状态发生改变时的处理，即`promise`处理异步操作，`then` 用于结果

`promise` 就像 `kfc` 中的厨房，`then` 就是我们用户，如果餐做好了即 `fulfilled` ，做不了拒绝即`rejected` 状态。那么 then 就要对不同状态处理

- then 方法必须返回 promise，用户返回或系统自动返回
- 第一个函数在`resolved` 状态时执行，即执行`resolve`时执行`then`第一个函数处理成功状态
- 第二个函数在`rejected`状态时执行，即执行`reject` 时执行第二个函数处理失败状态，该函数是可选的
- 两个函数都接收 `promise` 传出的值做为参数
- 也可以使用`catch` 来处理失败的状态
- 如果 `then` 返回 `promise` ，下一个`then` 会在当前`promise` 状态改变后执行

分类

1. 如果then()方法中返回了一个参数值，那么返回的Promise将会变成接收状态。

2. 如果then()方法中抛出了一个异常，那么返回的Promise将会变成拒绝状态。

3. 如果then()方法调用resolve()方法，那么返回的Promise将会变成接收状态。
4. 如果then()方法调用reject()方法，那么返回的Promise将会变成拒绝状态。
5.如果then()方法返回了一个未知状态(pending)的Promise新实例，那么返回的新Promise就是未知 状态

6.如果then()方法没有明确指定的resolve(data)/reject(data)/return data时，那么返回的新Promise就是接收状态，可以一层一层地往下传递

### 语法说明

then的语法如下，onFulfilled 函数处理 `fulfilled` 状态， onRejected函数处理 `rejected` 状态

- onFulfilled 或 onRejected 不是函数将被忽略
- 两个函数只会被调用一次
- onFulfilled 在 promise 执行成功时调用
- onRejected 在 promise 执行拒绝时调用

```js
promise.then(onFulfilled, onRejected)
```

### 基础知识

`then` 会在 `promise` 执行完成后执行，`then` 第一个函数在 `resolve`成功状态执行

```js
const promise = new Promise((resolve, reject) => {
  resolve("success")
}).then(
  value => {
    console.log(`解决：${value}`)
  },
  reason => {
    console.log(`拒绝:${reason}`)
  }
);
```

`then` 中第二个参数在失败状态执行

```js
const promise = new Promise((resolve, reject) => {
  reject("is error")
});
promise.then(
  msg => {
    console.log(`成功：${msg}`)
  },
  error => {
    console.log(`失败:${error}`)
  }
)
```

如果只关心成功则不需要传递 `then` 的第二个参数

```js
const promise = new Promise((resolve, reject) => {
  resolve("success")
})
promise.then(msg => {
  console.log(`成功：${msg}`)
})
```

如果只关心失败时状态，`then` 的第一个参数传递 `null`

```js
const promise = new Promise((resolve, reject) => {
  reject("is error")
})
promise.then(null, error => {
  console.log(`失败:${error}`)
})
```

promise 传向then的传递值，如果then没有可处理函数，会一直向后传递

```js
let p1 = new Promise((resolve, reject) => {
	reject("rejected")
})
.then()
.then(
  null,
  f => console.log(f)
)
```

如果 onFulfilled 不是函数且 promise 执行成功, p2 执行成功并返回相同值

```js
let promise = new Promise((resolve, reject) => {
  resolve("resolve")
})
let p2 = promise.then()
p2.then().then(resolve => {
  console.log(resolve)
})
```

如果 onRejected 不是函数且promise拒绝执行，p2 拒绝执行并返回相同值

```js
let promise = new Promise((resolve, reject) => {
  reject("reject")
})
let p2 = promise.then(() => {})
p2.then(null, null).then(null, reject => {
  console.log(reject)
})
```

### 链式调用

每次的 `then` 都是一个全新的 `promise`，默认 then 返回的 promise 状态是 fulfilled

```js
        let demo = new Promise((resolve, reject) => {
            resolve("成功")
        }).then(resolve => {
            console.log(resolve)
        }).then(resolve => {
            console.log(resolve)
        })
```

每次的 `then` 都是一个全新的 `promise`，不要认为上一个 promise状态会影响以后then返回的状态

```js
        let p1 = new Promise(resolve => {
            resolve()
        })

        let p2 = p1.then(() => {
            console.log("迪迦")
        })

        p2.then(() => {
            console.log("戴拿")
        })
        
        console.log(p1)
        console.log(p2)
        //再试试把上面两行放在 setTimeout里
        setTimeout(() => {
            console.log(p1)
            console.log(p2)
        }, 3000)
```

`then` 是对上个promise 的`rejected` 的处理，每个 `then` 会是一个新的promise，默认传递 `fulfilled`状态

```js
        new Promise((resolve, reject) => {
            reject()
        }).then(resolve => {
            console.log('成功1')
        }, reject => {
            console.log("失败1")
        }).then(resolve => {
            console.log('成功2')
        }, reject => {
            console.log("失败2")
        }).then(resolve => {
            console.log('成功3')
        }, reject => {
            console.log("失败3")
        })
```

如果内部返回 `promise` 时,将使用该 `promise`

```js
        let p1 = new Promise(resolve => {
            resolve()
        })
        let p2 = p1.then(() => {
            return new Promise(msg => {
                msg("我就是唯一的光")
            })
        })
        p2.then(msg => {
            console.log(msg) //我就是唯一的光
        })
```

如果 `then` 返回`promise` 时，后面的`then` 就是对返回的 `promise` 的处理，需要等待该 promise 变更状态后执行

```js
        let demo = new Promise (resolve=>{
            resolve()
        })
        let demo1 = demo.then(()=>{
            return new Promise(resolve=>{
                setTimeout(() => {
                    console.log('demo1')
                    resolve()
                }, 3000)
            })
        }).then(()=>{
            return new Promise((a,b)=>{
                console.log("demo2")
            })
        })
```

如果`then`返回 `promise` 时，返回的`promise` 后面的`then` 就是处理这个`promise` 的

> 如果不 `return` 情况就不是这样了，即外层的 `then` 的`promise` 和内部的`promise` 是独立的两个promise

```js
        new Promise((resolve, reject) => {
            resolve()
        })
            .then(msg => {
                return new Promise((resolve, reject) => {
                    resolve("第二个")
                })
                    .then(msg => {
                        console.log(msg)
                        return msg
                    })
            })
            .then(msg => {
                console.log(msg)
            })
```

上面代码的优化，把内部的 `then` 提取出来

```js
        new Promise((resolve, reject) => {
            resolve()
        })
            .then(msg => {
                return new Promise((resolve, reject) => {
                    resolve("第二个")
                })
            })
            .then(msg => {
                console.log(msg)
                return msg
            })
            .then(msg => {
                console.log(msg)
            })
```

### 其它类型

Promise 解决过程是一个抽象的操作，其需输入一个 `promise` 和一个值，我们表示为 `[[Resolve]](promise, x)`，如果 `x` 有 `then` 方法且看上去像一个 Promise ，解决程序即尝试使 `promise` 接受 `x` 的状态；否则其用 `x` 的值来执行 `promise`

#### 循环调用

如果 `then` 返回与 `promise` 相同，将禁止执行

```js
        let p1 = new Promise(resolve=>{
            resolve()
        })
        let p2 = p1.then(()=>{
            return p2
        })// Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>
```

#### promise

如果返回值是 `promise` 对象，则需要更新状态后，才可以继承执行后面的`promise`

```js
        new Promise((resolve, reject) => {
            resolve(
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("解除封印")
                    }, 3000)
                })
            )
        })
            .then(
                msg => {
                    console.log(`第一式：${msg}`)
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            reject("自爆封印")
                        }, 3000)
                    })
                },
                error => {
                    console.log(`第二式:${error}`)
                }
            ).catch(error => {
                console.log(`第三式：${error}`)
            })
```

#### Thenables

包含 `then` 方法的对象就是一个 `promise` ，系统将传递 resolve Promise 与 reject Promise 做为函数参数

下例中使用 `resolve` 或在`then` 方法中返回了具有 `then`方法的对象

- 该对象即为 `promise` 要先执行，并在方法内部更改状态
- 如果不更改状态，后面的 `then` promise都为等待状态

```js
        new Promise((resolve,reject)=>{
            resolve({
                then(resolve,reject){
                    resolve("第一式")
                }
            })
        })
        .then(msg=>{
            console.log(`成功啦“${msg}`)
            return {
                then(resolve,reject){
                    setTimeout(() => {
                        reject("第二式")
                    }, 3000)
                }
            }
        })
        .then(null,error=>{
            console.log(`失败：${error}`)
        })
```

包含 `then` 方法的对象可以当作 **promise**来使用

```js
class User {
    constructor(id) {
        this.id = id
    }
    then(resolve, reject) {
        resolve(ajax(`http://localhost:8888/php/demo.php?id=${this.id}`))
    }
}
new Promise((resolve, reject) => {
    resolve(ajax(`http://localhost:8888/php/demo.php?id=${this.id}`))
})
    .then(msg => {
        return new User(msg.id)
    })
    .then(msg => {
        console.log(msg)
    })
```

当然也可以是类

```js
new Promise((resolve, reject) => {
    resolve(
        class {
            static then(resolve, reject) {
                setTimeout(() => {
                    resolve("第一式")
                }, 3000)
            }
        }
    )
})
    .then(
        msg => {
            console.log(`成功:${msg}`)
        },
        reject => {
            console.log(`失败:${reject}`)
        }
    )
```

如果对象中的 then 不是函数，则将对象做为值传递

```js
new Promise((resolve, reject) => {
    resolve()
})
    .then(() => {
        return {
            then: "迪迦奥特曼"
        }
    })
    .then(msg => {
        console.log(msg)
    })
```

## catch()

使用未定义的变量同样会触发失败状态

```js
let demo = new Promise((resolve,reject)=>{
    demo123
}).then(msg=>{
    console.log(msg)
},reject=>{
    console.log(reject)
})
```

如果 onFulfilled 或 onRejected 抛出异常，则 p2 拒绝执行并返回拒因

```js
let demo = new Promise((resolve, reject) => {
    throw new Error("demo")
})
let demo2 = demo.then()
demo2.then().then(null, resolve => {
    console.log("失败" + resolve)
})
```

catch用于失败状态的处理函数，等同于 `then(null,reject){}`

- 建议使用 `catch` 处理错误
- 将 `catch` 放在最后面用于统一处理前面发生的错误

```js
let demo = new Promise((resolve, reject) => {
    reject(new Error("失误了"))
}).catch(msg => {
    console.log(msg)
})
```

`catch` 可以捕获之前所有 `promise` 的错误，所以建议将 `catch` 放在最后

下例中 `catch` 也可以捕获到了第一个 `then` 返回 的 `promise` 的错误

```js
new Promise((resolve, reject) => {
    resolve()
})
    .then(() => {
        return new Promise((resolve, reject) => {
            reject("错了")
        })
    })
    .then(() => {})
    .catch(msg => {
        console.log(msg)
    })
```

错误是冒泡的操作的

没有任何一个`then` 定义第二个函数，将一直冒泡到 `catch` 处理错误

```js
new Promise((resolve, reject) => {
    reject(new Error("失败"))
})
    .then(msg => { })
    .then(msg => { })
    .catch(error => {
        console.log(error)
    })
```

`catch` 也可以捕获对 `then` 抛出的错误处理

```js
new Promise((resolve, reject) => {
    resolve()
})
    .then(msg => {
        throw new Error("失败一")
    })
    .catch(() => {
        console.log("二")
    })
```

`catch` 也可以捕获其他错误

下面在 `then` 中使用了未定义的变量，将会把错误抛出到 `catch`

```js
new Promise((resolve, reject) => {
    resolve()
})
    .then(msg => {
        console.log(a)
    })
    .catch(msg => {
        console.log(msg)
    })
```

### 使用建议

建议将错误要交给`catch`处理而不是在`then`中完成，不建议使用下面的方式管理错误

```js
new Promise((resolve, reject) => {
    reject(new Error("失败"))
}).then(msg => {
    console.log(msg)
}, reject => {
    console.log(reject)
})
```

### 处理机制

在 `promise` 中抛出的错误也会被`catch` 捕获

```js
new Promise((resolve, reject) => {
    reject(new Error("失败"))
}).catch(msg => {
    console.log(msg + "加油")
})
```

可以将上面的理解为如下代码，可以理解为内部自动执行 `try...catch`

```js
let demo = new Promise((resolve, reject) => {
    try {
        throw new Error("失败")
    } catch (error) {
        reject(error)
    }
})
    .catch(msg => {
        console.log(msg.toString())
    })
```

但像下面的在异步中 `throw` 将不会触发 `catch`，而使用系统错误处理

```js
let demo = new Promise((resolve, reject) => {
    setTimeout(() => {
        throw new Error("错误")
    }, 2000)
}).catch(msg => {
    console.log("第一" + msg)
})
```

下面在`then` 方法中使用了没有定义的`demo`函数，也会抛除到 `catch` 执行，可以理解为内部自动执行 `try...catch`

```js
new Promise((resolve, reject) => {
    resolve()
})
    .then(() => {
        demo()
    })
    .catch(msg => {
        console.log(msg.toString())
    })
```

在 `catch` 中发生的错误也会抛给最近的错误处理

```js
new Promise((resolve, reject) => {
    reject()
})
    .catch(msg => {
        demo()
    })
    .then(null, error => {
        console.log(error.toString())
    })
```

### 事件处理

**unhandledrejection**事件用于捕获到未处理的Promise错误

下面的 then 产生了错误，但没有`catch` 处理，这时就会触发事件

该事件有可能在以后被废除，处理方式是对没有处理的错误直接终止

```js
window.addEventListener("unhandledrejection", function (event) {
    console.log(event.promise)// 产生错误的promise对象
    console.log(event.reason)// Promise的reason
})
new Promise((resolve, reject) => {
    resolve("失败")
})
    .then(msg => {
        throw new Error("失败啦")
    })
```

## finally()

无论状态是`resolve` 或 `reject` 都会执行此动作，`finally` 与状态无关

```js
let demo = new Promise((resolve, reject) => {
    reject("一个错误")
})
    .then(msg => {
        console.log("成功")
    })
    .catch(msg => {
        console.log("失败")
    })
    .finally(() => {
        console.log("无视成功或失败的存在")
    })
```

## 实例操作

### 异步请求

下面是将 `ajax` 修改为 `promise` 后，代码结构清晰了很多

```js
function demo(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.send()
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(JSON.parse(this.response))
            }
            else {
                reject(this)
            }
        }
    })
}
demo("https://api.apiopen.top/api/sentences")
.then(msg=>[
    console.log(msg.result)
])
```

### 图片加载

下面是异步加载图片示例

```js
function demo(url) {
    return new Promise((resolve, reject) => {
        let image = new Image()
        image.src = url
        image.onload = resolve(image)
        image.onerror = reject()
        document.body.appendChild(image)
    })
}
demo("https://img1.baidu.com/it/u=4216761644,15569246&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500")
.then(msg=>{
    msg.style.border = "solid 30px black"
    msg.style.width = 600 +"px"
    console.log("宽度"+window.getComputedStyle(msg).width)
})
```

### 定时器

下面是封装的`timeout` 函数，使用定时器操作更加方便

```js
function demo(shijian) {
    return new Promise(resolve => {
        setTimeout(resolve, shijian)
    })
}
demo(3000)
    .then(() => {
        console.log("成功启动,3秒")
        return demo(1000)
    })
    .then(() => {
        console.log("执行上一步的promise后一秒执行")
    })

```

## 链式操作

- 每个 `then` 都是一个promise
- 如果 `then` 返回 promise，只当`promise` 结束后，才会继承执行下一个 `then`

### 语法介绍

下面是对同一个 `promise` 的多个 `then` ，每个`then` 都得到了同一个promise 结果，这不是链式操作，实际使用意义不大

![Snipaste_2022-05-19_15-26-15](https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/文章/Snipaste_2022-05-19_15-26-15.6h9bl8paues0.webp)

```js
let demo = new Promise((resolve, reject) => {
    resolve("第一个")
})
demo.then(msg => {
    msg += "demoone"
    console.log(msg) //第一个demoone
})
demo.then(msg => {
    msg += "demotwo"
    console.log(msg) //第一个demotwo
})
```

第一个 `then` 也是一个promise，当没接受到结果是状态为 `pending`

```js
let demo = new Promise((resolve, reject) => {
    resolve("第一个")
})
console.log(
    demo.then(msg => {
        msg += "demo"
        console.log(msg)//第一个demo
    })
)//Promise {<pending>}
```

`promise` 中的 `then` 方法可以链接执行，`then` 方法的返回值会传递到下一个`then` 方法

- `then` 会返回一个`promise` ，所以如果有多个`then` 时会连续执行
- `then` 返回的值会做为当前`promise` 的结果

下面是链式操作的 `then`，即始没有 `return` 也是会执行，因为每个`then` 会返回`promise`

```js
new Promise((resolve, reject) => {
    resolve("demo")
})
    .then(msg => {
        msg += "第一个《《"
        console.log(msg) //demo第一个《《
        return msg
    })
    .then(msg => {
        msg += "第二个《《"
        console.log(msg) //demo第一个《《第二个《《
    })
```

`then` 方法可以返回一个`promise` 对象，等`promise` 执行结束后，才会继承执行后面的 `then`,后面的`then` 方法就是对新返回的`promise` 状态的处理

```js
new Promise((resolve, reject) => {
    resolve("第一个")
})
    .then(msg => {
        console.log(msg)
        return new Promise((resolve, erject) => {
            setTimeout(() => {
                resolve("第二个")
            }, 3000)
        })
    })
    .then(msg=>{
        console.log(msg)
    })
```

### 链式加载

使用`promise` 链式操作重构前面章节中的文件加载，使用代码会变得更清晰

```js
function load(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = url
        script.onload = resolve(script)
        script.onerror = reject()
        document.body.appendChild(script)
    })
}
load("https://api.apiopen.top/api/sentences")
    .then(() => {
        load("https://api.apiopen.top/api/sentences")
    })
    .then(() => {
        console.log(result.name)
    })
```

### 操作元素

下面使用 `promise` 对元素事件进行处理

```html
<body>
    <button>点击一下</button>
    <script>
        new Promise((resolve, reject) => {
            let demo = document.querySelector("button")
            demo.addEventListener("click", () => {
                resolve()
            })
        })
            .then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log("第一个")
                        resolve()
                    }, 3000)
                })
            })
            .then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log("第二个")
                        resolve()
                    }, 2000)
                })
            })
            .then(() => {
                console.log("第三个")
            })
            .catch(error => {
                console.log(error)
            })
    </script>
</body>
```

## 扩展api

### resolve()

使用 `promise.resolve` 方法可以快速的返回一个promise对象

**Promise.resolve()**接受一个参数值，可以是普通的值，具有then()方法的对象和Promise实例

正常情况下，它返回一个Promise对象，状态为fulfilled，但是，当解析时发生错误时，返回的Promise对象将会置为rejected态

根据值返回promise`

```js
Promise.resolve("陈若").then(msg => {
    console.log(msg)//陈若
})
```

如果是 `thenable` 对象，会将对象包装成promise处理，这与其他promise处理方式一样的

```js
let demo = {
    then(resolve, reject) {
        resolve("第一次")
    }
}
Promise.resolve(demo).then(msg => {
    console.log(msg)
})
```

```js
// 参数为普通值
let demo1 = Promise.resolve(6666)
demo1.then(msg => {
    console.log(msg)
})
// 参数为含有then()方法的对象
let demo2 = {
    then() {
        console.log("这是obj 里面的then()方法")
    }
}

let demo3 = Promise.resolve(demo2)
demo3.then(msg => {
    // 参数为含有then()方法的对象
    console.log(msg)// obj 里面的then()方法
})
// 参数为Promise实例
let demo4 = Promise.resolve(8848)
let demo5 = Promise.resolve(demo4)

demo5.then(msg => {
      // 这里的值时Promise实例返回的值
    console.log(msg)
})
// 参数为Promise实例,但参数是rejected态
let demo6 = Promise.reject(9999)
let demo7 = Promise.resolve(demo6)


demo7.then(msg => {
     // 这里的值时Promise实例返回的值
    console.log(`啊对对对${msg}`)  //不执行
}).catch(error => {
    console.log("失败" + error) 
})
```

### reject()

和 `Promise.resolve` 类似，`reject` 生成一个失败的`promise`

```js
Promise.reject("失败").catch(error => {
    console.log(error)
})
```

下面使用 `Project.reject` 设置状态

```js
new Promise(resolve => {
    resolve("陈若")
})
    .then(msg => {
        if (msg != "戴拿") {
            return Promise.reject(new Error("出错了"))
        }
    })
    .catch(error => {
        console.log(error.toString())
    })
```

### all()

使用`Promise.all` 方法可以同时执行多个并行异步操作

- 任何一个 `Promise` 执行失败就会调用 `catch`方法
- 适用于一次发送多个异步操作
- 参数必须是可迭代类型，如Array/Set
- 成功后返回 `promise` 结果的有序数组,成功调用后返回一个数组，数组的值是有序的，即按照传入参数的数组的值操作后返回的结果

下例中当 `demo1、demo2` 两个 Promise 状态都为 `fulfilled` 时，demo3状态才为`fulfilled`

```js
let demo1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("第一个是Promise")
    }, 2000)
})
let demo2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("第二个是异步")
    }, 3000)
})
let demo3 = Promise.all([demo1, demo2])
    .then(msg => {
        console.log(msg)
    })
    .catch(msg => {
        console.log(msg)
    })
```

如果某一个`promise`没有catch 处理，将使用`promise.all` 的catch处理

```js
let p1 = new Promise((resolve, reject) => {
    resolve("成功")
})
let p2 = new Promise((resolve, reject) => {
    reject("失败")
})
Promise.all([p1, p2])
    .catch(msg => {
        console.log(msg)
    })
```

### allSettled()

`allSettled` 用于处理多个`promise` ，只关注执行完成，不关注是否全部执行成功，`allSettled` 状态只会是`fulfilled`

下面的p2 返回状态为 `rejected` ，但`promise.allSettled` 不关心，它始终将状态设置为 `fulfilled`

```js
let p1 = new Promise((resolve, reject) => {
    resolve("成功")
})
let p2 = new Promise((resolve, reject) => {
    reject("失败")
})
Promise.allSettled([p1, p2])
    .then(msg => {
        console.log(msg)
    })
```

### race()

使用`Promise.race()` 处理容错异步，和`race`单词一样哪个Promise快用哪个，哪个先返回用哪个

- 以最快返回的promise为准
- 如果最快返加的状态为`rejected` 那整个`promise`为`rejected`执行cache
- 如果参数不是promise，内部将自动转为promise

```js
let p1 = new Promise((resolve, reject) => {
    resolve("成功")
})
let p2 = new Promise((resolve, reject) => {
    reject("失败")
})
Promise.race([p1, p2])
    .then(msg => {
        console.log(msg)
    })
    .catch(msg => {
        console.log(msg)
    })
```

## 任务队列

### 实现原理

如果 `then` 返回`promise` 时，后面的`then` 就是对返回的 `promise` 的处理

```js
let demo = Promise.resolve()
let p1 = demo.then(() => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("p1")
            resolve()
        }, 3000)
    })
})
p1.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2")
        }, 1000)
    })
})
```

下面使用 `map` 构建的队列，有以下几点需要说明

- `then` 内部返回的 `promise` 更改外部的 `promise` 变量
- 为了让任务继承，执行完任务需要将 `promise` 状态修改为 `fulfilled`

```js
function demo(nums) {
    let promise = Promise.resolve()
    nums.map(i => {
        promise = promise.then(msg => {
            return new Promise(resolve => {
                console.log(i)
                resolve()
            })
        })
    })
}
demo([1, 2, 3, 4, 5])
```

下面再来通过 `reduce` 来实现队列

```JS
function demo(nums) {
    return nums.reduce((promise, n) => {

        return promise.then(() => {

            return new Promise(resolve => {
                console.log(n)
                resolve()
            })

        })

    }, Promise.resolve())
}
demo([1, 2, 3, 4, 5])
```

## async/await

使用 `async/await` 是promise 的语法糖，可以让编写 promise 更清晰易懂，也是推荐编写promise 的方式

- `async/await` 本质还是promise，只是更简洁的语法糖书写
- `async/await` 使用更清晰的promise来替换 promise.then/catch 的方式

### async

函数前面的**async**一词意味着一个简单的事情：这个函数总是返回一个promise，如果代码中有return <非promise>语句，JavaScript会自动把返回的这个value值包装成promise的resolve值

下面在 `demo` 函数前加上async，函数将返回promise，我们就可以像使用标准Promise一样使用了

```js
async function demo() {
    return "This is demo"
}
console.log(demo())
demo().then(msg => {
    console.log(msg)
})
```

如果有多个`await` 需要排队执行完成，我们可以很方便的处理多个异步队列

```js
async function demo(nums) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(nums)
        }, 3000)
    })
}
async function demo1() {
    let h = await demo("迪迦")
    console.log(h)
    let h1 = await demo("戴拿")
    console.log(h1)
}
demo1()
```

### await

使用 `await` 关键词后会等待promise 完

- `await` 后面一般是**promise**，如果不是直接返回
- `await` 必须放在 **async** 定义的函数中使用
- `await` 用于替代 `then` 使编码更优雅

关键词await可以让JavaScript进行等待，直到一个promise执行并返回它的结果，JavaScript才会继续往下执行

**注意:不能在常规函数里使用await**

下例会在 await 这行暂停执行，直到等待 promise 返回结果后才会执行

```js
async function demo() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("正解")
        }, 3000)
    })
    let h1 = await promise
    console.log(h1)
}
demo()
```

一般**await**后面是外部其它的promise对象

```js
async function demo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("正解")
        }, 3000)
    })
}
async function zi() {
    let demo1 = await demo()
    console.log("破防")
    console.log(demo1)
}
zi()
```

如果我们试图在非async函数里使用await，就会出现一个语法错误

```js
function demo() {
    let p1 = Promise.resolve(6666)
    let p2 = await p1
    //Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
}
```

**await只能在async函数中工作**

### 错误处理

async 内部发生的错误，会将必变promise对象为rejected 状态，所以可以使用`catch` 来处理

```js
async function demo(){
    console.log(a)
}
demo().catch(error=>{
    throw new Error(error)
})
```

下面是异步请求数据不存在时的错误处理

```js
function ajax(url) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this)
        }
    }
}
async function get (name){
    return ajax(`https://api.apiopen.top/api/sentences?name=${name}`)
}
get ("迪迦").catch(error=>{
    alert("错误")
    console.log(error)
})
```

关于async/await总结

放在一个函数前的async有两个作用：

- 使函数总是返回一个promise
- 允许在这其中使用await

promise前面的await关键字能够使JavaScript等待，直到promise处理结束。然后：

- 如果它是一个错误，异常就产生了，就像在那个地方调用了throw error一样
- 否则，它会返回一个结果，我们可以将它分配给一个值

他们一起提供了一个很好的框架来编写易于读写的异步代码

有了async/await，我们很少需要写`promise.then/catch`，但是我们仍然不应该忘记它们是基于promise的，因为有些时候（例如在最外面的范围内）我们不得不使用这些方法。`Promise.all`也是一个非常棒的东西，它能够同时等待很多任务

相关文章参考

[前端异步(async)解决方案(所有方案)](https://blog.csdn.net/qq_32442973/article/details/89322763)
