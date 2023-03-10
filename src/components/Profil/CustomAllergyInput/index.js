import PropTypes from "prop-types"
import React from "react"

const CustomAllergyInput = () => {

  const regInput = React.useRef();
  const allergyHandleSubmit = () => {
    event.preventDefault();
    const allergyData = {
      "customAllergy": regInput.current.value
    }
  const allergyDataJSON = JSON.stringify(allergyData)
  console.log(allergyDataJSON)
 }

return (
  <div className="custom-allergy" onSubmit={allergyHandleSubmit}>
    <form className="custom-allergy-form">
      <label>Allergie customisée</label>
      <input id="custom-allergy-input" type="text" ref={regInput}></input>
      <button id="custom-allergy-button" type="submit"> Enregistrer</button>
    </form>
    
  </div>
)
}

export default CustomAllergyInput;

CustomAllergyInput.propTypes = {
 
 };
