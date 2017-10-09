import path from 'path';
import webpack from 'webpack';

export default {
  context: path.resolve(path.resolve(__dirname, 'src')),
  entry: [
    './index',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(path.resolve(__dirname, 'static', 'build')),
    publicPath: '/build',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
