'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkedToolbar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarkedToolbar = exports.MarkedToolbar = function MarkedToolbar(_ref) {
  var isPreview = _ref.isPreview;
  var onDisablePreview = _ref.onDisablePreview;
  var onEnablePreview = _ref.onEnablePreview;
  var classNames = _ref.classNames;
  return _react2.default.createElement(
    'menu',
    null,
    _react2.default.createElement(
      'button',
      {
        className: isPreview ? classNames.defaultButton : classNames.activeButton,
        onClick: onDisablePreview },
      _react2.default.createElement(
        'span',
        null,
        'Edit'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        className: isPreview ? classNames.activeButton : classNames.defaultButton,
        onClick: onEnablePreview },
      _react2.default.createElement(
        'span',
        null,
        'Preview'
      )
    ),
    _react2.default.createElement(
      'a',
      { target: '_blank',
        href: '//help.github.com/articles/github-flavored-markdown/',
        title: 'learn more about github flavored markdown',
        className: classNames.helpLink },
      _react2.default.createElement(
        'span',
        null,
        'Help'
      )
    )
  );
};