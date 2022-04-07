export default function Panel(props) {
  const borderColor = "border-" + props.color;
  const textColor = "text-" + props.color;

  return (
    <article
      className={
        "flex flex-col w-full rounded-lg border-2 bg-white lg:w-80 " +
        borderColor
      }
    >
      <header className={"border-b-2 px-5 py-4 " + borderColor}>
        <h3 className={"text-xl font-bold " + textColor}>{props.title}</h3>
      </header>

      <div className="max-h-full overflow-x-auto">{props.children}</div>
    </article>
  );
}
