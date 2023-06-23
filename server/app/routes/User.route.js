const express = require('express')
const { userController } = require('../controllers/User.controller')
const store = require('../middlewares/multer')
const userValidation = require('../validations/User.validation')
const router = express.Router()

//get All
router.route('/').get(userController.getAll)
// GetById
router.route('/:id').get(userController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    shopValidation,
    shopController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    shopValidation,
    shopController.edit,
)
//delete
router.route('/:id').delete(userController.delete)
module.exports = router