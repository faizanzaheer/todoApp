var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry: './src/js/todo-7-1b.js',
	output: {
		path: __dirname,
		filename: 'dist/js/bundle.js'
	},
	watch: true,

	module:{
		rules: [
      {
        test: /\.js$/, //Regex, file end with .js
       	exclude: /node_modules/, //skip, exclude file of node_modules
       	use:{
       		loader: 'babel-loader', //library, Convert es
       		options: {
          	presets: ['env', 'stage-3'] // convert all latest es to es5 
          	//and stage-3 ECMA  
        	}
        }	
      }
    ]
	},
	{
		test:/\.scss$/;
		use: ExtractTextPlugin.extract({
			use:[
			{	
				loader: 'css-loader',
				options:{
					url: false
				}
			},
			{
				'sass-loader'
			}
			]
		})
	},
	plugins: [
		new webpack.ProvidePlugin({
		'$': 'jquery',
		'jQuery': 'jquery'
	}),
		new ExtractTextPlugin({
			filename: './dist/css/styles.css'
		})
	]
}
//INCOMPLETE