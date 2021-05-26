const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const watch = process.env.NODE_ENV !== 'production'

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/index.tsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/public/dist/js'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: "babel-loader" } },
      {
        test: /.(js|jsx)$/,
        exclude:  path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        ],
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 21000,
              name: "images/[name]_[hash:7].[ext]",
            },
          },
        ],
      },
      // Vendor CSS loader
      // This is necessary to pack third party libraries like antd
      {
        test: /\.css$/,
        // include: path.resolve(__dirname, "../node_modules"),
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.s(a|c)ss$/,
      //   use: [
      //     { loader: MiniCssExtractPlugin.loader },
      //     { loader: "css-loader" },
      //     { loader: "sass-loader" },
      //   ],
      // },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../../../client/dist/css/[name].css',
      disable: false,
      allChunks: true
    })
  ],
  watch
}
