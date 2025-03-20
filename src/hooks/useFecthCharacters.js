import { useState, useEffect } from 'react';

//vamos a crear nuestro propio hook
const useFecthCharacters =(urlPokemon,urlRick)=>{ //pasamos las API como argumentos al custom hook{
    const [api, setApi] = useState({ name: "", img: "" });


    useEffect (()=>{
        const fetchApi = async () => {
            try {

                let url;// qué URL utilizar poke o rick
                if (urlPokemon) {
                    url = urlPokemon; 
                } else if (urlRick) {
                    url = urlRick; 
                }
        
                const response = await fetch(url);
                const result = await response.json();
        
                if (url.includes('pokeapi')) {
                    setApi({ name: result.name, img: result.sprites.front_default });
                } else if (url.includes('rickandmortyapi')) {
                    setApi({ name: result.name, img: result.image });
                }
                } catch (err) {
                console.error("Error fetching data: ", err);
            }
            
        }
    
            if (urlPokemon || urlRick) {
                fetchApi();
            }
            }, [urlPokemon, urlRick]);
        
            return { api};
};

export default useFecthCharacters;



