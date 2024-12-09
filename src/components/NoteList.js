import React from "react";
import { Link } from "react-router-dom";

function NoteList({ notes, onDelete, onEdit }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>{note.title}</Link>
          <button
            onClick={() =>
              onEdit(note.id, {
                title: "Updated Title",
                content: "Updated Content",
              })
            }
          >
            Edit
          </button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
