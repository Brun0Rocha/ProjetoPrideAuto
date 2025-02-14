const { Router } = require('express')
const { getAnunciosController, getAnuncioByIdController, getAnunciosFiltradosController } = require('../controllers/anuncios')

const router = Router()

router.get('/', getAnunciosController)
router.get('/:id', getAnuncioByIdController)
// router.get('/search', getAnunciosFiltradosController)


module.exports = router
