/** @jsx React.DOM */

'use strict';

jest.dontMock('../../src/components/Header');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Header = require('../../src/components/Header');

describe('Header component', function() {
	it('renders correctly', function() {
		var tab = TestUtils.renderIntoDocument(
			<Header documentName='hey-o' />
		);

		var header = TestUtils.findRenderedDOMComponentWithTag(tab, 'header').getDOMNode();

		expect(header.textContent).toMatch('Showing document: hey-o');
	});
});