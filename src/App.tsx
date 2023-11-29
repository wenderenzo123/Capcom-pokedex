import { useEffect, useState } from 'react';
import './App.css';
import api from './service/api';

type PokemonType ={ 
  slot: number;
  type: { name: string; url: string; }
}

type Pokemon = {
  name: string;
  id: number;
  types: PokemonType[];
  url?: string;
  urlImage?: string;
}

type Request = {
  id: number;
  types: PokemonType[];
}

export function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getAllpokemons () {
      const response = await api.get('/pokemon');
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          if(pokemon.url) {
            const {id , types} = await getMoreInfo(pokemon.url)
          return {
            name: pokemon.name,
            id,
            types,
            url: pokemon.url,
            urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          }
        }
      }
      ))
      setPokemons(payloadPokemons);
    }
    getAllpokemons()
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const {id, types} = response.data;
    return { id, types }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemons</h1>
        <ul>
          {pokemons?.map((pokemon: Pokemon) => (
            <li key={pokemon.id}>
              <h3>{pokemon.name}</h3>
              <p>{pokemon.id}</p>
              <p>{pokemon.types[0].type.name}</p>
              <p>
                {pokemon.url}
              </p>
              <img src={pokemon.urlImage} alt={pokemon.name} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};
export default App;