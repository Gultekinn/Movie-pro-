const express = require('express')
const { filmController } = require('../controllers/Film.controller')
const store = require('../middlewares/multer')
const filmValidation = require('../validations/Film.validation')
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
router.get('/', filmController.getAll)
// GetById
router.route('/:id').get(filmController.getById)
//Add
router.post(
    '/',
    upload.single('image'),
    filmController.add,
)

//edit
router.put(
    '/:id',
    upload.single('image'),
   filmController.edit,
)

//delete
router.route('/:id').delete(filmController.delete)
module.exports = router