import Sequelize, { DataTypes } from 'sequelize';
import {sequelize} from '../config/dbconfig';
// import moment from 'moment';
import Products_index from './Products';

const Categories = sequelize.define(
  "categories",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
);
Categories.hasMany(Products_index, {foreignKey: 'idCategory', sourceKey: 'id', onDelete: 'CASCADE', onUpdate: 'CASCADE',});
Products_index.belongsTo(Categories, {foreignKey: 'idCategory', sourceKey: 'id'});
// Categories.removeAttribute('id')
export default Categories;