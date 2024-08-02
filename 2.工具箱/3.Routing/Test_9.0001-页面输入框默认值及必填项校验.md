---
S0: ✅
S1: ✅
S2: ✅
S6: ✅
S7: ✅
---
◻️未测    🚫跳过     ✅通过    ❌ 失败    ➖未创建

## 前置条件

- 打开浏览器并进入工具箱页面

## 步骤

| 序号  | 步骤           | 结果        |
| --- | ------------ | --------- |
| 1   | 选择==工具==     |           |
| 2   | 检查输入框默认值     | ==默认值==   |
| 3   | 修改==输入框==    | ==修改值==   |
| 4   | 点击上传环境数据按钮   | 弹出选择文件对话框 |
| 5   | 选择==环境数据文件== |           |
| 6   | 点击对话框的打开按钮   | 文件上传成功    |
| 7   | 点击上传配置文件按钮   | 弹出选择文件对话框 |
| 8   | 选择==配置文件==   |           |
| 9   | 点击对话框的打开按钮   | 文件上传成功    |
| 10  | 点击计算按钮       | ==计算结果==  |

## 测试数据

| 工具           | 输入框   | 默认值              | 修改值  | 环境数据文件        | 配置文件       | 计算结果             |
| ------------ | :---- | :--------------- | ---- | ------------- | ---------- | ---------------- |
| Bga Escape   | pitch | 0.8              | 修改为空 | vias.txt      | config.txt | 阻止计算并提示未填写pitch值 |
| Bga Escape   | 算法模式  | MLB              | 修改为空 | vias.txt      | config.txt | 阻止计算并提示未选择算法模式   |
| Bga Escape   | pitch | 0.8              | 0.8  | vias.txt      | config.txt | 计算成功             |
| Tc Escape    | 线宽    | 6                | 修改为空 | tc_pins.txt   | config     | 计算失败并提示未填写线宽     |
| Tc Escape    | 线线距   | 18               | 修改为空 | tc_pins.txt   | config     | 计算失败并提示未填写线线距    |
| Tc Escape    | 线盘距   | 8                | 无    | tc_pins.txt   | config     | 计算成功             |
| Net Connect  | 线盘距   | 8                | 修改为空 | net_pins.txt  | nets.txt   | 计算失败提示未填写线盘距     |
| Net Connect  | VIA   | VIA120C100_AP300 | 修改为空 | net_pins.txt  | nets.txt   | 计算失败提示未选择VIA     |
| Net Connect  | 线宽    | 6                | 无    | net_pins.txt  | nets.txt   | 计算成功             |
| Free Connect | 线宽    | 6                | 修改为空 | free_pins.txt | config.txt | 计算失败提示未填写线宽      |
| Free Connect | 线线距   | 3                | 修改为空 | free_pins.txt | config.txt | 计算失败提示未填写线线距     |
| Free Connect | 线盘距   | 8                | 无    | free_pins.txt | config.txt | 计算成功             |
