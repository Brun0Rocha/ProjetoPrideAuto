const { getAnuncios, getAnuncioById, getAnunciosFiltradosMarca} = require('../services/anuncios')

function getAnunciosController(req, res) {
    try {
        const search = req.query
        if(search){
            const anuncios = getAnuncios(search)
            res.json(anuncios)
        } else {
            const anuncios = getAnuncios()
            res.json(anuncios)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getAnuncioByIdController(req, res) {
    try {
        const id = req.params.id

        if(id) {
            const anuncio = getAnuncioById(id)
            res.json(anuncio)
        } else {
            res.status(422)
            res.send('Id não informado')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getAnunciosFiltradosController(req, res) {
    const marca = req.query.marca
    try {
        const anuncios = getAnunciosFiltradosMarca(marca)
        res.send(anuncios)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getAnunciosController,
    getAnuncioByIdController,
    getAnunciosFiltradosController

}