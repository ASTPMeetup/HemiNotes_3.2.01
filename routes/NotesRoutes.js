var express = require('express');
var router = express.Router();
var NotesController = require('../controllers/NotesController.js');

/*
 * GET
 */
router.get('/', NotesController.list);

/*
 * GET
 */
router.get('/:id', NotesController.show);

/*
 * POST
 */
router.post('/', NotesController.create);

/*
 * PUT
 */
router.put('/:id', NotesController.update);

/*
 * DELETE
 */
router.delete('/:id', NotesController.remove);

module.exports = router;
