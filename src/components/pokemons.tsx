import { useQuery } from "urql";
import { Pokemons } from "../types/pokemon";

const QueryPokemons = `
  query AllPokemons {
    pokemons {
      results {
        id
        name
        image
      }
    }
  }
`;

export function ExamplePokemons() {
  const [result, reexecuteQuery] = useQuery({
    query: QueryPokemons,
  });
  const { data, fetching, error } = result;
  const pokemons: Pokemons = data.pokemons.results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>Pokemons</h1>
      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
        );
      })}
    </div>
  );
}
