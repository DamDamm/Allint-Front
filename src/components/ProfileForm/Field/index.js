import { string, func } from 'prop-types';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const inputId = `field-${name}`;

  return (
    <div className="field">
      <input
        value={value}
        onChange={onChange}
        id={inputId}
        type={type}
        className="field-input"
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
