import { Sequelize } from 'sequelize'
import config from '../config'

export const sequelize = new Sequelize(config.DB!, config.USER!, config.PASSWORD!, {
    host: config.HOST,
    dialect: 'mysql'
})
