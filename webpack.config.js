module.exports = {
	context: __dirname + "/client",
	entry: "./app.js",
	output: {
		path: __dirname + "/client/bundles",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'jsx-loader'
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}
		]
	}
}