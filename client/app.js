/** @jsx React.DOM */

'use strict';

window.__DEV__ = true

require('./styles/app.less');

var React = require('react');
var UntitledMd = require('./src/components/UntitledMd.js');
var DocumentsStore = require('./src/stores/Documents');

React.renderComponent(<UntitledMd/>, document.body);

// put React on the window object so that React Web Tools works
window.React = React;