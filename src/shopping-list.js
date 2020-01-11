require('dotenv').config()
const knex = require('knex')
const ShoppingListService = require('./shopping-list-service')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

ShoppingListService.getAllItems(knexInstance)
    .then(items => console.log(items))
    .then(() => 
        ShoppingListService.insertItem(knexInstance, {
            name: 'New title',
            date_added: new Date(),
            price: 'New Price',
            category: 'New Category'
        })
    )
    .then(newItem => {
        console.log(newItem)
        return ShoppingListService.updateItem(
            knexInstance, 
            newArticle.id,
            { name: 'Updated title' }
        ).then(() => ShoppingListService.getById(knexInstance, newItem.id))
    })
    .then(items => {
        console.log(items)
        return ShoppingListService.deleteItem(knexInstance, items.id)
    })
console.log(ShoppingListService.getAllItems())