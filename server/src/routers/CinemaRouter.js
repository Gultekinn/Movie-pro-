const router = require("express").Router()
const { GetCinema, GetCinemaById,PostCinema,  DeleteCinema,  UpdateCinema } = require("../controllers/Cinema.Controller")

router.get("/", GetCinema)
router.get('/:id', GetCinemaById)
router.post('/', PostCinema)
router.delete("/:id", DeleteCinema)
router.put("/:id", UpdateCinema)
module.exports = router