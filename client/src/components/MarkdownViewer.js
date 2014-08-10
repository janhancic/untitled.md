/** @jsx React.DOM */

'use strict';

require('../../styles/markdown_viewer.less');

var React = require('react');

module.exports = React.createClass({
	displayName: 'MarkdownViewer',

	render: function() {
		return (
			<div className='markdown-viewer'>{this.props.markdown}</div>
		);
	}
});