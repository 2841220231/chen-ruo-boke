title: Python教程(五)

date: 2021-08-16 6:58:00

keywords: "Python"

tags: 

- 学习笔记
- Python

categories: "Python"

cover: https://cdn1.tianli0.top/gh/2841220231/image-my-web@master/背景/wallhaven-vm5r75.webp

---





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

