
import PropTypes from 'prop-types';
import Page from "../Page";
import Header from "../Header";
import './styles.scss'

const Cgu = ({ isLogged, isConnected, isDisconnected }) => {
    return (
       <Page>
        <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
        <div className="cgu">
            <ul className="cards">
            <li className='cards-card'>L'utilisateur reconnaît que les informations fournies sur ce site web ne remplacent pas l'avis médical professionnel et ne doivent pas être utilisées pour diagnostiquer ou traiter une allergie alimentaire.</li>
            <li className='cards-card'>Le contenu de ce site web est fourni à titre informatif seulement et ne garantit pas l'exactitude, l'exhaustivité ou la pertinence des informations.</li>
            <li className='cards-card'>L'utilisateur reconnaît que l'utilisation des informations contenues sur ce site web se fait à ses propres risques et périls. Le propriétaire du site décline toute responsabilité quant à l'utilisation des informations contenues sur ce site.</li>
            <li className='cards-card'>L'utilisateur ne doit pas utiliser ce site web à des fins illicites ou pour violer les droits d'autrui.</li>
            <li className='cards-card'>Le propriétaire du site web se réserve le droit de modifier, suspendre ou mettre fin à tout moment et sans préavis les services et fonctionnalités offerts sur ce site web.</li>
            <li className='cards-card'>L'utilisateur est responsable de maintenir la confidentialité de son compte et de son mot de passe, ainsi que de toutes les activités qui se produisent sous son compte.</li>
            <li className='cards-card'>L'utilisateur accepte de ne pas copier, reproduire, distribuer ou exploiter de quelque manière que ce soit le contenu de ce site web sans l'autorisation expresse du propriétaire du site.</li>
            <li className='cards-card'>Le propriétaire du site ne garantit pas que le site web sera exempt d'erreurs, de virus ou d'autres éléments nuisibles.</li>
            <li className='cards-card'>L'utilisateur accepte de ne pas utiliser ce site web pour collecter des informations personnelles sur d'autres utilisateurs ou pour envoyer du spam ou des communications non sollicitées.</li>
            <li className='cards-card'>En utilisant ce site web, l'utilisateur accepte toutes les conditions générales d'utilisation énoncées ci-dessus. Si l'utilisateur n'accepte pas ces conditions, il doit immédiatement cesser d'utiliser le site.</li>
          </ul>
        </div>
       </Page>
        )
    };

    )
};

Cgu.propTypes = {
    isLogged: PropTypes.bool, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default Cgu;