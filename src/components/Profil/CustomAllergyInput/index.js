import PropTypes from 'prop-types';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomAllergyInput = () => {
  const [allergies, setAllergies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const inputChangeValue = event.target.value;
    setInputValue(inputChangeValue);
    setIsButtonDisabled(inputChangeValue === '');
  };

  const handleAddAllergy = (event) => {
    event.preventDefault();
    const allergyValue = inputValue;
    if (allergyValue !== '') {
      const allergyExists = allergies.some((allergy) => allergy.name.toLowerCase() === allergyValue.toLowerCase());
      if (!allergyExists) {
        const newAllergy = {
          id: Math.floor(Math.random() * 10000),
          name: allergyValue,
        };
        setAllergies([...allergies, newAllergy]);
      }
    }
    setInputValue('');
    setIsButtonDisabled(true);
  };

  const handleDeleteAllergy = (id) => {
    const updatedAllergies = allergies.filter((allergy) => allergy.id !== id);
    setAllergies(updatedAllergies);
  };

  return (
    <Box className="custom-allergies__container">
      <form className="custom-allergies__form" onSubmit={handleAddAllergy}>
        <label className="custom-allergies__title" htmlFor="allergy-input">On en a oublié une?</label>
        <TextField
          label="Ajouter une allergie"
          variant="standard"
          type="text"
          id="allergy-input"
          name="allergy"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="custom-allergies__add-button" type="submit" disabled={isButtonDisabled}>
          Ajouter
        </button>
      </form>
      <ul className="custom-allergies__list">
        {allergies.map((allergy) => (
          <li className="custom-allergies__item" key={allergy.id}>
            {allergy.name}
            <button className="custom-allergies__remove-button" type="button" onClick={() => handleDeleteAllergy(allergy.id)}>x</button>
          </li>
        ))}
      </ul>
    </Box>
  );

  //   const regInput = React.useRef();
  //   const allergyHandleSubmit = () => {
  //     event.preventDefault();
  //     const allergyData = {
  //       "customAllergy": regInput.current.value
  //     }
  //   const allergyDataJSON = JSON.stringify(allergyData)
  //   console.log(allergyDataJSON)
  //  }

  // return (
  //   <div className="custom-allergy" onSubmit={allergyHandleSubmit}>
  //     <form className="custom-allergy-form">
  //       <label>Allergie customisée</label>
  //       <input id="custom-allergy-input" type="text" ref={regInput}></input>
  //       <button id="custom-allergy-button" type="submit"> Enregistrer</button>
  //     </form>

//   </div>
// )
};

export default CustomAllergyInput;

CustomAllergyInput.propTypes = {

};
