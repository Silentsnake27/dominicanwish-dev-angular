"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _dbconfig = require("../config/dbconfig");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Productinfo from './productInfo';
// import Categories from './category';
const Products_index = _dbconfig.sequelize.define('products', {
  idProducto: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  price: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  old_price: {
    type: _sequelize.default.TEXT,
    allowNull: true
  },
  rank: {
    type: _sequelize.default.TEXT,
    allowNull: false
  },
  new: {
    type: _sequelize.default.TEXT,
    allowNull: true
  },
  top: {
    type: _sequelize.default.TEXT,
    allowNull: true
  },
  img_link: {
    type: _sequelize.default.TEXT,
    allowNull: false // get() {
    //   return this.getDataValue('picture').toString('utf8'); // or whatever encoding is right
    // },

  },
  expired: {
    type: _sequelize.default.DATE,
    allowNull: true
  },
  fecha_añadido: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false,

    //note here this is the guy that you are looking for                   
    get() {
      return (0, _moment.default)(this.getDataValue('fecha_añadido')).format('DD/MM/YYYY h:mm: A');
    }

  },
  idCategory: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  idProinfo: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

var _default = Products_index;
exports.default = _default;