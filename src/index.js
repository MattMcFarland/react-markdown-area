var React = require('react');
var ReactDOM = require('react-dom');
var MarkedArea = require('./markedarea');

ReactDOM.render(
<MarkedArea label="Enter your markdown text" placeholder="Type in here"/>,
  document.getElementById("example")
);
