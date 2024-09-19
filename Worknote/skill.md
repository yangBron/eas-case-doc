
## Shell脚本命令
### 文件操作
##### 列出当前目录下的文件和子目录
```
ls
ls -l /path/to/directory
```
##### 改变当前工作目录
```
cd
cd /path/to/directory
```
##### 显示当前工作目录的路径
```
pwd
```
##### 创建一个新目录
```
mkdir
mkdir new directory
```
##### 删除一个文件或目录
```
rm file.txt
```
或
```
rm -r directory
```
##### 复制一个文件或目录
```
cp xx
```
或
```
cp -r xx
```
##### 移动或重命名一个文件或目录
```
mv oldname newname
```
或
```
mv olddir newdir
```
##### 创建一个新文件或更新一个已经存在文件的时间戳
```
touch
touch newfile.txt
```
### 文件查看
##### 连接文件并打印到标准输出
```
cat
cat file.txt
```
##### 分页查看文本文件的内容
```
less
less file.txt
```
### 文本处理
##### 在文件中搜索指定的字符串
```
grep
grep pattern file.txt
```
### 文件压缩
##### 打包、压缩和解压文件和目录
```
tar
tar -cvzf archive.tar.gz firectory
```
或
```
tar -xvzf archive.tar.gz
```
### 文件查找
##### 查找文件或目录
```
find
find -name filename.txt
```
### 文件下载
##### wget
```
wget url
```
### 远程访问
##### 远程登陆到另一个计算机
```
ssh
ssh username@hostname
```
### 远程复制
##### 在本地主机和远程主机之前复制文件
```
scp
scp file.txt username@hostname:/remote/directory
```
### 权限管理
##### 修改文件权限
```
chmod
chmod u=rw, go=r file.txt
```
### 用户管理
##### 更改文件所有者
```
chown
chown username file.txt
```
### 进程管理
##### 列出运行中的进行
```
ps
ps -e
```
##### 终止一个正在运行的进行
```
kill PID
```
### 系统监控
##### 实时显示系统资源使用情况
```
top
```

## 提取文件名称
##### Shell中`${}`、`##`、`%%`使用范例 
假设变量：`file=/dir1/dir2/dir3/my.file.txt`，不同情况下得到的结果。
- 删掉第一个`/`及其左边的字符串
```
${file#* /}: dir1/dir2/dir3/my.file.txt
```
- 删掉最后一个`/`及其左边的字符串
```
${file##* /}: my.file.txt
```
- 删掉第一个`.`及其左边的字符串
```
${file#* .}: file.txt
```
- 删掉最后一个`.`及其左边的字符串
```
${file##* .}: txt
```
- 删掉最后一个`/`及其右边的字符串
```
${file%/* }: /dir1/dir2/dir3
```
- 删掉第一个`/`及其右边的字符串
```
${file%%/* }: {空值}
```
- 删掉最后一个`.`及其右边的字符串
```
${file%.* }: /dir1/dir2/dir3/my.file
```
- 删掉第一个`.`及其右边的字符串
```
${file%%.* }: /dir1/dir2/dir3/my
```
##### 记忆方法
```
"#": 去掉左边(键盘'#'在'$'的左边)

"%": 去掉右边(键盘'%'在'$'的左边)

单一符号是最小匹配; 两个符号是最大匹配
```
- 提取最左边的5个字节
```
${file: 0:5}: /dir1
```
- 提取第五个字节右边的连续5个字节
```
${file: 5:5}: /dir2
```
- 对变量值里的字符串进行替换
```
将第一个dir替换为path
${file/dir/path}: /path1/dir2/dir3/my.file.txt
```
或
```
将全部dir替换为path
${file//dir/path}: /path1/path2/path3/my.file.txt
```
