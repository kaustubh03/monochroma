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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Monochroma)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.toggleMode = function () {
      var type = _this.props.type;

      if (!localStorage.getItem("_monochroma_mode") || localStorage.getItem("_monochroma_mode") === "default") {
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

        localStorage.setItem("_monochroma_mode", "default");
      }
    }, _temp));
  }

  _createClass(Monochroma, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var type = this.props.type;

      if (localStorage.getItem("_monochroma_mode") === "dark") {
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
      if (localStorage.getItem('_monochroma_mode') === 'default' || !localStorage.getItem("_monochroma_mode")) {
        return false;
      }

      if (localStorage.getItem('_monochroma_mode') === "dark") {
        return true;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJwb3NpdGlvbiIsInR5cGUiLCJNb25vY2hyb21hIiwidG9nZ2xlTW9kZSIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInMiLCJpbmt5Iiwic3Rhcmxlc3MiLCJkYXJrIiwic2V0SXRlbSIsInJlbW92ZSIsImN1c3RvbVBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwibW9ub2Nocm9tYV9wYXJlbnQiLCJzd2l0Y2hQYXJlbnQiLCJnZXRTd2l0Y2hQb3NpdGlvbiIsInN3aXRjaCIsImdldENoZWNrZWQiLCJzbGlkZXIiLCJyb3VuZCIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLEVBQUFBLFFBQVEsRUFBRSxXQURPO0FBQ007QUFDdkJDLEVBQUFBLElBQUksRUFBRSxTQUZXLENBRUE7QUFDakI7O0FBSGlCLENBQXJCOztJQU1NQyxVOzs7Ozs7Ozs7Ozs7Ozs7OzBNQW1CRkMsVSxHQUFhLFlBQU07QUFBQSxVQUNQRixJQURPLEdBQ0UsTUFBS0csS0FEUCxDQUNQSCxJQURPOztBQUVmLFVBQ0ksQ0FBQ0ksWUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQixDQUFELElBQ0FELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckIsTUFBNkMsU0FGakQsRUFHRTtBQUNFLGdCQUFRTCxJQUFSO0FBQ0ksZUFBSyxNQUFMO0FBQ0lNLFlBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QkMsQ0FBQyxDQUFDQyxJQUE5QjtBQUNBOztBQUNKLGVBQUssVUFBTDtBQUNJTCxZQUFBQSxRQUFRLENB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O0FBeEJSO0FBNkJIOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUssUUFBQSxTQUFTLEVBQUVSLENBQUMsQ0FBQ1c7QUFBbEIsU0FDSTtBQUFNLFFBQUEsU0FBUyxFQUFFWCxDQUFDLENBQUNZLFlBQW5CO0FBQWlDLFFBQUEsS0FBSyxFQUFFLEtBQUtDLGlCQUFMO0FBQXhDLFNBQ0k7QUFBTyxRQUFBLFNBQVMsRUFBRWIsQ0FBQyxDQUFDYztBQUFwQixTQUNJO0FBQ0ksUUFBQSxJQUFJLEVBQUMsVUFEVDtBQUVJLFFBQUEsT0FBTyxFQUFFLEtBQUt0QixVQUZsQjtBQUdJLFFBQUEsY0FBYyxFQUFFLEtBQUt1QixVQUFMO0FBSHBCLFFBREosRUFNSTtBQUFNLFFBQUEsU0FBUyxZQUFLZixDQUFDLENBQUNnQixNQUFQLGNBQWlCaEIsQ0FBQyxDQUFDaUIsS0FBbkI7QUFBZixRQU5KLENBREosQ0FESixFQVdLLEtBQUt4QixLQUFMLENBQVd5QixRQVhoQixDQURKO0FBZUg7Ozs7RUFoSG9CQyxlQUFNQyxTOztBQW1IL0I3QixVQUFVLENBQUNILFlBQVgsR0FBMEJBLFlBQTFCO2VBRWVHLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5cblxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFwidG9wLXJpZ2h0XCIsIC8vIENhbiBiZSB0b3AtcmlnaHQsIHRvcC1sZWZ0LCBcbiAgICB0eXBlOiBcImRlZmF1bHRcIiwgLy8gaW5reSwgc3Rhcmxlc3MsIGRlZmF1bHRcbiAgICAvL2N1c3RvbVBvc2l0aW9uOnt9ICBTaW5jZSBTd2l0Y2ggcG9zaXRpb24gaXMgYWJzb2x1dGUgd2l0aCByZWxhdGl2ZWx5IGxhcmdlciB6SW5kZXguIFByb3ZpZGUgY3NzIHBvc2l0aW9uIHN0eWxlcyB3aXRoIChyaWdodCwgbGVmdCwgYm90dG9tLCB0b3ApXG59XG5cbmNsYXNzIE1vbm9jaHJvbWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmt5XCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmlua3kpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3Rhcmxlc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuc3Rhcmxlc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5kYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH07XG4gICAgdG9nZ2xlTW9kZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIpIHx8XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikgPT09IFwiZGVmYXVsdFwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImlua3lcIjpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHMuaW5reSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdGFybGVzc1wiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5zdGFybGVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmRhcmspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiLCBcImRhcmtcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW5reVwiOlxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUocy5pbmt5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0YXJsZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShzLnN0YXJsZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHMuZGFyayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIiwgXCJkZWZhdWx0XCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdldENoZWNrZWQoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX21vbm9jaHJvbWFfbW9kZScpID09PSAnZGVmYXVsdCcgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX21vbm9jaHJvbWFfbW9kZScpID09PSBcImRhcmtcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTd2l0Y2hQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBwb3NpdGlvbiwgY3VzdG9tUG9zaXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ0b3AtcmlnaHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByaWdodDogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIzNXB4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidG9wLWxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJib3R0b20tbGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IFwiMzVweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImJvdHRvbS1yaWdodFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjdXN0b21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VzdG9tUG9zaXRpb247XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjM1cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1vbm9jaHJvbWFfcGFyZW50fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3dpdGNoUGFyZW50fSBzdHlsZT17dGhpcy5nZXRTd2l0Y2hQb3NpdGlvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5zd2l0Y2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RoaXMuZ2V0Q2hlY2tlZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cy5zbGlkZXJ9ICR7cy5yb3VuZH1gfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Nb25vY2hyb21hLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTW9ub2Nocm9tYTtcbiJdfQ==
