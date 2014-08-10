'use strict';

var EventEmitter = require('events').EventEmitter;
var AppConstants = require('./AppConstants');

class AbstractStore extends EventEmitter {
	constructor() {
		this._dispatchToken = null;
	}

	getDispatchToken() {
		return this._dispatchToken;
	}

	addChangeListener(callback) {
		this.on(AppConstants.events.CHANGE, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(AppConstants.events.CHANGE, callback);
	}

	emitChange() {
		this.emit(AppConstants.events.CHANGE);
	}
}

module.exports = AbstractStore;