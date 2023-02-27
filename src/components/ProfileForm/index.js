import { useState } from 'react';
import { func } from 'prop-types';
import Allergy from '../Allergy';
import Field from './Field';
import './styles.scss';

const ProfileForm = ({ handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [adress, setAdress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [allergyChoice, setAllergyChoice] = useState([]);

  const handleEmailChangeField = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChangeField = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChangeField = (event) => {
    setName(event.target.value);
  };

  const handleLastnameChangeField = (event) => {
    setLastname(event.target.value);
  };

  const handleAdressChangeField = (event) => {
    setAdress(event.target.value);
  };

  const handleZipcodeChangeField = (event) => {
    setZipcode(event.target.value);
  };

  const handleCityChangeField = (event) => {
    setCity(event.target.value);
  };

  const handleCheckChangeOnClick = (event) => {
    const allergyName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setAllergyChoice([...allergyChoice, allergyName]);
    }
    else {
      setAllergyChoice(allergyChoice.filter((allergy) => allergy !== allergyName));
    }
  };


  const handleSubmitClick = (event) => {
    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  };


  return (
    <div>
      <form>
        <Field
          name="name"
          type="name"
          placeholder="Prénom"
          onChange={handleNameChangeField}
          value={name}
        />
        <Field
          name="lastname"
          type="lastname"
          placeholder="Nom"
          onChange={handleLastnameChangeField}
          value={lastname}
        />
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          onChange={handleEmailChangeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={handlePasswordChangeField}
          value={password}
        />
        <Field
          name="adress"
          type="adress"
          placeholder="Adresse"
          onChange={handleAdressChangeField}
          value={adress}
        />
        <Field
          name="zipcode"
          type="zipcode"
          placeholder="Code Postal"
          onChange={handleZipcodeChangeField}
          value={zipcode}
        />
        <Field
          name="city"
          type="city"
          placeholder="Ville"
          onChange={handleCityChangeField}
          value={city}
        />
        <Allergy
          hundleClick={handleCheckChangeOnClick}
        />

        <input onSubmit={handleSubmitClick} type="submit" value="Enregistrer" />

      </form>
    </div>
  );
};

ProfileForm.propTypes = {
  handleClick: func.isRequired,
};

export default ProfileForm;
