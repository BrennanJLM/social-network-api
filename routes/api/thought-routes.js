const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

// /api/comments/<userId>
router.route('/:userId').post(addThought);

// /api/comments/<userId>/<commentId>
router
  .route('/:userId/:commentId')
  .put(addThought)
  .delete(removeThought);

// /api/comments/<userId>/<commentId>/<replyId>
router.route('/:userId/:commentId/:replyId').delete(removeThought);

module.exports = router;
