import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Accueil({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validez les informations d'authentification ici
    // Par exemple, vérifiez si le nom d'utilisateur et le mot de passe sont valides
    const isValid = validateCredentials(username, password);

    // Si les informations d'authentification sont valides, appelez onLogin
    if (isValid) {
      onLogin();
      
      // Redirigez vers la page de gestionnaire des tâches après la connexion réussie.
      navigate('/tasks');
    } else {
      // Gérez les erreurs d'authentification ici (affichage d'un message d'erreur, etc.).
      // Vous pouvez également réinitialiser les champs de formulaire.
    }
  };

  // Fonction pour valider les informations d'authentification
  const validateCredentials = (username, password) => {
    // Mettez en place votre logique de validation ici.
    // Par exemple, vérifiez si le nom d'utilisateur et le mot de passe correspondent à des données valides.
    // Si c'est le cas, retournez true, sinon retournez false.
    return true; // Changez ceci en fonction de votre logique de validation
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Page d'accueil</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nom d'utilisateur :</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe :</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Connexion</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
