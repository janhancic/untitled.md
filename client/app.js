/** @jsx React.DOM */

'use strict';

var React = require('react');
var UntitledMd = require('./src/components/UntitledMd.js');
require('./styles/app.less');

React.renderComponent(<UntitledMd/>, document.body);

// put React on the window object so that React Web Tools works
window.React = React;