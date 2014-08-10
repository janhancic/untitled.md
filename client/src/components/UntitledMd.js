/** @jsx React.DOM */

'use strict';

var React = require('react');
var Header = require('./Header');
var Tabs = require('./Tabs');
var WorkArea = require('./WorkArea');

module.exports = React.createClass({
	displayName: 'UntitledMd',

	render: function() {
		return (
			<div>
				<Header/>
				<Tabs/>
				<WorkArea/>
			</div>
		);
	}
});