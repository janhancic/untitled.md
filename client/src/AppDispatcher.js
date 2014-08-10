'use strict';

var Dispatcher = require('./lib/Dispatcher');

class AppDispatcher extends Dispatcher {
	handleViewAction(action) {
		var payload = {
			source: 'VIEW_ACTION',
			action: action
		};

		this.dispatch(payload);
	}
};

module.exports = new AppDispatcher();