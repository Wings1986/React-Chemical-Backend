"use strict";

var _express = _interopRequireDefault(require("express"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

var _chemicalRoutes = _interopRequireDefault(require("./routes/chemicalRoutes.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());

_dotenv["default"].config();

app.use(_bodyParser["default"].json());

_mongoose["default"].connect("mongodb+srv://demariogibson:Aurora1129@cluster0.ncd3l.mongodb.net/chemical_app?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("mongodb connected!!!!");
})["catch"](function (err) {
  return console.log(err);
});

app.get('/', function (req, res) {
  return res.send('working!!');
});
app.use("/", _userRoutes["default"]);
app.use('/', _chemicalRoutes["default"]);
var port = 5000 || process.env.PORT;
app.listen(port, function () {
  return console.log("server is running on port ".concat(port, "!!!"));
});