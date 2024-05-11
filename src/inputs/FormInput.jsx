import PropTypes from 'prop-types';

function FormInput({ type, id, value, label, onChange }) {
  let input;
  if (type == 'text') {
    input = (
      <input type={type} id={id} name={id} value={value} onChange={onChange} />
    );
  } else {
    throw new Error(`Unsupported input type ${type} for input id ${id}`);
  }

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      {input}
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
