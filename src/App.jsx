import { useReducer, useState } from "react";
import { CharacterComponent } from "./components/CharacterComponent";
import { UseQuerySwapi } from "./hooks/UseQuerySwapi";
import { UseTheme, UseThemeUpdate } from "./service/themeContext";
import { FavCharacterReducer } from "./hooks/FavCharacterReducer";

function App() {
  const [favCharacter, dispatch] = useReducer(FavCharacterReducer, []);
  const [query, setQuery] = useState("");
  const { isLoading, error, data } = UseQuerySwapi(query);

  const randomPrefix = Math.floor(Math.random() * 900) + 100;

  const darkTheme = UseTheme();
  const toggleTheme = UseThemeUpdate();
  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };

  return (
    <div style={themeStyle}>
      <button onClick={toggleTheme}>Toggle</button>
      <h2>Amazing website</h2>
      {(favCharacter.length === 0 && null) ||
        favCharacter?.map((character, i) => (
          <CharacterComponent
            data={character.data}
            key={i}
            dispatch={dispatch}
            isType="delete"
          />
        ))}
      <p>
        Query: #{randomPrefix}-{query}
      </p>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

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
  );
}

export default App;
