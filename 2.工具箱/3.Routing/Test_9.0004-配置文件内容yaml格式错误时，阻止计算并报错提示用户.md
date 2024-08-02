---
S2: ❌
S3: ✅
S4: ✅
S5: ✅
S6: ✅
---
◻️未测    🚫跳过     ✅通过    ❌ 失败    ➖未创建

## 前置条件

- 打开浏览器并进入工具箱页面

## 步骤

| 序号  | 步骤                                       | 结果        |
| --- | ---------------------------------------- | --------- |
| 1   | ==项目编号==                                 |           |
| 2   | 打开项目的PCB板                                |           |
| 3   | 打开show element并勾选pins、vias、shapes、clines |           |
| 4   | 框选需要的信息                                  |           |
| 5   | 点击保存按钮并选择保存路径并将文件命名为==环境数据文件==           | 保存成功      |
| 6   | 右击桌面空白处，选择新建txt文件并命名为==配置文件==            | 创建成功      |
| 7   | 双击打开配置文件并编辑文件内容                          |           |
| 8   | 选择使用==工具==                               |           |
| 8   | 点击上传环境数据按钮                               | 弹出选择文件对话框 |
| 10  | 选择==环境数据文件==                             |           |
| 11  | 点击对话框的打开按钮                               | 文件上传成功    |
| 12  | 点击上传配置文件按钮                               | 弹出选择文件对话框 |
| 13  | 选择==配置文件==                               |           |
| 14  | 点击对话框的打开按钮                               | 文件上传成功    |
| 15  | 点击计算按钮                                   | ==计算结果==  |

## 测试数据

| 项目编号 | 工具 | 环境数据文件 | 配置文件 | 计算结果 |
| ---- | ---- | ---- | ---- | ---- |
| A22156(单Site) | BGA Escape | vias.txt | F-config.txt | 阻止计算并提示配置文件中错误的字段 |
| A22156(单Site) | BGA Escape | vias.txt | T-config.txt | 计算成功并自动下载txt文件 |
| A22156(单Site) | TC Escape | tc_pins.txt | F-config.txt | 阻止计算并提示配置文件中错误的字段 |
| A22156(单Site) | TC Escape | tc_pins.txt | T-config.txt | 计算成功并自动下载txt文件 |
| A22156(单Site) | Net Connect | net_pins.txt | nets.txt、F-config.txt | 阻止计算并提示配置文件中错误的字段 |
| A22156(单Site) | Net Connect | net_pins.txt | net.txt、T-config.txt | 计算成功并自动下载txt文件 |
| A22156(单Site) | Free Connect | free_pins.txt | F-config.txt | 阻止计算并提示配置文件中错误的字段 |
| A22156(单Site) | Free Connect | free_pins.txt | T-config.txt | 计算成功并自动下载txt文件 |
- ##### 配置文件
	- T-config.txt: 文件内的yaml格式正确
	- F-config.txt: 文件内的yaml格式错误
	- nets.txt: 通过show element勾选nets框选获取内容
