const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id)
  res.json(User.toResponse(user))
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res
  .status(201)
  .json(User.toResponse(user))
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res
  .status(200)
  .json(User.toResponse(user));
})

router.route('/:id').delete(async (req, res) => {
  const exists = await usersService.remove(req.params.id);
  if(exists)
    res
    .status(200)
    .json('User has been deleted successfully');
  else{
    res
    .status(204)
    .json('User has already deleted');
  }
})

module.exports = router;
