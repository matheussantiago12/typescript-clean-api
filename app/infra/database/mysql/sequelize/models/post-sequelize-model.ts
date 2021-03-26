import Post from '../../../../../domain/entities/post'
import { sequelize } from '../setup'
import { DataTypes, Optional } from 'sequelize'
import { Table, Model } from 'sequelize-typescript'
import UserModel from './user-sequelize-model'

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

PostModel.belongsTo(UserModel, { foreignKey: 'user_id', foreignKeyConstraint: true })

// export const getPost = async () => {
//     try {
//         const post = await PostModel.findByPk(1)
//         console.log(post?.getDataValue('title'))
//     } catch (error) {
//         console.log(error)
//     }
// }

export default PostModel
