var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	entry: {
		vendor: path.resolve(__dirname, '../source/vendor'),
		main: path.resolve(__dirname, '../source/index'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../source'),
		publicPath: '/',
		filename: '[name].js',
	},
	plugins: [
		// Use CommonsChunkPlugin to create a separate bundle
		// of vendor libraries so that they're cached separately.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'source/index.html',
			inject: true,
		}),
	],
	devServer: {
		port: 8080,
		historyApiFallback: true,
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader'] },
			{ test: /\.css$/, loaders: ['style', 'css'] },
		],
		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' },
		],
	},
};
