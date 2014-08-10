/** @jsx React.DOM */

'use strict';

var React = require('react');
var Header = require('./Header.jsx');
var Tabs = require('./Tabs.jsx');
var Editor = require('./Editor.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<Tabs/>
				<Editor/>
			</div>
		);
	}
});