
## 拉去远程仓库最新代码

##### 获取代码路径
 ![[1.Pasted image 20231107115306.png]]
##### 打开Git Bash Here
![[3.Pasted image 20231107120121.png]]
##### 克隆路径
```git
git clone 代码路径
```
![[4.Pasted image 20231107115826.png]] 
##### 进入拉取的代码目录
```
cd 目录名称
```
![[5.Pasted image 20231107115846.png]] 
##### 切换代码分支
```git
git checkout DiffPhase\2.0
```
![[6.Pasted image 20231107115927.png]] 
##### 与本地分支合并
```git
git pull
```
![[7.Pasted image 20231107115950.png]] 
##### 完成拉取最新代码
![[8.Pasted image 20231107134320.png]]

---

## git添加密钥
##### 查看本地密钥
1. 打开`git bash` 
2. 输入`cd`进入ssh密钥的home目录
```
cd
```
3. 输入`ls`，检查当前目录下是否存在ssh密钥文件
```
ls
```
4. 没有密钥文件，输入以下命令
```
ssh-keygen (-t)
```
如果存在ssh密钥文件，则使用`pwd`查看当前路径
##### 在gitlab中添加密钥
1. 复制公共密钥：`pub文件` 
2. 粘贴到gitlab密钥输入框中并确认

---

## git常用命令

#### 基本gi命令
##### git init
这可能是你在`git`中启动新项目所使用的第一个命令。此命令将创建一个空白的新存储库，然后你可以将源代码存储在此存储库中。
用法：
```git
git init
```
或者，你也可以在`git init`命令中使用存储库名称
```git
git init <your repository name>
```
##### git config
此命令可设置身份--Name和Email地址，并且每次提交时会使用此信息，用法：
```git
git config --global user.name "your name"
git config --global user.email "your email"
```
##### git version
检查你使用的是哪个版本的git，用法：
```git
git version
```
##### git clone
`git clone`命令将使用现有的存储库进行复制。`git init`和`git clone`之间有一个主要区别：在你需要现有的存储库上进行复制时，使用`git clone`，`git clone`命令之前首先在内部使用`git init`命令，然后检出所有内容。用法：
```git
git clone <your project URL>
```
##### git commit
`git commit`会将更改添加到本地存储库。用法：
```git
git commit -m "your useful commit message"
```
绕过`githooks`检测
```git
git commit -m "your useful commit message" --no-verify
```
##### git status
使用此`git`命令可以方便地查看有多少文件需要得到关注。你可以随时运行此命令。此命令可以用来在`git add`和`git commit`之间查看状态。用法：
```git
git status
```
##### git branch
可以用来列出分支，创建分支和删除分支。用法：
1. 列出所有分支
```git
git branch
```
2. 创建新的分支
```git
git branch <branch_name>
```
3. 删除分支
```git
git branch -d <branch_name>
```
##### git checkout
用于在分支之间进行切换。用法：
```git
git checkout <branch_name>
```
此外，你也可以创建和检出到分支，用法如下：
```git
git checkout -b <your_new_branch_name>
```

#### 中级git命令
##### git reset
回退指定commit_id
```git
git reset --hard commit_id
```
##### git remote
此命令会将你的本地存储库连接到远程存储库。用法：
```git
git remote add <shortname><url>
```
举例
```git
git remote add origin ssh://git@192.168.57.75:9022/design-center/eas-manual.git
```
其他命令
```git
git remote   # 列出remote aliases
            # 如果你clone一个project,git会自动将原来的url添加进来,别名就叫：origin
git remote -v   # 可以看见每一个别名对应的实际url
git remote add [alias] [url]   # 添加一个新的remote repo
git remote rm [alias]   # 删除一个存在的remote alias
git remote rename [old-alias] [new-alias]   # 重命名
```
##### git push
(借助`git remote`命令)与远程存储库连接之后，就需要将更改推送到存储库。用法：
```git
git push -u <short_name> <your_branch_name>
```
举例
```git
git push -u origin develop
```
强制推送
```git
git push -f <short_name> <your_branch_name>
```
##### git push --set-upstream
在使用`git push`之前，我们应该先设置好`origin`和`upstream`。下面是设置`upstream`的命令。用法：
```git
git push --set-upstream <short_name> <branch_name>
```
举例
```git
git push --set-upstream origin develop
```
##### git fetch
当需要系在其他团队成员的更改时，就得使用`git fetch`。
此命令会下载有关提交、引用等的所有信息，因此你可以在将这些更改应用于本地存储库之前对其进行检查。用法：
```git
git fetch
git fetch origin    # 同步远程仓库最新提交信息和分支信息
```
##### git pull
`git pull`命令下载内容(而不是元数据)，并立即用最新的内容更新本地存储库。用法：
```git
git pull <remote_url>
```
##### git stash
此git命令会临时存储已修改的文件。你可以使用以下git命令处理stash工作。用法：
```git
git stash
```
可以使用以下命令查看所有stash
```git
git stash list
```
如果你需要应用stash到分支，那就使用`apply` 
```git
git stash clera
git stash apply
git stash drop
```
##### git log
在`git log`的帮助下，你可以看到所有之前的提交，并且最近提交出现在最前面。用法：
```git
git log 
```
默认情况下，他将显示当前已检查分支的所有提交，但是你可以强制通过所有选项来查看所有分支的提交
```git
git log --all
```
其他命令：
```git
git log -p   # 显示特定文件随时间的变化
git log -oneline -number  # 每条log只显示一行，显示number条
git log -oneline -graph   # 可以图形化地表示出分支合并历史
git log <branch_name>   # 可以显示特定分支的log
git log -oneline branch1 ^branch2,   # 可以查看在分支1，不在分支2中的提交，^表示排除这个分支
git log -decorate   # 会显示出tag信息
git log -author=[author name]   # 可以指定作者的提交历史
git log -since -before -until -after   # 可以根据提交时间筛选log
git log -no-merges   # 可以将merge的commites排除在外
git log -grep   # 根据commit信息过略log：git log -grep=keywords
```
##### git shortlog
`git shortlog`命令会显示来自`git log`命令的摘要。如果你只对简短的摘要感兴趣，那么此命令就非常有用了。
这个命令有助于查看谁处理了什么，因为它对作者进行了分组。用法：
```git
git shortlog
```
##### git show
与`git log`相比，此命令将显示有关特定提交的详情信息。用法：
```git
git show <your_commit_hash>
```
##### git merge
把一个分支`merge`进当前分支，用法：
```git
git merge [alias]/[branch_name]
```
此命令会将`<branch_name>`合并到当前你选择的分支中

#### 高级git命令
##### git rebase
`git rebase`类似于`git merge`命令。他把两个分支集成到一个分支中，但有一个不一样的地方：`git rebase`命令将会重写提交记录。
当你有多个私有分支合并到单个分支时，应使用`git rebase`命令。他将使用提交历史成为线性的。用法：
```git
git rebase <base>
```
##### git pull --rebase
在大多数情况下，当你使用`git pull`时，你需要重新新设置基准(并且不进行合并)。
此时，你就可以使用此选项。用法：
```git
git pull --rebase
```
这将帮助保持干净的历史记录，另外，还可以避免多次合并。
##### git tag
在git中，标签很有用，你可以使用他们来管理发布。你可以将`git tag`视为不回改变的分支。尤其是要公开发布的时候，则更为重要。用法：
- 查看本地tag
```git
git tag -l
```
- 查看远程tag
```git
git ls-remote --tags origin
```
- 新建本地tag
```git
git tag -a '版本号' -m '备注xxx'
```
- 推送本地tag到远程tag
```git
git push origin '版本号'
```
- 推送本地所有tag到远程
```git
git tag origin --tags
```
- 删除本地tag
```git
git tag -d '版本号'
```
- 删除本地所有tag
```git
git tag -l | xargs git tag -d
```
- 删除远程tag
```git
git push origin: refs/tags/版本号
```
- 删除远程所有tag
```git
git show-ref --tag | awk '{pring ":" $2}' | xargs git push origin
```
