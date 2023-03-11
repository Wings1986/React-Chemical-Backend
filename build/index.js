"use strict";

var _index = _interopRequireDefault(require("../api/index"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import userRoutes from "../routes/userRoutes.js";
// import chemicalRoutes from '../routes/chemicalRoutes.js'
// const app = express();
_index["default"].use((0, _cors["default"])());

_dotenv["default"].config();

_index["default"].use(_bodyParser["default"].json());

_mongoose["default"].connect("mongodb+srv://demariogibson:Aurora1129@cluster0.ncd3l.mongodb.net/chemical_app?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("mongodb connected!!!!");
})["catch"](function (err) {
  return console.log(err);
});

_index["default"].get('/', function (req, res) {
  return res.send('working!!');
}); // app.use("/", userRoutes);
// app.use('/', chemicalRoutes)


var port = process.env.PORT || 5000;

_index["default"].listen(port, function () {
  return console.log("server is running on port ".concat(port, "!!!"));
});