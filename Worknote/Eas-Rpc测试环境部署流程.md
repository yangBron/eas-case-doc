
# 算法EAS-RPC服务测试环境部署流程交接说明

**测试环境地址：http://test-dc.eas.jc.in  

## 算法服务架构位置   

![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706838761556-02f8ee2c-8c43-4b02-81f3-bc04c689281d.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_26%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

  

## 对应部署分支

- 测试环境默认推荐使用Develop分支部署，测试同学也可根据实际测试情况 部署其他测试子分支  

![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706838890189-65ea357e-018c-4d78-8e91-d34218d6a1d9.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_24%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)


## 部署方法  

- 打镜像 -> 推送镜像 -> 部署镜像  
  
## 打镜像  

1. 登录 **eas@ubs05**  
	- 登录指令 ssh eas@ubs05 密码请咨询  
```
# 远程连接
ssh eas@ubs05
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706839307608-aada1d0f-4f06-4e15-8d31-9548d54c3000.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

2. 进入**eas-rpc**相关项目文件夹，确认分支为：**Develop** 
	- 查看分支命令 git branch
```
# 检查当前分支
git branch

# 切换分支
git checkout 分支名称
```
![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706839478618-ff1a6e2b-0c23-436e-bfaa-7be8d23ea410.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

3. 确认**Develop**分支内容为远端最新内容  
	- 更新命令：git fetch origin ，git reset --hard origin/develop
```
# 同步远程仓库最新提交和分支信息
git fetch origin

# 指向远程仓库的develop
git reset --hard origin/develop
```

4. 打镜像 与 推镜像  
```
打包: docker build -t docker.eas.jc.in/eas-rpc-server:[version] .
推送: docker push docker.eas.jc.in/eas-rpc-server:[version]

例子
docker build -t docker.eas.jc.in/eas-rpc-server:eas-test-202402011522 .
docker push docker.eas.jc.in/eas-rpc-server:eas-test-202402011522
```


## 部署镜像  
1. 登录 **eas@UBS08**  
	- 登录指令 ssh eas@UBS08 密码请咨询  
```
ssh eas@UBS08
eas123
```

2. 进入test环境文件下，并找到对应的docker-compose.yml
![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706843448063-9b4243eb-a9df-4673-8db2-7852bfb82655.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_12%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

3. 通过vim 修改docker-compose.yml 中的发版的编号，并保存  
	- 修改rpc-server中的 image字段 修改为刚刚推送的镜像名称  

```
vim docker-compose.yml
i 进入编辑模式
:wq 保存
```

![image.png](https://cdn.nlark.com/yuque/0/2024/png/22783797/1706843602203-1c20b9f3-1602-4d4b-a1e6-83b62bb57ed3.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_16%2Ctext_c3BlY2hvLXd4Yw%3D%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

## 重启服务
- 重新服务，更新镜像部署
	- done：更新成功
	- false：更新失败
```
docker-compose up -d
```

