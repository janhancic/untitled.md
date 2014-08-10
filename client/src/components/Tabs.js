/** @jsx React.DOM */

'use strict';

require('../../styles/tabs.less');

var React = require('react');
var Tab = require('./Tab');

module.exports = React.createClass({
	displayName: 'Tabs',

	getInitialState: function() {
		return {
			tabs: ['tab1', 'tab2', 'tab3'],
			selectedTab: 0
		}
	},

	render: function() {
		var tabs = [];

		this.state.tabs.forEach(function(tab, idx) {
			tabs.push(
				<Tab
					name={tab}
					selected={idx === this.state.selectedTab}
					onClick={this._onTabClick.bind(this, idx)}
				/>
			);
		}.bind(this));

		return (
			<section className='tabs-container'>{tabs}</section>
		);
	},

	_onTabClick: function(tab) {
		if (tab === this.state.selectedTab) {
			return;
		}

		this.setState({selectedTab: tab});
	}
});