export default function NewsItem(props) {
  return (
    <article className="px-5 pt-4 pb-2">
      <legend className="text-sm font-light">{props.date}</legend>
      <h6 className="text-md font-bold leading-6 text-info">{props.title}</h6>
    </article>
  );
}
