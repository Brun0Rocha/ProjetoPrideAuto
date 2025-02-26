const { getAnuncios, getAnuncioById, createNewAnuncio, deleteAnuncio, patchAnuncio} = require('../services/anuncios')

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

function createNewAnuncioController(req, res) {
    try {
        const anuncio = req.body
        if(anuncio) {
            if (anuncio.tipoVeiculo === undefined || anuncio.marca === null || anuncio.modelo === undefined || anuncio.anoVeiculo === undefined || anuncio.valor === undefined) {
                res.status(422)
                res.send('Preencha todos os campos!')
            } else {
                createNewAnuncio(anuncio)
                res.send('Anuncio criado com sucesso!')
            }
        } 

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteAnuncioController(req, res) {
    try {
        const id = req.params.id
        if(id) {
            deleteAnuncio(id)
            res.send(`O anuncio com ID: ${id} foi deletado com sucesso!`)
        } else {
            res.status(422)
            res.send('ID inexistente ou inválido!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchAnuncioController(req, res) {
    try {
        const id = req.params.id
        if(id) {
            const anuncio = req.body
            res.send('O anuncio foi atualizado com sucesso!')
            patchAnuncio(id, anuncio)
        } else {
            res.status(422)
            res.send('ID inexistente ou inválido!')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getAnunciosController,
    getAnuncioByIdController,
    createNewAnuncioController,
    deleteAnuncioController,
    patchAnuncioController

}