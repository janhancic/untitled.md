/** @jsx React.DOM */

'use strict';

var React = require('react');
var Editor = require('./Editor');
var MarkdownViewer = require('./MarkdownViewer');
var DocumentsStore = require('../stores/Documents');

function getState() {
	return {
		contents: DocumentsStore.getCurrentDocument().contents
	};
}

module.exports = React.createClass({
	displayName: 'WorkArea',

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
			<section className='work-area'>
				<Editor value={this.state.contents} />
				<MarkdownViewer markdown={this.state.contents} />
			</section>
		);
	}
});