export default function NewsItem(props) {

    return (
        <article className="pt-4 pb-2 px-5">
            <legend className="text-sm font-light">{props.date}</legend>
            <h6 className="font-bold text-md leading-6 text-info">{props.title}</h6> 
        </article>
    );

}