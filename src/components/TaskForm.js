import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAdd(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ maxWidth: '100%' }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
}

export default TaskForm;
