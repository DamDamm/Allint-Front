import React, { useState, useEffect } from 'react';

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
  const [userAllergens, setuserAllergens] = useState([]);
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

  const handleAllergenChange = (event) => {
    const allergenId = parseInt(event.target.value);
    const isChecked = event.target.checked;

    if (isChecked) {
      setuserAllergens([...userAllergens, allergenId]);
      post(allergenId);
    }
    else {
      const updatedAllergens = userAllergens.filter((id) => id !== allergenId);
      setuserAllergens(updatedAllergens);
    }
  };

  return (
    <div>

      <form>
        <label htmlFor="firstname">
          Prénom :
          {isEditable ? (
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder={formData.firstname}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.firstname}</span>
          )}
        </label>
        <label htmlFor="lastname">
          Nom :
          {isEditable ? (
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder={formData.lastname}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.lastname}</span>
          )}
        </label>
        <label htmlFor="email">
          Adresse email :
          {isEditable ? (
            <input
              type="email"
              id="email"
              name="email"
              placeholder={formData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formData.email}</span>
          )}
        </label>
        {isEditable ? (
          <button type="submit" onClick={handleSaveForm}>Enregistrer</button>
        ) : (
          <button type="button" onClick={handleEditForm}>Modifier</button>
        )}
      </form>

      <label>Liste d'allergènes par défaut:</label>
      <div>
        {defaultAllergens.map((allergen) => (
          <label key={allergen.id}>
            <input
              type="checkbox"
              name={allergen.name}
              value={allergen.id}
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
