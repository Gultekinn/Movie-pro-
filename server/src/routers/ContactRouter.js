const router = require("express").Router()
const { GetContact, GetContactById, PostContact, DeleteContact, UpdateContact } = require("../controllers/Contact.Controller")

router.get("/", GetContact)
router.get('/:id', GetContactById)
router.post('/', PostContact)
router.delete("/:id", DeleteContact)
router.put("/:id", UpdateContact)
module.exports = router