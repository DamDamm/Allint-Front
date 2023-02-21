// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

//Components
import Home from 'src/components/Home';
import Product from 'src/components/Product';
import Profil from 'src/components/Profil';
import Results from 'src/components/Results';
import MentionsLegales from '../MentionsLegales';
import Error from '../Error';


// == Composant
function App() {
  return (
    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
    </div>
  );
}

// == Export
export default App;
