const path = require("path");

module.exports = {
    //Setting the environment
    entry: "./src/index.js",
    mode: "development",
    output: {
      filename: "./main.js"
    },  
    
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