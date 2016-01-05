var React = require('react');
var render = require('react-dom').render;
var LiveMarkedArea = require('../lib').LiveMarkedArea


render(<div><LiveMarkedArea defaultValue="# Hello World! `This is markdown` **thank** *you!*"/></div>, document.getElementById('root'));