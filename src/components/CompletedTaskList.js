import React from 'react';

function CompletedTaskList({ tasks }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <div key={task.id}>
          <li className="list-group-item">
            <div className="task-content" style={{ maxWidth: '100%' }}>
              <div className="task-title">Titre: {task.title}</div>
              <div className="task-description">Description: {task.description}</div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default CompletedTaskList;
