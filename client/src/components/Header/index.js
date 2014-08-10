/** @jsx React.DOM */

'use strict';

require('./header.less');

var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<header>I am a header</header>
		);
	}
});