import model from '../models/characters.model.js'

const getCharacters = () => {
    const characters = model.getCharacters()
    return characters
}

const getCharactersById = (id) => {
    const character = model.getCharactersById(id)
    return character
}

export default {
    getCharacters,
    getCharactersById
}