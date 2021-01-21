# 一、作用
在webpack 构建产物的 js 文件中，添加头部和尾部




# 二、用法示例
## 1 webpack 配置
webpack.config.js 配置对象里：
```
{
    // ...
        plugins: [
            new AssetsAppendWebpackPlugin({
                header: `/******* header ********/`,
                footer: `/******* footer ********/`
            })
        ]
    // ...
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