// this file is our root component.

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage"; // imp shortcut
import NotePage from "./pages/NotePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
