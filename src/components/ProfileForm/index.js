import { string, func } from 'prop-types';
import Allergy from '../Allergy';
import Field from './Field';
import './styles.scss';

const ProfileForm = ({
  email,
  password,
  name,
  lastname,
  adress,
  zipcode,
  city,
  emailChangeField,
  passwordChangeField,
  nameChangeField,
  lastnameChangeField,
  adressChangeField,
  zipcodeChangeField,
  cityChangeField,
}) => (
  <div>
    <form>
      <Field
        name="name"
        type="name"
        placeholder="Prénom"
        onChange={nameChangeField}
        value={name}
      />
      <Field
        name="lastname"
        type="lastname"
        placeholder="Nom"
        onChange={lastnameChangeField}
        value={lastname}
      />
      <Field
        name="email"
        type="email"
        placeholder="Adresse Email"
        onChange={emailChangeField}
        value={email}
      />
      <Field
        name="password"
        type="password"
        placeholder="Mot de passe"
        onChange={passwordChangeField}
        value={password}
      />
      <Field
        name="adress"
        type="adress"
        placeholder="Adresse"
        onChange={adressChangeField}
        value={adress}
      />
      <Field
        name="zipcode"
        type="zipcode"
        placeholder="Code Postal"
        onChange={zipcodeChangeField}
        value={zipcode}
      />
      <Field
        name="city"
        type="city"
        placeholder="Ville"
        onChange={cityChangeField}
        value={city}
      />
      <Allergy />
    </form>
  </div>
);

ProfileForm.propTypes = {
  email: string.isRequired,
  password: string.isRequired,
  name: string.isRequired,
  lastname: string.isRequired,
  adress: string.isRequired,
  zipcode: string.isRequired,
  city: string.isRequired,
  emailChangeField: func.isRequired,
  passwordChangeField: func.isRequired,
  nameChangeField: func.isRequired,
  lastnameChangeField: func.isRequired,
  adressChangeField: func.isRequired,
  zipcodeChangeField: func.isRequired,
  cityChangeField: func.isRequired,
};

export default ProfileForm;
