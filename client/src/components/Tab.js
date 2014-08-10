/** @jsx React.DOM */

'use strict';

require('../../styles/tab.less');

var React = require('react');
var PropTypes = React.PropTypes;

module.exports = React.createClass({
	displayName: 'Tab',

	propTypes: {
		name: PropTypes.string.isRequired,
		selected: PropTypes.bool
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
			<div className={cssClass}>{this.props.name}</div>
		);
	}
});