"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = () => {
  return /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary"
  }, "Primary Button");
};

var _default = Button;
exports.default = _default;