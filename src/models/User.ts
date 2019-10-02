import sequelize from '../config/database';
import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {
  public name: string;
  public surname: string;
}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  } ,
  surname:{
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'tb_user',
})

User.sync()

export default User