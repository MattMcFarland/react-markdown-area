var React = require('react');
var ReactDOM = require('react-dom');

// Normally you would use require('react-markdown-area');
var MarkedArea = require('../../../lib/markedarea');

ReactDOM.render(
  <div>
    <h1>Browserify Example</h1>
    <hr/>
    <h2>Live Example</h2>
    <MarkedArea mode="live"/>
    <h2>Tabbed Example</h2>
    <MarkedArea/>
  </div>,
  document.getElementById('root'));
