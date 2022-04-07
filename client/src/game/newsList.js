import { useEffect, useState } from "react";
import Panel from "../components/panel";
import NewsItem from "./newsItem";

export default function NewsList(props) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    props.socket.on("new_news", (n) => {
      setNews(n);
      console.log("-------------NEW NEWS-----------");
      console.log(n);
      //let lastNews = news[news.length - 1];
      //props.showModal(lastNews);
    });
  }, [props.socket, setNews, news]);

  return (
    <Panel title="News" color="info">
      <div className="flex flex-col gap-3 divide-y-2 divide-info">
        {news.map((item, index) => (
          <NewsItem
            date={props.makeDate(item.date)}
            title={item.name}
            key={index}
          />
        ))}
      </div>
    </Panel>
  );
}
