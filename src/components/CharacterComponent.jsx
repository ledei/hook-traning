export function CharacterComponent({ data, dispatch, isType }) {
  return (
    <article className="character">
      <h3 className="character-name">{data.name}</h3>
      <p className="character-height">Height: {data.height}cm</p>
      <p className="character-weight">Weight: {data.mass}kg</p>
      <p className="character-eye">Eye color: {data.eye_color}</p>
      <button
        className="character-btn"
        onClick={() => dispatch({ type: isType, character: { data } })}>
        {isType}
      </button>
    </article>
  );
}
