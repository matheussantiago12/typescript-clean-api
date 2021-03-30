import mysql from 'mysql2'
import config from '@app/infra/database/mysql/sequelize/config'

export const connection = mysql.createConnection({
    host: config.HOST,
    port: parseInt(config.PORT!),
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
})
