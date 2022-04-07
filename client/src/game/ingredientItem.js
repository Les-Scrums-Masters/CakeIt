export default function IngredientItem(props) {
  return (
    <div className="">
      <img src="" className="" alt={props.name} />

      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.evolution}</p>
    </div>
  );
}
