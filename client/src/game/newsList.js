import Panel from "../components/panel";
import NewsItem from "./newsItem";

export default function NewsList(props) {

  let news = [
    {"name": "Incendie dans le champs de beurre de Kintzheim : un des plus grand sites français détruit", "date": "decembez edizzeb"},
    {"name": " Dezudbezui OBDHAb za doZIUBE", "date": "octobre 20"},
    {"name": "DZAnind apppppp", "date": "janvier 33"},
    {"name": " Dezudbezui OBDHAb za doZIUBE", "date": "octobre 20"},
  ]

  return (
    <Panel title="News" color="info">
      <div className="flex flex-col gap-3 divide-y-2 divide-info">
        {news.map((item, index) => 
          <NewsItem date={item.date} title={item.name} key={index}/>
        )}
      </div>
    </Panel>
  );
}
