import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import Header from '../Header';
import './styles.scss';

const MentionsLegales = ({ isLogged, isConnected, isDisconnected }) => {
  return (
      <Page>
        <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected} />
        <div className="mentionslegales">
          <ul className="cards">
            <li className="cards-card">Propriété intellectuelle : Tous les contenus du site web (textes, images, vidéos, etc.) sont la propriété exclusive du propriétaire du site web, sauf indication contraire. Toute utilisation, reproduction ou diffusion est interdite sans autorisation préalable.</li>
            <li className="cards-card">Liens hypertextes : Le propriétaire du site web n'est pas responsable des contenus des sites web tiers vers lesquels pointent les liens présents sur ce site web.</li>
            <li className="cards-card">Limitation de responsabilité : Le propriétaire du site web ne peut être tenu responsable des pertes ou des dommages résultant de l'utilisation du site web ou de l'impossibilité de l'utiliser, ainsi que des erreurs, omissions ou inexactitudes des contenus publiés.</li>
            <li className="cards-card">Protection des données personnelles : Le site web peut collecter et traiter des données personnelles conformément à la législation en vigueur en matière de protection des données personnelles. Les utilisateurs ont le droit d'accéder, de rectifier ou de supprimer leurs données personnelles. Pour en savoir plus, veuillez consulter notre politique de confidentialité.</li>
            <li className="cards-card">Modification des mentions légales : Le propriétaire du site web se réserve le droit de modifier ces mentions légales à tout moment.</li>
          </ul>
        </div>
      </Page>
  );
};

MentionsLegales.propTypes = {
  isLogged: PropTypes.string,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default MentionsLegales;
