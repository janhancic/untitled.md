/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Editor',

	render: function() {
		return (
			<textarea className='editor' value={this.props.value} />
		);
	}
});