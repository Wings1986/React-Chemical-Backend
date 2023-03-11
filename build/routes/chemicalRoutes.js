"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _ChemicalController = require("../controllers/ChemicalController.js");

var _utils = require("../utils/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/chemicals", _utils.isAuth, _ChemicalController.getChemicals);
router.post("/chemicals", _utils.isAuth, _ChemicalController.postChemical);
router["delete"]("/chemicals/:id", _utils.isAuth, _ChemicalController.deleteChemical);
var _default = router;
exports["default"] = _default;