const Task = require("../models/Task");
const asyncWrapper = require('../middleware/async')


const getAllTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
});

const createTasks = asyncWrapper(async(req, res) => {
  
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  })


const getTask = asyncWrapper(async (req, res) => {
    
        const { id:taskID } = req.params 
        const task = await Task.findOne({ _id:taskID })
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({ task })
});

const updateTasks = asyncWrapper(async (req, res) => {
    const {id: taskID} = req.params

    const task = await Task.findOneAndModify({_id:taskID,}, req.body, {
        new:true, runValidators: true
    })

    if (!task) {
        return res.status(404).json({ msg: 'No task with id :' + taskID})
    }
});

const deleteTasks = async (req, res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({msg: `No task with if : ${taskID}`})
        }
    res.status(200).json({task})
    }catch(error) {
        res.status(500).json({ msg: error })
    }
 
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
};
