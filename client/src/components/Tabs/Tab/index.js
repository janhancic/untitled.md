/** @jsx React.DOM */

'use strict';

require('./tab.less');

var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
	propTypes: {
		name: PropTypes.string.isRequired
	},

	render: function() {
		return (
			<div className='tab'>{this.props.name}</div>
		);
	}
});