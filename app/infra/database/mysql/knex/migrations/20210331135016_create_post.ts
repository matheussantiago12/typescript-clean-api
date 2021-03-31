import { table } from 'console'
import { Knex } from 'knex'

const tableName = 'post'

export async function up (knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary()
        table.string('title').notNullable()
        table.text('content').notNullable()
        table.integer('user_id').unsigned().references('id').inTable('user').notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName)
}
