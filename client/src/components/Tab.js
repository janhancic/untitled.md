/** @jsx React.DOM */

'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
	displayName: 'Tab',

	propTypes: {
		name: PropTypes.string.isRequired,
		selected: PropTypes.bool,
		onClick: PropTypes.func.isRequired
	},

	getDefaultProps: function() {
		return {
			selected: false
		}
	},

	render: function() {
		var cssClass = 'tab';
		if (this.props.selected === true) {
			cssClass += ' selected';
		}

		return (
			<div className={cssClass} onClick={this.props.onClick}>{this.props.name}</div>
		);
	}
});