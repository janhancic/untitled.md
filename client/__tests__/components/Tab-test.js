/** @jsx React.DOM */

'use strict';

jest.dontMock('../../src/components/Tab');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Tab = require('../../src/components/Tab');

describe('Tab component', function() {
	it('renders correctly', function() {
		var tab = TestUtils.renderIntoDocument(
			<Tab name='my tab' selected={false} onClick={function() {}} />
		);

		var div = TestUtils.findRenderedDOMComponentWithTag(tab, 'div').getDOMNode();

		expect(div.textContent).toEqual('my tab');
		expect(div.className).toEqual('tab');
	});
});