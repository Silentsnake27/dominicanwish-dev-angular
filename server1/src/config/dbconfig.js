import Sequelize from 'sequelize';
import {production} from './config';
  export const sequelize = new Sequelize(
   
    production
 );
