const router = require('express').Router()
const httpTodo = require('./todos.http')

router.route('/TodoDB')
    .get(httpTodo.getAll)
   
router.route('/todoDB/:id')
    .get(httpTodo.getById)
    .put(httpTodo.update)
    .delete(httpTodo.deleteById)

module.exports = {
    router
}

