import { connection } from '@app/infra/database/mysql/sequelize/migrations'

export class CreatePost {
    static up () {
        connection.query(`
            CREATE TABLE post (
                id int NOT NULL AUTO_INCREMENT,
                title varchar(45) DEFAULT NULL,
                content varchar(45) DEFAULT NULL,
                user_id int NOT NULL,
                PRIMARY KEY (id),
                KEY fk_post_1_idx (user_id),
                CONSTRAINT fk_post_1 FOREIGN KEY (user_id) REFERENCES user (id)
            )
        `, error => {
            if (error) throw error
            console.log('Post table created!')
        })
    }
}
