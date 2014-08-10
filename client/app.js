/** @jsx React.DOM */

'use strict';

var React = require('react');
var UntitledMd = require('./src/components/UntitledMd.js');
require('./app.less');

React.renderComponent(<UntitledMd/>, document.body);