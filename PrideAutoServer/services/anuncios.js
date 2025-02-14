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
            if (search.anoVeiculo) {
                matches = matches && anuncio.anoVeiculo.includes(search.ano)
            }
            if (search.anoModelo) {
                matches = matches && anuncio.anoModelo.includes(search.ano)
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

function getAnunciosFiltradosMarca(marca) {
    const anuncios = anunciosJson
    const anunciosFiltrados = anuncios.filter(anuncio => anuncio.marca === marca)

    if(marca) {
        return anunciosFiltrados
    } else {
        return anuncios
    }
}

module.exports = {
    getAnuncios,
    getAnuncioById,
    getAnunciosFiltradosMarca

}