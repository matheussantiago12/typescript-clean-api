import User from '@app/domain/entities/user'
import { sequelize } from '@app/infra/database/mysql/sequelize/setup'
import { DataTypes, Optional } from 'sequelize'
import { Table, Model } from 'sequelize-typescript'

interface UserCreationAttributes extends Optional<User, 'id'> {}

@Table
class UserModel extends Model<User, UserCreationAttributes> {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false,
    sequelize
})

export default UserModel
