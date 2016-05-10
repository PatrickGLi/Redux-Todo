var ReactDom = require('react-dom'),
    React = require('react'),
    TodoApp = require('./todoapp');

$(function() {
  var root = $('#root');
  ReactDom.render(<TodoApp/>, root[0]);
});
