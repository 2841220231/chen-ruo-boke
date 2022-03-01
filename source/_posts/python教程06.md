title: Python教程(六)

date: 2021-08-10 7:58:00

keywords: "Python"

tags: 

- 教程笔记
- Python
- 编程语言

categories: "Python"

hide: true

top_img:  "https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-5wwzq5.png"

cover: https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-dgdjml.png

background: url(https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/wallhaven-45k784.jpg)

---



# Python 教程(六)

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

