import { useState, useEffect } from 'react';

//vamos a crear nuestro propio hook
const useFecthCharacters =(urlPokemon,urlRick)=>{ //pasamos las API como argumentos al custom hook
    const [name, setName] = useState("");
    const [img, setImg] = useState("");

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
        
                if (url.includes("pokeapi")) {
                    setName(result.name); 
                    setImg(result.sprites.front_default); 
                } else if (url.includes("rickandmortyapi")) {
                    setName(result.name); 
                    setImg(result.image); 
                }
            } catch (err) {
                console.error("Error", err);
            }
        };
    
        if (urlPokemon || urlRick) {
            fetchApi();
        }
    }, [urlPokemon, urlRick]);

    return { name, img };
};

export default useFecthCharacters;





