import { connection } from '@app/infra/database/mysql/sequelize/migrations'

export class CreateUser {
    static up () {
        connection.query(`
            CREATE TABLE user (
                id int NOT NULL AUTO_INCREMENT,
                name varchar(45) DEFAULT NULL,
                email varchar(45) DEFAULT NULL,
                password varchar(45) DEFAULT NULL,
                PRIMARY KEY (id)
            )
        `, error => {
            if (error) throw error
            console.log('User table created!')
        })
    }
}
