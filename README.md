之前在 https://www.npmjs.com/package/assets-append-webpack-plugin 里的插件，也是同样功能，已经过期多年，不能再被使用了。
# 一、功能
在webpack 构建产物的 js 文件中，添加头部和尾部。并且适配 webpack5。


# 二、用法示例
## 1 webpack 配置
配置对象webpack.config.js ：
```
const WebpackAppendPlugin = require('webpack-append-plugin');

module.exports = {
    entry: 'index.js',
    output: {
        path: './build',
    },
    plugins: [
        new AssetsAppendWebpackPlugin({
            header: `/******* header ********/`,
            footer: `/******* footer ********/`
        })
    ]
}
```


## 2 效果
### test.js 前：
```
// webpack 构建内容
```

### test.js 后
```
/******* header ********/
// webpack 构建内容
/******* footer ********/
```