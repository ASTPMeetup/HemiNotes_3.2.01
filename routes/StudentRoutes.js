var express = require('express');
var router = express.Router();
var StudentController = require('../controllers/StudentController.js');

/*
 * GET
 */
router.get('/', StudentController.list);

/*
 * GET
 */
router.get('/:id', StudentController.show);

/*
 * POST
 */
router.post('/', StudentController.create);

/*
 * PUT
 */
router.put('/:id', StudentController.update);

/*
 * DELETE
 */
router.delete('/:id', StudentController.remove);

module.exports = router;
