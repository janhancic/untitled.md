module.exports = {
	context: __dirname + "/client",
	entry: "./app.jsx",
	output: {
		path: __dirname + "/client/bundles",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx$/, loader: 'jsx-loader' }
		]
	}
}