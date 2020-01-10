require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

const qry = knexInstance
    .from('amazong_products')
    .select('product_id', 'name', 'price', 'category')
    .where({ name: 'Point of view gun'})
    .first()
    .toQuery()

console.log(qry)