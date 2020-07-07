# 敌对水域修改工具

## 目标

1、针对values.txt的修改
2、针对载具模型的修改
3、针对item_box的修改
4、针对关卡可使用载具的修改

## 实现方式

### 修改values.txt实现方式

读取参数——修改参数——生成新的Values.txt

### 修改载具模型实现方式

输入要修改模型——输入目标模型——将目标模型文件名改为要修改模型的文件名——输出文件

### 修改item_box实现方式

输入要修改item_box——输入目标item_box——将目标item_box文件名改为要修改item_box的文件名——输出文件

### 修改可使用载具实现方式

输入关卡——勾选可使用载具——修改init_build字段——输出文件

## 开发指南

### 目录结构

|目录|解释|
|--|--|
|app|前端页面|
|hostile-waters-mngpack|敌对水域解包文件|
|test|测试用代码|
|tools|一些工具函数|
|main.js|electron程序入口|
|vue.config.js|前端页面打包配置|

### 开发指南

|目录|解释|
|--|--|
|开发|执行 `npm run watch` 后再执行 `npm run start` |
|生成可执行文件|执行 `npm run build` 后再执行 `npm run package` |

## 版本记录

### v1.0.1

添加一键清空所有设置

### v1.0.2

添加新版本提醒

### v1.0.3

添加英文版

### v1.0.4

修改搜索逻辑，支持模糊搜索values
