import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddNotePage from "./pages/AddNotePage";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, { id: notes.length + 1, ...newNote }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home notes={notes} />} />
        <Route path="/add-note" element={<AddNotePage onAdd={addNote} />} />
      </Routes>
    </Router>
  );
}

export default App;
