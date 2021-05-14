const router = require('express').Router();
const columnService = require('./column.service');
const { validateColumn } = require('./column.validation');

router.route('/').get(async (req, res) => {
  const columns = await columnService.getAll();
  res.status(200).json(columns);
});

router.route('/:id').get(async (req, res) => {
  const column = await columnService.getById(req.params.id);
  if(column)
  {
    res.status(200).json(column)
  }
  else
  {
    res.status(404).json({message: 'column not found'});
  }
});

router.route('/').post(async (req, res) => {
  if(validateColumn(req))
  {
    const column = await columnService.create(req.body);
    res
    .status(201)
    .json(column)
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
    const column = await columnService.update(req.params.id, req.body);
    if(column)
    {
      res
      .status(200)
      .json(column);
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
  const exists = await columnService.remove(req.params.id);
  if(exists)
  {
    res
    .status(200)
    .json({ message: 'column has been deleted successfully'});
  }
  else
  {
    res
    .status(404)
    .json({ message: 'column not found'});
  }
})

module.exports = router;
