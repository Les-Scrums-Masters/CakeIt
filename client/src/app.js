import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="container mx-auto">
      <header>
        <h1 className="text-6xl">Hey</h1>
        <button className="btn">Button</button>
      </header>
    </div>
  );
}

export default App;
