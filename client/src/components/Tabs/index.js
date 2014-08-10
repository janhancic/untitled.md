/** @jsx React.DOM */

'use strict';

require('./tabs.less');

var React = require('react');
var Tab = require('./Tab');

module.exports = React.createClass({
	displayName: 'Tabs',

	render: function() {
		var tabs = [
			<Tab name='tab 1' />,
			<Tab name='tab 2' selected={true} />,
			<Tab name='tab 3' />
		];

		return (
			<section className='tabs-container'>{tabs}</section>
		);
	}
});