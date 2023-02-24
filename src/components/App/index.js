// == Import
import './styles.css';
import { useState } from 'react';

// Components
// import Home from 'src/components/Home';
// import Product from 'src/components/Product';
// import Search from 'src/components/Search';
// import Results from 'src/components/Results';
// import Header from '../Header';
// import Footer from '../Footer';
// import Error from '../Error';
import ProfileForm from '../ProfileForm';

// == App
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [adress, setAdress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [allergyChoice, setAllergyChoice] = useState([]);

  // controlled inputs control
  // console.log(`email = ${email}`);
  // console.log(`password = ${password}`)
  // console.log(`name = ${name}`)
  // console.log(`lastname = ${lastname}`)
  // console.log(`adress = ${adress}`)
  // console.log(`zipcode = ${zipcode}`)
  // console.log(`city = ${city}`)
  // console.log(`allergies: ${allergyChoice}`);

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
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  };

  return (
    <div className="app">
      <ProfileForm
        email={email}
        password={password}
        name={name}
        lastname={lastname}
        adress={adress}
        zipcode={zipcode}
        city={city}
        emailChangeField={handleEmailChangeField}
        passwordChangeField={handlePasswordChangeField}
        nameChangeField={handleNameChangeField}
        lastnameChangeField={handleLastnameChangeField}
        adressChangeField={handleAdressChangeField}
        zipcodeChangeField={handleZipcodeChangeField}
        cityChangeField={handleCityChangeField}
        checkChangeOnClick={handleCheckChangeOnClick}
        handleClick={handleSubmitClick}
      />
      {/* <Header />
      <Search />
      <Results />
      <Product />
      <Footer /> */}

    </div>
  );
};

// == Export
export default App;
