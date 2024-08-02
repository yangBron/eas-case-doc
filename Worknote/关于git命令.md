 
### 拉去远程仓库最新代码

##### 获取代码路径
 ![[1.Pasted image 20231107115306.png]]
##### 打开Git Bash Here
![[3.Pasted image 20231107120121.png]]
##### 克隆路径
```
	git clone 代码路径
```
![[4.Pasted image 20231107115826.png]] 
##### 进入拉取的代码目录
```
	cd 目录名称
```
![[5.Pasted image 20231107115846.png]] 
##### 切换代码分支
```
	git checkout DiffPhase\2.0
```
![[6.Pasted image 20231107115927.png]] 
##### 与本地分支合并
```
	git pull
```
![[7.Pasted image 20231107115950.png]] 
##### 完成拉取最新代码
![[8.Pasted image 20231107134320.png]] 

---

### git命令

##### 克隆现有远程仓库
```
git clone ssh://存储库路径
```

##### 创建一个新的本地仓库
```
git init   //创建一个新的本地仓库
```
##### 提交先前进行的更改
```
git commit   //提交先前进行的更改
```
##### 显示所有提交，从最新的开始
```
git log   //显示所有提交，从最新的开始
```
##### 显示特定文件随时间的变化
```
git log -p   //显示特定文件随时间的变化
```
##### 切换分支
```
git checkout   //切换分支
```
##### 回退指定commit_id
```
git reset --hard commit_id   //回退指定commit_id
```
##### 同步远程仓库最新提交信息和分支信息
```
git fetch origin    //同步远程仓库最新提交信息和分支信息
```
