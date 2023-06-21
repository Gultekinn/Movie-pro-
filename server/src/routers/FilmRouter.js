const router = require("express").Router()
const { GetFilm, GetFilmById, PostFilm, DeleteFilm, UpdateFilm } = require("../controllers/Film.Controller")

router.get("/", GetFilm)
router.get('/:id', GetFilmById)
router.post('/', PostFilm)
router.delete("/:id", DeleteFilm)
router.put("/:id", UpdateFilm)
module.exports = router