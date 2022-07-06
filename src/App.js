// this file is our root component.

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body"; // imp shortcut

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
