const express = require('express')
const { cinemaController } = require('../controllers/Cinema.controller')
const store = require('../middlewares/multer')
const cinemaValidation = require('../validations/Cinema.validation')
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
router.get('/', cinemaController.getAll)
// GetById
router.route('/:id').get(cinemaController.getById)
//Add
router.post(
    '/',
    upload.single('image'),
    cinemaController.add,
)

//edit
router.put(
    '/:id',
    upload.single('image'),
    cinemaController.edit,
)

//delete
router.route('/:id').delete(cinemaController.delete)
module.exports = router