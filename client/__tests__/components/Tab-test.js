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

	it('renders correctly if selected', function() {
		var tab = TestUtils.renderIntoDocument(
			<Tab name='my tab' selected={true} onClick={function() {}} />
		);

		var div = TestUtils.findRenderedDOMComponentWithTag(tab, 'div').getDOMNode();

		expect(div.className).toEqual('tab selected');
	});

	it('invokes the callback when clicked', function() {
		var didInvoke = false;
		var cb = function() {
			didInvoke = true;
		};

		var tab = TestUtils.renderIntoDocument(
			<Tab name='my tab' selected={true} onClick={cb} />
		);

		var div = TestUtils.findRenderedDOMComponentWithTag(tab, 'div');

		TestUtils.Simulate.click(div);

		expect(didInvoke).toBe(true);
	});
});