import { Post } from '@app/domain/entities/post'
import { sequelize } from '@app/infra/database/mysql/sequelize/setup'
import { DataTypes, Optional } from 'sequelize'
import { Table, Model } from 'sequelize-typescript'
import UserModel from '@app/infra/database/mysql/sequelize/models/user-sequelize-model'

interface PostCreationAttributes extends Optional<Post, 'id'> {}

@Table
class PostModel extends Model<Post, PostCreationAttributes> {}

PostModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'post',
    timestamps: false,
    sequelize
})

PostModel.belongsTo(UserModel, { foreignKey: 'user_id', as: 'user' })

export default PostModel
