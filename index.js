"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var s = {
  dark: "lib-styles-dark-Rt22",
  inky: "lib-styles-inky-3UYM",
  starless: "lib-styles-starless-lWf9",
  monochroma_parent: "lib-styles-monochroma_parent-3fWN",
  "switch": "lib-styles-switch-NAMM",
  slider: "lib-styles-slider-XPlX",
  round: "lib-styles-round-20YB",
  switchParent: "lib-styles-switchParent-3KxT"
};

require('load-styles')("/*\n   imported from styles.css \n*/\n\nbody.lib-styles-dark-Rt22{\n  background-color:#282c35;\n  color:#fff;\n}\n\nbody.lib-styles-dark-Rt22 *\n  {\n    background: #282c35;\n    color:#fff;\n  }\n\nbody.lib-styles-dark-Rt22 div span{\n    color: #fff;  \n}\n\nbody.lib-styles-dark-Rt22 span{\n    color: #fff;  \n}\n/*\n  Inky Style\n*/\nbody.lib-styles-inky-3UYM{\n  background-color:#05093a;\n  color:#fff;\n}\n\nbody.lib-styles-inky-3UYM *\n  {\n    background: #05093a;\n    color:#fff;\n  }\n\nbody.lib-styles-inky-3UYM div span{\n    color: #fff;  \n}\n\nbody.lib-styles-inky-3UYM span{\n    color: #fff;  \n}\n/*\n  Starless Style\n*/\nbody.lib-styles-starless-lWf9{\n  background-color:#000;\n  color:#fff;\n}\n\nbody.lib-styles-starless-lWf9 *\n  {\n    background: #000;\n    color:#fff;\n  }\n\nbody.lib-styles-starless-lWf9 div span{\n    color: #fff;  \n}\n\nbody.lib-styles-starless-lWf9 span{\n    color: #fff;  \n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:checked + .lib-styles-slider-XPlX {\n  background-color: #FF6347;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:focus + .lib-styles-slider-XPlX {\n  box-shadow: 0 0 1px #FF6347;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:checked + .lib-styles-slider-XPlX:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX.lib-styles-round-20YB {\n  border-radius: 34px;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-slider-XPlX.lib-styles-round-20YB:before {\n  border-radius: 50%;\n}\n\n.lib-styles-switchParent-3KxT{\n    position: absolute;\n    z-index: 9999999;\n}\n");

var defaultProps = {
  position: "top-right",
  // Can be top-right, top-left, 
  type: "default" // inky, starless, default
  //customPosition:{}  Since Switch position is absolute with relatively larger zIndex. Provide css position styles with (right, left, bottom, top)

};

var Monochroma = /*#__PURE__*/function (_React$Component) {
  _inherits(Monochroma, _React$Component);

  var _super = _createSuper(Monochroma);

  function Monochroma() {
    var _temp, _this;

    _classCallCheck(this, Monochroma);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, _this.toggleMode = function () {
      var type = _this.props.type;

      if (localStorage.getItem("_monochroma_mode") === "light") {
        switch (type) {
          case "inky":
            document.body.classList.add(s.inky);
            break;

          case "starless":
            document.body.classList.add(s.starless);
            break;

          default:
            document.body.classList.add(s.dark);
            break;
        }

        localStorage.setItem("_monochroma_mode", "dark");
      } else {
        switch (type) {
          case "inky":
            document.body.classList.remove(s.inky);
            break;

          case "starless":
            document.body.classList.remove(s.starless);
            break;

          default:
            document.body.classList.remove(s.dark);
            break;
        }

        localStorage.setItem("_monochroma_mode", "light");
      }
    }, _temp));
  }

  _createClass(Monochroma, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = this.props.type;

      if (!localStorage.getItem("_monochroma_mode")) {
        if (this.isDark) {
          localStorage.setItem("_monochroma_mode", "dark");
        } else {
          localStorage.setItem("_monochroma_mode", "light");
        }
      }

      if (localStorage.getItem("_monochroma_mode") === 'dark') {
        switch (type) {
          case "inky":
            document.body.classList.add(s.inky);
            break;

          case "starless":
            document.body.classList.add(s.starless);
            break;

          default:
            document.body.classList.add(s.dark);
            break;
        }
      }
    }
  }, {
    key: "getChecked",
    value: function getChecked() {
      if (!localStorage.getItem('_monochroma_mode') && this.isDark || localStorage.getItem('_monochroma_mode') === 'dark') {
        return true;
      }

      return false;
    }
  }, {
    key: "getSwitchPosition",
    value: function getSwitchPosition() {
      var _this$props = this.props,
          position = _this$props.position,
          customPosition = _this$props.customPosition;

      switch (position) {
        case "top-right":
          return {
            right: "35px",
            top: "35px"
          };

        case "top-left":
          return {
            left: "35px",
            top: "35px"
          };

        case "bottom-left":
          return {
            left: "35px",
            bottom: "35px"
          };

        case "bottom-right":
          return {
            right: "35px",
            bottom: "35px"
          };

        case "custom":
          return customPosition;

        default:
          return {
            right: "35px",
            top: "35px"
          };
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: s.monochroma_parent
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: s.switchParent,
        style: this.getSwitchPosition()
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: s["switch"]
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        onClick: this.toggleMode,
        defaultChecked: this.getChecked()
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "".concat(s.slider, " ").concat(s.round)
      }))), this.props.children);
    }
  }]);

  return Monochroma;
}(_react["default"].Component);

Monochroma.defaultProps = defaultProps;
var _default = Monochroma;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJwb3NpdGlvbiIsInR5cGUiLCJNb25vY2hyb21hIiwiaXNEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0b2dnbGVNb2RlIiwicHJvcHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicyIsImlua3kiLCJzdGFybGVzcyIsImRhcmsiLCJzZXRJdGVtIiwicmVtb3ZlIiwiY3VzdG9tUG9zaXRpb24iLCJyaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtb25vY2hyb21hX3BhcmVudCIsInN3aXRjaFBhcmVudCIsImdldFN3aXRjaFBvc2l0aW9uIiwiZ2V0Q2hlY2tlZCIsInNsaWRlciIsInJvdW5kIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLEVBQUFBLFFBQVEsRUFBRSxXQURPO0FBQ007QUFDdkJDLEVBQUFBLElBQUksRUFBRSxTQUZXLENBRUE7QUFDakI7O0FBSGlCLENBQXJCOztJQU1NQyxVOzs7Ozs7Ozs7Ozs7OztvSEFDRkMsTSxHQUFTQyxNQUFNLENBQUNDLFVBQVAsSUFBcUJELE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQiw4QkFBbEIsRUFBa0RDLE8sUUF3QmhGQyxVLEdBQWEsWUFBTTtBQUFBLFVBQ1BOLElBRE8sR0FDRSxNQUFLTyxLQURQLENBQ1BQLElBRE87O0FBRWYsVUFDSVEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQixNQUE2QyxPQURqRCxFQUVFO0FBQ0UsZ0JBQVFULElBQVI7QUFDSSxlQUFLLE1BQUw7QUFDSVUsWUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhC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QUUsTUFESDtBQUVIQyxZQUFBQSxNQUFNLEVBQUU7QUFGTCxXQUFQOztBQUlKLGFBQUssY0FBTDtBQUNJLGlCQUFPO0FBQ0hILFlBQUFBLEtBQUssRUFBRSxNQURKO0FBRUhHLFlBQUFBLE1BQU0sRUFBRTtBQUZMLFdBQVA7O0FBSUosYUFBSyxRQUFMO0FBQ0ksaUJBQU9KLGNBQVA7O0FBQ0o7QUFDSSxpQkFBTztBQUNIQyxZQUFBQSxLQUFLLEVBQUUsTUFESjtBQUVIQyxZQUFBQSxHQUFHLEVBQUU7QUFGRixXQUFQO0FBeEJSO0FBNkJIOzs7NkJBRVE7QUFDTCwwQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFFUixDQUFDLENBQUNXO0FBQWxCLHNCQUNJO0FBQU0sUUFBQSxTQUFTLEVBQUVYLENBQUMsQ0FBQ1ksWUFBbkI7QUFBaUMsUUFBQSxLQUFLLEVBQUUsS0FBS0MsaUJBQUw7QUFBeEMsc0JBQ0k7QUFBTyxRQUFBLFNBQVMsRUFBRWIsQ0FBQztBQUFuQixzQkFDSTtBQUNJLFFBQUEsSUFBSSxFQUFDLFVBRFQ7QUFFSSxRQUFBLE9BQU8sRUFBRSxLQUFLUixVQUZsQjtBQUdJLFFBQUEsY0FBYyxFQUFFLEtBQUtzQixVQUFMO0FBSHBCLFFBREosZUFNSTtBQUFNLFFBQUEsU0FBUyxZQUFLZCxDQUFDLENBQUNlLE1BQVAsY0FBaUJmLENBQUMsQ0FBQ2dCLEtBQW5CO0FBQWYsUUFOSixDQURKLENBREosRUFXSyxLQUFLdkIsS0FBTCxDQUFXd0IsUUFYaEIsQ0FESjtBQWVIOzs7O0VBbEhvQkMsa0JBQU1DLFM7O0FBcUgvQmhDLFVBQVUsQ0FBQ0gsWUFBWCxHQUEwQkEsWUFBMUI7ZUFFZUcsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuXG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogXCJ0b3AtcmlnaHRcIiwgLy8gQ2FuIGJlIHRvcC1yaWdodCwgdG9wLWxlZnQsIFxuICAgIHR5cGU6IFwiZGVmYXVsdFwiLCAvLyBpbmt5LCBzdGFybGVzcywgZGVmYXVsdFxuICAgIC8vY3VzdG9tUG9zaXRpb246e30gIFNpbmNlIFN3aXRjaCBwb3NpdGlvbiBpcyBhYnNvbHV0ZSB3aXRoIHJlbGF0aXZlbHkgbGFyZ2VyIHpJbmRleC4gUHJvdmlkZSBjc3MgcG9zaXRpb24gc3R5bGVzIHdpdGggKHJpZ2h0LCBsZWZ0LCBib3R0b20sIHRvcClcbn1cblxuY2xhc3MgTW9ub2Nocm9tYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgaXNEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzO1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RhcmspIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIiwgXCJkYXJrXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIiwgXCJsaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIpID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmt5XCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmlua3kpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Rhcmxlc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuc3Rhcmxlc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRvZ2dsZU1vZGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIpID09PSBcImxpZ2h0XCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW5reVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5pbmt5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJsZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLnN0YXJsZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuZGFyayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIsIFwiZGFya1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmt5XCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShzLmlua3kpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Rhcmxlc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHMuc3Rhcmxlc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUocy5kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIiwgXCJsaWdodFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRDaGVja2VkKCkge1xuICAgICAgICBpZiAoKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX21vbm9jaHJvbWFfbW9kZScpICYmIHRoaXMuaXNEYXJrKSB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX21vbm9jaHJvbWFfbW9kZScpID09PSAnZGFyaycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRTd2l0Y2hQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbiwgY3VzdG9tUG9zaXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIzNXB4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMzVweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tUG9zaXRpb247XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vbm9jaHJvbWFfcGFyZW50fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3dpdGNoUGFyZW50fSBzdHlsZT17dGhpcy5nZXRTd2l0Y2hQb3NpdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5zd2l0Y2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMuZ2V0Q2hlY2tlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cy5zbGlkZXJ9ICR7cy5yb3VuZH1gfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Nb25vY2hyb21hLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTW9ub2Nocm9tYTtcbiJdfQ==
