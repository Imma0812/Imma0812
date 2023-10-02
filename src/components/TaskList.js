import React from 'react';

function TaskList({ tasks, completeTask, deleteTask, showCompleteButton, showDeleteButton }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <div key={task.id}>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="task-content" style={{ maxWidth: '100%' }}>
            <div className="task-title">Titre: {task.title}</div>
            <div className="task-description">Description: {task.description}</div>
          </div> 
         
        </li><br/>
        
  <div className="d-flex">
    {showDeleteButton && (
      <button onClick={() => deleteTask(task.id)} className="btn btn-danger">
        Supprimer
      </button>
    )}
    {showCompleteButton && (
      <button onClick={() => completeTask(task.id)} className="btn btn-success ms-4">
        Terminer
      </button>
    )}
  </div>



      </div>
      
      ))}
    </ul>
  );
}

export default TaskList;
