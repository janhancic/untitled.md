/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Editor',

	propTypes: {
		onChange: React.PropTypes.func.isRequired
	},

	render: function() {
		return (
			<textarea
				className='editor'
				ref='editor'
				value={this.props.value}
				onChange={this._onEditorChange}
			/>
		);
	},

	_onEditorChange: function() {
		this.props.onChange(this.refs.editor.getDOMNode().value);
	}
});