import model from '../models/characters.model.js'

const getCharacters = (async (req, res) => {
    try {
        const characters = model.getCharacters()
        return characters
    } catch (error) {
        console.log(error);
    }
})

export default {
    getCharacters,
}