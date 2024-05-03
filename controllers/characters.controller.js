import services from '../services/characters.service.js'

async function getCharacters (req, res) {
    try {
        const characters = await services.getCharacters()
        res.send(characters)
    } catch (error) {
        console.log(error);
    }
}

export default {
    getCharacters,
}
