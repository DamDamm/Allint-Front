import { func } from 'prop-types';
import allergyData from '../../data/MOCK_allergy.json';

const Allergy = ({ hundleClick }) => (

  <div>

    {
        allergyData.map((allergy) => (
          <div key={allergy.id}>
            <input
              type="checkbox"
              name={allergy.name}
              onChange={hundleClick}
            />
            <label htmlFor={allergy.name}>{allergy.name}</label>
          </div>
        ))
      }

  </div>

);

export default Allergy;

Allergy.propTypes = {
  hundleClick: func.isRequired,
};
