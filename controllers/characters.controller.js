import services from '../services/characters.service.js'

const getCharacters = async (req, res) => {
    try {
        const characters = await services.getCharacters()
        res.send(characters)
    } catch (error) {
        console.log(error);
    }
}

const getCharactersById = async (req, res) => {
    try {
        const { id } = req.params
        const character = await services.getCharactersById(id)
        res.send(character)
    } catch (error) {
        console.log(error);
    }
}

const getCharactersByGender = async (req, res) => {
    try {
        const { gender } = req.params
        const charactersByGender = await services.getCharactersByGender(gender)
        res.send(charactersByGender)
    } catch (error) {
        console.log(error);
    }
}

export default {
    getCharacters,
    getCharactersById,
    getCharactersByGender
}
