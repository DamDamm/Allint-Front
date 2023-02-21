// == Import
import reactLogo from './interdiction.jpeg';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <p>Si tu vois ça tu es sur la branche main et donc</p>
      <p>TU N'AS RIEN A FAIRE ICI</p>
      <p>Si tu ne veux pas te faire engueuler par tonton Thibaut, bascule de suite sur la branche dev.</p>
      <p>J'espère même que tu as prévu la branche spécifique à ta feature....</p>
      <p>Go git checkout maintenant</p>
    </div>
  );
}

// == Export
export default App;
