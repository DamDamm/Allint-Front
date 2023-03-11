import React, { useState, useEffect } from 'react';


import getDataProfile from '../../../api/getDataProfile';

const ProfileForm = () => {
  const [profileData, setProfileData] = useState(null);

  const { userInfos, error, isLoading, get } = getDataProfile('/profil')

  useEffect(() => {
    get();
  }, []);
  console.log(userInfos)
  const handleSubmit = (event) => {
    event.preventDefault();
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));

  if (!profileData) {
    return <p>Chargement...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Prénom :
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={profileData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="lastName">
        Nom :
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={profileData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="email">
        Adresse email :
        <input
          type="email"
          id="email"
          name="email"
          value={profileData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default ProfileForm;
