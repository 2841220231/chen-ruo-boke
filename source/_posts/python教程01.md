title: Python教程(一)

keywords: "编程"

tags: "Python"

categories: "Python"

top_img:  "https://w.wallhaven.cc/full/5w/wallhaven-5wwzq5.png"

cover: https://w.wallhaven.cc/full/dg/wallhaven-dgdjml.png

---



# Python教程（一）

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

