import config from './app/infra/database/mysql/config'

export default {
    development: {
        client: 'mysql2',
        connection: {
            database: config.DB,
            user: config.USER,
            password: config.PASSWORD,
            port: Number(config.PORT)
        },
        migrations: {
            directory: 'app/infra/database/mysql/knex/migrations'
        }
    }
}
