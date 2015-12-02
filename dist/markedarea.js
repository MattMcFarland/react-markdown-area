/**
 *  react-markdown-area - A React JS Component - enhanced 'textarea' with markdown live preview
 *  Copyright (c) 2015, Matthew McFarland. (BSD Licensed)
 *  @version v0.1.0
 *  @link http://mattmcfarland.github.io/react-markdown-area/
 *  @license BSD-2-Clause
 */

/**
* Vendor: React
* Copyright 2013-2015, Facebook, Inc. (BSD-style license in the root directory of react source tree)
* All rights reserved.
*
*/

/**
* Vendor: marked - a markdown parser
* Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
* https://github.com/chjj/marked
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MarkedArea = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _marked = (typeof window !== "undefined" ? window['marked'] : typeof global !== "undefined" ? global['marked'] : null);

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkedArea = (function (_React$Component) {
  _inherits(MarkedArea, _React$Component);

  function MarkedArea(props) {
    _classCallCheck(this, MarkedArea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MarkedArea).call(this, props));

    _this._onChange = function (e) {
      _this.setState({ value: e.target.value });
    };

    _this.disablePreview = function () {
      _this.setState({ isPreview: false });
    };

    _this.enablePreview = function () {
      _this.setState({ isPreview: true });
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

      return _react2.default.createElement(
        'div',
        { className: this.props.classNames.root },
        this.props.mode === "live" ? this.liveMode : this.tabbedMode,
        this.props.children
      );
    }
  }, {
    key: 'parsed',
    get: function get() {
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.state.value.toString(), { sanitize: true }) } });
    }
  }, {
    key: 'raw',
    get: function get() {
      return _react2.default.createElement('textarea', _extends({}, this.props, { id: this.props.id, onChange: this.props.onChange || this._onChange, value: this.state.value }));
    }
  }, {
    key: 'tabbedToolbar',
    get: function get() {
      return _react2.default.createElement(
        'menu',
        null,
        _react2.default.createElement(
          'button',
          {
            className: this.state.isPreview ? this.props.classNames.defaultButton : this.props.classNames.activeButton,
            onClick: this.disablePreview
          },
          _react2.default.createElement(
            'span',
            null,
            'Edit'
          )
        ),
        _react2.default.createElement(
          'button',
          {
            className: this.state.isPreview ? this.props.classNames.activeButton : this.props.classNames.defaultButton,
            onClick: this.enablePreview
          },
          _react2.default.createElement(
            'span',
            null,
            'Preview'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            target: '_blank',
            href: '//help.github.com/articles/github-flavored-markdown/',
            title: 'learn more about github flavored markdown',
            className: this.props.classNames.helpLink
          },
          _react2.default.createElement(
            'span',
            null,
            'Help'
          )
        )
      );
    }
  }, {
    key: 'tabbedMode',
    get: function get() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'header',
          { className: this.props.classNames.header },
          _react2.default.createElement(
            'label',
            { htmlFor: this.props.id },
            this.props.label
          ),
          this.tabbedToolbar
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.classNames.textContainer },
          this.state.isPreview ? this.parsed : this.raw
        )
      );
    }
  }, {
    key: 'liveMode',
    get: function get() {
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'header',
          { className: this.props.classNames.header },
          _react2.default.createElement(
            'label',
            { htmlFor: this.props.id },
            this.props.label
          )
        ),
        _react2.default.createElement(
          'div',
          { className: this.props.classNames.textContainer },
          this.raw,
          _react2.default.createElement(
            'h5',
            { className: this.props.classNames.liveDivider },
            'Preview:'
          ),
          this.parsed
        )
      );
    }
  }]);

  return MarkedArea;
})(_react2.default.Component);

MarkedArea.defaultProps = {
  id: "mmc-marked-area",
  label: "",
  mode: "tabbed",
  classNames: {
    root: "marked-area",
    header: "marked-area-header",
    activeButton: "marked-area-button active",
    defaultButton: "marked-area-button",
    helpLink: "marked-area-help-link",
    textContainer: "marked-area-text-container",
    liveDivider: "marked-area-live-divider"
  }
};

MarkedArea.propTypes = {
  children: _react2.default.PropTypes.any,
  classNames: _react2.default.PropTypes.shape({
    root: _react2.default.PropTypes.string,
    header: _react2.default.PropTypes.string,
    activeButton: _react2.default.PropTypes.string,
    defaultButton: _react2.default.PropTypes.string,
    helpLink: _react2.default.PropTypes.string,
    textContainer: _react2.default.PropTypes.string,
    liveDivider: _react2.default.PropTypes.string
  }),
  defaultValue: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  isPreview: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  mode: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};

MarkedArea.displayName = "MarkedArea";

module.exports = MarkedArea;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});