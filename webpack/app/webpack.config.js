/**
 * Created by 说个锤子 on 2017/6/26.
 */
/*
module.exports = {
    entry:'./runnoob1.js',
    output: {
        path:__dirname,
        filename:'bundle.js'
    },
    module: {
        loaders:[
            {test: /\.css$/,loader:"style!css"}
        ]
    }
}*/

var webpack = require('webpack');

module.exports = {
    entry: './runnoob1.js',//入口
    output: {//出口
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            { test:/\.css$/,loader: 'style!css'}
        ]
    },
    plugins:[//插件
        new webpack.BannerPlugin('菜鸟教程实例')
    ]
}
