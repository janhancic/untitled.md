/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'MarkdownViewer',

	render: function() {
		return (
			<div className='markdown-viewer'>{this.props.markdown}</div>
		);
	}
});