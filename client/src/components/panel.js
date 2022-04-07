export default function Panel(props) {
  const borderColor = "border-" + props.color;
  const textColor = "text-" + props.color;

  return (
    <article
      className={
        "flex w-full flex-col rounded-lg border-2 bg-white lg:w-80 " +
        borderColor
      }
    >
      <header className="p-5">
        <h3 className={"font-3xl font-bold " + textColor}>{props.title}</h3>
      </header>

      <div className="grow">{props.children}</div>
    </article>
  );
}
