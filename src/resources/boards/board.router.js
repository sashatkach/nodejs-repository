import express from 'express';
import boardService from './board.service.js';
import { validateColumn } from './board.validation.js';

const router = express.Router();

router.route('/').get(async (req, res) => {
  const board = await boardService.getAll();
  res.status(200).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.getById(req.params.id);
  if(board)
  {
    res.status(200).json(board)
  }
  else
  {
    res.status(404).json({message: 'board not found'});
  }
});

router.route('/').post(async (req, res) => {
  if(validateColumn(req))
  {
    const board = await boardService.create(req.body);
    res
    .status(201)
    .json(board)
  }
  else
  {
    res
    .status(400)
    .json({message: 'You have sent invalid params'});
  }
});

router.route('/:id').put(async (req, res) => {
  if(validateColumn(req))
  {
    const board = await boardService.update(req.params.id, req.body);
    if(board)
    {
      res
      .status(200)
      .json(board);
    }
    else
    {
      res
      .status(400)
      .json({message: 'You have sent invalid id'});
    }
  }
  else
  {
    res
    .status(400)
    .json({message: 'You have sent invalid params'});
  }
})

router.route('/:id').delete(async (req, res) => {
  const exists = await boardService.remove(req.params.id);
  if(exists)
  {
    res
    .status(200)
    .json({ message: 'board has been deleted successfully'});
  }
  else
  {
    res
    .status(404)
    .json({ message: 'board not found'});
  }
})

export { router };
