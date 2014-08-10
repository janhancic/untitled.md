'use strict';

var AppDispatcher = require('./AppDispatcher');
var AppConstants = require('./AppConstants');

module.exports = {
	openDocument: function(documentId) {
		AppDispatcher.handleViewAction({
			type: AppConstants.actions.OPEN_DOCUMENT,
			documentId: documentId
		});
	}
};