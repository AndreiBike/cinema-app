const webpack = require(`webpack`);
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = function (webpackEnv) {
  
  const isEnvDevelopment = process.env.NODE_ENV === 'development';
 /* let devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  });
*/
  return {
    //Setting the environment
    entry: "./src/index.js", //entry point
    mode: isEnvDevelopment ? 'development' : 'production',
    output: {// output point
      path: path.join(__dirname, "/dist"),
      filename: "./main.js",
      publicPath: '/'
    },
    plugins: [
      //Plugin for HTML webpack;
      new HtmlWebpackPlugin({ template: './template/index.html' }),
      //Plugin for copying images;
      new CopyPlugin([{
        from: path.join(__dirname, "/src/client/images"),
        to: 'assets'
      }]),
      //Plugin for Redux devtool
     // new webpack.HotModuleReplacementPlugin(),
     // new webpack.NoEmitOnErrorsPlugin,
     // devFlagPlugin
    ], //template for index.html file

    //Setting the DevServer
    devServer: isEnvDevelopment ? {
      contentBase: path.join(__dirname, "template"), //name of the folder with index.html
      compress: true,
      port: 3000, //number of port of our server
      watchContentBase: true,  //watching for the content in folders
      progress: true,
      historyApiFallback: true

    } : undefined,
    devtool: isEnvDevelopment ? 'source-map' : undefined,

    //Setting the modules and rules for modules
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader"
          }
        },

        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  }
};
