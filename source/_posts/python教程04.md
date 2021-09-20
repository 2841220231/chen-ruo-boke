title: Python教程(四)

keywords: "编程"

tags: "Python"

categories: "Python"

top_img:  "https://w.wallhaven.cc/full/5w/wallhaven-5wwzq5.png"

cover: https://w.wallhaven.cc/full/dg/wallhaven-dgdjml.png

---



# Python教程(四)



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

