import {DataTypes, Model} from 'sequelize';
import sequelize from '../utils/database.js';

const Evaluation = sequelize.define('Evaluation', {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
  },
    concept:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  underscored: true,
});
export default Evaluation;