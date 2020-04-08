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
  monochroma_parent: "lib-styles-monochroma_parent-3fWN",
  "switch": "lib-styles-switch-NAMM",
  slider: "lib-styles-slider-XPlX",
  round: "lib-styles-round-20YB",
  switchParent: "lib-styles-switchParent-3KxT"
};

require('load-styles')("/*  imported from styles.css  */\n\nbody.lib-styles-dark-Rt22{\n  background-color:#282c35;\n  color:#fff;\n}\n\nbody.lib-styles-dark-Rt22 div{\n    background: #282c35;\n    color:#fff;\n  }\n\nbody.lib-styles-dark-Rt22 div span{\n    color: #fff;  \n}\n\nbody.lib-styles-dark-Rt22 span{\n    color: #fff;  \n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input { \n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:checked + .lib-styles-slider-XPlX {\n  background-color: #FF6347;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:focus + .lib-styles-slider-XPlX {\n  box-shadow: 0 0 1px #FF6347;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM input:checked + .lib-styles-slider-XPlX:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.lib-styles-monochroma_parent-3fWN .lib-styles-switch-NAMM .lib-styles-slider-XPlX.lib-styles-round-20YB {\n  border-radius: 34px;\n}\n\n.lib-styles-monochroma_parent-3fWN .lib-styles-slider-XPlX.lib-styles-round-20YB:before {\n  border-radius: 50%;\n}\n\n.lib-styles-switchParent-3KxT{\n    float:right;\n    margin-top: 15px;\n}\n");

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
        document.body.classList.add(s.dark);
      }
    }
  }, {
    key: "toggleMode",
    value: function toggleMode() {
      if (!localStorage.getItem("_monochroma_mode") || localStorage.getItem("_monochroma_mode") === "default") {
        document.body.classList.add(s.dark);
        localStorage.setItem("_monochroma_mode", "dark");
      } else {
        document.body.classList.remove(s.dark);
        localStorage.setItem("_monochroma_mode", "default");
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
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: s.monochroma_parent
      }, _react.default.createElement("span", {
        className: s.switchParent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJNb25vY2hyb21hIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInMiLCJkYXJrIiwic2V0SXRlbSIsInJlbW92ZSIsIm1vbm9jaHJvbWFfcGFyZW50Iiwic3dpdGNoUGFyZW50Iiwic3dpdGNoIiwidG9nZ2xlTW9kZSIsImdldENoZWNrZWQiLCJzbGlkZXIiLCJyb3VuZCIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7O0lBRU1DLFU7Ozs7Ozs7Ozs7Ozs7d0NBQ2tCO0FBQ2hCLFVBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckIsTUFBNkMsTUFBakQsRUFBeUQ7QUFDckRDLFFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QkMsQ0FBQyxDQUFDQyxJQUE5QjtBQUNIO0FBQ0o7OztpQ0FDWTtBQUNULFVBQ0ksQ0FBQ1AsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQixDQUFELElBQ0FELFlBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckIsTUFBNkMsU0FGakQsRUFHRTtBQUNFQyxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEJDLENBQUMsQ0FBQ0MsSUFBOUI7QUFDQVAsUUFBQUEsWUFBWSxDQUFDUSxPQUFiLENBQXFCLGtCQUFyQixFQUF5QyxNQUF6QztBQUNILE9BTkQsTUFNTztBQUNITixRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkssTUFBeEIsQ0FBK0JILENBQUMsQ0FBQ0MsSUFBakM7QUFDQVAsUUFBQUEsWUFBWSxDQUFDUSxPQUFiLENBQXFCLGtCQUFyQixFQUF5QyxTQUF6QztBQUNIO0FBQ0o7OztpQ0FFWTtBQUNULFVBQUlSLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixrQkFBckIsTUFBNkMsU0FBN0MsSUFBMEQsQ0FBQ0QsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQixDQUEvRCxFQUF5RztBQUNyRyxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJRCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLE1BQWpELEVBQXlEO0FBQ3JELGVBQU8sSUFBUDtBQUNIO0FBQ0o7Ozs2QkFFUTtBQUNMLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBRUssQ0FBQyxDQUFDSTtBQUFsQixTQUNJO0FBQU0sUUFBQSxTQUFTLEVBQUVKLENBQUMsQ0FBQ0s7QUFBbkIsU0FDSTtBQUFPLFFBQUEsU0FBUyxFQUFFTCxDQUFDLENBQUNNO0FBQXBCLFNBQ0k7QUFDSSxRQUFBLElBQUksRUFBQyxVQURUO0FBRUksUUFBQSxPQUFPLEVBQUUsS0FBS0MsVUFGbEI7QUFHSSxRQUFBLGNBQWMsRUFBRSxLQUFLQyxVQUFMO0FBSHBCLFFBREosRUFNSTtBQUFNLFFBQUEsU0FBUyxZQUFLUixDQUFDLENBQUNTLE1BQVAsY0FBaUJULENBQUMsQ0FBQ1UsS0FBbkI7QUFBZixRQU5KLENBREosQ0FESixFQVdLLEtBQUtDLEtBQUwsQ0FBV0MsUUFYaEIsQ0FESjtBQWVIOzs7O0VBNUNvQkMsZUFBTUMsUzs7QUErQy9CckIsVUFBVSxDQUFDRCxZQUFYLEdBQTBCQSxZQUExQjtlQUVlQyxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge31cblxuY2xhc3MgTW9ub2Nocm9tYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikgPT09IFwiZGFya1wiKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQocy5kYXJrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdG9nZ2xlTW9kZSgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX21vbm9jaHJvbWFfbW9kZVwiKSB8fFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIpID09PSBcImRlZmF1bHRcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzLmRhcmspO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIsIFwiZGFya1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShzLmRhcmspO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfbW9ub2Nocm9tYV9tb2RlXCIsIFwiZGVmYXVsdFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRDaGVja2VkKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19tb25vY2hyb21hX21vZGUnKSA9PT0gJ2RlZmF1bHQnIHx8ICFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9tb25vY2hyb21hX21vZGVcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19tb25vY2hyb21hX21vZGUnKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubW9ub2Nocm9tYV9wYXJlbnR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zd2l0Y2hQYXJlbnR9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLnN3aXRjaH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dGhpcy5nZXRDaGVja2VkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzLnNsaWRlcn0gJHtzLnJvdW5kfWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk1vbm9jaHJvbWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBNb25vY2hyb21hO1xuIl19
