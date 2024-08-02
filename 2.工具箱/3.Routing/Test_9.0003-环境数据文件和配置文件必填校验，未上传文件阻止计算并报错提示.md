---
S0: ✅
S1: ✅
S2: ✅
S3: ✅
S4: ❌
S5: ✅
---
◻️未测    🚫跳过     ✅通过    ❌ 失败    ➖未创建

## 前置条件

- 打开浏览器并进入工具箱页面

## 步骤

| 序号  | 步骤           | 结果        |
| --- | ------------ | --------- |
| 1   | 选择使用==工具==   |           |
| 2   | 点击上传环境数据按钮   | 弹出选择文件对话框 |
| 3   | 选择==环境数据文件== |           |
| 4   | 点击对话框的打开按钮   | 文件上传成功    |
| 5   | 点击上传配置文件按钮   | 弹出选择文件对话框 |
| 6   | 选择==配置文件==   |           |
| 7   | 点击对话框的打开按钮   | 文件上传成功    |
| 8   | 点击计算按钮       | ==计算结果==  |

## 测试数据

| 工具 | 环境数据文件 | 配置文件 | 计算结果 |
| ---- | ---- | ---- | ---- |
| Bga Escape | 空 | config.txt | 阻止计算并提示未上传vias相关的txt文件 |
| Bga Escape | vias.txt | 空 | 计算成功并提示layer层数与配置文件不一致 |
| Bga Escape | vias.txt | config.txt | 计算成功 |
| Tc Escape | 空 | config.txt | 阻止计算并提示未上传环境数据文件 |
| Tc Escape | tc_pins.txt | 空 | 阻止计算并提示未上传配置文件 |
| Tc Escape | tc_pins.txt | config.txt | 计算成功 |
| Net Connect | 空 | nets.txt | 阻止计算并提示未上传pins相关的txt文件 |
| Net Connect | net_pins.txt | 空 | 阻止计算并提示未上传nets相关的txt文件 |
| Net Connect | net_pins.txt | nets.txt | 计算成功 |
| Free Connect | 空 | config.txt | 阻止计算并提示未上传环境数据文件 |
| Free Connect | free_pins.txt | 空 | 阻止计算并提示未上传配置文件 |
| Free Connect | free_pins.txt | config.txt | 计算成功 |
