
## 1. order by的用法

- 使用order by，一般是用来 依照查询结果的某一列(或多列)属性，进行排序(升序：ASC; 降序：DESC；默认为升序)。
- 当排序列含控制时: 
	- ASC: 排序列为空值的元组最后显示。
	- DESC: 排序列为空值的元组最先显示。
- 为了好记忆，我的理解是，可以把null值看做无穷大，因为不知道具体为多少。然后去考虑排序，asc升序null肯定在最后，而desc降序，null肯定在最前面。

示例表：
![[Pasted image 20241125164050.png]]

### 1.1 单一列属性排序

##### 1.1.1 默认排序：
```sql
select * from iyb_saas_starry_rank
```
![[Pasted image 20241125164231.png]]

##### 1.1.2 按照id降序排序
```sql
select * from iyb_saas_starry_rank ORDER BY id DESC
```
![[Pasted image 20241125164344.png]]

### 1.2 多个列属性排序
选择多个列属性进行排序，然后排序的顺序是，从左到右，依次排序。
如果前面列属性有些是一样的话，再按后面的列属性排序。（前提一定要满足前面的属性排序，因为在前面的优先级高）。

##### 1.2.1 举例1：
先按照driect_addition降序排序，再按照id升序排序。
相同数值在降序的基础上做了升序
```sql
select * from iyb_saas_starry_rank ORDER BY direct_addition desc, id asc
```
![[Pasted image 20241125165143.png]]

##### 1.2.2 举例2：
id字段为降序排列，rank_id字段为升序排列
```sql
select * from iyb_saas_starry_rank ORDER BY id DESC, rank_id ASC
```
![[Pasted image 20241125165137.png]]
必须先满足前面列属性的排序（sno在前优先级高）。才回去考虑后续列属性的排序

---

## 2. group by的用法
group by按照查询结果集中的某一列（或多列），进行分组，值相等的为一组。
### 2.1 细化集函数（count，sum，avg，max，min）的作用对象
##### 2.1.1 count()函数
有两种使用方式：
- 基础表
![[Pasted image 20241126093556.png]]
1. 使用`count(*)`对表中行的数目进行计数，不管表列中包含的是否空值(NULL)还是非空值
```SQL
select COUNT(*) from iyb_saas_starry_rank
```
![[Pasted image 20241126093922.png]]
2. 使用`count(colums)`对特定列中具有值得进行计数，忽略NULL值；使用id字段这一列：
```SQL
select COUNT(id) from iyb_saas_starry_rank
```
![[Pasted image 20241126094203.png]]
3. 使用`owner_org`字段这一列（owner_org此列全部为NULL值）：
```SQL
select COUNT(owner_org) from iyb_saas_starry_rank
```
![[Pasted image 20241126094421.png]]
##### 2.1.2 SUM函数
- 基础表：
![[Pasted image 20241126094515.png]]
- SUM()是一个求和得函数，返回指定列值得总和。
- 提示：SUM()函数在计数时，忽略列值为NULL的行。
```SQL
select SUM(selation_coefficient) as relation_sum from iyb_saas_starry_rank
```
![[Pasted image 20241126094802.png]]
##### 2.1.3 AVG函数
- AVG()函数可以用来求平均值
- 基础表：
![[Pasted image 20241126094845.png]]
1. 获取role=2的成员的attend_train的平均值
```SQL
select AVG(attend_train) as "平均值" from iyb_saas_starry_team_member_preparation where role = 2
```
![[Pasted image 20241126095119.png]]
2. 使用group by分组求平均值
```SQL
select role, AVG(attend_train) as "平均值" from iyb_saas_starry_team_member_preparation GROUP BY role
```
![[Pasted image 20241126095415.png]]
##### 2.1.4 MAX函数
- 基础表：
![[Pasted image 20241126095449.png]]
1. 找出score最大值：
```SQL
select event_name, MAX(score) from iyb_saas_starry_activity
```
![[Pasted image 20241126095620.png]]
- MAX()函数还可以返回任意列中的最大值，包括返回字符类型的最大值。在对字符类型的数据进行比较时，按照字符的ASCII码值大小进行比较，从a-z，a的ASCII码最小，z的最大。在比较时，先比较第一个字符，如果相等，继续比较下一个字符，一直到两个字符不相等或者字符结束为止。例如，b与t比较时，t为最大值；bcd与bca比较时，bcd为最大值。
##### 2.1.5 MIN函数
- 基础表：
![[Pasted image 20241126110632.png]]
1. 找出score最小值：
```SQL
select event_name, MIN(score) from iyb_saas_starry_activity
```
![[Pasted image 20241126110753.png]]
2. 找出score的最大值和最小值：
```SQL
select MAX(score) as max_score, MIN(score) as min_score from iyb_saas_starry_activity
```
![[Pasted image 20241126110911.png]]
##### 2.1.6 Group By分组
- 基础表：
![[Pasted image 20241126111139.png]]

1. 通过preparation_status字段分组：
```SQL
select preparation_status from iyb_saas_starry_team_preparation GROUP BY preparation_status
```
![[Pasted image 20241126111251.png]]


## 3. 内连接
- 关键字：`inner join on`

- 语句：`select * from a_table a inner join b_table b on a.a_id = b.b_id`；

- 说明：组合两个表中的记录，返回关联字段相符的记录，也就是返回两个表的交际(阴影)部分。
![[Pasted image 20241126112202.png]]

- 案例解释：
	- 在boy表和girl表中查出两个表hid字段一致的姓名（gname，bname），boy表和girl表如下：
![[Pasted image 20241126112340.png]]
![[Pasted image 20241126112347.png]]
1. 采用内连接查询方式：
```SQL
select boy.hid, boy.bname, girl.gname from boy inner join girl on girl.hid = boy.hid;
```
![[Pasted image 20241126112635.png]]

## 4. 左连接
- 关键字：`left join on / left outer join on`

- 语句：`select * from a_table a left join b_table b on a.a_id = b.b_id`

- 说明：left join是left outer join的简写，它的全称是左外连接，是外连接中的一种。左连接，左表(a_table)的记录会全部表示出来，而右表(b_table)只会显示符合搜索条件的记录。右表记录不足的地方均为NULL。
![[Pasted image 20241126113112.png]]

- 案例解释：
	- 在boy表和girl表中左连接查询，boy和girl表如下：
![[Pasted image 20241126113153.png]]
![[Pasted image 20241126113157.png]]
1. 采用左连接查询方式：
```SQL
select boy.hid, boy.bname, girl.gname from boy left join girl on girl.hid = boy.hid;
```
![[Pasted image 20241126113334.png]]

## 5. 右连接
- 关键字：`right join on / right outer join on`

- 语句：`select * from a_table a right outer join b_table b on a.a_id = b.b_id`

- 说明：right join是right outer join的简写，它的全称是右外连接，是外连接中的一种。与左连接相反，右连接，左表(a_table)只会显示符合搜索条件的记录，而右表(b_table)的记录将会全部表示出来。左表记录不足的地方均为NULL。
![[Pasted image 20241126113812.png]]

- 案例解释：
	- 在boy表和girl表中右连接查询，boy表和girl表如下：
![[Pasted image 20241126113856.png]]
![[Pasted image 20241126113901.png]]
1. 采用右连接查询方式：
```SQL
select boy.hid, boy.bname, girl.gname from boy right join girl on girl.hid = boy.hid;
```
![[Pasted image 20241126114054.png]]

## 6. 全连接
- 关键字：`union / union all`

- 语句：
```SQL
(select colum1,colum2...columN from tableA) union (select colum1,colum2...columN from tableB)
或
(select colum1,colum2...columN from tableA) union all (select colum1,colum2...columN from tableB)；
```

- union语句注意事项：
```
1. 通过union连接的SQL它们分别单独取出的列数必须相同；

2. 不要求合并的表列名称相同时，以第一个sql表列名为准；

3. 使用union时，完全相等的行，将会被合并，由于合并比较耗时，一般不直接使用union进行合并，而是通过采用union all进行合并；

4. 被union连接的sql子句，单个子句中不用写order by，因为不会有排序的效果。但可以对最终的结果集进行排序；

(select id, name from A order by id) union all (select id, name from B order by id);
// 没有排序效果

(select id, name from A) union all (select id, name from B) order by id;
// 有排序效果
```

- 案例解释：
	- 将a表和b表合并，表结构如下：
![[Pasted image 20241126115426.png]]
![[Pasted image 20241126115431.png]]
1. ①采用`union`全连接：
![[Pasted image 20241126115501.png]]
- union会自动将完全重复的数据去除掉，a、b表中“c”的值都为15，所以只显示一行

2. ②采用`union all`全连接：
![[Pasted image 20241126115620.png]]
- union all会保留那些重复的数据

