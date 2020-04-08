"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultProps = {};

var Monochroma =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Monochroma, _React$Component);

  function Monochroma() {
    _classCallCheck(this, Monochroma);

    return _possibleConstructorReturn(this, _getPrototypeOf(Monochroma).apply(this, arguments));
  }

  _createClass(Monochroma, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.getItem("_monochroma_mode") === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, {
    key: "toggleMode",
    value: function toggleMode() {
      if (!localStorage.getItem("_monochroma_mode") || localStorage.getItem("_monochroma_mode") === "default") {
        document.body.classList.add("dark");
        localStorage.setItem("_monochroma_mode", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("_monochroma_mode", "default");
      }
    }
  }, {
    key: "getChecked",
    value: function getChecked() {
      if (localStorage.getItem('_monochroma_mode') === 'default' && !localStorage.getItem("_monochroma_mode")) {
        return false;
      }

      if (localStorage.getItem('_monochroma_mode') === 'dark') {
        return true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: 'monochroma_parent'
      }, _react.default.createElement("span", {
        className: 'switchParent'
      }, _react.default.createElement("label", {
        class: "switch"
      }, _react.default.createElement("input", {
        type: "checkbox",
        onClick: this.toggleMode,
        defaultChecked: this.getChecked()
      }), _react.default.createElement("span", {
        class: "slider round"
      }))), this.props.children);
    }
  }]);

  return Monochroma;
}(_react.default.Component);

Monochroma.defaultProps = defaultProps;
var _default = Monochroma;
exports.default = _default;
