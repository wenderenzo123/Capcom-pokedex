import { useEffect, useState } from 'react';
import './App.css';
import api from './service/api';

type PokemonType = {
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
    async function getAllpokemons() {
      const response = await api.get('/pokemon');
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          if (pokemon.url) {
            const { id, types } = await getMoreInfo(pokemon.url)
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

  enum PokemonTypes {
    normal = 'normal',
    fighting = 'fighting',
    flying = 'flying',
    poison = 'poison',
    ground = 'ground',
    rock = 'rock',
    bug = 'bug',
    ghost = 'ghost',
    steel = 'steel',
    fire = 'fire',
    water = 'water',
    grass = 'grass',
    electric = 'electric',
    psychic = 'psychic',
    ice = 'ice',
    dragon = 'dragon',
    dark = 'dark',
    fairy = 'fairy',
    unknown = 'unknown',
    shadow = 'shadow'
  }

  function getTypeColor(type: string): string {
    switch (type) {
      case PokemonTypes.normal:
        return 'bg-gray-300';
      case PokemonTypes.fighting:
        return 'bg-red-600';
      case PokemonTypes.flying:
        return 'bg-blue-400';
      case PokemonTypes.poison:
        return 'bg-purple-600';
      case PokemonTypes.ground:
        return 'bg-yellow-600';
      case PokemonTypes.rock:
        return 'bg-yellow-400';
      case PokemonTypes.bug:
        return 'bg-green-500';
      case PokemonTypes.ghost:
        return 'bg-purple-700';
      case PokemonTypes.steel:
        return 'bg-gray-400';
      case PokemonTypes.fire:
        return 'bg-red-500';
      case PokemonTypes.water:
        return 'bg-blue-500';
      case PokemonTypes.grass:
        return 'bg-green-400';
      case PokemonTypes.electric:
        return 'bg-yellow-300';
      case PokemonTypes.psychic:
        return 'bg-pink-400';
      case PokemonTypes.ice:
        return 'bg-blue-200';
      case PokemonTypes.dragon:
        return 'bg-indigo-600';
      case PokemonTypes.dark:
        return 'bg-gray-900';
      case PokemonTypes.fairy:
        return 'bg-pink-300';
      case PokemonTypes.unknown:
        return 'bg-gray-500';
      case PokemonTypes.shadow:
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  }

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types }
  }
  return (
    <div className="flex flex-col w-full p-12 gap-2" style={{
      backgroundImage: `url('bg-pokemon.jpg')`
      , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex justify-between items-center bg-gray-700 p-4 rounded-md">
        <h1 className="text-3xl font-semibold text-center text-white"
        >Pokemons API</h1>
        <div className="">
          <input type="text" placeholder="Pesquisar" className="px-4 py-2 rounded-md" />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {pokemons?.map((pokemon: Pokemon) => (
          <li key={pokemon.id} className="bg-slate-700 rounded-md p-4 text-white hover:bg-slate-400 transition duration-300 ease-in-out transform hover:scale-105 max-w-[250px]">
            <div className="flex flex-row justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{pokemon.name}</h3>
                <p className="text-gray-300"># {pokemon.id}</p>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p className={`text-white ${getTypeColor(pokemon.types[0]?.type.name)} px-2 py-1 rounded-md`}>
                  {pokemon.types[0]?.type.name}
                </p>
              </div>
            </div>
            <img src={pokemon.urlImage} alt={pokemon.name} className="mt-2 w-full object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;