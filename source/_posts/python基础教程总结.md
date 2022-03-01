title: Python基础教程总结

date: 2021-08-25 7:58:00

keywords: "Python"

tags: 

- 教程笔记
- Python
- 编程语言

categories: "Python"

top_img:  "https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-5wwzq5.png"

cover: https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-dgdjml.png

background: url(https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-45k784.jpg)

---

python的特点，简单易学，有一个广泛的标准库，可移植，可嵌入，支持GUI编程，有互动模式

Python的安装环境，我们就不谈了，Python历史，我们也不谈了，简单ψ(*｀ー´)ψ

### 运行Python的方式

#### 1.交互式解释器

可以通过命令行窗口进入 Python，并在交互式解释器中开始编写 Python 代码

#### 2.命令行脚本

通过引入解释器可以在命令行中执行Python脚本

#### 3.集成开发环境

## Hello World

### print()

print( )函数是输出函数

```python
#可以输出数字
print(1024)
print(8848)
#可以输出字符串
print("helloworld")
print('helloworld')
#含有运算符的表达式
print(520+1314)
print(88-22)
#将数据输出文件中
#注意点 1.所指定的盘符的存在  2.使用file = a
a = open('H:\文档库\学习笔记库\编程\Python/2233.txt','a+') #a+如果文件不存在就创建，存在就在文件内容的后面继续追加
print('你好，陈若',file=a)#给文件输出内容
a.close()#关闭文件
#不进行换行输出(输出内容在一行当中)
print("hello","陈若","加油")
```

### print输出

print 默认输出是换行的，如果要实现不换行需要在变量末尾加上逗号 **,**

```python
x = "迪迦"
y = "戴拿"
#换行输出
print (x) 
print (y) 

print ("---------")
#不换行输出
print (x) ,
print (y) ,
print (x,y)
```

### 转义字符

定义：就是反斜杠+转义功能首字母

字符串中包含反斜杠、单引号和双引号等有特殊用途的字符时，需要转义字符

```python
#反斜杠:\\
#单引号:\’
#双引号:\“
```

字符串中包含换行、回车、水平制表或退格等无法直接表示的特殊字符时，可以使用转义字符

```python
#换行:\n
#回的:\r
#水平制表符:\t
#退格:\b
```

代码讲解

```python
print("hello\nworld") #\ + 转义功能的首字母 n->newline的首字符是换行
print("hello\tworld")
print("helloooo\tworld")
print("hello\rworld")#world将hello进行了覆盖
print("hello\bworld")#\b是退一个格，将o退消失
print("http:\\\\www.chen-ruo.top")#在输出界面\\会变成\，解决方法就是写\\\\,然后会变成\\
print("我说："老师好，我叫陈同学"")#解决方法
print("我说：\"老师好，我叫陈同学\"")#加\
```

### 原字符

定义：不希望字符串的转义字符起作用，在字符串前面加上r,或R

```python
print(r"hello\nworld")
""""
注意事项，最后一个字符不能是反斜杠，但可以是两个
一个 不彳亍
两个 彳亍
"""
print(r"hello\nworld\")
print(r"hello\nworld\\")
```

### 注释

#### 单行注释

用于对单行内容的注释

```python
#我是第一名
#你是第二名
```

#### 多行注释

使用三个单引号(''')或三个双引号(""")

```python
"""
(*^▽^*)
(✪ω✪)
ヾ(●´∀｀●)
ヾ(^Д^*)/
"""

'''
(◕ᴗ◕✿)
(｡◕ˇ∀ˇ◕)
(❁´◡`❁)*✲ﾟ*
＜(▰˘◡˘▰)
'''
```

## 变量

### 什么是变量

变量是内存中的一个带标签的空间，在变量创建时会在内存中开辟一个空间

### 变量的组成

1.标识：表示对象所存储的内存地址，可以使用内置函数id(obj)来获取

2.类型:表示的是对象的数据类型，可以使用内置函数type(obj)来获取

3.值:表示对象所存储的具体数据，使用print(obj)可以将值进行打印输出

等号 **=** 用来给变量赋值。

等号 **=** 运算符左边是一个变量名，等号 **=** 运算符右边是存储在变量中的值

```python
diyi="奥特曼"

print(diyi)
print("标识",id(diyi))  #内存地址的随机生成的的
print("类型",type(diyi))
print("值",diyi)
```

### 多次赋值

当多次赋值之后，变量名会指向新的内存空间

```python
diyi="亚当斯密"
print(id(diyi))
diyi="大卫李嘉图"
print(id(diyi))
```

## 数据类型

### 标准数据类型

1.Numbers(数字)

2.String(字符串)

3.List(列表)

4.Tuple(元组)

5.Dictionary(字典)

### 数字

支持四种不同的数字类型

int(有符号整型)

long(长整型)

float(浮点型)

complex(复数)

#### int整数类型

可以表示正整数、负整数和0

整数的不同进制的表示方式

十进制->默认的进制

二进制->以0b开头

八进制->以0o开头

十六进制->以0x开头

```python
print("十进制",1024) #十进制->默认的进制
print("二进制",0b100001) #二进制->以0b开头
print("八进制",0o2233) #八进制->以0o开头
print("十六进制",0xFFFF) #十六进制->以0x开头
```

#### float浮点型

浮点数整数部分和小数部分组成

浮点数存储不精确性

```python
print(22.33+10.24) #32.570000000002
print(2.2+3.3) #5.5
```

解决方法

```python
print(Decimal("22.33")+Decimal('10.24')) #32.57
```

### 字符串

是由数字、字母、下划线组成的一串字符

#### 有两种取值顺序

- 从左到右索引默认0开始的，最大范围是字符串长度少1
- 从右到左索引默认-1开始的，最大范围是字符串开头

如果你要实现从字符串中获取一段子字符串的话，可以使用 **[头下标:尾下标]** 来截取相应的字符串，其中下标是从 0 开始算起，可以是正数或负数，下标可以为空表示取到头或尾

**[头下标:尾下标]** 获取的子字符串包含头下标的字符，但不包含尾下标的字符

#### 加号（+）是字符串连接运算符，星号（*）是重复操作

```python
diyi = "老师好，我叫陈同学"
print(diyi) # 输出完整字符串
print(diyi[0]) # 输出字符串中的第一个字符
print(diyi[4:8])  # 输出字符串中第三个至第六个之间的字符串
print(diyi[4:])  # 输出从第三个字符开始的字符串
print(diyi*3) # 输出字符串三次
print(diyi + "(✪ω✪)") # 输出连接的字符串
```

### 列表

可以完成大多数集合类的数据结构实现。它支持字符，数字，字符串甚至可以包含列表（即嵌套），类似于C++中的数组

列表中值的切割也可以用到变量 **[头下标:尾下标]** ，就可以截取相应的列表，从左到右索引默认 0 开始，从右到左索引默认 -1 开始，下标可以为空表示取到头或尾

加号 **+** 是列表连接运算符，星号 ***** 是重复操作

```python
diyi = ["老师好"，"我叫陈同学"]
print(diyi) # 输出完整字符串
print(diyi[0]) # 输出字符串中的第一个字符
print(diyi[4:8])  # 输出字符串中第三个至第六个之间的字符串
print(diyi[4:])  # 输出从第三个字符开始的字符串
print(diyi*3) # 输出字符串三次
print(diyi + "(✪ω✪)") # 输出连接的字符串
```

### 元组

元组用 **()** 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表，类似于C++中的const数组,不可多次赋值

```python
diyi = ("老师好"，"我叫陈同学")
print(diyi) # 输出完整字符串
print(diyi[0]) # 输出字符串中的第一个字符
print(diyi[4:8])  # 输出字符串中第三个至第六个之间的字符串
print(diyi[4:])  # 输出从第三个字符开始的字符串
print(diyi*3) # 输出字符串三次
print(diyi + "(✪ω✪)") # 输出连接的字符串
```

### 字典

列表是有序的对象集合，字典是无序的对象集合

两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取

字典用"{ }"标识。字典由索引(key)和它对应的值value组成

```python
diyi = {}
diyi['one'] = "这是one"
diyi[2] = "这是two"
 
eee = {'6666': '234','code':1024, 'dept': 'sales'}
 
 
print diyi['one']          # 输出键为'one' 的值
print diyi[2]              # 输出键为 2 的值
print eee             # 输出完整的字典
print eee.keys()      # 输出所有键
print eee.values()    # 输出所有值
```

## 数据类型转换

### int()

将其他类型转换成整数类型

```python
i1="1024"
i2=88.48
i3="88.48"
i4=true
i5="python"
print(type(i1),type(i2),type(i3),type(i4),type(i5))
print(int(i1),type(int(i1)) #将string转成int类型，字符串为数字串
print(int(i2),type(int(i2))) #将float转成int类型,截取整数部分，舍去小数部分
print(int(i3),type(int(i3))) #将string转成int类型，程序报错,因为字符串为小数串
print(int(i4),type(int(i4))) #将float转成int类型,1
print(int(i5),type(int(i5))) #将string转成int类型，字符串必须为数字串(整数),非数字串不允许转换
```

### float()

将其他类型转换成浮点类型

```python
f1="10.24"
f2="8848"
f3=true
f4="python"
f5=996
print(type(f1),type(f2),type(f3),type(f4),type(f5))
print(float(f1),type(float(f1))) #将string转成float类型，字符串为数字串
print(float(f2),type(float(f2))) #将string转成float类型，整数字串在点后加零零
print(float(f3),type(float(f3))) #将float转成float类型
print(float(f4),type(float(f4))) #将string转成float类型，程序报错，字符串必须为数字串(整数),非数字串不允许转换
print(float(f5),type(float(f5))) #将int转成float类型,整数字在点后加零零
```

### string()

将其他类型转换成字符串类型

```python
s1=2233
s2=10.24
s3=true
print(type(s1),type(s2),type(s3))
print(str(s1),type(str(s1)))
print(str(s2),type(str(s2)))
print(str(s3),type(str(s3)))
```

### complex()

将其他类型转换成复数类型

```python
c1=1024
c2="2233"
c3="2+3j"
print(type(c1),type(c2),type(c3))
print(complex(c1),type(complex(c1))) #数字
print(complex(c2),type(complex(c2))) #当字符串处理
print(complex(c3),type(complex(c3))) # 注意：这个地方在"+"号两边不能有空格，也就是不能写成"2 + 3j"，应该是"2+3j"，否则会报错
```

## input()输入函数

在Python3中，input()函数接受一个标准输入数据，返回为string类型，使其接收任意任性输入，将所有输入默认为字符串处理，并返回字符串类型

### 使用

```python
diyi=input("你真的帅吗？（回答）")
print(diyi,type(diyi))
```

### 强制类型转换

由于接收任意任性输入，将所有输入默认为字符串处理，并返回字符串类型，我想出了两种解决方案

```python
#第一
diyi=input("你今年多少岁？")
diyi=int(diyi)
print(diyi,type(diyi))

#第二
dier=int(input("你每天的学习时间是多少？"))
print(dier,type(dier))
```

## 运算符

### 算术运算符

```python
#标准算术运算符
print(1+1) #加法运算
print(1-1) #减法运算
print(2*8) #乘法运算
print(1/2) #除法运算
print(12/2) #除法运算
print(12//5) #2 整除运算
print(-12//-5) #2 负负得正
print(12//-5) #-2
print(-12//5) # -2 一正一负的整数公式，向下取整
#取余运算符
print(12%2) #取余运算
print(9%-4) #-3 公式  9-(-4)*(-3)
print(-9%4) #3 公式  -9-4*(-3) 
#幂运算符
print(2**2) #表示2的2次方
print(2**4) #表示2的4次方


```

### 比较运算符

```python
a = 12
b = 24
print("a>b吗", a>b) #false
print("a<b吗", a<b) #true
print("a<=b吗", a<=b) #true
print("a>=b吗", a>=b) #false
print("a==b吗", a==b) #false
print("a!=b吗", a!=b) #true
```

### 身份运算符

```python
#用于比较两个对象的存储单元
#is 是判断两个标识符是不是引用自一个对象
a=2233
b=2233
print(a==b) #true 说明，a与b的值 相等
print(a is b) #true 说明，a与b的内存地址 相等
list1 = [1,2,3,4,5]
list2 = [1,2,3,4,5]
print( list1 == list2 ) #true,值相等
print( list1 is list2 ) #false，内存地址不相等
print( id( list1 ) )
print( id( list2 ) )

#is not 是判断两个标识符是不是引用自不同对象
print( a is not b ) #false a的id与b的id是不相等 
print( list1 is not list2) #true
```

### 赋值运算符

执行顺序：从右向左

支持链式赋值，支持参数赋值，支持系列解包赋值

#### 链式赋值

```python
#链式赋值
#指向同一内存地址
a=b=c=2233
print( a , id ( a ) )
print( b , id ( b ) )
print( c , id ( c ) )
```

#### 参数赋值

```python
a = 10
a += 10 # 等价于 a=a+10
print(a)
a -= 10 # 等价于 a=a-10
print(a)
a *= 2 # 等价于 a=a*2 
print(a)
print(type(a)) # int
a /= 3
print(a)
print(type(a)) # float
a //=2
print(a)
print(type(a))
a%=3
print(a)
```

#### 解包赋值

```python
a,b,c = 1,2,3
print(a,b,c)
#a,b=1,2,3  程序会报错，因为左右变量的个数和值的个数不对应

#值 转换
a,b = 1,2
print("之前",a,b)
a,b = b,a
print("之后",a,b)
```

### 逻辑运算符

```python
a,b = 1,2

# and 并且
print(a==1 and b==2) #变量 a 和 b 都为 true
print(a==1 and b<2) # false
print(a!=1 and b==2) #false
print(a!=1 and b!=2) #false

# or 或者
print(a==1 or b==2) #true
print(a==1 or b<2) #变量 a 和 b 都为 true，或其中一个变量为 true
print(a!=1 or b==2) #true
print(a!=1 or b!=2) #false

# not 取反
f1 = true
f2 = false
print(not f1) #变量 f1 和 f2 都为 false，或其中一个变量为 false
print(not f2)
```

### 成员运算符

```python
# in 如果在指定的序列中找到值返回 True，否则返回 False
# not in 如果在指定的序列中没有找到值返回 True，否则返回 False
s = "python"

print("p",in s) #true
print("c",in s) #false

print("p",not in s) #false
print("c",not in s) #true
```

### 位运算符

```python
print(2&4) #按位与&  同为1时结果为1

print(2|4) #按位或| 同为0时结果为0

print(4<<1) #向左移动1位（移动一个位置）相当于乘以2
print(4<<2) #向左移动2位（移动2个位置）相当于乘以2^2

print(4>>1) #向右移动1位（移动一个位置）相当于除以2
print(4>>2) #向右移动2位（移动2个位置）相当于除以2^2
```

## 优先级

（） > 算术运算符 > 位运算符 > 比较运算符 > 等于运算符 > 赋值运算符 > 身份运算符 > 成员运算符 > 逻辑运算符

## 流程控制结构

顺序结构

选择结构

循环结构



## 对象的布尔值

```python
#以下对象都为false
print(bool(false))
print(bool(0))
print(bool(0.0))
print(bool(None))
print(bool(""))
print(bool(''))
print(bool([]))
print(bool(list()))
#其他的对象都为true
```



## 顺序结构

定义：是流程控制中最简单的一种结构，该结构的特点是按照语句的先后顺序依次执行，每条语句只执行一次

### 结构框架：

1.根据要解决的问题确定变量的个数
2.如果变量的值需要直接给出，如一个常量，需设计相应的赋值语句
3.如果变量的值需要用户从键盘输入，需设计相应的输入语句
4.如果变量是保存运算的结果，需设计相应的处理语句，如把相应的数学公式转换为Python运算表达式，或编写Python函数调用语句
5.输出相应的信息和结果变量值



## 选择结构

定义：是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块

### if 语句 

#### 框架

```python
if 判断条件 ：
   执行语句
else :
    执行语句
```

#### 规则

如果判断条件的布尔值为true，条件语句的返回值为if ，否则条件语句的返回值为false

#### 实例

```python
a = int(input("请输入你的年龄"))
b = int(input("请输入你的对象的年龄"))
#比较大小
if a > b :
    print("老牛吃嫩草")
else:
    print("好白菜被猪拱了")
```

### 辅助语句

### pass语句

定义：是空语句，是为了保持程序结构的完整性，语句什么都不做，只是一个占位符，用在语法上需要语句的地方

#### 实例

```python
a = int(input("请输入你的年龄："))
if a:
    print(a)
else :
    print("胎教年龄",a)
```

### 内置函数range( )

定义：生成一个整数列表

#### 框架

```python
range(start,stop,step)
#start: 计数从 start 开始。默认是从 0 开始。例如range（5）等价于range（0， 5）;
#stop: 计数到 stop 结束，但不包括 stop。例如：range（0， 5） 是[0, 1, 2, 3, 4]没有5
#step：步长，默认为1。例如：range（0， 5） 等价于 range(0, 5, 1)
#第一种
a = range(10) #[0,1,2,3,4,5,6,7,8,9],默认从0开始，默认相差1称为步长
print(a) #range(0,10)
print(list(a)) #用于查看range对象中的整数序列

#第二种
b = range(1,10)
print(list(b))

#第三种
c = range(1,10,2)
print(list(c))
```



## 循环结构

### While语句

定义：用于循环执行程序，即在某条件下，循环执行某段程序，以处理需要重复处理的相同任务

规则：执行语句可以是单个语句或语句块，判断条件可以是任何表达式，任何非零、或非空（null）的值均为true，当判断条件假 false 时，循环结束，当判断条件一直为真时，会一直循环下去

#### 框架

```python
while 判断条件：
       执行语句
```

#### 实例

```python
a = 0
while  10 > a :
    print("这是",a)
    a += 1
print("迪迦奥特曼")
```

### for语句

定义：可以遍历任何序列的项目

#### 框架

```python
for iterating_var in sequence:
   statements(s)
```

#### 实例

```python
#第一
for a in "python":
    print(a)
#第二  使用 range()
for b in range(10):
    print(b)
#第三
for _ in range(10):
    print("经济学大佬")
#第四 求偶数之和
c = 0 
for a in range(1,108):
    if a % 2 == 0:
      c += a
    print("偶数之和为：",c)
```

### break语句

定义：用来终止循环语句，即循环条件没有False条件或者序列还没被完全递归完，也会停止执行循环语句

#### 实例

```python
#第一
for a in "python":
    if a == "o"
      break
    print(a)
#第二
b = 0
while b < 10:
    print(b)
    b += 1
    if b == 6:
        break
print("好了")
```



### continue 语句

定义：用来跳过当前循环的剩余语句，然后继续进行下一轮循环

区别：continue 语句跳出本次循环，而break跳出整个循环

#### 实例

```python
#第一
for a in "python":
    if a == "o"
      continue
    print(a)
#第二
b = 0
while b < 10:
    print(b)
    b += 1
    if b == 6:
        continue
print("好了")
```

### else语句

#### if-else语句

```python
num=input()
num=int(num)
if num>0:
    print(num,'是个正数')
else:
    print(num,'是个负数')
```

#### while/for-else语句

定义：只有执行完while/for才会执行else，如果while/for循环没有执行完发生中断跳出循环，则不会执行else语句

```python
#第一
num=3
while num>0:
    num-=1
    print(num)
else:
    print('执行else语句！')

#第二
for i in range(5):
    print(i)
    if i==3:          #循环中断
        break
else:
    print('执行else语句！')
```

#### try-except-else语句

定义：else与异常处理搭配，只要try中的语句没有出现异常，就执行else语句。若执行了except语句块，就不执行else语句

```python
#第一
try:
    sum=1+'2'
    print(sum)
except TypeError:
    print('出现错误！')
else:
    print('没有错误！')

#第二
try:
    sum=1+2
    print(sum)
except TypeError:
    print('出现错误！')
else:
    print('没有错误！')
 
```

### 嵌套循环

二重循环类似于二维数组，简单ψ(*｀ー´)ψ

#### for

```python
a = 0 
b = 0 
for a in range(10):
    for b in range(10):
        print("_=_",end="\t")
        b += 1
    a += 1
```

#### while

```python
a = 0 
b = 0
while 10 > a:
    while 10 > b :
        print("$+=+$",end="\t")
        b += 1
    print()
    a += 1
```

## 列表(list)

定义：list列表的本质是一种有序的集合

### 特点：

- 列表元素按顺序有序排序
- 索引映射唯一个数据
- 列表可以存储重复数据
- 任意数据类型混存
- 根据需要动态分配和回收内存

### 创建

```python
#第一种方法  使用[]
a = ["你好","周杰伦","yyds","(✪ω✪)"]

#第二种方法  使用内置函数list()
a = list(["你好","周杰伦","yyds","(✪ω✪)"])
```

### 查询

#### 获取列表中指定元素的索引

index()函数

- 如查列表中存在N个相同元素，只返回相同元素中的第一个元素的索引
- 如果查找的元素在列表中不存在，则会抛出ValueError
- 还可以在指定的start和stop之间进行查找

```python
a = ["你好","周杰伦","yyds","(✪ω✪)","yyds"]

print(a.index("周杰伦")) #查列表中有相同元素，只返回相同元素中的第一个元素的索引

print(a.index("林俊杰")) #查找的元素在列表中不存在，则会抛出ValueError

print(a.index("yyds" , 3,5)) #在指定的start和stop之间进行查找
```

#### 获取列表中的单个元素

- 正向索引从0到N-1
- 逆向索引从-N到-1
- 指定索引不存在，会抛出indexError

```python
a = ["你好","周杰伦","yyds","(✪ω✪)","yyds"]

print(a[1]) #结果 周杰伦

print(a[-4])  #结果 周杰伦

print(a[5]) #指定索引不存在，会抛出indexError
```

#### 获取列表中的多个元素

##### 切片操作：

- 切片的结果  -> 原列表片段的拷贝
- 切片的范围 -> [ start , stop )
- step默认为1 -> 简写为[ start , stop )
- step为正数 -> [ : stop : step ] -> 切片的第一个元素默认是列表的第一个元素 -> 从start开始往后计算切片
- ​                   -> [ start : : step ] -> 切片的最后一个元素默认是列表的最后一个元素 -> 从start开始往后计算切片
- step为负数 -> [ : stop : step ] -> 切片的第一个元素默认是列表的最后一个元素 -> 从start开始往后计算切片
- ​                   -> [ start : : step ] -> 切片的最后一个元素默认是列表的第一个元素 -> 从start开始往后计算切片

##### 语法

```python
# 列表名 [ start : stop : step ]
```

### 增加

#### append( )

定义：在列表的末尾添加一个元素

```python
a = [ 1 , 2 , 3 ]

print("添加元素之前",a,id(a))

a.append(4)

print("添加元素之后",a,id(a))
```

#### extend( )

定义：在列表的末尾至少添加一个元素

```python
a = [ 1 , 2 , 3 ]

print("添加元素之前",a,id(a))

a.append(4)

print("添加元素之后",a,id(a))

b = ["周杰伦","林俊杰"]

a.extend(b)

print(a)
```

#### insert( )

定义：在列表的任意位置添加一个元素

```python
a = [ 1 , 2 , 3 ]

print("添加元素之前",a,id(a))

a.append(4)

print("添加元素之后",a,id(a))

a.insert(1,1.5)

print(a)
```

#### 切片

定义：在列表的任意位置添加至少一个元素

```python
a = [ 1 , 2 , 3 ]

b = [ 2333,232,234 ]

a[1:] = b 

print (a)
```

### 删除

#### remove( )

- 一次删除一个元素

- 重复元素只删除第一个

- 元素不存在抛出ValueError

  ```python
  a = [ 1,2,3,4,5,6,7,8 ]
  
  a.remove(2)
  
  print(a)
  
  a.remove(9) #元素不存在抛出ValueError
  ```

  

#### pop( )

- 删除一个指定索引位置上的元素

- 指定索引不存在抛出IndexError

- 不指定索引，删除列表中最后一个元素

  ```python
  a = [ 1,2,3,4,5,6,7,8 ]
  
  a.pop(1) #删除一个指定索引位置上的元素
  
  print(a)
  
  a.pop(8) #指定索引不存在抛出IndexError
  
  a.pop() #不指定索引，删除列表中最后一个元素
  
  print(a)
  ```

  

#### 切片

- 一次至少删除一个元素

  ```python
  a = [ 1,2,3,4,5,6,7,8 ]
  
  b = a[1:3]
  
  print("原列表",a)
  
  print("切片后的列表",b)
  
  a [1:3]=[]
  
  print(a)
  ```



#### clear( )

- 清空列表

  ```python
  a = [ 1,2,3,4,5,6,7,8 ]
  
  a.clear()
  
  print(a)
  ```

  

#### del 

- 删除列表

  ```python
  a = [ 1,2,3,4,5,6,7,8 ]
  
  del a
  
  print(a)
  ```

### 修改

指定索引的元素赋予一个新值

```python
a = [ 1,2,3,4,5,6,7,8 ]

a[1] = 2333

print(a)
```

指定的切片赋予一个新值

```python
a = [ 1,2,3,4,5,6,7,8 ]

a[1:3]=[11,22,33,44,55]

print(a)
```

### 排序

#### sort()

```python
#第一种 方式
a = [ 1,2,3,4,5,6,7,8 ]

print("排序前的列表",a,id(a))

a.sort() #升序排序

print("排序后的列表",a,id(a))

#第二种 方式
b = [ 1,2,3,4,5,6,7,8 ]

b.sort(reverse=true) #reverse=true  表示降序排序

print(b)

b.sort(reverse=false) #reverse=false  表示升序排序

print(b)
```

#### sorted( )

```python
a = [ 1,2,3,4,5,6,7,8 ]

print("原列表",a)

b = sorted(a)

print(a)
print(b)

c = sorted( a , reverse=true)

print(c)
```

## 字典(dict)

定义：以 键值对的方式存储数据，是一个无序序列，键一般是唯一的，如果重复最后的一个键值对会替换前面的，值不需要唯一

### 创建

```python
#第一种  方式
a = { "a": 1024 , "b": 2333 , 6666: 8848 }
print(a)

#第二种  方式
b = dict( "a": 1024 , "b": 2333 , 6666: 8848 )
print(b)
```

### 查找

```python
#第一种 方式 使用[]
#[]如果字典中不存在指定的key，抛出keyError异常
a = {"a":2233,"b":1024,"c":886}
print(a["a"])

#第二种 方式 使用get()
#get()方法取值，如果字典中不存在指定的key，并不会抛出KeyError而是返回None，可以通过参数设置默认的value,以便指定的key不存在时返回
print(a.get("a"))
print(a.get("d"))
print(a.get("e",223344))
```

### 增加

```python
a = {"a":2233,"b":1024,"c":886}

#增加操作
a["d"] = 9999 #增加元素
print(a)

#更新操作
a["c"] = 996 #更新元素
print(a)
```

### 删除

```python
a = {"a":2233,"b":1024,"c":886}

del a["a"] #删除“a"的内容
print(a)

a.clear()  #清空字典的所有条目

del a #删除整个字典
```

### 视图

```python
a = {"a":2233,"b":1024,"c":886}
#第一种  keys()  
#获取指点中所有key
keys = a.keys()
print(keys)
print(type(keys))
print(list(keys)) #将所有的key组成的视图转成列表

#第二种  values()
#获取字典中所有value
values = a.values()
print(values)
print(type(values))
print(list(values))

#第三种  items()
#获取字典中所有key,value对
items = a.items()
print(items)
print(list(items))
```

### 特点

- 字典中所有元素都是一个ley-value对，key不允许重复,value可以重复
- 字典中的元素是无序的
- 字典中的key必须是不可变对象
- 字典也可以根据需要动态地伸缩
- 字典会浪费较大的内存，是一种使用空间复杂度交换时间复杂度的数据结构

## 元组

定义：是一个不可变序列，元组使用小括号，列表使用方括号

不可变序列与可变序列

- 不可变序列 ：字符串、元组
- ​           不可变序列：没有增、删、改操作
- 可变序列：列表、字典
- ​            可变序列：可以对序列执行增、删、改操作，对象地址不发生更改

注意事项：元组中存储的是对象的引用

- 如果元组中对象本身不可变对象，则不能再引用其它对象
- 如果元组中的对象是可变对象，则可变对象的引用不允许改变，但数据可以改变

### 创建

```python
#第一种 方式 直接小括号
a = ("周杰伦","林俊杰","许嵩")
b = "周杰伦","林俊杰","许嵩"

#第二种 方式 空元组
c =()

#第三种 方式 只包含一个元组的元素需要使用逗号和小括号
d = (2233,)

```

### 不可变序列与可变序列

```python
a = ( 1024 , [123,456] , 2333)
print(a)
print(type(a))
print(a[0],type(a[0]),id(a[0]))
print(a[1],type(a[1]),id(a[1]))
print(a[2],type(a[2]),id(a[2]))
#由于[123,456]列表，而列表是可变序列，所以可以向列表中增加元素，而列表的内存地址不变,但不允许修改
a[1].append() #向列表中增加元素
print(a,id(a))
```

### 修改

```python
a = ("周杰伦","林俊杰","许嵩")
b = (2333,1024,9968)
# 创建一个新的元组
c = a + b
print(c)
```

### 删除

```python
a = ("周杰伦","林俊杰","许嵩")
del a
```

## 集合

元素不允许重复，元素是无序的

### 创建

```python
#第一种  方式  直接{}
a = { "周杰伦","林俊杰","许嵩" }
print(a,type(a))

#第二种  方式  使用内置函数set()
b = set(range(6))
print(b , type(b))

c = set([1,2,3,4,5,6,7,7])
print(c , type(c))

d = set("周杰伦yyds")
print(d , type(d))

e = set({1,2,3,4,5,6,7,8,9,10})
print(e , type(e))

f = set()
print(f , type(f))
```

### 判断

```python
a = { "周杰伦","林俊杰","许嵩" }
print("周杰伦" in a) # true
print("张大大" in a ) #false 你别恶心我了
print("周杰伦" not in a) #false 周杰伦yyds
print("张大大" not in a) #true  还好不在
```



### 增加

#### add()

定义：一次添加一个元素

```python
a = {"周杰伦","林俊杰","许嵩"}
a.add("张学友")
print(a)
```

#### update()

定义：至少添加一个元素

```python
a = {"周杰伦","林俊杰","许嵩"}
a.update({1024,2233,8848})
print(a)
a.update([100,200,300])
a.update((10,20,30))
print(a)
```

### 删除

#### remove()

定义：一次删除一个指定元素，如果指定的元素不存在抛出KeyError 

```python
a = {1,2,3,4,5,6,7,8}
a.remove(1)
print(a)
```

#### discard()

定义：一次删除一个指定元素，如果指定的元素不存在不抛出异常

```python
a = {1,2,3,4,5,6,7,8}
a.discard(4)
a.discard(6)
print(a)
```

#### pop()

定义：一次只删除一个任意元素

```python
a = {1,2,3,4,5,6,7,8,9,10}
a.pop()
print(a)
```

#### clear()

定义：清空集合

```python
a = {1,2,3,4,5,6,7,8,9,10}
a.clear()
print(a)
```

### 集合间的关系

#### 两个集合是否相等

- 可以使用运算符 == 或 != 进行判断

  ```python
  a = {1,2,3,4,5,6,7,8,9,10}
  b = {10,9,8,7,6,5,4,3,2,1}
  
  print(a == b) #true
  print(a != b) #false
  ```

#### 一个集合是否是另一个集合的子集

- 可以调用issubset()进行判断

  ```python
  a = {1,2,3,4,5,6,7,8,9,10}
  b = {1,2,3,4,5,6}
  c = {1,2,3,11}
  
  print(b.issubset(a)) #true
  print(c.issubset(a)) #false
  ```

#### 一个集合是否是另一个集合的超集

- 可以调用issuperset()进行判断

  ```python
  a = {1,2,3,4,5,6,7,8,9,10}
  b = {1,2,3,4,5,6}
  c = {1,2,3,11}
  print(a.issuperset(b)) #true
  print(a.issuperset(c)) #false
  ```

#### 两个集合是否没有交集

- 可以调用isdisjoint()进行判断

  ```python
  a = {1,2,3,4,5,6,7,8,9,10}
  b = {1,2,3,4,5,6}
  c = {1,2,3,11}
  d = {10,20,30}
  
  print(b.isdisjoint(c)) #false
  print(c.isdisjoint(d)) #true
  ```

### 数学操作

#### 交集

```python
a = {1,2,3,4,5,6,7,8,9,10}
b = {1,2,3,4,5,6}

#第一种 方式
print(b.intersection(a))

#第二种 方式
print(b & a)

print(a)
print(b)
```

#### 并集

```python
a = {1,2,3,4,5,6,7,8,9,10}
b = {1,2,3,4,5,6}

#第一种 方式
print(b.union(a))

#第二种 方式
print(b | a)

print(a)
print(b)
```

#### 差集

```python
a = {1,2,3,4,5,6,7,8,9,10}
b = {1,2,3,4,5,6}

#第一种 方式
print(b.difference(a))

#第二种 方式
print(b - a)

print(a)
print(b)
```

#### 对称差集

```python
a = {1,2,3,4,5,6,7,8,9,10}
b = {1,2,3,4,5,6}

#第一种 方式
print(b.symmetric_difference(a))

#第二种 方式
print(b ^ a )

print(a)
print(b)
```

## 字符串

字符串是不可变类型

### 驻留机制

定义：仅保存一份相同且不可变字符串的方法，不同的值被存放在字符串的驻留池中，在这机制中对相同的字符串只保留一份拷贝，以后创建相同字符串时，不会开辟新的内存地址，而是覆盖

### 查找

#### index()

定义：查找子串第一次出现的位置，如果查找的子串不存在时，则抛出ValueError

```python
a = "周杰伦,林俊杰,许嵩"

print(a.index("周杰伦")) # 0
print(a.index("胡歌")) # value error
```

#### rindex()

定义：查找子串最后一次出现的位置，如果查找的子串不存在时，则抛出ValueError

```python
a = "周杰伦,林俊杰,许嵩"

print(a.rindex(",")) # 7
print(a.rindex("胡歌")) # value error
```

#### find()

定义：查找子串第一次出现的位置，如果查找的子串不存在时，则返回-1

```python
a = "周杰伦,林俊杰,许嵩"

print(a.find("周杰伦")) # 0
print(a.find(",")) #3
print(a.find("胡歌")) # -1
```

#### rfind()

定义：查找子串最后一次出现的位置，如果查找的子串不存在时，则返回-1

```python
a = "周杰伦,林俊杰,许嵩"

print(a.rfind("周杰伦")) # 0
print(a.rfind(",")) # 7
print(a.rfind("胡歌")) # -1
```

### 大小写转换

注意：转换之后会产生新的字符串和新的内存地址

#### upper()

定义：把字符串所有字符都转成大写字母

```python
a = "You are a real Wu Yanzu"
b = a.upper()

print(a,id(a))
print(b,id(b))
```

#### lower()

定义：把字符串所有字符都转成小写字母

```python
a = "You are a real Wu Yanzu"
b = a.lower()

print(a,id(a))
print(b,id(b))
```

#### swapcase()

定义：把字符串所有大写字母转成小写字母，把所有小写字母都转成大写字母

```python
a = "You are a real Wu Yanzu"
b = a.swapcase()

print(a,id(a))
print(b,id(b))
```

#### capitalize()

定义：把第一个字符转换为大写，其余字符转换为小写

```python
a = "You are a real Wu Yanzu"
b = a.capitalize()

print(a,id(a))
print(b,id(b))
```

#### title()

定义：把每个单词的第一个字符转换为大写，把每个单词的剩余字符转换为小写

```python
a = "You are a real Wu Yanzu"
b = a.title()

print(a,id(a))
print(b,id(b))
```

### 对齐操作

#### center()

定义：居中对齐，第一个参数指定宽度，而第二个参数指定填充符是可选可不选的，不选时，默认为空格，若设置宽度小于实际宽度则则返回原字符串

```python
a = "周杰伦"

print(a)
print(a.center(17,"*"))
print(a.center(17))
```



#### ljust()

定义：左对齐，第一个参数指定宽度，而第二个参数参数指定填充符是可选可不选的，不选时，默认为空格，若设置宽度小于实际宽度则则返回原字符串

```python
a = "周杰伦"

print(a)
print(a.ljust(17,"*"))
print(a.ljust(17))
```



#### rjust()

定义：右对齐，第一个参数指定宽度，而第二个参数参数指定填充符是可选可不选的，不选时，默认为空格，若设置宽度小于实际宽度则则返回原字符串

```python
a = "周杰伦"

print(a)
print(a.rjust(17,"*"))
print(a.rjust(17))
```



#### zfill()

定义：右对齐，左边用0填充，该方法只接受一个参数，用于指定字符串的宽度，如果指定的高度小于等于字符串的长度，返回字符串本身

```python
a = "周杰伦"

print(a)
print(a.zfill(17))
```

### 劈分

#### split()

定义：从字符串的左边开始劈分，默认的劈分字符是空格字符串，返回的值都是一个列表

```python
#通过参数sep指定字符串是的劈分符
#通过参数maxsolit指定劈分字符串时的最大劈分次数，在经过最大次劈分之后，剩余的子串会单独做为一部分

a = "周杰伦|林俊杰|许嵩"
b = "周杰伦 林俊杰 许嵩"

print(b.split())
print(a.split("|"))
print(a.split("|",1))
```

#### rsplit()

定义：从字符串的右边开始劈分，默认的劈分字符是空格字符串，返回的值都是一个列表

```python
#通过参数sep指定字符串是的劈分符
#通过参数maxsolit指定劈分字符串时的最大劈分次数，在经过最大次劈分之后，剩余的子串会单独做为一部分

a = "周杰伦|林俊杰|许嵩"
b = "周杰伦 林俊杰 许嵩"

print(b.rsplit())
print(a.rsplit("|"))
print(a.rsplit("|",1))
```

### 判断

#### isidentifier()

定义：判断指定的字符串是不是合法的标识符

```python
a = "123456789"

print(a.isidentifier()) #false
print("a".isidentifier()) #true

```

#### isspace()

定义：判断指定的字符串是否全部由空白字符组成(回车、换行、水平制表符)

```python
a = "123456789"
b = "\t\n"

print("a".isspace()) #false
print("b".isspace()) #true
```

#### isalpha()

定义：判断指定的字符串是否全部由字母组成

```python
a = "123456789"

print("a".isalpha()) #false
print("\t".isalpha()) #true
```

#### isdecimal()

定义：判断指定字符串是否全部由十进制的数字组成

```python
a = "FFFF"
b = "123456789"

print("a".isdecimal()) #false
print("b".isdecimal()) #false
print("123".isdecimal()) #true
```

#### isnumeric()

定义：判断指定的字符串是否全部由数字组成

```python
a = "123456789"
b = "43546"

print("a".isnumeric()) #false
print("b".isnumeric()) #false
print("123".isnumeric()) #true
```

#### isalnum()

判断指定字符串是否全部由字母和数字组成

```python
a = "(*^▽^*)"
b = "123awd"

print("a".isalnum()) #true
print("b".isalnum()) #true
```

### 替换

replace()

定义：第一个参数指定被替换的子串，第二个参数指定替换子串的字符串，返回替换后得到的字符串，替换前的字符串不发生变化，调用时可以通过第三个参数指定最大替换次数

```python
a = "Python永远的神"

print(a.replace("Python","C++"))
print(a.replace("Python","Go",3))
```



### 合并

join()

定义：将列表或元组中的字符串合并成一个字符串

```python
a = ["C++","C#","C","java","Python","Go"]
b = ("C++","C#","C","java","Python","Go")

print(" ".join(a))
print("|".join(a))

print(" ".join(b))
print("|".join(b))
```

### 比较

原理：两个字符进行比较时，比较的是其原始值，调用内置函数ord可以得到指定字符的原始值,与内置函数ord对应的是内置函数chr，调用内置函数chr时，指定原始值可以得到其对应的字符

规则：开始比较两个字符串中的第一个字符，如果相等则继续比较下一个字符，一次比较下去，直到两个字符中字符不相等时，其比较结果就是两个字符串的比较结果，两个字符串中的所有后续字符将不再被比较

```python
print("apple">"app") #true

print("apple" > "banana") # false  97 < 98
print(ord("a"),ord("b")) # 97  98
print(ord("葛")) #33883

print(chr(97),chr(98))
print(chr(33883))
```

### 切片

```python
a = "周杰伦永远的神"

print(a[0:3:1])
print(a[::1])
print(a[-7::1])
print(a[::2])
```

### 格式化字符串

```python
#第一个 方法  % 占位符
""" 
%s 代表 字符串
%i或%d  代表  整数
%f  代表  浮点数
"""
name= "周杰伦"
age = 25
print("偶像叫%s,粉龄为%d年" % (name,age))

#第二个 方法 {}
print("偶像叫{0},粉龄为{1}年".format(name,age))

#第三个 方法 f-string
print(f"偶像叫{name},粉龄为{age}年")


print("%10d" % 1024) #10表示的是宽度
print("%.4f" % 1024.23332333) #.4表示小数点后四位
print("%4.4f" % 2233.23332333) #一共宽度为4，小数点后4位

print("你好，吴彦祖(或王冰冰)")
```

### 编码转换

编码：将字符串转换为二进制数据(bytes)

解码：将bytes类型的数据转换为字符串类型

```python
a = "经济的基础在于对其生产资料的需求和供给"

#编码
print(a.encode(encoding="GBK")) #在GBK这种编码格式中，一个中文占两个字节
print(a.encode(encoding="UTF-8")) #在UTF-8这种编码格式中，一个中文占三个字节

#解码
byte = a.encode(encoding = "GBK") #编码
print(byte.decode(encoding = "GBK")) #解码 

byte = a.encode(encoding = "UTF-8") #编码
print(byte.decode(encoding = "UTF-8")) #解码
```

## 函数

定义：函数是执行特定任务和以完成特定功能的一段代码

### 特点

- 代码的可复用性
- 隐藏实现细节
- 提高可维护性
- 提高可读性

### 语法

```python
def 函数名 ([输入参数]):
    函数体
    [return 某某某]

函数名([实际参数])
```

### 创建

```python
def fun(a,b):   #创建函数
    c = a+b
    return c
print(fun(1,2)) #调用函数
```

### 参数传递

- 在函数调用的过程中，进行参数的传递
- 如果是不可变对象，在函数体的修改不会影响实参的值
- 如果是可变对象，在函数体的修改会影响实参的值

#### 位置实参

- 根据形参对应的位置进行实参传递

```python
def fun(a,b):   
    c = a+b
    return c
print(fun(1,2)
```

#### 关键字实参

- 根据形参名称进行实参传递

```python
def fun(a,b):   
    c = a+b
    return c
print(fun(b = 1 , a = 2)
```

### 返回值

- 如果函数没有返回值，return 可以不写
- 函数的返回值，如果是1个，直接返回类型
- 函数的返回值，如果是多个值时，返回的结果为元组

```python
def fun (n):
    odd = [] # 存奇数
    enn = [] # 存偶数
    for i in n:
        if i%2:
            odd.append(i) 
        else:
            enn.append(i)

    return odd,enn

list = [123,324,34,546,756,34,554,756,23,4354,245,23,23,56546,24]
print(fun(list))
```

```python
def fun1 (): #没有返回值
    print("陈若")

fun1()

def fun2 (): 
    return "葛某某"

fun2 ()

str_1 = fun2()

print(str_1)

def fun3 ():
    return "迪迦","特利迦"

print(fun3())

```

### 默认形参

```python
def fun (a,b = 1024):
    print(a , b)
    
fun(2333) #只传递一个参数,b采用默认值
fun(666,767) #将1024改为767
fun(b=123,a=456)
```

### 参数定义

#### 个数可变的位置参数

- 定义函数时，可能无法事先确定传递的位置实参的个数时，可以使用可变的位置参数
- 使用*定义个数可变的位置形参
- 结果为一个元组

```python
def fun(*a):
    print(a)
    
fun(1)
fun(1,2,3,4,5)
```

#### 个数可变的关键字形参

- 定义函数时，可能无法事先确定传递的关键字实参的个数时，可以使用可变的关键字形参
- 使用**定义个数可变的关键字形参
- 结果为一个字典

```python
def fun(**a):
    print(a)

fun(a1 = 1)
fun(a1 = 1 , a2 = 2 , a3 = 3)
```

#### 错误注意

```python
def fun (*a ,*b):
    pass
#代码报错，个数可变的位置参数，只能是1个

def fun1(**a ,**b):
    pass
#代码错误，个数可变的关键字参数，只能是1个

def fun2 (**a ,*b):
    pass
#代码错误，个数可变的位置形参，必须放在个数可变的关键字形参之前

def fun3 (*a , **b):
    pass
#正确
```

### 递归函数

定义：在一个函数的函数体内调用该函数本身(简称套娃)

组成部分：递归调用与递归终止条件

#### 调用过程

- 每递归调用一次函数，都会在栈内存分配一个栈帧
- 每执行完一次函数，都会释放相应的空间

#### 优缺点

- 优点：思路和代码简单
- 缺点：占用内存大，效率低

#### 简单的递归

```python
def fun (n):
    if n == 1 :
        return 1
    else :
        return n*fun(n-1)
  
print(fun(10))

a = fun(10)
print(a)
```

#### 斐波那契数列

```python
def fun(n):
    if n==1:
        return 1
    elif n==2:
        return 1
    else :
        return fun(n-1)+fun(n-2)
    
print(fun(8))
for i in range(1,9):
    print(i)
```

## BUG

由来：1945年9月9日，下午三点。哈珀中尉正领着她的小组构造一个称为“马克二型”的计算机。这还不是一个完全的电子计算机，它使用了大量的继电器，一种电子机械装置。第二次世界大战还没有结束。哈珀的小组日以继夜地工作。机房是一间第一次世界大战时建造的老建筑。那是一个炎热的夏天，房间没有空调，所有窗户都敞开散热。
突然，马克二型死机了。技术人员试了很多办法，最后定位到第70号继电器出错。哈珀观察这个出错的继电器，发现一只飞蛾躺在中间，已经被继电器打死。她小心地用摄子将蛾子夹出来，用透明胶布帖到“事件记录本”中，并注明“第一个发现虫子的实例

### 常见的BUG

#### 粗心语法错误 SyntaxError

```python
#第一种
#问题
a = input("你多大了")
if a>= 18
    print("抓起来")
    
#解决方法
a = int(input("你多大了"))
if a >= 18 :
    print("抓起来")
    
#第二种 
#问题
while i < 10:
    print(i)
    
#解决方法
i = 0
while i < 10:
    print(i)
    i +=1

#第三种
#问题
for i in range(4):
    a = input("你的名字")
    b = input("你对象的名字")
    if a = "没有" and b = "没有" :
        print("恭喜你")
        break
    else
        print("孤寡")
        
else 
    print("你是真的没有")
    
#解决方案
for i in range(4):
    a = input("你的名字")
    b = input("你对象的名字")
    if a == "没有" and b == "没有" :
        print("恭喜你")
        break
    else :
        print("孤寡")
        
else :
    print("你是真的没有")
```

#### 宝典

1. 漏了 末尾的冒号 
2. 缩进错误 ，该缩进的没缩进
3. 把 英文符号 写成中文符号
4. 字符串拼写的时候，把字符串和数字拼在一起
5. 没有定义变量
6. “==”比较运算符和“=”赋值运算符的混用
7. 多写代码，多写代码，多写代码
8. 思路一定要清晰

## 异常处理机制

### try...except结构

可以在异常出现时及时捕获，然后内部“消化”，让程序继续运行

```python
try:
    a = int (input("请输入一个整数"))
    b = int (input("请输入另一个整数"))
    c = a/b
    print("结果为：",c)
    
except BaseException as e :
    print("出错了!!!∑(ﾟДﾟノ)ノ")
    print(e)
    
```

### 多个except结构

捕获异常的顺序按照代码流的顺序，为了避免遗漏可能出现的异常，可以在最后添加BaseException

```python
try:
    a = int (input("请输入一个整数"))
    b = int (input("请输入另一个整数"))
    c = a/b
    print("结果为：",c)

except Exception1:
    print("你真弱")
    
except BaseException as e :
    print("出错了!!!∑(ﾟДﾟノ)ノ")
    print(e)
    
```

### try...except...else结构

如果try块中没有抛出异常，则执行else块，如果try中抛出异常，则执行except块

```python
try:
    a = int (input("请输入一个整数"))
    b = int (input("请输入另一个整数"))
    c = a/b
    
except BaseException as e :
    print("出错了!!!∑(ﾟДﾟノ)ノ")
    print(e)
    
else:
    print("结果为：",c)
```

### try...except...else...finally结构

finally块无论是否发生异常都会被执行，能常用来释放try块中申请的资源

```python
try:
    a = int (input("请输入一个整数"))
    b = int (input("请输入另一个整数"))
    c = a/b
    
except BaseException as e :
    print("出错了!!!∑(ﾟДﾟノ)ノ")
    print(e)
    
else:
    print("结果为：",c)
    
finally:
    print("无论是否发生异常都会被执行")
    
print("结束")
```

### 异常类型

- ZeroDivisionError  除(或取模)零(所有数据类型)
- indexError  序列中没有此索引(index)
- KeyError  映射中没有这个键
- NameError  未声明/初始化对象(没有属性)
- SyntaxError  语法错误
- ValueError  传入无效的参数

### traceback模块

使用traceback模块打印异常信息

```python
import traceback
try:
    a = int (input("请输入一个整数"))
    b = int (input("请输入另一个整数"))
    c = a/b
    
except BaseException as e :
    print("出错了!!!∑(ﾟДﾟノ)ノ")
    print(e)
    traceback.print_exc()
    
else:
    print("结果为：",c)
```

## 编程思想

面向过程：是一种以事件为中心的编程思想，编程的时候把解决问题的步骤分析出来，然后用函数把这些步骤实现，在一步一步的具体步骤中再按顺序调用函数，事物比较简单，可以用线性思维解决

面向对象：是一种对现实世界理解和[抽象](https://baike.baidu.com/item/抽象/9021828)的方法，是计算机编程技术发展到一定阶段后的产物

共同点：都是解决实际问题的一种思维方式

经济学思维理解：解决宏观的问题，可以使用面向对象的方式，因为从宏观上把握事物之间的复杂关系，可以方便理解整体系统，解决微观的问题，可以使用面向过程的方式，因为从微观上对具体事物的安排，线性思维，比较高效

## 类

定义：类是多个类似事物组成的群体的统称，可以快速帮组我们理解和判断事物的性质

### 语法

```python
class 类名 :  #类名规范，有一个或多个单词组成，每个单词的首字母大写，其余的小写
    pass
```

### 类的组成

- 类属性 ：类中方法（成员函数）外的变量称为类属性（类成员）,被该类的所有对象所共享
- 实例方法：使用@classmethod修饰的方法，使用类名直接访问的方法
- 静态方法：使用@staticmethod修饰的方法，使用类名直接访问的方法
- 类方法

```python
class first:
    native = "周杰伦" #类属性  简称成员
    def _init_(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    #实例方法
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b())
    #类方法
    @classmethod
    def cm(cls):
        print("类方法")
    #静态方法
    @staticmethod
    def sm():
        print("静态方法")
    
print(first.native)  #访问类属性
first.cm()  #调用类方法
first.sm()  #调用静态方法
```

### 实例化

语法

```python
实例名 = 类名()
```

```python
class first:
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    #实例方法
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)

aone = first("经济学","心理学")
aone.info()
print(aone.a)
print(aone.b)
first.info(aone)  #等价于aone.info()
```

### 动态绑定属性和方法

在类实例化后，可以动态绑定属性和方法

```python
class first:
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    #实例方法
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)

aone = first("经济学","心理学")
aone.info()

def diyi ():
    print("动态属性")
aone.diyi= diyi
aone.diyi()
```

### 面向对象的三大特征

- 封装
- 继承
- 多态

### 封装

- 提高程序安全性
- 就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏
- Python中没有专门的修饰符用于属性的私有，如果该属性不想被类以为的访问，可以使用前面加"__"

```python
class first:
    def __init__ (self,a,b):
        self.a = a
        self.__b = b
    def show(self):
        print(self.a,self.__b)

aa = first("迪迦","奥特曼")

aa.show()

print(aa.a)
#print(aa.__b)  #程序错误,无法使用

#解决方案
print(dir(aa))
#在一定情况下，只是名字改了
print(aa._first__b)
```

### 继承

- 提高代码的复用性
- 使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展
- 如果一个类没有继承任何类，则默认继承object
- Python支持多继承
- 定义子类时，必须在其构造函数中调用父类的构造函数

语法

```python
class 子类类名 (父类1 ,父类2):
    pass
```

```python
class first(object):
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)
class family (first):
    def __init__(self,a,b):
        super().__init__(a,b)


aone = family("经济学","心理学")
aone.info()

```

#### 多继承

```python
class first(object):
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)
    
class family (first):
    def __init__(self,a,b,c):
        super().__init__(a,b)
        self.c = c
    def i(self):
        print(self.a,self.b,self.c)
class love (first):
    def __init__(self,a,b,c):
        super().__init__(a,b)
        self.c = c
    def i(self):
        print(self.a,self.b,self.c)

aone = family("经济学","心理学","金融学")
ohhh = love("打架","跑","继承")
ohhh.i()
aone.i()

```

### 方法重写

- 如果子类对继承自父类的某个属性或方法不满意，可以在子类中对其进行重新编写
- 子类重写后的方法中可以通过super().某某某()调用父类中被重写的方法

```python
class first(object):
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)
class family (first):
    def __init__(self,a,b):
        super().__init__(a,b)
    def info(self):
        super().info()
        print("方法重写")


aone = family("经济学","心理学")
aone.info()

```

### object类

- object类是所有类的父类，因此所有类都有object类的属性和方法
- 内置函数dir()可以查看指定对象所有属性
- object有一个_str_()方法，用于返回一个对于"对象的描述",对应于内置函数str()经常用于print()方法，帮我们查看对象的信息，所以我们经常会对_str_()进行重写

```python
class first(object):
    native = "周杰伦" #类属性  简称成员
    def __init__(self,a,b):  #构造函数
        self.a = a #赋值操作
        self.b = b
        
    #实例方法
    def info(self):
        print("你的主技能是：",self.a,"副技能其中之一是：",self.b)

aone = first("经济学","心理学")
aone.info()
o =object()
print(dir(o))
print(dir(aone))
print(aone)
```

### 多态

- 提高程序的可扩展性和可维护性
- 允许你将父对象设置成为和一个或更多的他的子对象相等的技术，赋值之后，父对象就可以根据当前赋值给它的子对象的特性以不同的方式运作。简单的说，就是一句话：允许将子类类型的指针赋值给父类类型的指针

```python
class a(object):
    def one(self) :
        print("经济学")
  
class b(a):
    def one(self):
        print("混沌经济学")

class c(a):
    def one(self):
        print("政治经济学")

class a1(object):
    def one(self):
        print("心理学")

aa = a()
bb = b()
cc = c()
aa1 = a1()
aa.one()
bb.one()
cc.one()
aa1.one()

```

### 静态语言于与动态语言

  静态语言实现多态的三个必要条件

- 继承
- 方法重写
- 父类引用指向子类对象

### 特殊属性和特殊方法

```python
class A :
    pass
class B :
    pass
class C(A,B):
    def __init__(self,a):
        self.a = a
#创建C类的对象

n = C("亚当斯密")
print(n.__dict__)  #实例对象的属性字典
print(C.__dict__)  #类对象的属性字典


print(n.__class__) #<class "__main.C"> 输出对象的类
print(C.__bases__) #C类的父类类型的元素
print(C.__base__)  #类的基类
print(C.__mro__)   #类的层次结构
print(A.__subclasses__()) #子类的列表
```

```python
class A :
    def __init__ (self,a):
        self.a = a
    def __add__ (self,b):
        return self.a + b.a
    def __len__ (self):
        return len(self.a)

one = A("经济")
tow = A("商业")

ohh = one+tow
print(ohh)

ohh = one.__add__(tow) #实现两个对象的加法运算
print(ohh)

print("----------------------------------")

lst = [1,2,3,4,5]
print(len(lst)) #len是内容函数len
print(lst.__len__())
print(len(one))
```

```python
class A(object):
    def __init__(self,a,b):
        print("__init__被调用执行了,cls的id值为{0}".format(id(self)))
        self.a = a
        self.b = b

    def __new__(cls,*args,**kargs):
        print("__new__被调用执行了,cls的id值为{0}".format(id(cls)))
        obj = super().__new__(cls)
        print("创建的对象的id 为：{0}".format(id(obj)))
        return obj 
print("object这个类对象的id为:{0}".format(id(object)))
print("A这个类对象的id为:{0}".format(id(A)))

b =A("经济","战争")
print("b这个A类的实例对象的id:{0}".format(id(b)))
```

### 浅拷贝

拷贝时，对象包含的子对象内容不拷贝，因此，原对象与拷贝对象会引用同一个子对象

### 深拷贝

使用copy模块的deepcopy函数，递归拷贝对象中包含的子对象，原对象和拷贝对象所有的子对象也不相同

title: Python教程(七)

keywords: "编程"

tags: "Python"

categories: "Python"

top_img:  "https://w.wallhaven.cc/full/5w/wallhaven-5wwzq5.png"

cover: https://w.wallhaven.cc/full/dg/wallhaven-dgdjml.png

---

# Python 教程(七)

## 模块化

在Python中一个扩展名为.py的文件就是一个模块(Modules)

### 函数与模块的关系

   一个模块中可以包含N个函数

### 优点

- 方便其他程序和脚本的导入并使用
- 避免函数名和变量名冲突
- 提高代码的可维护性
- 提高代码的可重用性

### 自定义模块

#### 创建模块

新建一个.py文件，名称尽量不要与Python自带的标准模块名称相同

```python
#在同级目录下  建立.py文件
#举个例子
#在abc.py
def a1():
    print("sy")
    
#在主文件中
import abc 
print (abc.a1()) #非常简单
```



#### 导入模块

```python
#第一种方法
import  模块名称
import  模块名称  [as 别名]

#第二种方法
from  模块名称  import  函数/变量/类

```

### 以主程序形式运行

在买个模块的定义中都包括一个记录模块的名称的变量_name_，程序可以检查该变量，以确定他们在那个模块中执行，如果一个模块不是被导入到其它程序中执行，那么它可能在解释器的顶级模块中执行，顶级模块的_name_变量的值为_main_

```python
if _name_ = "_main_" :
    pass  #只有单独执行模块时，才会被执行
```

### 包

定义：包是一个分层次的目录结构，它将一组功能相近的模块组织在一下

#### 特点

- 代码规范
- 避免模块名称冲突

#### 包与目录的区别

包含__init__.py文件的目录称为**包**

目录里通常不包含__init__.py文件

#### 包的导入

```python
#第一种方法
import  包名.模块名
#第二种方法
from  包名 import 模块名/函数/变量/类
from  包名.模块名 import 函数/变量/类
```

#### 安装模块

 直接在CMD命令行窗口输入

```python
例如：
pip install pymysql 
pip install redis
pip install 模块名或包名
```

然后就会自动连接到对应的仓库上面去开始下载removebg模块以及各种依赖模块，解压安装

pip在python3.4以上的版本是自带的。但这种方式需要保证pycharm中的Project Interpreter路径是Python安装路径，否则即使窗口显示下载安装成功，依然不能成功import
这里顺便提下



#### time模块

##### 时间表示

- **时间戳(timestamp)** ：通常来说，时间戳表示的是从1970年1月1日00:00:00开始按秒计算的偏移量。我们运行“type(time.time())”，返回的是float类型
- 格式化的时间字符串
- **元组(struct_time)**：struct_time元组共有9个元素共九个元素:(年，月，日，时，分，秒，一年中第几周，一年中第几天，夏令时)

##### 代码

```python
import time
 
 
#time.sleep(5)
print("睡眠5s")
#sleep()  #线程推迟自定的时间运行，单位为秒
 
#clock()
#这个需要注意啦，在不同的系统上含义不同，在unix系统上，它返回的是'进程时间'，用秒表示的浮点数（时间戳）
#在windows中，第一次调用，返回的是进程运行的实际时间，而第二次之后的调用是自第一次调用后到现在的运行
#的时间，即两次的时间差
 
 
# 返回当前时间的时间戳（以秒计算,从1970年1月1日00：00：00开始到现在的时间差）
print(time.time())  #  结果：1631223656.1504536
 
# 将一个时间戳转换为当前时区
t = time.localtime()
print(t)
# 结果time.struct_time(tm_year=2021, tm_mon=9, tm_mday=10, tm_hour=5, tm_min=40, tm_sec=56, tm_wday=4, tm_yday=253, tm_isdst=0)
year = t.tm_year
month = t.tm_mon
print(year) #2021
 
#gmtime()方法是将一个时间戳转换为UTC时区（0时区）的struct_time。
print(time.gmtime())
# 结果time.struct_time(tm_year=2021, tm_mon=9, tm_mday=9, tm_hour=19, tm_min=14, tm_sec=10, tm_wday=3, tm_yday=252, tm_isdst=0)
 
#返回utc时间的struc时间对象格式
print(time.gmtime(time.time()-9000))
# 结果time.struct_time(tm_year=2021, tm_mon=9, tm_mday=9, tm_hour=19, tm_min=14, tm_sec=10, tm_wday=3, tm_yday=252, tm_isdst=0)
 
#-------将结构化时间转换时间戳
print(time.mktime(time.localtime()))  # 结果1631223850.0
 
 
# -----将结构化时间转换Fomart格式的字符串时间
print(time.strftime("%Y-%m-%d %X",time.localtime())) #结果 2021-09-10 05:44:10
 
# --将字符串时间转化结构化时间
print(time.strptime("2016:12:26:12:34:33","%Y:%m:%d:%X"))
#结果time.struct_time(tm_year=2016, tm_mon=12, tm_mday=26, tm_hour=12, tm_min=34, tm_sec=33, tm_wday=0, tm_yday=361, tm_isdst=-1)
 
# 直接看时间
print(time.asctime()) #Fri Sep 10 05:44:10 2021 把结构换时间转换成固定的字符串表达式
print(time.ctime())  #Fri Sep 10 05:44:10 2021 把时间戳时间转换成固定的字符串表达式
```

#####  **datatime表示的一种时间**

```python
import time
import datetime
 
#显示当前时间日期
print(datetime.datetime.now())
#  2021-09-10 05:48:28.479038
 
#当前时间+3天
print(datetime.datetime.now() + datetime.timedelta(3))
#2021-09-13 05:48:28.479038
 
#当前时间-3天
print(datetime.datetime.now() + datetime.timedelta(-3))
#2021-09-7 05:48:28.479038
 
#当前时间+30分
print(datetime.datetime.now() + datetime.timedelta(hours=3))
#2021-09-10 08:48:28.479038
 
#时间替换
c_time = datetime.datetime.now()
print(c_time.replace(minute=3,hour=2))
#2021-09-10 02:03:28.479038  将小时数与分钟数替换 2018-09-20 02:03:36.020031
 
#时间戳直接转换为日期格式
print(datetime.date.fromtimestamp(time.time()))  # 2021-09-10

```

#### random 模块

**随机生成内容**

```python
import random
 
#0,1之间时间生成的浮点数  float
print(random.random())
 
#随机生成传入参数范围内的数字 即 1，2，3
print(random.randint(1, 3))
 
#随机生成传入参数范围内的数字，range顾头不顾尾
print(random.randrange(1, 3))
 
#随机选择任意一个数字
print(random.choice([1, '23', [4, 5]]))
 
#随机选择任意两个数字
print(random.sample([1, '23', [4, 5]], 2))


```

**随机生成一个验证码**

```python
#验证码
def v_code():
    ret = ""
    for i in range(5):
        num = random.randint(0,9)
        alf = chr(random.randint(65,122))
        #字母与数字随机拼接
        num_alf = str(random.choice([num,alf]))
        ret +=num_alf
    return ret
 
print(v_code())
```



#### sys 模块

```python
import sys
 
#命令行参数List，第一个元素是程序本身路径
print(sys.argv)
#结果['H:\\文档库\\VS 2019_ku\\02\\_02.py']
 
#获取Python解释程序的版本信息
print(sys.version)
#结果3.7.8 (tags/v3.7.8:4b47a5b6ba, Jun 28 2020, 07:55:33) [MSC v.1916 32 bit (Intel)]
 
#最大的Int值
#print(sys.maxint)
 
#返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值（临时修改，不会保存）
print(sys.path)
#结果
['H:\\文档库\\VS 2019_ku\\02', 'H:\\文档库\\VS 2019_ku\\02', 'D:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python37_86\\python37.zip', 'D:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python37_86\\DLLs', 'D:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python37_86\\lib', 'D:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python37_86', 'C:\\Users\\chen_ruo\\AppData\\Roaming\\Python\\Python37\\site-packages', 'D:\\Program Files (x86)\\Microsoft Visual Studio\\Shared\\Python37_86\\lib\\site-packages']
 
#返回操作系统平台名称
print(sys.platform) #win32
 
#退出程序，正常退出时exit(0)
print(sys.exit(0))
```



#### os 模块

**os模块是与操作系统交互的一个接口**

```python
os.getcwd() 获取当前工作目录，即当前python脚本工作的目录路径
os.chdir("dirname")  改变当前脚本工作目录；相当于shell下cd
os.curdir  返回当前目录: ('.')
os.pardir  获取当前目录的父目录字符串名：('..')
os.makedirs('dirname1/dirname2')    可生成多层递归目录
os.removedirs('dirname1')    若目录为空，则删除，并递归到上一级目录，如若也为空，则删除，依此类推
os.mkdir('dirname')    生成单级目录；相当于shell中mkdir dirname
os.rmdir('dirname')    删除单级空目录，若目录不为空则无法删除，报错；相当于shell中rmdir dirname
os.listdir('dirname')    列出指定目录下的所有文件和子目录，包括隐藏文件，并以列表方式打印
os.remove()  删除一个文件
os.rename("oldname","newname")  重命名文件/目录
os.stat('path/filename')  获取文件/目录信息
os.sep    输出操作系统特定的路径分隔符，win下为"\\",Linux下为"/"
os.linesep    输出当前平台使用的行终止符，win下为"\t\n",Linux下为"\n"
os.pathsep    输出用于分割文件路径的字符串 win下为;,Linux下为:
os.name    输出字符串指示当前使用平台。win->'nt'; Linux->'posix'
os.system("bash command")  运行shell命令，直接显示
os.environ  获取系统环境变量
os.path.abspath(path)  返回path规范化的绝对路径
os.path.split(path)  将path分割成目录和文件名二元组返回
os.path.dirname(path)  返回path的目录。其实就是os.path.split(path)的第一个元素
os.path.basename(path)  返回path最后的文件名。如何path以／或\结尾，那么就会返回空值。即os.path.split(path)的第二个元素
os.path.exists(path)  如果path存在，返回True；如果path不存在，返回False
os.path.isabs(path)  如果path是绝对路径，返回True
os.path.isfile(path)  如果path是一个存在的文件，返回True。否则返回False
os.path.isdir(path)  如果path是一个存在的目录，则返回True。否则返回False
os.path.join(path1[, path2[, ...]])  将多个路径组合后返回，第一个绝对路径之前的参数将被忽略
os.path.getatime(path)  返回path所指向的文件或者目录的最后存取时间
os.path.getmtime(path)  返回path所指向的文件或者目录的最后修改时间


```



## 文件读写操作

内置函数open()创建文件对象

![](https://i.loli.net/2021/09/15/2rfwW1BUjApesTF.png)

### 语法

```python
对象  = open ("要创建或打开的文件名称","打开模式默认只读","文本文件中的字符编写格式默认为gbk")
例如：
file = open("bilibili.txt","w","utf-8")
记得用完关闭
file.close()
```

### 常用的文件打开模式

类型

按照文件中数据的组织形式，分类

- 文本文件：存储的是普遍"字符"文本，默认为unicode字符集，可以使用记事本程序打开
- 二进制文件：把数据内容用"字节"进行存储，无法用记事本，必须使用专用的软件，方可打开，如.py,.mp3等

文件操作的基础模式有三种（默认的操作模式为r模式）：

- r模式为read，只读模式，只能读不能写，文件不存在时报错
- w模式为write，只能写，不能读，文件存在的时候回清空文件后再写入内容；文件不存在的时候会创建文件后写入内容
- a模式为append，可以追加。文件存在，则在文件的末端写入内容；文件不存在的时候会创建文件后写入内容

文件读写内容的格式有两种（默认的读写内容的模式为b模式）：

- t模式为text
- b模式为bytes，b模式是通用的模式，因为所有的文件在硬盘中都是以二进制的形式存储的，需要注意的是：b模式读写文件，一定不能加上encoding参数，因为二进制无法再编码

需要注意的是：t、b这两种模式均不能单独使用，都需要与r/w/a之一连用

文件对象的常用方法

 read([size])：从文件中读取size个字节或字符的内容返回。若省略[size]，默认读取全文件内容
    readline()：读取文件中一行的内容
    readlines()：把文件中的每一行都作为独立的字符对象，并将这些对象返回到列表中
    write(str)：将字符串str写入文件
    writelines(s_list)：将字符串列表s_list写入文件，不添加换行符
    seek(offset[,whence])：把文件指针移动到新的位置，offset表示相对于whence的位置，
        offset：为正表示往结束方向移动，为负表示往开始方向移动
        whence：
            0：从文件头开始计算
            1：从当前位置开始计算
            2：从文件未开始计算
    tell()：返回文件指针的当前位置
    flush()：把缓冲区的内容写入文件，但不关闭文件
    close()：把缓冲区的内容写入文件，同时关闭文件，释放文件对象的相关资源

### with语句(上下文管理器)

要使用 with 语句，首先要明白上下文管理器这一概念。有了上下文管理器，with 语句才能工作。
下面是一组与上下文管理器和with 语句有关的概念。
上下文管理协议（Context Management Protocol）：包含方法 _*enter*_() 和 _*exit*_()，支持该协议的对象要实现这两个方法。
上下文管理器（Context Manager）：支持上下文管理协议的对象，这种对象实现了_*enter*_() 和 _*exit*_() 方法。上下文管理器定义执行 with 语句时要建立的运行时上下文，负责执行 with 语句块上下文中的进入与退出操作。通常使用 with 语句调用上下文管理器，也可以通过直接调用其方法来使用
运行时上下文（runtime context）：由上下文管理器创建，通过上下文管理器的 _*enter*_() 和_*exit*_() 方法实现，_*enter*_() 方法在语句体执行之前进入运行时上下文，_*exit*_() 在语句体执行完后从运行时上下文退出。with 语句支持运行时上下文这一概念
上下文表达式（Context Expression）：with 语句中跟在关键字 with 之后的表达式，该表达式要返回一个上下文管理器对象
语句体（with-body）：with 语句包裹起来的代码块，在执行语句体之前会调用上下文管理器的 _*enter*_() 方法，执行完语句体之后会执行_*exit*_() 方法

with 工作原理
（１）紧跟with后面的语句被求值后，返回对象的“`__enter__()`”方法被调用，这个方法的返回值将被赋值给as后面的变量
（２）当with后面的代码块全部被执行完之后，将调用前面返回对象的“`__exit__()`”方法

语法

```python
#文论什么原因跳出with块，都能确保文件正确的关闭，以此来达到释放资源的目的
with open ("要创建或打开的文件名称","打开模式默认只读","文本文件中的字符编写格式默认为gbk")  as 别名 :
   局部作用域
```

