/** @jsx React.DOM */

'use strict';

require('./header.less');

var React = require('react');

module.exports = React.createClass({
	displayName: 'Header',

	render: function() {
		return (
			<header>I am a header</header>
		);
	}
});