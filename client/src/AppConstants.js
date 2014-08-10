'use strict';

var mirrorKey = require('mirrorkey');

var constants = {};

constants.events = mirrorKey(
	{
		CHANGE: null
	},
	'lower-dashed'
);

constants.actions = mirrorKey(
	{
		OPEN_DOCUMENT: null
	},
	'lower-dashed'
);

module.exports = constants;