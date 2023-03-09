// ---- Imports ----
import { useState } from 'react';
import { func } from 'prop-types';
import './styles.scss';

//  ---- Components ----
import Field from './Field';
// import Allergy from '../Allergy';

// ---- Hooks ----
import postDataProfile from '../../hooks/postDataProfile';

const ProfileForm = ({ handleClick }) => {
  //          ___State___
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [showForm, setShowForm] = useState(false);
  const [deleteBtnForm, setDeleteBtnForm] = useState(true);
  // const [allergyChoice, setAllergyChoice] = useState([]);

  //          ___Methods___
  // ...put input values into formData object
  const handleChangeField = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /* const handleCheckChangeOnClick = (event) => {
    const allergyName = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setAllergyChoice([...allergyChoice, allergyName]);
    }
    else {
      setAllergyChoice(allergyChoice.filter((allergy) => allergy !== allergyName));
    }
  }; */

  // ...shows the form when the button is clicked
  const showFormClick = () => {
    setShowForm(true);
    setDeleteBtnForm(false);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  };

  return (
    <div className="profil">
      <h2 className="profil-title">Nouveau chez nous ? Bienvenue !</h2>
      {deleteBtnForm && (
      <button type="button" className="profil-button" onClick={showFormClick}> Inscrivez vous ! </button>
      )}
      {showForm && (
      <form className="profil-form">
        <Field
          name="name"
          type="name"
          placeholder="Prénom"
          onChange={handleChangeField}
          value={formData.name}
        />
        <Field
          name="lastname"
          type="lastname"
          placeholder="Nom"
          onChange={handleChangeField}
          value={formData.lastname}
        />
        <Field
          name="email"
          type="email"
          placeholder="Adresse Email"
          onChange={handleChangeField}
          value={formData.email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={handleChangeField}
          value={formData.password}
        />
        {/*
        <Allergy
        hundleClick={handleCheckChangeOnClick}
        /> */}

        <input onSubmit={handleSubmitClick} type="submit" value="Enregistrer" className="profil-submit" />

      </form>
      )}
    </div>
  );
};

ProfileForm.propTypes = {
  handleClick: func,
};

export default ProfileForm;
