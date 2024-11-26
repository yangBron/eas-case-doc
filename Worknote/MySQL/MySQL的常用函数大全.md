
## 1. MySQL函数介绍
- MySQL是MySQL数据库梯控的内部函数，这些内部函数可以帮助用户更加方便地处理表中地数据。函数就像预定地公式一样存放在数据库里，每个用户都可以调用已经存在地函数来完成某些功能。

- 同时MySQL数据库还支持用户自己建立函数，以适应实际地业务操作。正确使用函数会让读者在编写SQL语句时起到事半功倍的效果。

## 2. MySQL函数分类
### 2.1 单行函数
##### 2.1.1 字符串函数
- 主要用于处理字符串。其中包含字符串连接函数、字符串比较函数、将字符串的字母都变成小写或大写字母的函数和获取子串的函数等。
![[Untitled.webp]]

***常用函数：*** 

| 函数                                         | 功能                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------ |
| CONCAT(s1, s2, …, sn)                      | 字符串拼接，将s1, s2, …, sn拼接成一个字符串                                             |
| LOWER(str)                                 | 将字符串全部转为小写                                                               |
| UPPER(str)                                 | 将字符串全部转为大写                                                               |
| LPAD(str, n, pad)                          | 左填充，用字符串pad对str的左边进行填充，达到n个字符串长度                                         |
| RPAD(str, n, pad)                          | 右填充，用字符串pad对str的右边进行填充，达到n个字符串长度                                         |
| TRIM(str)                                  | 去掉字符串头部和尾部的空格                                                            |
| SUBSTRING(str, start, len)                 | 返回从字符串str从start位置起的len个长度的字符串                                            |
| REPLACE(str, old_substring, new_substring) | 替换字符串，`str`：要进行替换操作的字符串，`old_substring`：要被替换的子串，`new_substring`：替换后的新子串。 |

***案例：*** 
- 由于业务需求变更，企业员工号统一为5位数，目前不足5位数的全部在前面补0。

- 比如：1号员工的工号应该为00001。标名为emp，企业员工的工号字段为workno

SQL编写如下：
```SQL
update emp set workno = lpad(workno, 5, '0');
```

##### 2.1.2 数值函数
- 主要用于处理数字。这类函数包括绝对值函数、正弦函数、余弦函数和胡哦的随机函数等。
![[Untitled 1.webp]]
***常见函数：*** 

| 函数          | 功能                |
| ----------- | ----------------- |
| CEIL(x)     | 向上取整              |
| FLOOR(x)    | 向下取整              |
| MOD(x, y)   | 返回x/y的模           |
| RAND()      | 返回0~1内的随机数        |
| ROUND(x, y) | 求参数x的四舍五入值，保留y位小数 |

##### 2.1.3 日期函数
- 主要用于处理日期和时间。其中包括获取当前时间的函数、获取当前日期的函数、返回年份的函数和返回日期的函数等。
![[Untitled 2.webp]]

***常见函数：***

|函数|功能|
|---|---|
|CURDATE()|返回当前日期|
|CURTIME()|返回当前时间|
|NOW()|返回当前日期和时间|
|YEAR(date)|获取指定date的年份|
|MONTH(date)|获取指定date的月份|
|DAY(date)|获取指定date的日期|
|DATE_ADD(date, INTERVAL expr type)|返回一个日期/时间值加上一个时间间隔expr后的时间值|
|DATEDIFF(date1, date2)|返回起始时间date1和结束时间date2之间的天数|

***案例：*** 
- 查询所有员工的入职天数，并根据入职天数倒序排序。标名为emp，员工的入职天数字段为entrydate

SQL语句如下：
```SQL
select name，datediff(curdate(), entrydate) as 'entrydays' from emp order by entrydays desc;
```

##### 2.1.4 流程控制函数
- 主要用于在SQL语句中空值条件选择。其中包括`if`语句、CASE语句和WHERE语句
![[Untitled 3.webp]]
***常用函数：***

|函数|功能|
|---|---|
|IF(value, t, f)|如果value为true，则返回t，否则返回f|
|IFNULL(value1, value2)|如果value1不为空，返回value1，否则返回value2|
|CASE WHEN [ val1 ] THEN [ res1 ] … ELSE [ default ] END|如果val1为true，返回res1，… 否则返回default默认值|
|CASE [ expr ] WHEN [ val1 ] THEN [ res1 ] … ELSE [ default ] END|如果expr的值等于val1，返回res1，… 否则返回default默认值|
***案例：*** 
- 统计班级各个学院的成绩，展示的规则如下：>=85，展示优秀。>=60，展示及格。否则，展示不及格。

SQL语句如下：
```SQL
select
id,name,
(case when math >= 85 then '优秀' when math >=60 then '及格' else '不及格' end ) '数学',
(case when english >= 85 then '优秀' when english >=60 then '及格' else '不及格' end ) '英语',
(case when chinese >= 85 then '优秀' when chinese >=60 then '及格' else '不及格' end ) '语文' from score;
```

##### 2.1.5 系统信息函数
- 主要用于获取MySQL数据库的系统信息。其中包括获取数据库名的函数、获取当前用户的函数和获取数据库版本的函数等。

##### 2.1.6 其他函数
- 主要包括格式化函数和锁函数等。


### 2.2 聚合函数
- AVG(平均值)函数：返回指定组的平均值，空值会被忽略。
- COUNT(统计)函数：返回指定组中项目的总数量。
- MAX(最大值)函数：返回指定数据的最大值。
- MIN(最小值)函数：返回指定数据的最小值。
- SUM(求和)函数：返回指定数据的和，只能用于数字列，空值会被忽略。
![[Untitled 4.webp]]
***语法：*** 
```SQL
select 聚合函数（字段列表） from 表名;
```
例如：
```SQL
select count(id) from employee where workaddress = '广东省';
```

## 3. 函数使用实例
### 3.1 字符函数
##### 3.1.1 length(str)函数
- 获取参数值的字节个数

- 对于`utf-8`字符集来说，一个英文占一个字节；一个中文占3个字节；

- 对于`gbk`字符集来说，一个英文占一个字节；一个中文占2个字节；

演示如下：
```SQL
select length("xxx") as 长度;
```
![[Untitled 5.webp]]

##### 3.1.2 concat(str1, str2, ...)函数
- 将字符串拼接，通过输入的参数str1、str2等，将他们拼接成一个字符串。

演示如下：
```SQL
select concat('作者', '-', 'Sheenky') as 作者信息
```
![[Untitled 6.webp]]

##### 3.1.3 upper(str)、lower(str)函数
- upper(str)：将字符中所有字母变为大写

- lower(str)：将字符中所有字母变成小写

演示如下：
```SQL
select upper('sheenky') as 大写; 
select lower('SHEENKY') as 小写; 
```
![[Untitled 7.webp]]

##### 3.1.4 substr(str, start, len)函数
- str为输入字符串，从start位置开始截取字符串，len表示要截取的长度； 没有指定len长度：表示从start开始起，截取到字符串末尾。指定了len长度：表示从start开始起，截取len个长度。

演示如下：
```SQL
select substr('学SQL就关注博主sheenky', 2, 8) as out_put; 
```
![[Untitled 8.webp]]
注：2是开始的位置，就此处起始位置为'学'所对应的位置是1，这和编程语言中的0为其实位置不一样。

此外8是开始到结束位置的长度，并不是索引的结束位置，这很容易和python的索引弄错。

##### 3.1.5 instr(str, 要查找的子串)函数
- 返回子串第一次出现的索引，如果找不到，返回0；当查找的子串存在于字符串中：返回该子串在字符串中【第一次】出现的索引，当查找的子串不在字符串中：返回0。

演示如下：
```SQL
select instr('学SQL就关注博主sheenky', '关注') as 第一次出现;
```
![[Untitled 9.webp]]

##### 3.1.6 trim(str)函数
- 去掉字符串前后的空格；该函数只能去掉字符串前后的空格，不能去掉字符串中间的空格。

演示如下：
```SQL
select trim(' 学SQL就 关注博主 sheenky ') as 空格去除;
```
![[Untitled 10.webp]]

##### 3.1.7 lpad(str, len, 填充字符)、rapd(str, len, 填充字符)函数
- lpad（左填充）：用指定的字符，实现对字符串左填充指定长度

- rpad（右填充）：用指定的字符，实现对字符串右填充指定长度

演示如下：
```SQL
select lpad('编程秃头', 10, 'tu') as out_put;
select rpad('编程秃头', 10, 'tu') as out_put;
```
![[Untitled 11.webp]]
注：这里的填充len指的是用填充字符填充后的总长度，也就是若你的len选择5你的字符串含有位置为4则只能填充一个字符，也就是填充字符的第一个字符。

##### 3.1.8 replace(str, 子串, 另一个字符串)函数
- 将字符串str中的子串替换为另一个字符串

演示如下：
```SQL
select replace(Name, '符兴', '符强') as 替换之后 from tb_teacher;
```
![[Untitled 12.webp]]
注：replace()方法只能查找指定列，而不能使用全局查找, 想要全局查找替换, 可以试试循环语句。

### 3.2 数学/值函数
##### 3.2.1 round(x, 保留位数)函数
- 四舍五入； 当对正数进行四舍五入：按照正常的计算方式，四舍五入即可。当对负数进行四舍五入：先把符号丢到一边，对去掉负号后的正数进行四舍五入，完成以后，再把这个负号，补上即可。

演示如下：
```SQL
select round(1.595658, 3) out_put;
```
![[Untitled 13.webp]]


##### 3.2.2 ceil(x)函数
- 向上取整，返回>=该参数的最小整数。求的是大于等于这个数字的最小整数

演示如下：
```SQL
select ceil(1.9) as out_put;
select ceil(1.1) as out_put;
```
![[Untitled 14.webp]]

##### 3.2.3 floor(x)函数
- 向下取整，返回<=该参数的最大整数，求的是小于等于这个数字的最大整数。

演示如下：
```SQL
select floor(1.9) as out_put;
select floor(1.1) as out_put;
```
![[Untitled 15.webp]]
##### 3.2.4 truncate(x, D)函数
- 此函数叫截断函数，顾名思义就是就是截取不要的部分，然后删掉（断掉）它。在小数点的D位置处，截取数字直接删去数字，若在左边就是位置取整不使用任何法则。

- 这个函数理解起来也不难，我们把truncate当作小数点（.）x是要截取的数字。D为正数时是小数点的右侧部分，D为0时则不要小数部分，D为负数时是小数点左边部分，具体使用看例子演示。

演示如下:
```SQL
select truncate(314159.2673525,5) as 截取之后;
select truncate(314159.2673525,0) as 截取之后;
select truncate(314159.2673525,-4) as 截取之后;
```
![[Untitled 16.webp]]

##### 3.2.5 mod(被除数, 除数)函数
- 取余； 当被除数为正数，结果就是正数。当被除数为负数，结果就是负数。

演示如下：
```SQL
select mod(10,3) as out_put;
```
![[Untitled 17.webp]]

##### 3.2.6 pow(x, D)函数
- 此函数是用于计算指数函数，x为底，D为指数

演示如下：
```SQL
select pow(5,2) as 平方运算;
```

### 3.3 时间与日期函数
##### 3.3.1 时间与日期函数含义
- 日期的含义：指的是我们常说的年、月、日。

- 时间的含义：指的是我们常说的时、分、秒。

- 补充时间格式符含义表

|序号|格式符|含义|
|---|---|---|
|1|%Y|四位的年份|
|2|%y|2位的年份|
|3|%m|月份（01,02，..11,12）|
|4|%c|月份（1,2,3…11,12）|
|5|%d|日（01,02，…）|
|6|%H|小时（24小时）|
|7|%h|小时（12小时）|
|8|%i|分钟（00,01，…59）|
|9|%s|秒（00,01，…59）|

##### 3.3.2 now()函数
- 返回当前系统的日期和时间

演示如下：
```SQL
select now() as 当前时间
```
![[Untitled 18.webp]]

##### 3.3.3. curdate()函数
- 只返回系统当前的日期，不包含时间

演示如下：
```SQL
select curdate() as 当前日期;
```
![[Untitled 19.webp]]

##### 3.3.4 curtime()函数
- 只返回当前时间，不包含日期

演示如下：
```SQL
select curtime() as 当前时间
```
![[Untitled 20.webp]]

##### 3.3.5 获取日期和时间中的年、月、日、时、分、秒
- 获取年份：year()
- 获取月份：month()
- 获取日：day()
- 获取小时：hour()
- 获取分钟：minute()
- 获取秒数：second()

##### 3.3.6 week of year()函数
- 获取当前时刻所属周数

例如：
```SQL
select weekofyear(now()) as 当前时间下的周数;
```
![[Untitled 21.webp]]

##### 3.3.7 quarter()函数
- 获取当前时刻所属的季度

例如：
```SQL
select quarter(curdate()) as 当前季度;
```
![[Untitled 22.webp]]

##### 3.3.8 str_to_date()函数
- 将日期格式转换为字符串，转换成指定格式的日期

例如：
```SQL
select str_to_date("2024.11.26", "%Y, %c, %d") as 转换后格式;
```
![[Untitled 23.webp]]

##### 3.3.9 date_format()函数
- 将日期转换成日期字符串

例如：
```SQL
select date_format("2024/11/26", '%Y年%m月%d日') as 转换格式;
```
![[Untitled 24.webp]]

##### 3.3.10 date_add(日期, interval num 时间) 函数
- 向前、向后偏移日期和时间，正号为向后，负号为向前，除此之外还有hour（小时），minute（分钟），second（秒）

例如：
```SQL
select curdate() as 当前时间,
date_add(curdate(), interval 1 year) as 一年后,
date_add(curdate(), interval 1 month) as 一月后,
date_add(curdate(), interval 1 day) as 一日后;
```
![[Untitled 25.webp]]

##### 3.3.11 last_day()函数
- 提取某个月最后一天的日期

例如：
```SQL
select last_day(now()) as 当月最后一天的日期;
```
![[Untitled 26.webp]]

##### 3.3.12 datediff(end_date, start_date)函数
- 计算两个时间相差的天数

例如：
```SQL
select concat('我出生', datediff(curdate(), '1999-09-23'), '天了!') as 出生天数;
```
![[Untitled 27.webp]]

##### 3.3.13 timestampdiff(unit, start_date, end_date)函数
- 计算两个时间返回的年/月/天数；

- unit参数是确定(start_date,end_date)结果的单位，表示为整数，

- 以下是有效单位：
```
year：年份、month：月份、day：天、hour：小时、minute：分钟、second：秒、microsecond：微秒、week：周数、quarter：季度
```
### 3.4 流程控制函数
##### 3.4.1 if(expr, v1, v2)函数
- 实现`if-else`的效果，如果expr时true，返回v1。如果expr是false，返回v2

例如：
```SQL
select score, if(score<60, '不及格', '合格') as 备注 from tb_electives limit 10;
```
![[Untitled 28.webp]]

##### 3.4.2 ifnull()函数
- 判断值是否为null，是null用指定值填充；如果v1不为NULL，返回v2。否则返回v1

例如：
```SQL
select ifnull(NULL, 1), ifnull(1, 2);
```
![[Untitled 29.webp]]

##### 3.4.3 case...when函数的三种用法
1. 等值判断：可以实现多条件的查询值赛选；
```
case要判断的字段或表达式
when 常量1 then 要显示的值1或语句1
when 常量2 then 要显示的值2或语句2
...
else 要显示的值n或语句n
end
```
![[Untitled 30.webp]]

2. 区间判断：类似于python中`if - elif - else`的效果；
```
case
when 条件1 then 要显示的值1或语句1
when 条件2 then 要显示的值2或语句2
...
else 要显示的值n或语句n
end
```
![[Untitled 31.webp]]

3. case ... when和聚合函数联用；
此处的实例，作者引用网上的一个例子进行举例
![[Untitled 32.webp]] 
结果如下：
![[Untitled 33.webp]]

### 3.5 系统信息函数
##### 3.5.1 version()函数
- 查看MySQL系统版本信息号
```SQL
select version()
```
![[Untitled 34.webp]]

##### 3.5.2 connection_id()函数




##### 3.5.3 processlist




##### 3.5.4 database(), schema()函数




##### 3.5.5 user(), current_user(), system_user()函数




##### 3.5.6 charset()函数




##### 3.5.7 collation()函数





### 3.6 其他函数
##### 3.6.1 format(x, y)函数



##### 3.6.2 inet_aton(ip)函数



##### 3.6.3 inet_ntoa(num)函数



##### 3.6.4 password(str)函数



##### 3.6.5 md5(str)函数



##### 3.6.6 encode(str, pswd_str)、decode(加密的字符串, pswd_str)函数




### 3.7 聚合函数
##### 3.7.1 功能与分类



##### 3.7.2 聚合函数的传入参数，数据类型


