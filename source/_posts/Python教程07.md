title: Python教程(七)

date: 2021-08-18 7:58:00

keywords: "Python"

tags: 

- 学习笔记
- Python

categories: "Python"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/背景/wallhaven-k96vr7.webp

---



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

![](https://cdn.jsdelivr.net/gh/2841220231/image-my-web@master/背景/image-20210913042236681.png)

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

