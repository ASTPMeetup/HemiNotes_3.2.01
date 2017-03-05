var express = require('express');
var router = express.Router();
var FeedController = require('../controllers/FeedController.js');

/*
 * GET
 */
router.get('/', FeedController.list);

/*
 * GET
 */
router.get('/:id', FeedController.show);

/*
 * POST
 */
router.post('/', FeedController.create);

/*
 * PUT
 */
router.put('/:id', FeedController.update);

/*
 * DELETE
 */
router.delete('/:id', FeedController.remove);

module.exports = router;
