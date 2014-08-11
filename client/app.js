/** @jsx React.DOM */

'use strict';

window.__DEV__ = true

// temp code (this will be fetched from the server and embeded into the document)
window.__initial_data___ = {
	documents: {
		documents: [
			{
				title: 'My md 1',
				contents: '# Hello'
			},
			{
				title: 'README',
				contents: '# README'
			},
			{
				title: 'CONTRIB',
				contents: '# Contributing'
			}
		],
		currentDocumentId: 0
	}
};
// end temp code

require('./styles/app.less');

// TODO: come up with some other way to include CSS in the page ...
require('./styles/header.less');
require('./styles/tabs.less');
require('./styles/tab.less');
require('./styles/work_area.less');
require('./styles/editor.less');
require('./styles/markdown_viewer.less');

var React = require('react');
var UntitledMd = require('./src/components/UntitledMd.js');

React.renderComponent(<UntitledMd/>, document.body);

// put React on the window object so that React Web Tools works
window.React = React;