/** @jsx React.DOM */

'use strict';

var React = require('react');
var Header = require('./Header');
var Tabs = require('./Tabs');
var WorkArea = require('./WorkArea');
var DocumentsStore = require('../stores/Documents');

function getState() {
	return {
		documentName: DocumentsStore.getCurrentDocumentName()
	}
}

module.exports = React.createClass({
	displayName: 'UntitledMd',

	getInitialState: function() {
		return getState();
	},

	componentDidMount: function() {
		DocumentsStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		DocumentsStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(getState());
	},

	render: function() {
		return (
			<div>
				<Header documentName={this.state.documentName} />
				<Tabs/>
				<WorkArea/>
			</div>
		);
	}
});