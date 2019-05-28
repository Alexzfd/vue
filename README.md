#  张飞东

### 本地开发

一、本机环境：

1. 安装依赖 `npm`
2. 启动开发服务 `npm run dev`
3. 访问：`http://localhost:8080`

---

### 项目目录结构

```
yzbizcenter-web
├── build             # 配置文件夹
├── config            # 配置文件夹
├── node_modules      # 第三方依赖包
├── src               # 项目源码
│   ├── assets        # 静态资源目录
│   ├── components    # 公用组件目录
│   ├── config        # 项目配置目录
│   ├── filters       # 全局过滤器目录
│   ├── router        # 路由配置目录
│   ├── store         # vuex 的 store 目录
│   │   └── modules   # store 的 modules 目录
│   ├── tools         # 工具函数目录
│   └── views         # 项目下的所有页面目录
├── static            # 静态资源目录
```

---

### 项目依赖库
| 包名称 | 链接 | 作用 |
| --- | --- | --- |
| axios | [查看](https://github.com/axios/axios) | ajax请求工具 |
| clipboard | [查看](https://github.com/zenorocha/clipboard.js) | 剪切板工具 |
| date-fns | [查看](https://date-fns.org/) | 日期格式化工具 |
| echarts | [查看](http://echarts.baidu.com/) | 画统计图工具 |
| element-ui | [查看](http://element-cn.eleme.io/1.4/#/zh-CN/component/installation) | 项目所用UI框架 |
| normalize.css | [查看](http://necolas.github.io/normalize.css/) | 样式重置css库 |
| qr-image | [查看](https://github.com/alexeyten/qr-image) | 生成二维码工具 |
| qs | [查看](https://github.com/ljharb/qs) | url字符串解析库 |
| vue | [查看](https://vuefe.cn/v2/guide/) | 一个轻量、高效的前端开发框架 |
| vue-router | [查看](https://router.vuejs.org/zh-cn/) | vue的前端路由工具 |
| vuex | [查看](https://vuex.vuejs.org/zh-cn/intro.html) | vue的状态管理工具 |
| moment | [查看](https://date-fns.org/) | 日期格式化工具（将用于替代 date-fns） |

---

# 前端代码开发规范

### 概述
>本文旨在帮助前端开发团队指定合理，高效的开发规范和策略，不涉及技术细节，有任何技术疑问请联系团队负责人。
凡是前端开发人员务必遵守其中规范。

### 如何使用git
>团队内代码管理全部使用git。使用gitflow模型管理项目。推荐使用可视化git工具sourcetree。gitflow原理可参考[这里](/ttps://www.cnblogs.com/cnblogsfans/p/5075073.html/)。
sourcetree如何使用gitflow可参考[这里](/http://blog.csdn.net/victor_barnett/article/details/51211282/)。

### 如何开发新功能
>开发新功能全部都在develop分支中(记得先执行`拉取`)，新建feature(sourcetree中操作为点击 `Git工作流>建立新的功能`)中开发。开发完成后将代码提交到远程`origin`,由项目master进行代码合并。确认合并无误后即可删除feature(sourcetree中操作为点击`Git工作流>完成功能`)。

### 代码路径
>项目所有源码都放置在src下，根路径其他文件不可修改。

### 各种命名规范
命名标准注意以下内容：
 * 不要用汉字命名文件
 * 不要用生僻的长英文命名文件
 * 不要用英文和拼音混合命名文件
 * 不要用过长拼音命名文件

> 文件名全部使用小写首字母，多单词拼写时以驼峰式命名规则。
> style样式全部使用小写字母单词加下横线命名如:first_nav。
> 组件标签全部使用小写字母单词加中横线命名如el-name