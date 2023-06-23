const express = require('express')
const { filmController } = require('../controllers/Film.controller')
const store = require('../middlewares/multer')
const filmValidation = require('../validations/Film.validation')
const router = express.Router()

//get All
router.route('/film').get(filmController.getAll)
// GetById
router.route('/:id').get(filmController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    filmValidation,
    filmController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    filmValidation,
    filmController.edit,
)
//delete
router.route('/:id').delete(filmController.delete)
module.exports = router