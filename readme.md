## npm

```shell
# 初始化
npm init

# 搜索包
# 推荐使用网站进行搜索 https://www.npmjs.com
npm search package
npm s package

# 安装包
npm install package
npm i package

# 安装生产依赖
npm i --save package
npm i -S package

# 安装开发依赖
npm i --save-dev package
npm i -D package

# 安装全局依赖
npm i --global package
npm i -g package

# 查看全局安装位置
npm root -g

# 安装指定版本的依赖
npm i package@version

# 删除依赖
npm remove package
npm r package

# 删除全局依赖
npm r -g package

# 命令别名
# 在package.json文件的script中配置命令
npm run cmd

# 命令别名start可以直接运行
npm start

# 查看配置
npm config ls --json
npm c ls

# 配置淘宝镜像
npm config set regstry https://registry.npmmirror.com

# 安装 npm registry manager
npm i -g nrm
# 使用淘宝镜像
nrm use taobao

# 登录发布自己的包
npm login
npm publish

# 更新自己的包
# 修改代码和版本号
npm publish

# 删除自己发布的依赖
npm unpublish [--force]
```

## cnpm

[官网](https://npmmirror.com/)

## yarn

```shell
# 初始化
yarn init [-y]

# 添加依赖
yarn add [packages...] [--dev]

# 添加全局依赖
yarn global add [packages...]

# 安装项目依赖
yarn remove [packages...]

# 删除全局依赖
yarn global remove [packages...]

# 查看全局安装的目录
# 需要将该目录配置到环境变量才能使用全局安装的依赖
yarn global bin

# 启动package.json中定义的启动命令
yarn cmd

# 查看yarn的配置
yarn config list

# 设置淘宝镜像
yarn config set registry https://registry.npmmirror.com [-g|--global]
```