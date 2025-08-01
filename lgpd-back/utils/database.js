import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'teste',
  'admin',
  'admin',
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
      } 
     }
);

export default sequelize;