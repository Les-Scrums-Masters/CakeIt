export default function Panel(props) {
  const bgColor = "bg-" + props.color;
  const textColor = "bg-" + props.color;

  return (
    <div className="bg-white ">
      <h3 className={textColor}>{props.title}</h3>

      {props.children}
    </div>
  );
}
