import Sequelize, { DataTypes } from 'sequelize';
import {sequelize} from '../config/dbconfig';
import Products_index from './Products';

const Productinfo = sequelize.define('product_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    description1: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description2: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    color1: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    color2: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    color3: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }

);

Products_index.belongsTo(Productinfo, { foreignKey: 'idProinfo', sourceKey: 'id',onDelete: 'CASCADE', onUpdate: 'CASCADE',})
Productinfo.hasOne(Products_index, { foreignKey: 'idProinfo', sourceKey: 'id' })

export default Productinfo;