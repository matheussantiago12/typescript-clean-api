import { Knex } from 'knex'

const tableName = 'user'

export async function up (knex: Knex): Promise<any> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
    })
}

export async function down (knex: Knex): Promise<any> {
    return knex.schema.dropTable(tableName)
}
