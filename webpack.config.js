const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  mode: 'production',

  entry: {
    angular: [path.join(__dirname, 'src/angular/polyfills'), path.join(__dirname, 'src/angular')],
    react: ['@babel/polyfill', path.join(__dirname, 'src/react')],
    vue: ['@babel/polyfill', path.join(__dirname, 'src/vue')],
    'test-data': path.join(__dirname, 'src/common/test-data.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]/index.js',
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['*', '.js', '.jsx', '.ts'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-regenerator'],
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-regenerator', '@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new FilterWarningsPlugin({
      exclude: /System.import/,
    }),
    new AppManifestWebpackPlugin({
      logo: 'favicon/32.png',
      inject: false,
      emitStats: false,
      config: {
        logging: false,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/**',
        to: 'images/',
        force: true,
        ignore: ['!*.png'],
        transformPath(t, s) {
          var re = /([^\/\\]+)\\[^\/\\]+\.(.*)$/;
          var result = re.exec(s);
          return `${path.join(this.to, result[1])}-logo.${result[2]}`;
        },
      },
      {
        context: 'src',
        from: '*/*.html',
        to: '',
        force: true,
        ignore: ['!*.html'],
      },
      {
        context: 'src',
        from: '*.+(html|css)',
        to: '',
        force: true,
      },
    ]),
  ],
};
