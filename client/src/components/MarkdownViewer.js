/** @jsx React.DOM */

'use strict';

var React = require('react');
var Showdown = require('showdown');
var converter = new Showdown.converter();

module.exports = React.createClass({
	displayName: 'MarkdownViewer',

	render: function() {
		var mdHtml = converter.makeHtml(this.props.markdown);

		return (
			<div
				className='markdown-viewer'
				dangerouslySetInnerHTML={{__html: mdHtml}}
			></div>
		);
	}
});