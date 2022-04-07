import { useEffect } from "react";
import Panel from "../components/panel";
import NewsItem from "./newsItem";

export default function NewsList(props) {

  const [news, setNews] = [];

  useEffect(()=> {
    
    props.socket.on("new_news", (news) => setNews(news))

  });


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
