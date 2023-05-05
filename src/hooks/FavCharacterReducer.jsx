export function FavCharacterReducer(favCharacter, action) {
  if (action.type === "save") {
    return [...favCharacter, action.character];
  } else if (action.type === "delete") {
    return favCharacter.filter(
      (favCharacter) => favCharacter.data.name !== action.character.data.name
    );
  }
}
