---
{}
---

## 前置条件

- 登录pe进入小电容布局工具

## 步骤

| 序号  | 步骤         | 结果             |
| --- | ---------- | -------------- |
| 1   | 点击上传文件按钮   | 弹出上传文件对话框      |
| 2   | 选择==上传文件== | 选择的文件被添加至上传对话框 |
| 3   | 点击确认按钮你    | ==上传结果==       |

## 测试数据

- 符合上传规则的文件
	- 文件名称: nets.txt，symbols.txt，vias.txt
	- 上传结果: 上传成功

- 只选择两个符合规则的文件
	- 文件名称: nets.txt，symbols.txt
	- 上传结果: 确认按钮置灰，无法点击

- 不符合规则的文件
	- 文件名称: n2ets.txt，syfmbols.txt，viaas.txt
	- 上传结果: 提示请上传nets.txt，symbols.txt，vias.txt文件

## 历史结果

```dataviewjs
    await dv.view('9.脚本/case-result')
```
