import { Sequelize } from 'sequelize'
import config from '@app/infra/database/mysql/config'

export const sequelize = new Sequelize(config.DB!, config.USER!, config.PASSWORD!, {
    host: config.HOST,
    port: Number(config.PORT!),
    dialect: 'mysql',
    logging: false
})
