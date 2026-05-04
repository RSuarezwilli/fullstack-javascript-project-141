// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// const mode = process.env.NODE_ENV || 'development';

// export default {
//   mode,
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//         },
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
// };

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// ESTA LÍNEA ES LA QUE FALTA:
import nodeExternals from 'webpack-node-externals'; 

const mode = process.env.NODE_ENV || 'development';

export default {
  mode,
  target: 'node',
  entry: './src/init.js',
  // Aquí es donde se usa la variable importada arriba
  externals: [nodeExternals()], 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

