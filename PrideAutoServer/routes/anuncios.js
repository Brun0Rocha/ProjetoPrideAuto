const { Router } = require('express')
const { getAnunciosController, getAnuncioByIdController, createNewAnuncioController, deleteAnuncioController, patchAnuncioController } = require('../controllers/anuncios')

const router = Router()

router.get('/', getAnunciosController)
router.get('/:id', getAnuncioByIdController)
router.post('/', createNewAnuncioController)
router.delete('/:id', deleteAnuncioController)
router.patch('/:id', patchAnuncioController)



module.exports = router
