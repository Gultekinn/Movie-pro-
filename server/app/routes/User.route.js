const express = require('express')
const { userController } = require('../controllers/User.controller')
const store = require('../middlewares/multer')
const userValidation = require('../validations/User.validation')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

//get All
router.route('/').get(userController.getAll)
// GetById
router.route('/:id').get(userController.getById)

//Add
// router.post(
//     '/',
//     upload.single('image'),
//     userController.add,
// )

//edit
// router.put(
//     '/:id',
//     upload.single('image'),
//     userController.edit,
// )


//delete
router.route('/:id').delete(userController.delete)
module.exports = router