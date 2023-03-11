"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = exports.loginUser = void 0;

var _User = _interopRequireDefault(require("../models/User.js"));

var _utils = require("../utils/utils.js");

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validationResult = _expressValidator["default"].validationResult;

var registerUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var errors, _req$body, email, first_name, last_name, password, salt, bcryptPassword, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            errors = validationResult(req);
            _context.prev = 1;

            if (errors.isEmpty()) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(422).json({
              errors: errors.array()
            }));

          case 6:
            _req$body = req.body, email = _req$body.email, first_name = _req$body.first_name, last_name = _req$body.last_name, password = _req$body.password;
            _context.next = 9;
            return _bcrypt["default"].genSalt(10);

          case 9:
            salt = _context.sent;
            _context.next = 12;
            return _bcrypt["default"].hash(password, salt);

          case 12:
            bcryptPassword = _context.sent;
            _context.next = 15;
            return _User["default"].create({
              email: email,
              first_name: first_name,
              last_name: last_name,
              password: bcryptPassword
            });

          case 15:
            newUser = _context.sent;

            if (newUser) {
              res.send({
                _id: newUser._id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
                token: (0, _utils.getToken)(newUser),
                msg: "Registered successfully!",
                success: true
              });
            } else {
              res.status(404).send({
                msg: "User Not Found"
              });
            }

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 19]]);
  }));

  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerUser = registerUser;

var loginUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, signinUser, validPassword;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findOne({
              email: email
            });

          case 4:
            signinUser = _context2.sent;

            if (signinUser) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(401).json("Invalid Credential"));

          case 7:
            _context2.next = 9;
            return _bcrypt["default"].compare(password, signinUser.password);

          case 9:
            validPassword = _context2.sent;

            if (validPassword) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(401).json("Invalid password"));

          case 14:
            res.send({
              _id: signinUser._id,
              first_name: signinUser.first_name,
              last_name: signinUser.last_name,
              email: signinUser.email,
              isAdmin: signinUser.isAdmin,
              token: (0, _utils.getToken)(signinUser),
              msg: "Login successful!"
            });

          case 15:
            _context2.next = 21;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            console.log("commuing frombackend");

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 17]]);
  }));

  return function loginUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginUser = loginUser;