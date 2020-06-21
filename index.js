"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var Monochroma =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Monochroma, _React$Component);

  function Monochroma() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Monochroma);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Monochroma)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches, _this.toggleMode = function () {
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
      return _react.default.createElement("div", {
        className: s.monochroma_parent
      }, _react.default.createElement("span", {
        className: s.switchParent,
        style: this.getSwitchPosition()
      }, _react.default.createElement("label", {
        className: s.switch
      }, _react.default.createElement("input", {
        type: "checkbox",
        onClick: this.toggleMode,
        defaultChecked: this.getChecked()
      }), _react.default.createElement("span", {
        className: "".concat(s.slider, " ").concat(s.round)
      }))), this.props.children);
    }
  }]);

  return Monochroma;
}(_react.default.Component);

Monochroma.defaultProps = defaultProps;
var _default = Monochroma;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJwb3NpdGlvbiIsInR5cGUiLCJNb25vY2hyb21hIiwiaXNEYXJrIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0b2dnbGVNb2RlIiwicHJvcHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicyIsImlua3kiLCJzdGFybGVzcyIsImRhcmsiLCJzZXRJdGVtIiwicmVtb3ZlIiwiY3VzdG9tUG9zaXRpb24iLCJyaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJtb25vY2hyb21hX3BhcmVudCIsInN3aXRjaFBhcmVudCIsImdldFN3aXRjaFBvc2l0aW9uIiwic3dpdGNoIiwiZ2V0Q2hlY2tlZCIsInNsaWRlciIsInJvdW5kIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLFlBQVksR0FBRztBQUNqQkMsRUFBQUEsUUFBUSxFQUFFLFdBRE87QUFDTTtBQUN2QkMsRUFBQUEsSUFBSSxFQUFFLFNBRlcsQ0FFQTtBQUNqQjs7QUFIaUIsQ0FBckI7O0lBTU1DLFU7Ozs7Ozs7Ozs7Ozs7Ozs7ME1BQ0ZDLE0sR0FBU0MsTUFBTSxDQUFDQyxVQUFQLElBQXFCRCxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsOEJBQWxCLEVBQWtEQyxPLFFBd0JoRkMsVSxHQUFhLFlBQU07QUFBQSxVQUNQTixJQURPLEdBQ0UsTUFBS08sS0FEUCxDQUNQUCxJQURPOztBQUVmLFVBQ0lRLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckIsTUFBNkMsT0FEakQsRUFFRTtBQUNFLGdCQUFRVCxJQUFSO0FBQ0ksZUFBSyxNQUFMO0FBQ0lVLFlBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdC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SUFBSSxFQUFFLE1BREg7QUFFSEMsWUFBQUEsTUFBTSxFQUFFO0FBRkwsV0FBUDs7QUFJSixhQUFLLGNBQUw7QUFDSSxpQkFBTztBQUNISCxZQUFBQSxLQUFLLEVBQUUsTUFESjtBQUVIRyxZQUFBQSxNQUFNLEVBQUU7QUFGTCxXQUFQOztBQUlKLGFBQUssUUFBTDtBQUNJLGlCQUFPSixjQUFQOztBQUNKO0FBQ0ksaUJBQU87QUFDSEMsWUFBQUEsS0FBSyxFQUFFLE1BREo7QUFFSEMsWUFBQUEsR0FBRyxFQUFFO0FBRkYsV0FBUDtBQXhCUjtBQTZCSDs7OzZCQUVRO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFFUixDQUFDLENBQUNXO0FBQWxCLFNBQ0k7QUFBTSxRQUFBLFNBQVMsRUFBRVgsQ0FBQyxDQUFDWSxZQUFuQjtBQUFpQyxRQUFBLEtBQUssRUFBRSxLQUFLQyxpQkFBTDtBQUF4QyxTQUNJO0FBQU8sUUFBQSxTQUFTLEVBQUViLENBQUMsQ0FBQ2M7QUFBcEIsU0FDSTtBQUNJLFFBQUEsSUFBSSxFQUFDLFVBRFQ7QUFFSSxRQUFBLE9BQU8sRUFBRSxLQUFLdEIsVUFGbEI7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLdUIsVUFBTDtBQUhwQixRQURKLEVBTUk7QUFBTSxRQUFBLFNBQVMsWUFBS2YsQ0FBQyxDQUFDZ0IsTUFBUCxjQUFpQmhCLENBQUMsQ0FBQ2lCLEtBQW5CO0FBQWYsUUFOSixDQURKLENBREosRUFXSyxLQUFLeEIsS0FBTCxDQUFXeUIsUUFYaEIsQ0FESjtBQWVIOzs7O0VBbEhvQkMsZUFBTUMsUzs7QUFxSC9CakMsVUFBVSxDQUFDSCxZQUFYLEdBQTBCQSxZQUExQjtlQUVlRyxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiBcInRvcC1yaWdodFwiLCAvLyBDYW4gYmUgdG9wLXJpZ2h0LCB0b3AtbGVmdCwgXG4gICAgdHlwZTogXCJkZWZhdWx0XCIsIC8vIGlua3ksIHN0YXJsZXNzLCBkZWZhdWx0XG4gICAgLy9jdXN0b21Qb3NpdGlvbjp7fSAgU2luY2UgU3dpdGNoIHBvc2l0aW9uIGlzIGFic29sdXRlIHdpdGggcmVsYXRpdmVseSBsYXJnZXIgekluZGV4LiBQcm92aWRlIGNzcyBwb3NpdGlvbiBzdHlsZXMgd2l0aCAocmlnaHQsIGxlZnQsIGJvdHRvbSwgdG9wKVxufVxuXG5jbGFzcyBNb25vY2hyb21hIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBpc0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGFyaykge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiLCBcImRhcmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImlua3lcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuaW5reSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFybGVzc1wiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5zdGFybGVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmRhcmspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikgPT09IFwibGlnaHRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmt5XCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmlua3kpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Rhcmxlc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuc3Rhcmxlc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIiwgXCJkYXJrXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImlua3lcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHMuaW5reSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFybGVzc1wiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUocy5zdGFybGVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShzLmRhcmspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldENoZWNrZWQoKSB7XG4gICAgICAgIGlmICgoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfbW9ub2Nocm9tYV9tb2RlJykgJiYgdGhpcy5pc0RhcmspIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfbW9ub2Nocm9tYV9tb2RlJykgPT09ICdkYXJrJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldFN3aXRjaFBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCB7IHBvc2l0aW9uLCBjdXN0b21Qb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInRvcC1yaWdodFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtbGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMzVweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1sZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCIzNXB4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tLXJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMzVweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImN1c3RvbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21Qb3NpdGlvbjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMzVweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9ub2Nocm9tYV9wYXJlbnR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zd2l0Y2hQYXJlbnR9IHN0eWxlPXt0aGlzLmdldFN3aXRjaFBvc2l0aW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLnN3aXRjaH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5nZXRDaGVja2VkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzLnNsaWRlcn0gJHtzLnJvdW5kfWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1vbm9jaHJvbWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBNb25vY2hyb21hO1xuIl19
