const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, 'docs')
    },

    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            { useBuiltIns: 'usage', corejs: '2.0.0' }
                        ]
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images'
                    // publicPath:
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new CopyPlugin([
            {
                from: 'public/images',
                to: 'images'
            }
        ])
    ]
};
