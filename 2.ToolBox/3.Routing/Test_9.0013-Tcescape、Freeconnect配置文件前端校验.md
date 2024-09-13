---
S2: ✅
S3: ✅
S4: ✅
S5: ✅
---
◻️未测    🚫跳过     ✅通过    ❌ 失败    ➖未创建

## 前置条件

- 打开浏览器并进入工具箱页面

## 步骤

| 序号  | 步骤                                       | 结果        |
| --- | ---------------------------------------- | --------- |
| 1   | 测试项目                                     | ==项目编号==  |
| 2   | 打开项目的PCB板                                |           |
| 3   | 打开show element并勾选pins、vias、shapes、clines |           |
| 4   | 框选每个Site需要的信息                            |           |
| 5   | 点击保存按钮并选择保存路径并将文件命名为pins                 | 保存成功      |
| 6   | 修改==线宽==、==线线距==、==线盘距==                 |           |
| 7   | 点击上传环境数据按钮                               | 弹出选择文件对话框 |
| 8   | 选择pins.txt文件并点击打开按钮                      | 文件上传成功    |
| 9   | 点击上传配置文件按钮                               | 弹出选择文件对话框 |
| 10  | 选择==配置文件==并点击打开按钮                        | 文件上传成功    |
| 11  | 点击计算按钮                                   | ==计算结果==  |

## 测试数据

| 项目编号 | 使用工具 | 线宽 | 线线距 | 线盘距（free数据） | 配置文件 | 计算结果 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| A21709 | TC_Escape | 8 | 24 | - | num_config.txt | 阻止计算，报错提示起点数量小于终点数量 |
| A21709 | TC_Escape | 8 | 24 | - | n-n_config.txt | 阻止计算，报错提示起点数量小于终点数量 |
| A21709 | Free_connect | 8 | 24 | 8 | Nsite_config.txt | 阻止计算并报错提示Site数量不一致 |
| A21709 | TC_Escape | 8 | 24 | - | Dsite_config.txt | 阻止计算并报错提示Site数量不一致 |
| A21709 | TC_Escape | 8 | 24 | - | Ssite_config.txt | 计算成功并自动下载txt文件 |
| A21709 | TC_Escape | 8 | 24 | - | noRef_config.txt | 阻止计算并报错提示reference不存在 |
| A21709 | Free_connect | 8 | 24 | 8 | bga_config.txt | 阻止计算并报错提示配置文件信息错误 |
| A21709 | TC_Escape | 8 | 24 | - | com_config.txt | 计算成功并自动下载txt文件 |
| A21709 | Free_Connect | 8 | 24 | 8 | com_config.txt | 计算成功并自动下载txt文件 |
| A21709 | TC_Escape | 8 | 24 | - | lds_config.txt | 计算成功并自动下载txt文件 |
- ##### 配置文件
	1. num_config.txt: 多个Dut分配多个Reference（起点总数>终点总数）
	2. n-n_config.txt: 多个Dut分配多个Reference（其中一个Dut的起点数量>分配的终点数量）
	3. Nsite_config.txt: 配置文件中配置的Site数量<环境数据中的Site数量
	4. Dsite_config.txt: 配置文件中配置的Site数量>环境数据中的Site数量
	5. Ssite_config.txt: 配置文件中配置的Site数量=环境数据中的Site数量
	6. noRef_config.txt: 配置文件中填写的reference不存在
	7. free_config.txt: 配置文件中只填写free相关的信息
	8. tc_config.txt: 配置文件中只填写tc相关的信息
	9. bga_config.txt: 配置文件中只填写bga相关的信息
	10. Ids_config.txt: 配置文件中填写的出线数量不能被整除, 规则: layerCline_num/dut_num 例=> Top层: 136/4 = 34
	11. com_config.txt: common中填写tc和free共用信息
