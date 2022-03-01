组成部分

- ECMAScript
- DOM
- BOM



javascript和HTML结合的方式

1.行内形式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
</head>
<body>
    <!-- 可以将js代码编写到标签的onclick属性中
         当我们点击按钮时，js代码才会执行 -->
    <button onclick="alert('点击')">点击一下</button>
    <!-- 可以将js代码写在超链接的href属性中，这样当点击超链接时，会执行js代码 -->
    <a href="javascript:alert('点击成功')">你到底点不点</a>
    
</body>
</html>
```

2.内嵌样式表：在页面的 head 里采用 script标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        window.onload = function(){
            alert("aaa");
        }
    </script>
</head>
<body>
    
</body>
</html>
```

3.引入外部javascript文件的方式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript">
        window.onload = function(){
            alert("aaa");
        }
    </script>
</head>
<body>
    
</body>
</html>
```

注释

语法

```js
// 单行注释

/*
多行注释
*/
```

注意事项

- JS中严格区分大小写
- JS中每一条语句以分号(;)结尾
- - 如果不写分号，浏览器会自动添加，但是会消耗一些系统资源，而且有些时候，浏览器会加错分号，所以在开发中分号必须写
- JS中会忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化

字面量

定义：一些不可改变的值           

例如：1 2 3 4 5

字面量都是可以直接使用，但是我们一般都不会直接使用字面量                        

变量

定义：可以把变量看做存储数据的容器，而且变量的值是可以任意改变

声明变量

```js
/*
使用 var 关键词来声明变量：

var carname;
变量声明之后，该变量是空的（它没有值）。

如需向变量赋值，请使用等号：

carname="Volvo";
不过，您也可以在声明变量时对其赋值：

var carname="Volvo";
*/
```

准则

- 变量必须以字母开头
- 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
- 变量名称对大小写敏感（y 和 Y 是不同的变量）

数据类型

基本类型(值类型)

- 字符串(String)
- 数字(Number)
- 布尔(Boolean)
- 对空(Null)
- 未定义(Undefined)
- 表示独一无二的值(Symbol)

JS拥有动态类型这意味着相同的变量可用作不同的类型

强制类型转换

将其他类型转换为String

方案一

调用toString()函数

此方式不会影响到原变量，会返回结果

转换对空和未定义，会报错

```js
var bemo = 123 ;
console.log(typeof bemo);
console.log(bemo);

bemo = bemo.toString();
console.log(typeof bemo);
console.log(bemo);

bemo = false ;
console.log(typeof bemo);
console.log(bemo);

bemo = bemo.toString();
console.log(typeof bemo);
console.log(bemo);

bemo = null ;
console.log(typeof bemo);
console.log(bemo);
```

方案二

调用String()函数

将被转换的数据作为参数传递给函数

```js
var bemo = 123 ;
console.log(typeof bemo);
console.log(bemo);

bemo = String(bemo);
console.log(typeof bemo);
console.log(bemo);

bemo = false ;
console.log(typeof bemo);
console.log(bemo);

bemo = String(bemo);
console.log(typeof bemo);
console.log(bemo);

bemo = null ;
console.log(typeof bemo);
console.log(bemo);

bemo = String(bemo);
console.log(typeof bemo);
console.log(bemo);
```

将其他类型转换为Number

第一方案

调用Number()函数

```js
/*
字符串 转换 数字
- 如果是纯数字的字符串，则直接将其转换成数字
- 如果字符串中有非数字的内容，则转换成NaN
- 如果字符串是一个空串或者是一个全是空格的字符串，则转换成0

布尔 转换 数字
- true 转换成 1 
- false 转换成 0 

null 转换成 数字0

undefined 转换成 数字 NaN
*/
var bemo = "123" ;
document.write(typeof bemo) ;
document.write(bemo) ;
bemo = Number(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;

bemo = false ;
document.write(typeof bemo) ;
document.write(bemo) ;
bemo = Number(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;

bemo = null ;
document.write(typeof bemo) ;
document.write(bemo) ;
bemo = Number(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;

bemo = undefined ;
document.write(typeof bemo) ;
document.write(bemo) ;
bemo = Number(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;

```

第二方案

调用parseInt()可以将一个字符串中的有效的整数内容去出来，然后转换成Number

parseFloat()和上面的类似，其不同点在于可以获得有效的小数

```js
var bemo = "123.333px" ;
bemo = parseInt(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;

var bemo = "123.333px" ;
bemo = parseFloat(bemo) ;
document.write(typeof bemo) ;
document.write(bemo) ;
```

进制的数字

```js
//十六进制
//以0x开头
var bemo = 0x1234 ;
bemo = 0xffc ;

//八进制
//以0开头
bemo = 0123 ;
bemo = 0456 ;

//二进制
//以0b开头
bemo = 0b101010 ;
bemo = 0b101111 ;

//可以在parseInt()中传递一个第二参数，来指定数字的进制
bemo = parseInt(bemo , 2) ;

```

将其他类型转换成Boolean

```js
/*
数字 转换成 布尔
- 除了0和NaN,其余的都是true

字符串 转换成 布尔
- 除了空串，其余的都是true

null和undefined 转换成 布尔 false

对象 转换成 布尔 true
*/
```

引用数据类型

- 对象(Object)
- 数组(Array)
- 函数(Function)

运算符

算术运算符

前提：当对非Number类型的值进行运算时，会将这些值转换成Number再运算

​            任何值和NaN运算都得NaN

| 运算符 | 描述       | 注意                                                         |
| ------ | ---------- | ------------------------------------------------------------ |
| +      | 加法       | 1.可以对两个值进行加法运算，并将结果返回；2如果对两个字符串进行加法运算，则会做拼串，会将两个字符串拼接为一个字符串，并返回；任何的值和字符串做加法运算，都会先转换成字符串，再和字符串做拼串的操作 |
| -      | 减法       | 可以对两个值进行减法运算，并将结果返回                       |
| *      | 乘法       | 可以对两个值进行乘法运算                                     |
| /      | 除法       | 可以对两个值进行除法运算                                     |
| %      | 取模(余数) | 取余数                                                       |
| ++     | 自增       |                                                              |
| --     | 自减       |                                                              |

任何值做 - * / 运算时都会自动转换成 Number

- 可以利用这一特点做隐式的类型转换
- 可以通过为一个值 -0 *1 /1 来将其转换成Number

一元运算符

正号：不会对数字产生任何影响

负号：可以对数字进行负号取反

对于非Number类型的值

- 会将先转换成Number，再运算
- 可以对一个其他的数据类型使用+ ，来将其转换成Number

```js
var bemo = 1024 ;
bemo = -bemo ;
document.write(typeof bemo) ;
document.write(bemo) ;

bemo = true ;
bemo = +bemo ;
document.write(typeof bemo) ;
document.write(bemo) ;
```

逻辑运算符

逻辑非运算符

定义：首先把数据转化为布尔值，然后取反，结果为 `true` 或 `false`

如果对非布尔值进行元素，则会将其转换成布尔值，然后再取反

- 可以利用这一特性，来将其他数据类型转换成布尔类型
- 为任意数据类型取两次反，来做到转换成布尔值

转换情况

```js
// 字符串  转换成  布尔
// - 除了空串其余全是true

// 数值 转换成 布尔
// - 除了0和NaN其余的全是true

// null、undefined 转换成 布尔
// - 都是false

// 对象 转换成 布尔
// - 都是true
```

```js
var bemo = 123 ;
document.write(!bemo) ; // false
document.write(!!bemo) ; // true  双向取反

document.write(!"") ; // true
```

逻辑与运算符

定义：如果第一个操作数为 `true`，计算结果就是第二个操作数。如果第一个操作数为 `false`，结果就是 `false`（特殊数值除外）

```js
var bemo = 1234 , bemo1 = 1024 ;
document.write(bemo && bemo1) ; // true
document.write(bemo && false) ; // false
document.write(false && true) ; // false
document.write(true && (8 > 9)) ; // false

```

逻辑或运算符

定义：如果第一个操作数能够转为 `true`（不是 `false`），结果就是第一个操作数，否则结果是第二个操作数

```js
var bemo = 1234 , bemo1 = 1024 ;
document.write(bemo || bemo1) ; // 1234
document.write(bemo || false) ; // 1234
document.write(false || true) ; // true
document.write(true || (8 > 9)) ; // true
document.write(false || false) ; // false

```

非布尔值的情况

定义：会先将其转换为布尔值，进行运算，再返回原值 

赋值运算符

定义：将符号右侧的值赋值给符号左侧的变量

```js
// var bemo = 1234 ;

// += 
// bemo += 5 ; 等价于 bemo = bemo + 5 ;

// -= 
// bemo -= 5 ; 等价于 bemo = bemo - 5 ;

// *= 
// bemo *= 5 ; 等价于 bemo = bemo * 5 ;

// /=
// bemo /= 5 ; 等价于 bemo = bemo / 5 ;

// %= 
// bemo %= 5 ; 等价于 bemo = bemo % 5 ;
```

关系运算符

条件运算符

定义：先算条件表达式，若条件表达式为真则执行语句1,并返回执行结果。如果条件表达式为假false，则执行语句2，并返回执行结果。如果条件表达式的值是非布尔值则会转换成布尔值

语法

```js
//条件表达式 ? 语句1 : 语句2 ; 
```

复杂的条件，不推荐使用，可读性差

```js
var bemo = 1 , bemo1 = 2 ,bemo3 = 3 ;
var bemo2 = bemo > bemo1 ? bemo : bemo1 ;
document.write(bemo2);

//不推荐使用
bemo2 = bemo > bemo1 ? (bemo > bemo3 ? bemo : bemo3) : (bemo3 > bemo1 ? bemo3 : bemo1);
document.write(bemo2);
```

优先级

![](https://img-blog.csdnimg.cn/20201215092456122.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NtbF9s,size_16,color_FFFFFF,t_70)



for语句

 语法

```js
for (初始化表达式; 条件表达式; 更新表达式)
{
    循环体
}
```

流程

1.执行初始化表达式，初始化变量（只执行一次）

2.执行条件表达式，判断是否执行循环

3.是否执行更新表达式，是则继续重复循环

```js
var i = 0 ; //初始化表达式
for ( ; i < 100 ; )
{
    //循环体
    i++ ; //更新表达式
}
```

嵌套for

定义： 外层循环转一次，内层循环转一圈，外层循环控制行数，内层循环控制每行元素个数

```js
for ( 初始化表达式 ; 条件表达式 ; 更新表达式)
{
    循环体
    for ( 初始化表达式 ; 条件表达式 ; 更新表达式)
    {
        循环体
    }
}
```

死循环

定义：当循环条件一直为真时，就会陷入死循环,应尽量避免死循环
原因：
1.循环条件不写时，循环条件默认值为true 

2.如果循环变量初始值满足循环条件，并且没有更新循环变量

for版

```js
// for循环中不写任何表达式，只写两个;  是一个死循环，会一直执行下去，但谨慎使用
for( ; ; )
{
    循环体
}
```

break

定义：break出现后，就不再执行循环体，同时结束循环

语法

```js
// break用法
for(var i=1;i<=10;i++){
    if(i===5){
    break;
    }
    console.log('陈若'+'+'+i);
}
```

continue

定义：continue出现后，会跳出（结束）本次循环，但还会执行下一次循环

```js
// continue用法
for(var i=1;i<=10;i++){
    if(i===5){continue}
    console.log('陈若'+'+'+i)
}
```

对象

定义：属于一种复合的数据类型，可以存储多个不同类型的属性

分类

1.内建对象

- 由ES标准中定义的对象，在任何的ES的实现中都可以使用

2.宿主对象

- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象

3.自定义对象

- 由开发人员自己创建的对象

创建对象

第一种方式

使用new关键字调用函数，是构造函数constructor,构造函数是专门用来创建对象的函数

```js
var obj = new Object();
```

第二种方式

```js
var obj = {
     属性名:属性值,
     属性名:属性值
     }
```

添加对象的属性

属性：在对象中保存的值

语法

第一种方式

```js
对象.属性名 = 属性值 ;
```

第二种方式

如果要使用特殊的属性名，不能采用.的方式，还有另一个方式

读取时也需要采用这种方式

使用[]这种方式操作属性，更加灵活，可以直接传递一个变量，这样变量值是多少就会读取那个属性

语法

```js
对象["属性名"] = 属性值 ;
```

读取对象中的属性

语法

```js
对象.属性名 ;
```

注意：如果读取对象中没有的属性不会报错会返回undefined

修改对象的属性值

语法

```js
对象.属性名 = 新值 ;
```

删除对象的属性

语法

```js
delete 对象.属性名 ;
```

属性值

定义：JS对象的属性值，可以是任意的数据类型，也可以是一个对象

例子

```js
var obj = new Object() ;  //创建对象
obj.name = "陈若" ;        //增加属性
obj.age = "18" ;
document.write(obj.name) ;  //读取属性
document.write(obj.age) ;
obj.name = "小陈" ;          //修改属性
document.write(obj.name) ;
document.write(obj.age) ;
obj["bemo"] = "试样" ;
document.write(obj["bemo"]) ;
delete obj["bemo"] ;      //删除属性
delete obj.age ;
```

in 运算符

定义：通过该运算符可以检查一个对象中是否含有指定的属性，有则返回true,反之返回false

语法

```js
"属性名" in 对象 ;
```

栈和堆的知识

js中的变量都是保存到栈内存中的，变量和基本数据类型的值直接在栈内存中存储，值与值之间是独立存在的，修改一个变量的值不会影响其他的变量

对象是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是对象的内存地址(对象的引用)，若两个变量保存的是同一个对象的引用，则一个变量改变，另一个也会随之改变

![](https://img-blog.csdnimg.cn/img_convert/48487fd2d563e9a30beaf4fe8273285f.png)

```js
  var bemo1 = {
            name:"陈若" ,
            age:18 
        }
  var bemo2 = bemo1 ;
  bemo1.name= "Gjj" ;
  bemo1.bemo3 = "你好" ;
  alert("bemo1的值："+bemo1.bemo3);
  alert("bemo2的值："+bemo2.bemo3);
```

函数

定义：由一连串的子程序（语句的集合）所组成的，可以被外部程序调用，向函数传递参数之后，函数可以返回一定的值

JavaScript代码是自上而下执行的，不过函数体内部的代码则不是这样，如果只是对函数进行了声明，其中的代码并不会执行，只有在调用函数时才会执行函数体内部的代码，JavaScript中的函数也是一个对象，使用typeof检查一个函数对象时，会返回function

创建

使用**函数对象**方式

语法

```js
var 函数名 = new Function("执行语句");
```

使用**函数声明**方式(推荐)

语法

```js
function 函数名([形参1,形参2,...,形参N]) {
    函数语句块
}
```

使用**函数表达式**方式(推荐)

```js
var 函数名  = function([形参1,形参2,...,形参N]) {
    函数语句块
}

```

函数调用

无参函数的调用

```js
//函数声明
function sum ()
{
    alert("我是无参函数哦");
}

//函数调用
sum();

```

有参函数的调用

```js
        // 可以在函数的()中来指定一个或多个形参
        //多个形参之间使用,隔开，声明形参就相当于在函数内部声明了对应的变量
        //但是并不赋值
        function sum ( i ,j )
        {
            alert(i+j);
        }
        //在调用函数时，可以在()中指定实参
        sum(1,2);
        //调用函数时解析器不会检查实参的类型和数量
        //所以要注意，是否有可能会接收到非法的参数，如果有可能需要对参数进行类型的检查
        //多余实参不会被赋值
        //如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined
```

函数返回值

定义：可以使用 return 来设置函数的返回值，return后的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果

注意：在函数中return后的语句都不会执行，如果return语句后不跟任何值就相当于返回一个undefined，如果函数中不写return，则也会返回undefined，return后可以跟任意类型的值

```js
        function sum (i ,j)
        {
            return i+j ;
        }
        var result = sum(1,2);
        alert(result);
```

立即执行函数

定义：函数定义完，立即被调用，往往只会执行一次

```js
     (function () {
            alert("立即执行函数");
        })();
        (function (i , j){
            alert(a+b);
        })(1,2);
```

枚举对象中的属性

for...in语句

语法

```js
//for...in语句 对象中有几个属性，循环体就会执行几次
//每次执行时，会将对象中的一个属性的名字赋给变量
for( var 变量 in 对象)
{
}
```

嵌套函数

定义：在函数中声明的函数就是嵌套函数，只能在当前函数中可以访问，在当前函数外无法访问，类似局部作用域中的局部作用域

```js
function fasther()
{
    function son ()
    {
        alert("我是son");
    }
    son();
}
fasther();
```

匿名函数

定义：没有名字的函数，它可以让一个变量来接收，也就是用 “函数表达式” 方式创建和接收

```js
var bemo = function ()
{
    alert("我是一个匿名函数");
}

bemo();
```

对象中的函数

对象的属性值可以是任何的数据类型，也可以是个函数

如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法，调用这个函数就说调用对象的方法（method）

> 注意：方法和函数只是名称上的区别，没有其它别的区别

```js
var bemo =
{
    name : "陈若",
    age : 18 ,
    sayHello : function ()
    {
        alert("hello" +  bemo.name) ;
    }
}
//调用方法
bemo.sayHello();
```

this对象

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象，根据函数的调用方式的不同，this会指向不同的对象

- 以函数的形式调用时，this永远都是window
- 以方法的形式调用时，this就是调用方法的那个对象

```js
        function bemo ()
        {
            alert(this.name);
        }
        var obj = {
            name:"陈若",
            sayname:bemo
        }
        var obj1 = {
            name:"Gjj",
            sayname:bemo
        }
        obj.sayname();
        obj1.sayname();
```



作用域

作用域指一个变量的作用的范围

声明提前

- 变量的声明提前：使用var关键字声明的变量，会在所有的代码执行之前被声明（但是不会赋值），但是如果声明变量时不使用var关键字，则变量不会被声明提前
- 函数的声明提前：使用函数声明形式创建的函数 function 函数名(){} ，它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数。使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用

全局作用域

- 直接编写在script标签中的JavaScript代码，都在全局作用域

- 全局作用域在页面打开时创建，在页面关闭时销毁

- 在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建，我们可以直接使用

  在全局作用域中：

- 创建的变量都会作为window对象的属性保存

- 创建的函数都会作为window对象的方法保存

- 全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到

函数作用域

调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
每调用一次函数就会创建一个新的函数作用域，它们之间是互相独立的
在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量
在函数中要访问全局变量可以使用window对象
作用域链：当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中依然没有找到，则会报错ReferenceError
作用域链
多个上下级关系的作用域形成的链，它的方向是从下向上的(从内到外)，查找变量时就是沿着作用域链来查找的。

查找一个变量的查找规则：

在当前作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入2
在上一级作用域的执行上下文中查找对应的属性，如果有直接返回，否则进入3
再次执行2的相同操作，直到全局作用域，如果还找不到就抛出找不到的ReferenceError异常

debug

this

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象，根据函数的调用方式的不同，this会指向不同的对象

- 以函数的形式调用时，this永远都是window
- 以方法的形式调用时，this就是调用方法的那个对象

```js
        function bemo ()
        {
            alert(this.name);
        }
        var obj = {
            name:"陈若",
            sayname:bemo
        }
        var obj1 = {
            name:"Gjj",
            sayname:bemo
        }
        obj.sayname();
        obj1.sayname();
```

对象进阶

使用工厂方法创建对象

使用工厂方法创建对象，使用的构造函数都是Object,所以创建的对象都是Object这个类型，就导致我们无法区分多种不同类型的对象

```js
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

var person1 = createPerson("陈若", 18);
var person2 = createPerson("十七", 19);
var person3 = createPerson("尚待", 20);

console.log(person1);
console.log(person2);
console.log(person3);

```

使用构造函数创建对象

创建一个构造函数，专门用来创建Person对象的

构造函数就是一个普通函数，创建方式和普通函数没有区别

不同的是构造函数习惯首字母大写      

之间的区别(调用方式不同)

- 普通函数是直接调用
- 构造函数是需要使用new关键字来调用

构造函数的执行流程

1.立刻创建一个新的对象

2.将新建的对象设置为函数中this

3.逐行执行函数中的代码

4.将新建的对象作为返回值返回

```js
function Person (name ,age )
{
    this.name = name ;
    this.age = age ;
    this.sayName = function()
    {
        alert(this.name);
    }
}
var person1 = new Person("陈若" , 18) ;
var person2 = new Person("胡歌" , 99) ;
alert(person1);
alert(person2);
```

使用同一个构造函数的对象，我们称为一类对象，也将一个构造函数称为一个类

我们将通过一个构造函数创建的对象，称为是该类的实例

this的情况

1.当以函数的形式调用时，this是window

2.当以方法的形式调用时，谁调用方法this就是谁

3.当以构造函数的形式调用时，this就是新创建的那个对象

使用Instanceof可以检查一个对象是否是一个类的实例

语法

```js
对象 instanceof 构造函数
```

例子

```js
alert (person instanceof Person1);
```

原型

创建的每一个函数，解析器都会向函数中添加一个属性prototype,这个属性对应着一个对象，这个对象就是我们所谓的原型对象

如果函数作为普通函数调用prototype没有任何作用

当函数以构造函数的形式调用时，所创建的对象中都会有一个隐含属性，指向该构造函数的原型对象，我们可以通过__ proto __来访问属性

原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，可以将对象中共有的内容，统一设置到原型对象中

当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用

以后创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，可以减少代码的复用程度，不会影响全局作用域

原型链

访问一个对象的属性时，先在自身属性中查找，找到返回， 如果没有，再沿着__proto__这条链向上查找，找到返回，如果最终没找到，返回undefined，这就是原型链，又称隐式原型链，它的作用就是查找对象的属性(方法)

![](https://img-blog.csdnimg.cn/img_convert/34f5a7f9ab460f148c64a66e8632634b.png)

toString()

垃圾回收(GC)

我们需要一个垃圾回收的机制，来处理程序运行过程中产生的垃圾

当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，此时它便是一个垃圾，会占用大量的内存空间，导致程序运行变慢，因此需要清理程序垃圾

在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，所以不需要手动进行垃圾清理回收的操作，需要做的只是要将不再使用的对象设置null即可

```js
function bemo ()
{
    alert("Hello,这是垃圾回收机制");
}

var bemo1 = bemo();

bemo1 = null ;
```

数组

数组也是对象的一种，数组是一种用于表达有顺序关系的值的集合的语言结构，也就是同类数据元素的有序集合

数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据。但是在JavaScript中是支持数组可以是不同的元素，这跟JavaScript的弱类型有关，此处不用纠结，我们大多数时候都是相同类型元素的集合。数组内的各个值被称作元素，每一个元素都可以通过索引（下标）来快速读取，索引是从零开始的整数

使用typeof检查一个数组对象时，会返回object

创建数组

使用对象创建

同类型有序数组创建

```js
var arr= new Array();
arr[0] = 1 ;
arr[1] = 2 ;
arr[2] = 3 ;
arr[3] = 4 ;
arr[4] = 5 ;
```

不同类型有序数组创建

```js
var arr = new Array() ;
arr[0] = 1 ;
arr[1] = "2" ;
arr[2] = 3 ;
arr[3] = '4';
arr[4] = 5 ;
arr[5] = "6" ;
```

使用字面量创建

同类型有序数组创建

```js
var arr = [1,2,3,4,5,6,7,8,9,10];
```

不同类型有序数组创建

```js
var arr = [1,"2",3,"4",5,"6"];
```

遍历数组

```js
var arr = new Array() ;
arr[0] = "你" ;
arr[1] = "好" ;
arr[2] = "!" ;
arr[3] = "我" ;
arr[4] = "是" ;
arr[5] = "陈" ;
arr[6] = "若" ;
var all = "";

for(var i = 0 ; arr.length > i ; i++)
{
    all += arr[i] ;
}

alert(all);
```

数组属性

constructor属性

定义：返回创建数组对象的原型函数

```js
var arr = [1,2,3,4,5,6,7];
document.write(arr.constructor) ;
```

length属性

定义：设置或返回数组的长度(元素的个数)

对于连续的数组，使用length可以获取到数组的长度(元素的个数)

对于非连续的数组，使用length会获取到数组的最大的索引+1

注意：尽量不要使用非连续的数组

```js
var arr = [1,2,3,4,5,6,7,8,9,10] ;
document.write(arr.length) ;
```

数组方法

push()方法(末尾添加)

定义：向数组的末尾添加一个或多个元素，并返回数组的新长度

```js
var bemo = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"] ;
bemo += bemo.push("杰文斯" , "门格尔" , "瓦尔拉斯") ;
document.write(bemo);
```

pop()方法(末尾删除)

定义：可以删除数组的最后一个元素，并将被删除的元素作为返回值返回

```js
var pop = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"] ;
pop1 = pop.pop();
alert(pop);
alert(pop1);
```

unshift()方法(开头添加)

定义：向数组开头添加一个或多个元素，并返回新的数组长度

```js
var unshift = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"] ;
unshift += unshift.unshift("杰文斯" , "门格尔" , "瓦尔拉斯");
alert(unshift);
```

shift()方法(开头删除)

定义：可以删除数组的第一个元素，并将被删除的元素作为返回值返回

```js
var shift = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"] ;
shift1 = shift.shift() ;
alert(shift1);
alert(shift);
```

语法

```js
var arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[arr.length] = 4;
alert(arr);
```

forEach()方法(用于遍历数组)

定义：数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素，以实参的形式传递进来，我们可以来定义形参，来读取这些内容

参数

- 第一个参数，当前正在遍历的元素
- 第二个参数，当前正在遍历的元素的索引
- 第三个参数，正在遍历的数组

注意：这个方法只支持IE8以上的浏览器，IE8及以下的浏览器均不支持该方法，所以如果需要兼容IE8，则不要使用forEach()，还是使用for循环来遍历数组

```js
var bemo = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"] ;
bemo.forEach(function(value ,index , array)
{
    alert(value + "@@@@@" + index + "@@@@@" + array) ;
}
);
```

slice()方法(提取指定元素)

定义：用于从数组提取指定元素，特点不会改变元素原数组，而是将截取到的元素封装到一个新的数组中返回

参数

- 第一个参数，截取开始位置的索引，包含开始的索引元素
- 第二个参数，截取结束位置的索引，不包含结束的索引元素，可以省略不写，此时会截取从开始索引往后的所有元素

注意事项：索引可以传递一个负值，如果传递一个负值，则从后往前计算，例如，-1代表倒数第一个，-2代表倒数第二个

```js
var bemo = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"];
var arr = bemo.slice(1,3);
alert(arr);
arr = bemo.slice(2);
alert(arr);
arr = bemo.slice(-2);
alert(arr);
```

splice()方法(删除指定元素)

定义：用于从数组删除指定元素，特点会改变元素原数组，并将删除的元素以返回值的方式返回

参数

- 第一个参数，开始位置的索引
- 第二个参数，需要删除的元素数量
- 第三个参数等往后的参数，可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边

```js
var bemo = ["亚当斯密" , "大卫·李嘉图" , "马克斯·韦伯" , "阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"];
bemo.splice(1,2);
alert(bemo);
bemo.splice(2,0,"熊彼特","马克思","凯恩斯");
alert(bemo);
```

concat()方法(连接数组)

定义：连接两个或多个数组，并返回新的数组，并不会影响原数组

```js
var arr = ["亚当斯密" , "大卫·李嘉图"];
var arr1 = ["熊彼特","马克思","凯恩斯"];
var arr2 = ["阿尔弗雷德·马歇尔" , "米尔顿·弗里德曼"];
var bemo = arr.concat(arr1,arr2,"陈平");
console.log(bemo);
```

join()方法(连接字符串数组)

定义：将数组转换为一个字符串，该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回，在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符，如果不指定连接符，则默认使用，作为连接符

```js
var bemo  = ["陈平","林毅夫","张维为","朗咸平","李季"];
var arr1 = bemo.join();
var arr = bemo.join("_经济大佬_");
alert(arr);
alert(arr1);
```

reverse()方法(位置翻转)

定义：将数组的位置进行翻转，修改原数组

```js
var bemo  = ["陈平","林毅夫","张维为","朗咸平","李季"];
bemo.reverse();
alert(bemo);
```

sort()方法(数组元素排序)

定义：用于对数组元素的进行排序，会影响原数组,默认会按照Unicode编码进行排序

注意：即使对于纯数字的数组，使用sort()排序时，也会按照Unicode编码来排序，所以对数字进排序时，可能会得到错误的结果 

按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字,比较函数应该具有两个参数 a 和 b

- 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值
- 若 a 等于 b，则返回 0
- 若 a 大于 b，则返回一个大于 0 的值

总结

- 如果需要升序排列，则返回 a-b
- 如果需要降序排列，则返回 b-a

```js
var bemo  = ["陈平","林毅夫","张维为","朗咸平","李季"];
bemo.sort();
alert(bemo);
var bemo1 = [1,22,34,12,123,3,125];
bemo1.sort(function(a,b)
{
    return a-b ;

});
alert(bemo1);
```

### 函数对象

#### call()和apply()方法

在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this

call()，可以将实参在对象之后依次传递

```javascript
function fun ( a, b ) {
document.write("a ="+a) ;
document.write("b ="+b);
document.write("fun ="+this);
}

var bemo = {
    name : "函数",
    sayname: function (){
        alert(this.name);
    }
};

fun(22,33);
document.write("--------------");
fun.call(bemo , 11, 33);
```

{% note warning disabled %}
注意：默认fun()函数调用，this指向的是window对象，可以使用call()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，实参将会依次传递
{% endnote %}

apply(),需要将实参封装到一个数组中统一传递

```javascript
function fun ( a, b ) {
document.write("a ="+a) ;
document.write("b ="+b);
document.write("fun ="+this);
}

var bemo = {
    name : "函数",
    sayname: function (){
        alert(this.name);
    }
};

fun(22,33);
document.write("--------------");
fun.apply(bemo , [11, 33]);
```

{% note warning disabled %}
注意：默认fun()函数调用，this指向的是window对象，可以使用apply()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，需要制定一个实参数组进行参数传递
{% endnote %}

####  this指向

- 以函数的形式调用，this永远都是window
- 以方法的形式调用，this永远都是调用方法的对象
- 以构造函数的形式调用，this永远都是新创建的那个对象
- 以call()和apply()的形式调用，this永远都是传入的那个指定对象

#### arguments参数

当在调用函数时，浏览器每次都会传递进两个隐含的参数：

1.  函数的上下文对象： **this**
2.  封装实参的对象： **arguments**

定义：是一个类数组对象，可以通过索引来操作数据，也可以获取长度，在调用函数时，所传递的实参都会在arguments中保存

在这里有一个属性叫做callee，这个属性对应一个函数对象，就是当前正在指向的函数的对象

```javascript
function fun ( a , b )
{
    //使用下标获取第一个参数,a
    console.log(arguments[0]);
    //使用下标获取第二个参数,b
    console.log(arguments[1]);
    //获取实参的个数
    console.log(arguments.length);
    //看看它的函数的对象
    console.log(arguments.callee);
    //看看是否为真
    console.log(arguments.callee == fun);
}
fun ("我是第一个实参" , "我是第二个实参") ;
```

### Date对象

Date是javascript中表示时间的对象，如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间

```javascript
var bemo = new Date();
console.log(bemo);
//此处只是抛砖引玉
console.log(date.getFullYear());//获取当前日期对象的年份(四位数字年份)
console.log(date.getMonth());//获取当前日期对象的月份(0 ~ 11)
console.log(date.getDate());//获取当前日期对象的日数(1 ~ 31)
console.log(date.getHours());//获取当前日期对象的小时(0 ~ 23)
console.log(date.getMinutes());//获取当前日期对象的分钟(0 ~ 59)
console.log(date.getSeconds());//获取当前日期对象的秒钟(0 ~ 59)
console.log(date.getMilliseconds());//获取当前日期对象的毫秒(0 ~ 999)
```

### Math对象

此对象是属于一个工具类，既不用创建对象，也不是构造函数，因为此对象里面封装了数学运算相关的属性和方法

```javascript
//固定值
console.log("---------固定值----------");
console.log("PI = "+Math.PI);  // 返回欧拉数
console.log("E ="+ Math.E);    // 返回PI
//正数
console.log("---------正数部分------------");
console.log(Math.abs(2333));  //用来计算一个数的绝对值
console.log(Math.ceil(1.333)); //用来对一个数进行向上取整，小数位只需有值就自动进1
console.log(Math.floor(1.8848));//用来对一个数进行向下取整，小数部分会自动舍掉
console.log(Math.round(1.2)); //用来对一个数进行四舍五入取其整
console.log(Math.round(1.8));
//负数
console.log("-----------负数部分---------");
console.log(Math.abs(-1024));  //用来计算一个数的绝对值
console.log(Math.ceil(-1.288));//用来对一个数进行向上取整，小数部分会被舍掉
console.log(Math.floor(-1.999));//用来对一个数进行向下取整，小数位只需有值就自动进1
console.log(Math.round(-1.6));//用来对一个数进行四舍五入取其整
//随机数
//Math.random()：可以用来生成一个0-1之间的随机数
//生成一个0-x之间的随机数：Math.round(Math.random()*x)
//生成一个x-y之间的随机数：Math.round(Math.random()*(y-x)+x)
console.log("-----------随机数------------");
console.log(Math.random());
console.log(Math.round(Math.random() * 10));            //生成一个0-10之间的随机数
console.log(Math.round(Math.random() * (10 - 1) + 1));  //生成一个1-10之间的随机数
//数学运算
console.log("-----------数学运算------------");
console.log(Math.pow(2,3));//Math.pow(x,y),是用来返回x的y的次幂
console.log(Math.sqrt(9)); //Math.sqrt(x),是用来返回x的平方根
```

还有更多的属性和使用方式，就不一一说明了，参考网站[Math对象](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)

### String 对象

提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象

- String()：可以将基本数据类型字符串转换为String对象
- Number()：可以将基本数据类型的数字转换为Number对象
- Boolean()：可以将基本数据类型的布尔值转换为Boolean对象

看标题就知道，我们会重点介绍String()对象的属性和方法

#### String属性

**constructor**属性

定义：是返回创建字符串对象的原型函数

```javascript
var bemo = "老师好，我叫陈同学";
console.log(bemo.constructor);
```

**length**属性

定义：可以用来获取字符串的长度

```javascript
var bemo = "老师好，我叫陈同学";
console.log(bemo.length);
```

#### String方法

**charAt()**方法

定义：可以根据索引获取指定位置的字符

```js
var bemo = "老师好，我叫陈同学";
console.log(bemo.charAt(6));
```

**charCodeAt()**方法

定义：可以根据索引获取指定位置字符的字符编码，编码是**Unicode编码**

```js
var bemo = "老师好，我叫陈同学";
console.log(bemo.charCodeAt(6));
```

**concat()**方法

定义：可以用来连接两个或多个字符串

```js
var bemo = "我爱中国！";
console.log(bemo.concat("--于此同时--","中国爱你！"));
```

**indexof()**方法

定义：可以用来检索在一个字符串中是否由指定的内容，若有，则会返回其第一次出现的索引的位置，若没有，则会返回-1，同时可以指定第二个参数，指定开始查找的位置

```js
var bemo = "My magic scholar";
console.log(bemo.indexOf("g"));
console.log(bemo.indexOf("b"));
console.log(bemo.indexOf("c",10));
```

**slice()**方法

定义：可以用来从字符串中截取指定的内容，但不会影响原字符串，将截取到的内容作为返回值返回

参数：

- 第一个参数：开始位置的索引（包括开始位置）
- 第二个参数：结束位置的索引（不包括结束位置），如果省略第二个参数，则会截取到后边所有的

注意：也可以传递一个负数作为参数，负数的话将会从后边计算

```js
var bemo = "My magic scholar!";
var bemo_1 = bemo.slice(0,8);
console.log(bemo_1);
bemo_1 = bemo.slice(2,8);
console.log(bemo_1);
bemo_1 = bemo.slice(0,-1);
console.log(bemo_1);
```

**substring()**方法

定义：和slice（）类似，可以用来截取一个字符串，但这个方法不能接受负值作为参数，如果传递了一个负值，则默认使用0，而且它还自动调整参数的位置，如果第二个参数小于第一个，则自动交换

参数：

- 第一个参数：开始截取位置的索引（包括开始位置）
- 第二个参数：结束位置的索引（不包括结束位置），如果省略第二个参数，则会截取到后边所有的

```js
var bemo = "My magic scholar!";
var bemo_1 = bemo.slice(0,8);
console.log(bemo_1);
bemo_1 = bemo.slice(2,8);
console.log(bemo_1);
bemo_1 = bemo.slice(4,-1);
console.log(bemo_1);
```

**substr()**方法

定义：可以用来截取字符串

参数：

- 第一个参数：截取开始位置的索引
- 第二个参数：截取的长度

```js
var bemo = "不要在催更了，文章和知识正在学和写";
var bemo_1 = bemo.substr(2,10);
console.log(bemo_1);
```

**split()**方法

定义：可以用来将一个字符串拆分为一个数组，但需要一个字符串作为参数，根据参数去拆分数组

```js
var bemo = "不要在催更了,文章和知识正在学和写";
var bemo_1 = bemo.split(",");
console.log(bemo_1);
console.log(bemo_1[0]);
console.log(bemo_1[1]);
```

**toUpperCase()**方法

定义：可以用来将一个字符串转换为大写的形式，并返回

```js
var bemo ="Teenagers are not afraid of the long years, but there is still glory in the other side";
var bemo_1 = bemo.toUpperCase();
console.log(bemo_1);
```

**toLowerCase()**方法

定义：可以用来将一个字符串转换为小写的形式，并返回

```js
var bemo ="Teenagers are not afraid of the long years, but there is still glory in the other side";
var bemo_1 = bemo.toLowerCase();
console.log(bemo_1);
```

