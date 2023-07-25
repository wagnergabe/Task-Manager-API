const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
} 
const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}
const getTasks = (req, res) => {
    res.json({id:req.params.id})
}
const updateTasks = (req, res) => {
    res.send('update task')
}
const deleteTasks = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}