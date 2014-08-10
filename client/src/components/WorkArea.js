/** @jsx React.DOM */

'use strict';

require('../../styles/work_area.less');

var React = require('react');
var Editor = require('./Editor');
var MarkdownViewer = require('./MarkdownViewer');

module.exports = React.createClass({
	displayName: 'WorkArea',

	render: function() {
		return (
			<section className='work-area'>
				<Editor />
				<MarkdownViewer />
			</section>
		);
	}
});