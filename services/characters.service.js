import model from '../models/characters.model.js'

const getCharacters = async () => {
    const characters = await model.getCharacters()
    return characters
}

const getCharactersById = async (id) => {
    const character = await model.getCharactersById(id)
    return character
}

const getCharactersByGender = async (gender) => {
    const charactersByGender = await model.getCharactersByGender(gender)
    return charactersByGender
}

export default {
    getCharacters,
    getCharactersById,
    getCharactersByGender
}