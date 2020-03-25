import Sequelize, { DataTypes } from 'sequelize';
import {sequelize} from '../config/dbconfig';
import moment from 'moment';
// import Productinfo from './productInfo';
// import Categories from './category';
const Products_index = sequelize.define('products', {
    idProducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    old_price:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    rank: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    new: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    top: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    img_link: {
        type: Sequelize.TEXT,
        allowNull: false,
        // get() {
        //   return this.getDataValue('picture').toString('utf8'); // or whatever encoding is right
        // },
      },
      expired: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    fecha_añadido: {
        type: DataTypes.DATE,
        allowNull: false,
        //note here this is the guy that you are looking for                   
                     get() {
                           return moment(this.getDataValue('fecha_añadido')).format('DD/MM/YYYY h:mm: A');
                       }
                   },
    idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idProinfo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

    
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
},

);

export default Products_index;