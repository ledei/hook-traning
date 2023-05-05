export function CharacterComponent({ data, dispatch, isType }) {
  return (
    <article>
      <h3>{data.name}</h3>
      <p>Height: {data.height}cm</p>
      <p>Weight: {data.mass}kg</p>
      <p>Eye color: {data.eye_color}</p>
      <button onClick={() => dispatch({ type: isType, character: { data } })}>
        {isType}
      </button>
    </article>
  );
}
