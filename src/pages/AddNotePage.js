import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNotePage({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAdd({ title, content });
      navigate("/");
    }
  };

  return (
    <div className="add-note-container">
      <h1 className="form-title">Add a New Note</h1>
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter note content"
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNotePage;
