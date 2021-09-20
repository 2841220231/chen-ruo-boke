title: Python教程(三)

keywords: "编程"

tags: "Python"

categories: "Python"

top_img:  "https://w.wallhaven.cc/full/5w/wallhaven-5wwzq5.png"

cover: https://w.wallhaven.cc/full/dg/wallhaven-dgdjml.png

---



# Python教程(三)

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