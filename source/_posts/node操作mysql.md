title: node配置mysql模块

date: 2022-03-28 7:58:00

keywords: "前端"

tags: 

- 学习笔记
- 前端

categories: "前端"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/相册-动漫/wallhaven-m92368.webp

---

node配置mysql模块

步骤

1. 安装第三方mysql模块
2. **建立**连接到**mysql数据库**
3. **执行SQL语句**操作数据库

在终端安装mysql模块

```npm
npm i mysql
```

建立连接

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})
```

测试是否正常工作

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//检验mysql模块是否正常工作
ab.query("select 1 ",(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    //当打印的结果是[RowDataPacket{'1':1}]，表示正确
    console.log(results);
})
```

查询数据

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//查询demo.demo3表中所有的用户数据
const all ="select * from demo.demo3" ;
ab.query(all,(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(results);
})
```

插入数据

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//插入到demo.demo3表中的数据对象
const demo = {
    目标:"经济学",
    行动:"学习和实践",
}
//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "insert into demo.demo3 (目标,行动) values (?,?)";
//使用数组的形式，指定具体的值
ab.query(sqlstr,[demo.目标,demo.行动],(err,results)=>{
    if(err){
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("插入成功");
    }
})

```

便捷的方式

向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//插入到demo.demo3表中的数据对象
const demo = {
    目标:"经济学",
    行动:"学习和实践",
}
//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "insert into demo.demo3 set ?";
//直接将数据对象当作占位符的值
ab.query(sqlstr,demo,(err,results)=>{
    if(err){ //失败
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("插入成功");
    }
})

```

更新数据

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//插入到demo.demo3表中的数据对象
const demo = {
    id:"8",
    目标:"经济学",
    行动:"学习和实践",
}
//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "update demo.demo3 set 目标=? , 行动=? where id=?";

ab.query(sqlstr,[demo.目标,demo.行动,demo.id],(err,results)=>{
    if(err){ //失败
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("更新成功");
    }
```

便捷的方式

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})

//插入到demo.demo3表中的数据对象
const demo = {
    id:"8",
    目标:"经济学",
    行动:"学习和实践",
}
//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "update demo.demo3 set ? where id=?";


ab.query(sqlstr,[demo,demo.id],(err,results)=>{
    if(err){ //失败
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("更新成功");
    }
})
```

删除数据

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})


//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "delete from demo.demo3 where id=?";
//如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果sql语句中只有一个占位符，则可以省略数组
ab.query(sqlstr,8,(err,results)=>{
    if(err){ //失败
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("删除成功");
    }
})
```

使用 delete 语句会真正删除数据，保险起见，使用标记删除的形式，模拟删除的动作。即在表中设置状态字段，标记当前的数据是否被删除

```js
//导入mysql模块
const mysql = require("mysql");

//建立与MYSQL数据库的连接
const ab = mysql.createPool({
    host: "localhost",      //数据库的ip的地址
    user: "root",           //数据库的账号
    password: "Q123123123", //登录数据库的密码
    database: "demo",       //指定要操作那个数据库
})


//待执行的sql语句，符号？表示占位符,提高代码的复用性
const sqlstr = "update demo.demo3 set status=1 where id=?";
//如果sql语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果sql语句中只有一个占位符，则可以省略数组
ab.query(sqlstr,8,(err,results)=>{
    if(err){ //失败
        return console.log(err.message);
    }
    if(results.affectedRows > 0 ){
        console.log("删除成功");
    }
})

```

