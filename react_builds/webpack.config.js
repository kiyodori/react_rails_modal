module.exports = {
  context: __dirname,
  entry: './components/ModalComponent.jsx',
  output: {
    path: __dirname + '/../lib/assets/javascripts',
    filename: 'react_rails_modal.js'
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
