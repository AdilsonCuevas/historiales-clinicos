const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const devMODE = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    devMODE ? 'style-loader' : miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        /*new HtmlWebpackPlugin({
            template: './frontend/archivos/principal.html',
            filename: 'principal.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/signup.html',
            filename: 'signup.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/login.html',
            filename: 'login.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/profile.html',
            filename: 'profile.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/newhistory.html',
            filename: 'history.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/agenda.html',
            filename: 'agenda.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/stecnico.html',
            filename: 'stecnico.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),
        new HtmlWebpackPlugin({
            template: './frontend/archivos/newhistoryus.html',
            filename: 'newhistoryus.ejs',
            minify: {
                collapseWhitespace: false,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkAttributes: false,
                useShortDoctype: false
            }
        }),*/
        new HtmlWebpackPlugin({
            template: './frontend/archivos/newhistory.html',
            filename: 'history.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new miniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    mode: 'production',
    devtool: 'source-map'
};