const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { validateUser } = require('./user.validation');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  if(user)
  {
    res.status(200).json(User.toResponse(user))
  }
  else
  {
    res.status(404).json({message: 'User not found'});
  }
});

router.route('/').post(async (req, res) => {
  if(validateUser(req))
  {
    const user = await usersService.create(req.body);
    res
    .status(201)
    .json(User.toResponse(user))
  }
  else
  {
    res
    .status(400)
    .json({message: 'You have sent invalid params'});
  }
});

router.route('/:id').put(async (req, res) => {
  if(validateUser(req))
  {
    const user = await usersService.update(req.params.id, req.body);
    if(user)
    {
      res
      .status(200)
      .json(User.toResponse(user));
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
  const exists = await usersService.remove(req.params.id);
  if(exists)
  {
    res
    .status(200)
    .json({ message: 'User has been deleted successfully'});
  }
  else
  {
    res
    .status(404)
    .json({ message: 'User not found'});
  }
})

module.exports = router;
