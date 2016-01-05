'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LiveMarkedArea = undefined;

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

var LiveMarkedArea = exports.LiveMarkedArea = (function (_React$Component) {
  _inherits(LiveMarkedArea, _React$Component);

  function LiveMarkedArea(props) {
    _classCallCheck(this, LiveMarkedArea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LiveMarkedArea).call(this, props));

    _this.handleTextChange = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.state = {
      value: props.defaultValue ? props.defaultValue : ''
    };
    return _this;
  }

  _createClass(LiveMarkedArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var id = _props.id;
      var label = _props.label;
      var classNames = _props.classNames;
      var placeholder = _props.placeholder;
      var value = this.state.value;

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
          )
        ),
        _react2.default.createElement(_components.MarkedInput, {
          placeholder: placeholder,
          classNames: classNames,
          onChange: this.handleTextChange,
          value: value }),
        _react2.default.createElement(_components.MarkedPreview, { classNames: classNames,
          value: value })
      );
    }
  }]);

  return LiveMarkedArea;
})(_react2.default.Component);

LiveMarkedArea.defaultProps = {
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