//Ne jamais oublier de tout installer . Pour demarrer le nmp init, ensuite installer ce qu'il faut. installer react, react-DOM, craco, npm install; npm update react-router-dom npm update react npm update react-dom

//Dans ce cas ci ne pas oublier les modifs pour pouvoir faire fonctionner les liaisons avec github.
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './pages/Accueil';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import CompletedTaskList from './components/CompletedTaskList';

function App() {
  // Initialisez tasks et completedTasks à un tableau vide par défaut
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const addTask = (title, description) => {
    const newTask = {
      id: taskIdCounter,
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1);
  };

  const completeTask = (taskId) => {
    // Marquer la tâche comme complétée
    const completedTask = tasks.find((task) => task.id === taskId);
    setCompletedTasks([...completedTasks, completedTask]);

    // Filtrer la tâche complétée de la liste des tâches
    const updatedTasksWithoutCompleted = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasksWithoutCompleted);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Bienvenue sur G-Task votre gestionnaire des tâches</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Accueil onLogin={addTask} />} />

          <Route
            path="/tasks"
            element={
              <React.Fragment>
                <TaskForm onAdd={addTask} />
                <div style={{ color: 'red' }} className="row">
                  <div className="col-md-6">
                    <div className="bloc" style={{ wordWrap: 'break-word' }}>
                      <h2 className="text-primary">Tâches à faire</h2>
                      <TaskList
                        tasks={tasks}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                        showCompleteButton={true}
                        showDeleteButton={true}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <div className="bloc" style={{ wordWrap: 'break-word' }}>
                      <h2 className="text-info">Tâches complétées</h2>
                      <CompletedTaskList tasks={completedTasks} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//Switcher les elements et mettre plusieurs elements dans une meme fonction App. Par expl je veux integrer un fichier externe dans le App.js

// function App() {
//   return (
//     <Router>
//       <div className="container mt-5">
//         <h1 className="text-center text-primary">Task Manager</h1>
//         <Switch>
//           <Route exact path="/" component={Home} /> {/* Route vers la page d'accueil */}
//           {/* Ajoutez d'autres routes pour d'autres pages si nécessaire */}
//           <Route path="/tasks" component={Tasks} /> {/* Exemple de route vers une autre page */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }
