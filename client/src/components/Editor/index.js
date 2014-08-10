/** @jsx React.DOM */

'use strict';

require('./editor.less');

var React = require('react');

module.exports = React.createClass({
	displayName: 'Editor',

	render: function() {
		return (
			<section className='editor-container'>
				<textarea></textarea>
				<textarea></textarea>
			</section>
		);
	}
});