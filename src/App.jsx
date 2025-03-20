import './App.css';
import useFecthCharacters from "./hooks/useFecthCharacters"


function App() {

  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

 //llamamos al hook "useFecthCharacters"
  const { api: apiPokemon} = useFecthCharacters(urlPokemon, null);
  const { api: apiRick} = useFecthCharacters(null, urlRick);
  
  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{apiPokemon.name}</p>
      <img src={apiPokemon.img} alt="Pokemon" />

      <h2>Personaje Rick and Morty</h2>
      <p>{apiRick.name}</p>
      <img src={apiRick.img } alt="Rick"/>
    </>
  );
}

export default App;
