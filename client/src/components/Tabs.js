/** @jsx React.DOM */

'use strict';

require('../../styles/tabs.less');

var React = require('react');
var Tab = require('./Tab');
var AppActionsCreator = require('../AppActionsCreator');
var DocumentsStore = require('../stores/Documents');

function getState() {
	return {
		tabs: DocumentsStore.getAllDocuments(),
		selectedTab: DocumentsStore.getCurrentDocumentId()
	};
}

module.exports = React.createClass({
	displayName: 'Tabs',

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
		var tabs = [];

		this.state.tabs.forEach((tab, idx) => {
			tabs.push(
				<Tab
					name={tab.title}
					selected={idx === this.state.selectedTab}
					onClick={this._onTabClick.bind(this, idx)}
				/>
			);
		});

		return (
			<section className='tabs-container'>{tabs}</section>
		);
	},

	_onTabClick: function(tab) {
		AppActionsCreator.openDocument(tab);
	}
});