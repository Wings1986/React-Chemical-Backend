"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postChemical = exports.getChemicals = exports.deleteChemical = void 0;

var _Chemical = _interopRequireDefault(require("../models/Chemical.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var postChemical = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var myChemical;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Chemical["default"].create(req.body);

          case 3:
            myChemical = _context.sent;
            res.json({
              msg: "successfully posted!!",
              data: myChemical
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.send(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function postChemical(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postChemical = postChemical;

var getChemicals = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var chemicals, userChemicals;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Chemical["default"].find({});

          case 3:
            chemicals = _context2.sent;
            userChemicals = chemicals.filter(function (chemical) {
              return chemical.user == req.user._id;
            });
            res.json({
              msg: "success!",
              data: userChemicals
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.send(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getChemicals(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getChemicals = getChemicals;

var deleteChemical = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var deletedChemical;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Chemical["default"].findByIdAndDelete(req.params.id);

          case 3:
            deletedChemical = _context3.sent;
            res.json({
              msg: "successfully deleted!!",
              data: deletedChemical
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.send(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function deleteChemical(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteChemical = deleteChemical;