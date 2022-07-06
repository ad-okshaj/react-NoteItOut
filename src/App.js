// this file is our root component.

import "./App.css";
import Header from "./components/Header";
import NotesListPages from "./pages/NotesListPages"; // imp shortcut

function App() {
  return (
    <div className="App">
      <Header />
      <NotesListPages />
    </div>
  );
}

export default App;
