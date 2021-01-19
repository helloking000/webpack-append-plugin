作用：在webpack 构建产物的 js 文件中，添加头部和尾部

webpack.config.js 配置对象里：

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

产物：
test.js 前：
// body

test.js 后
/******* header ********/
// body
/******* footer ********/