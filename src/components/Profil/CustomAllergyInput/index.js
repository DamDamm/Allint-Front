import PropTypes from 'prop-types';
import { useState } from 'react';

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
    <div>
      <form onSubmit={handleAddAllergy}>
        <label htmlFor="allergy-input">Ajouter d'autres allergies</label>
        <input
          type="text"
          id="allergy-input"
          name="allergy"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={isButtonDisabled}>
          +
        </button>
      </form>
      <ul>
        {allergies.map((allergy) => (
          <li key={allergy.id}>
            {allergy.name}
            <button type="button" onClick={() => handleDeleteAllergy(allergy.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
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
