'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkedPreview = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var marked = require('marked');

var MarkedPreview = exports.MarkedPreview = function MarkedPreview(_ref) {
  var value = _ref.value;
  var classNames = _ref.classNames;
  return _react2.default.createElement(
    'div',
    { className: classNames.textContainer },
    _react2.default.createElement('div', { dangerouslySetInnerHTML: {
        __html: marked(value.toString(), { sanitize: true })
      } })
  );
};