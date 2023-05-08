import { useReducer, useState } from "react";
import { CharacterComponent } from "./components/CharacterComponent";
import { UseQuerySwapi } from "./hooks/UseQuerySwapi";
import { UseTheme, UseThemeUpdate } from "./service/themeContext";
import { FavCharacterReducer } from "./hooks/FavCharacterReducer";

function App() {
  const [favCharacter, dispatch] = useReducer(FavCharacterReducer, []);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = UseQuerySwapi(query, page);

  const randomPrefix = Math.floor(Math.random() * 900) + 100;

  const toggleTheme = UseThemeUpdate();

  const incPage = () => {
    if (page === 9) return false;
    setPage(page + 1);
  };

  const decPage = () => {
    if (page === 1) return false;
    setPage(page - 1);
  };

  return (
    <div style={UseTheme()}>
      <button onClick={toggleTheme}>Toggle</button>
      <h2>Amazing website</h2>
      <h3>{favCharacter.length === 0 ? null : "Your favorit character"}</h3>
      <div className="container-fav">
        {(favCharacter.length === 0 && null) ||
          favCharacter?.map((character, i) => (
            <CharacterComponent
              data={character.data}
              key={i}
              dispatch={dispatch}
              isType="delete"
            />
          ))}
      </div>
      <p>
        Query: #{randomPrefix}-{query}
      </p>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="container-character">
        {(error && <p>404 could not found</p>) ||
          (isLoading && <p>loading...</p>) ||
          data?.map((character, i) => (
            <CharacterComponent
              data={character}
              key={i}
              dispatch={dispatch}
              isType="save"
            />
          ))}
      </div>
      {page === 1 ? null : <button onClick={decPage}>Prev page </button>}
      <p>{page}</p>
      {page === 9 ? null : <button onClick={incPage}>Next page</button>}
    </div>
  );
}

export default App;
