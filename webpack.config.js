const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './app.js',
	output: {
		path: path.join(__dirname,'build'),
		filename: 'sharethat.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}