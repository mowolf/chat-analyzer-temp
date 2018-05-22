const path = require( 'path' );

module.exports = {
  entry  : path.join( __dirname, 'src/index.js' ),
  output : {
    path      : path.resolve( 'dist' ),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  module : {
    rules: [
      {
        test   : /\.jsx?$/,
        include: [
          path.resolve( 'src' )
        ],
        use    : [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  }
};
