async function fetchCharacters(){
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

async function getCharacters() {
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

export default {
    getCharacters,
}