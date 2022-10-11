import { ExamplePokemons } from "./components/pokemons";
import { ExamplePosts } from "./components/posts";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://graphql-pokeapi.graphcdn.app/",
});

export default function App() {
  return (
    <Provider value={client}>
      <h1>Demo React Vite</h1>
      {/* <ExamplePosts /> */}
      <ExamplePokemons />
    </Provider>
  );
}
