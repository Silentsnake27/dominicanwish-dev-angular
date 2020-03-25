"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

var _Products = _interopRequireDefault(require("./Products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import moment from 'moment';
const Categories = _dbconfig.sequelize.define("categories", {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: _sequelize.default.TEXT,
    allowNull: false
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

Categories.hasMany(_Products.default, {
  foreignKey: 'idCategory',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

_Products.default.belongsTo(Categories, {
  foreignKey: 'idCategory',
  sourceKey: 'id'
}); // Categories.removeAttribute('id')


var _default = Categories;
exports.default = _default;