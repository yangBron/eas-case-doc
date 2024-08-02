
### ToolBox查看后台日志

##### 进入eas08
```
账号：ssh eas@UBS08
密码：eas123
```
##### 查看当下目录分支
```
ls
```
##### 进入test环境
```
cd test/
```
##### 查询容器ID
```
docker ps
```
##### 打印日志
```
# 查看日志命令：
	docker logs -f 容器ID

# 实时查看最后100条日志：
	docker logs -f --tail=100 容器ID

# 查看最近30分钟的日志：
	docker logs --since 30m 容器ID

# 查看某时间之后的日志的最新500条日志：
	docker logs --since="2021-11-30" --tail=500 容器ID

# 查看某时间之后的日志：
	docker logs -t --since="2021-11-30T00:00:00" 容器ID

# 查看某时间段日志：
	docker logs -t --since="2021-11-30T00:00:00" --until "2021-12-30T00:00:00" 容器ID
```

```
# 跟踪日志输出
	-f

# 显示时间戳
	-t

# 显示某个开始时间的所有日志
	--since

# 仅列出最新N条容器日志
	--tail
```

---

### docker命令

##### 查看本地镜像
```
docker images
```
##### 搜索云端仓库的镜像
```
docker serch 镜像名称
```
##### 拉去(下载)镜像
```
docker pull 镜像明镜:tag (tag可以理解为版本号，如果想下载最新版本的可以不用写)
```
##### 删除镜像
```
docker rmi IMAGE_ID (image_id是本地镜像的唯一标识，可以通过docker images命令查看)
```
##### 打包镜像
```
docker build -t docker.eas.jc.in/eas-rpc-server:[version] .
```
##### 推送镜像
```
docker push docker.eas.jc.in/eas-rpc-server:[version]
```
##### 重启
```
docker-compose up -d
```
##### 查看容器id
```
docker ps
```
