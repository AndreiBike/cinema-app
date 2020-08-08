const withCSS = require('@zeit/next-css');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require(`webpack`);

module.exports = withCSS({
  webpack: function (config) {
    config.plugins.push(new CopyPlugin([{
      from: path.join(__dirname, "/src/client/images"),
      to: '/assets'
    }]),
    
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })

    )
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    })
    return config
  }
});