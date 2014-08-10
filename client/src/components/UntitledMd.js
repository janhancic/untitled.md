/** @jsx React.DOM */

'use strict';

var React = require('react');
var Header = require('./Header');
var Tabs = require('./Tabs');
var Editor = require('./Editor');

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