import './App.css';
import useFecthCharacters from "./hooks/useFecthCharacters"


function App() {

  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

 //llamamos al hook "useFecthCharacters"
  const { name: namePokemon, img: imgPokemon } = useFecthCharacters(urlPokemon);
  const { name: nameRick, img: imgRick } = useFecthCharacters(urlRick);
  
  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{namePokemon}</p>
      <img src={imgPokemon} alt="Pokemon" />

      <h2>Personaje Rick and Morty</h2>
      <p>{nameRick}</p>
      <img src={imgRick} alt="Rick"/>
    </>
  );
}

export default App;
