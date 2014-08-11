var ReactTools = require('react-tools');

module.exports = {
	process: function(src, fileName) {
		return ReactTools.transform(src);
	}
};