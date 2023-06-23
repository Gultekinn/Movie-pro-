const express = require('express')
const { contactController } = require('../controllers/Contact.controller')
const store = require('../middlewares/multer')
const contactValidation = require('../validations/Contact.validation')
const router = express.Router()

//get All
router.route('/contact').get(contactController.getAll)
// GetById
router.route('/:id').get(contactController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    contactValidation,
    contactController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    contactValidation,
    contactController.edit,
)
//delete
router.route('/:id').delete(contactController.delete)
module.exports = router