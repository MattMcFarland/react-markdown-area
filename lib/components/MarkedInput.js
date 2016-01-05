'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkedInput = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkedInput = exports.MarkedInput = function MarkedInput(_ref) {
  var value = _ref.value;
  var onChange = _ref.onChange;
  var id = _ref.id;
  var classNames = _ref.classNames;
  return _react2.default.createElement(
    'div',
    { className: classNames.textContainer },
    _react2.default.createElement('textarea', {
      id: id,
      onChange: onChange,
      value: value })
  );
};