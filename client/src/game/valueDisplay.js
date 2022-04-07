export default function ValueDisplay(props) {
  return (
    <div className="grow flex flex-col">

      <p>{props.value}</p>
      <p>{props.legend}</p>

    </div>
  );
}
