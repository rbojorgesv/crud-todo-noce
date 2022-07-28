const { createTask, getAllTasks, getTaskById, deleteTask, editTask } = require('./todos.controllers')


const getAll = (req, res) => {
    const data = getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = getTaskById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteTask(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

const create = (req, res) => {
    const data = req.body
    if (data.title && data.description && data.finish && data.deadline) {
        const response = createTask(data)
        res.status(201).json(response)
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.title && data.description && data.finish && data.deadline) {
        const response = editTask(id, data)
        res.status(201).json({ message: "User edited succesfully", data: response })
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    update, create
}
