var clientPath = './client';

module.exports = {
	entry: clientPath + '/app.js',
	output: {
		path: clientPath + '/bundles',
		filename: 'bundle.js'
	}/*,
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}*/
};