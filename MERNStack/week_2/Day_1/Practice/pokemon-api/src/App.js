import './App.css';
import { useState } from 'react';
function App() {
  const [pokemons,setPokemons]=useState([])
  const fetchPokemon=()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((serverResponse) => serverResponse.json()) 
          .then((jsonResponse) => setPokemons(jsonResponse))
          .catch((error) => console.log(error));
    }
  return (
    <div className="App">
    <button onClick={fetchPokemon}>fetchPokemon</button>
    <hr/>
    {pokemons.map((onePokemon,idx)=>{
      return(
        <div key={idx}>
          <p>{onePokemon.name}</p>
        </div>
      );
    })}
  </div>
  );
}
export default App;
