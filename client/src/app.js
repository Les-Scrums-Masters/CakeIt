import io from "socket.io-client";
import { VictoryBar } from "victory";

const socket = io.connect("http://localhost:3001");

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-6xl">Hey</h1>
        <button className="btn">Button</button>
      </header>

      <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />
    </div>
  );
}

export default App;
