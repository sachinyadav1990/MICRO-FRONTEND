// host-app/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Main entry file
  mode: 'development',
  devServer: {
    port: 3000, // Runs on localhost:3000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/', // set correctly
  },
  module: {
    rules: [
      {
        test: /\.js$/, // All .js files
        loader: 'babel-loader', // Use Babel
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
      {
      test: /\.css$/,           // For .css files
      use: ['style-loader', 'css-loader'], // Loaders are applied from right to left
    },
    {
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 8 * 1024, // 8 KB: files smaller than this will be inlined as base64
    },
  },
}
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host', // Name of host
      remotes: {
        // remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: '/',
      templateParameters: {
        PUBLIC_URL: '', // or '/some-path' if hosted in subdirectory
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};