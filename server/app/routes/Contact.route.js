const express = require('express')
const { contactController } = require('../controllers/Contact.controller')
const store = require('../middlewares/multer')
const contactValidation = require('../validations/Contact.validation')
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
router.get('/', contactController.getAll)
// GetById
router.route('/:id').get(contactController.getById)
//Add
router.post(
    '/',
    upload.single('image'),
    contactController.add,
)

//edit
router.put(
    '/:id',
    upload.single('image'),
    contactController.edit,
)

//delete
router.route('/:id').delete(contactController.delete)
module.exports = router