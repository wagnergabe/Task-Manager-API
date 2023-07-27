const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }catch(error){
        res.status(500).json({ msg: "Could Not Find Task" })
    }
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getTasks = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTasks = (req, res) => {
  res.send("update task");
};
const deleteTasks = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
