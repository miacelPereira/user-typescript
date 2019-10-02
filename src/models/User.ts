import sequelize from '../config/database';
import { DataTypes, Model } from 'sequelize';

class User extends Model {
  public id: number;
  public name: string;
  public surname: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  surname: DataTypes.STRING
}, {
  sequelize,
  tableName: 'tb_user',
})

User.sync()

export default User