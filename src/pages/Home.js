import React from "react";
import { Link } from "react-router-dom";

function Home({ notes }) {
  return (
    <div className="home-container">
      <h1 className="home-title">All Notes</h1>
      <Link to="/add-note" className="add-note-button">
        Add a New Note
      </Link>
      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div className="note-card" key={note.id}>
              <h2 className="note-title">{note.title}</h2>
              <p className="note-content">{note.content}</p>
            </div>
          ))
        ) : (
          <p>No notes yet. Add the first note!</p>
        )}
      </div>
    </div>
  );
}

export default Home;
