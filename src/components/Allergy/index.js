import { func } from 'prop-types';
import allergyData from '../../data/MOCK_allergy.json';
import '../ProfileForm/styles.scss'
const Allergy = ({ hundleClick }) => (
  <div className='profil-allergy'>
    {
        allergyData.map((allergy) => (
          <div key={allergy.id} className='profil-checkbox-div'>

            <input
              className='profil-checkbox'
              type="checkbox"
              name={allergy.name}
              onClick={hundleClick}
            />

            <label 
            htmlFor={allergy.name}
            className='profil-checkbox-label'>
              {allergy.name}
            </label>
          </div>
        ))
      }
  </div>
);

export default Allergy;

Allergy.propTypes = {
  hundleClick: func.isRequired,
};
