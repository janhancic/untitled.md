/** @jsx React.DOM */

'use strict';

require('./tabs.less');

var React = require('react');
var Tab = require('./Tab');

module.exports = React.createClass({
	render: function() {
		var tabs = [
			<Tab name='tab 1' />,
			<Tab name='tab 2' />,
			<Tab name='tab 3' />
		];

		return (
			<section className='tabs-container'>{tabs}</section>
		);
	}
});