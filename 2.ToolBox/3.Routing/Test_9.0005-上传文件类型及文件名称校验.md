---
S0: ✅
S1: ✅
S2: ✅
S3: ✅
S4: ✅
S5: ✅
---
◻️未测    🚫跳过     ✅通过    ❌ 失败    ➖未创建

## 前置条件

- 打开浏览器并进入工具箱页面

## 步骤

| 序号  | 步骤           | 结果        |
| --- | ------------ | --------- |
| 1   | 点击上传环境数据按钮   | 弹出选择文件对话框 |
| 2   | 选择==环境数据文件== |           |
| 3   | 点击对话框的打开按钮   | 上传成功      |
| 4   | 点击上传配置文件按钮   | 弹出选择文件对话框 |
| 5   | 选择==配置文件==   |           |
| 6   | 点击对话框的打开按钮   | 上传成功      |
| 7   | 点击计算按钮       | ==计算结果==  |

## 测试数据

| 工具 | 环境数据文件 | 配置文件 | 计算结果 |
| ---- | ---- | ---- | ---- |
| Bga Escape | a.txt | config.txt | 阻止计算并提示请上传vias相关的txt文件 |
| Bga Escape | vias.xlsx | config.txt | 阻止计算并提示请上传vias相关的txt文件 |
| Bga Escape | vias.txt | a.txt | 计算成功并提示layer层数与配置文件不一致 |
| Bga Escape | vias.txt | config.pdf | 阻止计算并提示请上传layer相关的txt文件 |
| Tc Escape | tc_pins.txt | a.txt | 阻止计算并提示请上传config相关的txt文件 |
| Tc Escape | tc_pins.txt | config.doc | 阻止计算并提示请上传config相关的txt文件 |
| Tc Escape | tc_pins.doc | config.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Tc Escape | a.txt | config.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Net Connect | a.txt | nets.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Net Connect | pins.pdf | nets.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Net Connect | net_pins.txt | net.xlsx | 阻止计算并提示请上传nets相关的txt文件 |
| Net Connect | net_pins.txt | a.txt | 阻止计算并提示请上传nets相关的txt文件 |
| Free Connect | a.txt | config.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Free Connect | pins.xlsx | config.txt | 阻止计算并提示请上传pins相关的txt文件 |
| Free Connect | free_pins.txt | a.txt | 阻止计算并提示请上传config相关的txt文件 |
| Free Connect | free_pins.txt | config.doc | 阻止计算并提示请上传config相关的txt文件 |
