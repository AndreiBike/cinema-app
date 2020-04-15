const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //Setting the environment
    entry: "./src/index.js", //entry point
    mode: "development",
    output: {// output point
      path: path.join (__dirname, "/cinApp"),
      filename: "./main.js"
    },  
    plugins: [new HtmlWebpackPlugin({template: './dist/index.html'})], //template for index.html file
    
    //Setting the DevServer
    devServer: {
      contentBase: path.join(__dirname, "dist"), //name of the folder with index.html
      compress: true,
      port: 3000, //number of port of our server
      watchContentBase: true,  //watching for the content in folders
      progress: true

    },
  

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
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        },
        
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        }
      ]
    }
  };