const path = require('path')

module.exports = {
    entry: {
        index: './src/main.js'
    },
    mode: 'development',
    // module: {
    //     rules: [
    //         {
    //             test:/\.js$/,
    //             exclude:/(node_modules|bower_components)/,//排除掉node_module目录
    //             use:{
    //                 loader:'babel-loader',
    //                 options:{
    //                     presets:['env'] //转码规则
    //                 }
    //             }
    //         }
    //     ]
    // },
    plugins: [],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/')
    }
}