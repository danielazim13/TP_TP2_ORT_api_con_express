const fetchCharacters = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/people/")
        const data = await response.json()

        const characters = data.results

        return characters  
    } catch (error){
        console.log(`Error fetching characters: ${error}`)
        throw error
    }
}

const getCharacters = async () => {
    try {    
        const characters = await fetchCharacters()
        if(characters.length <= 0){
            return 'No hay personajes en la lista.'
        } else {
            return characters
        }
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener los personajes')
    }
}

const getCharactersById = async (id) => {
    try {    
        const characters = await fetchCharacters()
        const character = characters.find((character) => {
            const characterUrlParts = character.url.split('/');
            const characterId = characterUrlParts[characterUrlParts.length - 2];
            return characterId === id;
        });
        return character;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener el personaje');
    }
}

const getCharactersByGender = async (gender) => {
    try {    
        const characters = await fetchCharacters()
        const charactersByGender = characters.filter(character => character.gender.toLowerCase() == gender.toLowerCase())
        
        if(charactersByGender.length <= 0){
            return 'No hay personajes en la lista.'
        } else {
            return charactersByGender
        }
    } catch (error) {
        console.log(error)
        throw new Error('Error al obtener los personajes')
    }
}

export default {
    getCharacters,
    getCharactersById,
    getCharactersByGender
}