'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkedArea = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Import React
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/*
  Import Components
*/

/*
  MarkedArea Container Class
*/

var MarkedArea = exports.MarkedArea = (function (_React$Component) {
  _inherits(MarkedArea, _React$Component);

  function MarkedArea(props) {
    _classCallCheck(this, MarkedArea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MarkedArea).call(this, props));

    _this.handleEnablePreview = function () {
      _this.setState({ isPreview: true });
    };

    _this.handleDisablePreview = function () {
      _this.setState({ isPreview: false });
    };

    _this.handleTextChange = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.state = {
      isPreview: props.isPreview ? props.isPreview : false,
      value: props.defaultValue ? props.defaultValue : ''
    };
    return _this;
  }

  _createClass(MarkedArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var label = _props.label;
      var classNames = _props.classNames;
      var placeholder = _props.placeholder;
      var _state = this.state;
      var isPreview = _state.isPreview;
      var value = _state.value;

      return _react2.default.createElement(
        'section',
        { className: classNames.root },
        _react2.default.createElement(
          'header',
          { className: classNames.header },
          _react2.default.createElement(
            'label',
            { htmlFor: id },
            label
          ),
          _react2.default.createElement(_components.MarkedToolbar, _extends({
            onEnablePreview: this.handleEnablePreview,
            onDisablePreview: this.handleDisablePreview,
            isPreview: isPreview
          }, this.props))
        ),
        this.state.isPreview ? _react2.default.createElement(_components.MarkedPreview, { value: value }) : _react2.default.createElement(_components.MarkedInput, {
          classNames: classNames,
          placeholder: placeholder,
          onChange: this.handleTextChange,
          value: value })
      );
    }
  }]);

  return MarkedArea;
})(_react2.default.Component);

MarkedArea.defaultProps = {
  id: 'mmc-marked-area',
  label: '',
  classNames: {
    root: 'marked-area',
    header: 'marked-area-header',
    activeButton: 'marked-area-button active',
    defaultButton: 'marked-area-button',
    helpLink: 'marked-area-help-link',
    textContainer: 'marked-area-text-container',
    liveDivider: 'marked-area-live-divider'
  }
};