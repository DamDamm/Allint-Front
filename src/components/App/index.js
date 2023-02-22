// == Import
import './styles.css';
import {useState} from 'react';

//Components
import Home from 'src/components/Home';
import Header from '../Header';
import Product from 'src/components/Product';
import Search from 'src/components/Search';
import Results from 'src/components/Results';
import Footer from '../Footer';
import Error from '../Error';
import ProfileForm from '../ProfileForm';



// == App
function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [adress, setAdress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');

// controlled inputs control
  // console.log(`email = ${email}`)
  // console.log(`password = ${password}`)
  // console.log(`name = ${name}`)
  // console.log(`lastname = ${lastname}`)
  // console.log(`adress = ${adress}`)
  // console.log(`zipcode = ${zipcode}`)
  // console.log(`city = ${city}`)

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

  return (
    <div className="app">
      <ProfileForm
        email = {email}
        password={password}
        name={name}
        lastname={lastname}
        adress={adress}
        zipcode={zipcode}
        city={city}
        emailChangeField = {handleEmailChangeField}
        passwordChangeField = {handlePasswordChangeField}
        nameChangeField = {handleNameChangeField}
        lastnameChangeField = {handleLastnameChangeField}
        adressChangeField = {handleAdressChangeField}
        zipcodeChangeField = {handleZipcodeChangeField}
        cityChangeField = {handleCityChangeField}
      />
      {/* <Header />
      <Search />
      <Results />
      <Product />
      <Footer /> */}
      

    </div>
  );
}

// == Export
export default App;
