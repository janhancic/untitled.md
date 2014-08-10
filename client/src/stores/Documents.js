'use strict';

var AbstractStore = require('../AbstractStore');
var AppDispatcher = require('../AppDispatcher');
var AppConstants = require('../AppConstants');
var AppActions = AppConstants.actions;

class DocumentsStore extends AbstractStore {
	constructor() {
		this._dispatchToken = AppDispatcher.register(this._handleAction.bind(this));

		this._documents = [];
		this._currentDocumentId = null;

		this._populateInitialData();
	}

	_populateInitialData() {
		// TODO: I don't like this code
		this._documents = window.__initial_data___.documents.documents;
		this._currentDocumentId = window.__initial_data___.documents.currentDocumentId;
		this.emitChange();
	}

	getAllDocuments() {
		return this._documents;
	}

	getCurrentDocumentId() {
		return this._currentDocumentId;
	}

	getCurrentDocument() {
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
				document.title = this.getCurrentDocument().title;
				this.emitChange();
			break;

			default:
				// do nothing
			break;
		}
	}
};

module.exports = new DocumentsStore();