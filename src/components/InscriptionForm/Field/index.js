import { string, func } from 'prop-types';
import '../styles.scss'

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const inputId = `field-${name}`;

  return (
    <div className="profil-field">
      <input
        value={value}
        onChange={onChange}
        id={inputId}
        type={type}
        className="profil-field-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: string.isRequired,
  type: string.isRequired,
  name: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
};

export default Field;
