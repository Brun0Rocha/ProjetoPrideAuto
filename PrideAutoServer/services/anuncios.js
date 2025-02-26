const { randomUUID } = require('crypto')
const fs = require('fs')
const anunciosJson = JSON.parse(fs.readFileSync('db.json'))

function getAnuncios(search) {
    return anunciosFiltrados = anunciosJson.filter(anuncio => {
        if (search) {
            let matches = true
            if (search.tipoVeiculo) {
                matches = matches && anuncio.tipoVeiculo.includes(search.tipoVeiculo)
            }
            if (search.marca) {
                matches = matches && anuncio.marca.includes(search.marca)
            } 
            if (search.modelo) {
                matches = matches && anuncio.modelo.includes(search.modelo)
            }
            if (search.anoVeiculoDe) {
                matches = matches && anuncio.anoVeiculo >= search.anoVeiculoDe
            }
            if (search.anoVeiculoAte) {
                matches = matches && anuncio.anoVeiculo <= search.anoVeiculoAte
            }
            if (search.valorDe) {
                matches = matches && anuncio.valor >= search.valorDe
            }
            if (search.valorAte) {
                matches = matches && anuncio.valor <= search.valorAte
            }
            
            return matches
        }

        return true
    })
      
    
}

function getAnuncioById(id) {
    const anuncios = JSON.parse(fs.readFileSync('db.json'))
    const anuncio = anuncios.filter(anuncio => anuncio.id === id)

    return anuncio
}

function createNewAnuncio(anuncio) {
    
    anuncio.id = randomUUID()
    
    const anuncios = anunciosJson
    const newAnuncios = [...anuncios, anuncio]
    fs.writeFileSync('db.json', JSON.stringify(newAnuncios)) 
    
}

function deleteAnuncio(id) {
    const anuncios = anunciosJson
    const newListAnuncios = anuncios.filter(anuncio => anuncio.id !== id)
    fs.writeFileSync('db.json', JSON.stringify(newListAnuncios))
        
}

function patchAnuncio(id, anuncio) {
    let anuncios = anunciosJson
    const AnuncioModificado = anuncios.filter(anuncio => anuncio.id === id)
    const conteudoModificado = { ...AnuncioModificado, ...anuncio}

    anuncios[AnuncioModificado] = conteudoModificado
    fs.writeFileSync('db.json', JSON.stringify(anuncios))
}

module.exports = {
    getAnuncios,
    getAnuncioById,
    createNewAnuncio,
    deleteAnuncio,
    patchAnuncio

}