const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const boardService = require('../boards/board.service');
const { validateColumn } = require('./task.validation');

router.route('/').get(async (req, res) => {
  const columns = await taskService.getAll(req.params.boardId);
  res.status(200).json(columns);
});

router.route('/:taskId').get(async (req, res) => {
  const task = await taskService.getById(req.params.taskId, req.params.boardId);
  if(task)
  {
    res.status(200).json(task)
  }
  else
  {
    res.status(404).json({message: 'task not found'});
  }
});

router.route('/').post(async (req, res) => {
  if(validateColumn(req))
  {
    const board = await boardService.getById(req.params.boardId);
    if(board){
      const task = await taskService.create(req.params.boardId, req.body);
      if(task){
        return res
        .status(201)
        .json(task)
      }
    }
  }
  return res
    .status(400)
    .json({message: 'You have sent invalid params'});
});

router.route('/:taskId').put(async (req, res) => {
  if(validateColumn(req))
  {
    const task = await taskService.update(req.params.taskId, req.params.boardId, req.body);
    if(task)
    {
      return res
      .status(200)
      .json(task);
    }
  }
  return res
  .status(400)
  .json({message: 'You have sent invalid params'});
})

router.route('/:taskId').delete(async (req, res) => {
  const exists = await taskService.remove(req.params.taskId);
  if(exists)
  {
    res
    .status(200)
    .json({ message: 'Task has been deleted successfully'});
  }
  else
  {
    res
    .status(404)
    .json({ message: 'Task not found'});
  }
})

module.exports = router;
