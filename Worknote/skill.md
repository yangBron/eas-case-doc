
<h1 align = "center" style="color: #000000">Shell脚本命令</h1>

| 分类 | 命令 | 用途 | 示例 |
| --- | --- | --- | --- |
| 文件操作 | ls | 列出当前目录下的文件和子目录 | ls -l /path/to/directory |
| 文件操作 | cd | 改变当前工作目录 | cd /path/to/directory |
| 文件操作 | pwd | 显示当前工作目录的路径 | pwd |
| 文件操作 | mkdir | 创建一个新目录 | mkdir new directory |
| 文件操作 | rm | 删除一个文件或目录 | rm file.txt 或 rm -r directory |
| 文件操作 | cp | 复制一个文件或目录 | cp xx 或 cp -r xx |
| 文件操作 | mv | 移动或重命名一个文件或目录 | mv oldname newname 或 mv olddir newdir |
| 文件操作 | touch | 创建一个新文件或更新一个已经存在文件的时间戳 | touch newfile.txt |
| 文件查看 | cat | 连接文件并打印到标准输出 | cat file.txt |
| 文件查看 | less | 分页查看文本文件的内容 | less file.txt |
| 文本处理 | grep | 在文件中搜索指定的字符串 | grep pattern file.txt |
| 文件查找 | find | 查找文件或目录 | find / -name filename.txt |
| 文件压缩 | tar | 打包、压缩和解压文件和目录 | tar -cvzf archive.tar.gz directory/或 tar -xvzf archive.tar.gz |
| 文件下载 | wget | 下载文件 | wget url |
| 远程访问 | ssh | 远程登录到另一个计算机 | ssh username@hostname |
| 远程复制 | scp | 在本地主机和远程主机之前复制文件 | scp file.txt username@hostname:/remote/directory |
| 权限管理 | chmod | 修改文件权限 | chmod u=rw,go=r file.txt |
| 用户管理 | chown | 更改文件所有者 | chown username file.txt |
| 进程管理 | ps | 列出运行中的进行 | ps -e |
| 进程管理 | kill | 终止一个正在运行的进程 | kill PID |
| 系统监控 | top | 实时显示系统资源使用情况 | top |

# 提取文件名称
介绍下Shell中的${}、##和 %% 使用范例，本文给出了不同情况下得到的结果。
假设定义了一个变量为：
代码如下:
file=/dir1/dir2/dir3/my.file.txt
可以用${ }分别替换得到不同的值：
${file#* /}：删掉第一个 / 及其左边的字符串：dir1/dir2/dir3/my.file.txt
${file##* /}：删掉最后一个 /  及其左边的字符串：my.file.txt
${file#* .}：删掉第一个 .  及其左边的字符串：file.txt
${file##* .}：删掉最后一个 .  及其左边的字符串：txt
${file%/* }：删掉最后一个  /  及其右边的字符串：/dir1/dir2/dir3
${file%%/* }：删掉第一个 /  及其右边的字符串：(空值)
${file%.* }：删掉最后一个  .  及其右边的字符串：/dir1/dir2/dir3/my.file
${file%%.* }：删掉第一个  .   及其右边的字符串：/dir1/dir2/dir3/my
记忆的方法为：
'#'是 去掉左边（键盘上#在 $ 的左边）
%是去掉右边（键盘上% 在$ 的右边）
单一符号是最小匹配；两个符号是最大匹配
${file:0:5}：提取最左边的 5 个字节：/dir1
${file:5:5}：提取第 5 个字节右边的连续5个字节：/dir2
也可以对变量值里的字符串作替换：
${file/dir/path}：将第一个dir 替换为path：/path1/dir2/dir3/my.file.txt
${file//dir/path}：将全部dir 替换为 path：/path1/path2/path3/my.file.txt
