import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('images', function (table) {
    table.uuid('id').primary() // Auto increment id
    table.string('name').notNullable() // Nome da imagem
    table.date('upload_date').notNullable() // Data do upload
    table.text('tags') // Tags da imagem
    table.string('image_path').notNullable() // Caminho ou URL da imagem
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('images')
}
