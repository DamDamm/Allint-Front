import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import getDataProfile from '../../../api/getDataProfile';
import patchDataProfile from '../../../api/patchDataProfile';
import postDataAllergen from '../../../api/postDataAllergen';

const ProfileForm = () => {
  //      ___Axios___
  const {
    userInfosData, userAllergensData, defaultAllergensData, error, isLoading, get,
  } = getDataProfile('/profil');
  const {
    patchData, patchError, patchIsLoading, patch,
  } = patchDataProfile('/profil');
  const {
    postData, postError, postIsLoading, post,
  } = postDataAllergen('/allergy/user');

  //      ___State___
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({});
  const [userAllergens, setuserAllergens] = useState({});
  const [defaultAllergens, setdefaultAllergens] = useState([]);

  //      ___Methods___
  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (userInfosData) {
      setFormData(userInfosData);
      setuserAllergens(userAllergensData);
      setdefaultAllergens(defaultAllergensData);
    }
  }, [userInfosData]);

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(userAllergens);

  const handleEditForm = (event) => {
    event.preventDefault();
    setIsEditable(true);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSaveForm = (event) => {
    event.preventDefault();
    patch(formData);
    console.log(patchData);
    setIsEditable(false);
  };

  const userHadChecked = () => {

  };

  const handleAllergenChange = (event) => {
    const allergenId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      setuserAllergens([...userAllergens, allergenId]);
      post(userAllergens);
      console.log(userAllergens);
      setuserAllergens({});
    }
    else {
      const updatedAllergens = userAllergens.filter((id) => id !== allergenId);
      setuserAllergens(updatedAllergens);
    }
  };

  return (
    <div className="profile-form__container">
      <div className="right__container">
        <h1 className="pageTitle">
          Votre (super) Profil
        </h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          className="profile-form__form"
        >
          {isEditable ? (
            <TextField
              label="Prénom"
              variant="standard"
              defaultValue={formData.firstname}
              type="firstName"
              id="firstname"
              name="firstname"
              placeholder={formData.firstname}
              onChange={handleInputChange}
            />
          ) : (
            <TextField
              disabled
              id="standard-disabled"
              label={formData.firstname}
              defaultValue={formData.firstname}
              variant="standard"
              placeholder={formData.firstname}
            />
          )}
          {isEditable ? (
            <TextField
              label="Nom"
              variant="standard"
              defaultValue={formData.lastname}
              type="lastName"
              id="lastname"
              name="lastname"
              placeholder={formData.lastname}
              onChange={handleInputChange}
            />
          ) : (
            <TextField
              disabled
              id="standard-disabled"
              label={formData.lastname}
              defaultValue={formData.lastname}
              variant="standard"
              placeholder={formData.lastname}
            />
          )}
          {isEditable ? (
            <TextField
              label="email"
              variant="standard"
              defaultValue={formData.email}
              type="email"
              id="email"
              name="email"
              placeholder={formData.email}
              onChange={handleInputChange}
            />
          ) : (
            <TextField
              disabled
              label={formData.email}
              id="standard-disabled"
              variant="standard"
            />
          )}
          {isEditable ? (
            <button className="user-form-button" type="submit" onClick={handleSaveForm}>Enregistrer</button>
          ) : (
            <button className="user-form-button" type="button" onClick={handleEditForm}>Modifier</button>
          )}
        </Box>
      </div>

      <div className="user-allergies__container">
        <label className="user-allergies__title">Choisissez votre Kryptonite</label>
        {defaultAllergens.map((allergen) => (
          <label className="user-allergies__list" key={allergen.id}>
            <input
              className="user-allergies__input"
              type="checkbox"
              name={allergen.name}
              value={allergen.id}
              checked={userAllergensData.includes(allergen.id)}
              onChange={handleAllergenChange}
            />
            {allergen.name}
          </label>
        ))}
      </div>
    </div>

  );
};

export default ProfileForm;
