/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Header',

	render: function() {
		return (
			<header>I am a header. Showing document: {this.props.documentTitle}.</header>
		);
	}
});