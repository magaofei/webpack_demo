const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
};


//webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader。在这种情况下，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader。
//这使你可以在依赖于此样式的文件中 import './style.css'。现在，当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。


// 现在，当你 import MyImage from './my-image.png'，该图像将被处理并添加到 output 目录，并且 MyImage 变量将包含该图像在处理后的最终 url。当使用 css-loader 时，如上所示，你的 CSS 中的 url('./my-image.png') 会使用类似的过程去处理。loader 会识别这是一个本地文件，并将 './my-image.png' 路径，替换为输出目录中图像的最终路径。html-loader 以相同的方式处理 <img src="./my-image.png" />。
