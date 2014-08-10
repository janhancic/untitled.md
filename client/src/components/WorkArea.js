/** @jsx React.DOM */

'use strict';

require('../../styles/work_area.less');

var React = require('react');

module.exports = React.createClass({
	displayName: 'Editor',

	render: function() {
		return (
			<section className='work-area'>
				<textarea></textarea>
				<textarea></textarea>
			</section>
		);
	}
});