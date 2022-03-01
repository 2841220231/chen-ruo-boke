title: Python教程(二)

date: 2021-08-12 8:58:00

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



# Python教程(二)

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

