const express = require('express')
const { cinemaController } = require('../controllers/Cinema.controller')
const store = require('../middlewares/multer')
const cinemaValidation = require('../validations/Cinema.validation')
const router = express.Router()

//get All
router.route('/cinema').get(cinemaController.getAll)
// GetById
router.route('/:id').get(cinemaController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    cinemaValidation,
    cinemaController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    cinemaValidation,
    cinemaController.edit,
)
//delete
router.route('/:id').delete(contactController.delete)