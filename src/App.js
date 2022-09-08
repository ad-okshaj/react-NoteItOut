// this file is our root component.

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage"; // imp shortcut
import NotePage from "./pages/NotePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* outermost tag is Router. */}
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="note/:noteID" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
