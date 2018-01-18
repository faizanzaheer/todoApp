module.exports = {
	entry: './todo-7-1b.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	watch: true,

	module:{
		loaders: [
      {
        test: /\.js$/,
       	loader: 'babel-loader',
       	query: {
          presets: ['es2015']
        }
      }
    ]
	}
}