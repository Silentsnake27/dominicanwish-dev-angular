"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _helmet = _interopRequireDefault(require("helmet"));

var _dbconfig = require("./config/dbconfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
app.use((0, _helmet.default)()); // Database Connections

// Test DataBase
_dbconfig.sequelize.authenticate().then(function (err) {
  console.log("Connection has been established successfully.");
}).catch(function (err) {
  console.log("Unable to connect to the database:", err);
});

app.set("port", process.env.PORT || 3000);
app.set("views", _path.default.join(__dirname, "./views"));
app.engine(".hbs", (0, _expressHandlebars.default)({
  defaultLayout: "main",
  layoutDir: _path.default.join(app.get("views"), "layouts"),
  partialsDir: _path.default.join(app.get("views"), "partials"),
  extname: ".hbs",
  helpers: {
    limit: function (arr, limit) {
      if (!Array.isArray(arr)) {
        return [];
      }

      return arr.slice(0, limit);
    }
  }
}));
app.set("view engine", ".hbs");
app.use(_express.default.static(_path.default.join(__dirname, "./assets"))); // console.log(__dirname);

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
})); // routes
// app.use(require("./routes/home"));

app.use('/', require('./routes/home'));
app.use(require("./routes/checkout"));
app.use(require("./routes/product"));
app.use(require("./routes/store"));
app.use(require("./routes/checkout"));
app.use(require("./routes/blank"));
app.use(require("./routes/search"));
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});