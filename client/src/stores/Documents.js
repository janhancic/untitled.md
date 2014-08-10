'use strict';

var AbstractStore = require('../AbstractStore');
var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../AppConstants');
var AppActions = AppConstants.actions;

class DocumentsStore extends AbstractStore {
	constructor() {
		this._dispatchToken = AppDispatcher.register(this._handleAction.bind(this));

		this._documents = [
			'My document', 'Hey o', 'Fluflu'
		];
		this._currentDocumentId = 0;
	}

	getAllDocuments() {
		return this._documents;
	}

	getCurrentDocumentId() {
		return this._currentDocumentId;
	}

	getCurrentDocumentName() {
		return this._documents[this._currentDocumentId];
	}

	_handleAction(payload) {
		var action = payload.action;

		switch (action.type) {
			case AppActions.OPEN_DOCUMENT:
				if (action.documentId === this._currentDocumentId) {
					return;
				}

				this._currentDocumentId = action.documentId;
				this.emitChange();
			break;

			default:
				// do nothing
			break;
		}
	}
};

module.exports = new DocumentsStore();