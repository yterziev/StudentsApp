const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: path.join(appPath, 'index.js')
    },
    output: {
        path: distPath,
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            appPath,
            'node_modules'
        ]
    },
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            template: path.join(appPath, 'index.html'),
            path: distPath,
            title: 'Dancho',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'stage-2'
                        ]
                    }
                }],
                include: [appPath]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: '/',
        hot: true,
        historyApiFallback: true,
        overlay: true
    }
};
