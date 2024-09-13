---
{}
---

## 前置条件

- 登录pe进入channel工具

## 步骤

| 序号  | 步骤            | 结果           |
| --- | ------------- | ------------ |
| 1   | 点击解析网表按钮      | 弹出上传对话框      |
| 2   | 选择准备的==四个文件== | 文件被添加至上传对话框中 |
| 3   | 点击确认按钮        | ==上传结果==     |

## 测试数据

- 符合上传规则的文件
	- 文件名称: pstchip.bat,pstnet.bat,pstxprt.bat,template_ref.txt
	- 上传结果: 上传成功

- 不上传template.txt文件
	- 文件名称: pstchip.bat,pstnet.bat,pstxprt.bat
	- 上传结果: 上传成功

- 不符合上传规则的文件
	- 文件名称: pins.txt、case.bat、down.bat、symbols、bat
	- 上传结果: 检测不到项目所属编号、channel版本和原理图版本，确认按钮置灰，无法点击

## 历史结果

```dataviewjs
    await dv.view('9.脚本/case-result')
```
