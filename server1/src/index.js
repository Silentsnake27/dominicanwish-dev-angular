import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import exphbs from "express-handlebars";
import helmet from "helmet";

const app = express();

app.use(helmet());
// Database Connections
import { sequelize } from "./config/dbconfig";
// Test DataBase
sequelize
  .authenticate()
  .then(function(err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function(err) {
    console.log("Unable to connect to the database:", err);
  });

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "./views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: {
      limit: function(arr, limit) {
        if (!Array.isArray(arr)) {
          return [];
        }
        return arr.slice(0, limit);
      }
    }
  })
);
app.set("view engine", ".hbs");
app.use(express.static(path.join(__dirname, "./assets")));
// console.log(__dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
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
