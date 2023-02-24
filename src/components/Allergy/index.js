import allergyData from '../../data/MOCK_allergy.json';

const Allergy = () => (

  <div>
    <form>
      {
        allergyData.map((allergy) => (
          <>
            <input key={allergy.id} type="checkbox" name={allergy.name} />
            <label htmlFor={allergy.id}>{allergy.name}</label>
          </>
        ))
      }
    </form>
  </div>

);

export default Allergy;
