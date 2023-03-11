"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var chemicalSchema = new _mongoose["default"].Schema({
  chemicalName: {
    type: String,
    required: true
  },
  chemicalQuantity: {
    type: Number,
    required: true
  },
  user: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  time: {
    type: Date,
    "default": Date.now
  }
});

var ChemicalModel = _mongoose["default"].model("Request", chemicalSchema);

var _default = ChemicalModel;
exports["default"] = _default;