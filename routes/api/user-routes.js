const router = require('express').Router();
const {
  getAllUser,
  getUser,
  ById,
  createUser,
  updateUser,
  deleteUser

} = require('../../controllers/User-controller');

// /api/Users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser
)
  .delete(deleteUser
);

module.exports = router;