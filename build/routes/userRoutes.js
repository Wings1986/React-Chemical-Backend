"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _userController = require("../controllers/userController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var check = _expressValidator["default"].check;

var router = _express["default"].Router();

router.post("/register", [check("email", "email must be valid").isEmail().custom(function (value, _ref) {
  var req = _ref.req;
  return new Promise(function (resolve, reject) {
    _User["default"].findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) {
        reject(new Error('Server Error'));
      }

      if (Boolean(user)) {
        reject(new Error('E-mail already in use'));
      }

      resolve(true);
    });
  });
}), check("password").isLength({
  min: 5
}).withMessage("Password must have a minimum length of 5")], _userController.registerUser);
router.post("/login", _userController.loginUser);
var _default = router;
exports["default"] = _default;