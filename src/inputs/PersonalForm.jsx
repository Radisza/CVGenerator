import PropTypes from 'prop-types';
import FormInput from './FormInput';

function PersonalForm({ personal, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const name = 'personal';
  return (
    <form>
      <FormInput
        type="text"
        id={name + '_fullname'}
        value={personal.data.fullName}
        label="Full name"
        onChange={personal.changeName}
      />
      <FormInput
        type="text"
        id={name + '_email'}
        value={personal.data.email}
        label="E-mail"
        onChange={personal.changeEmail}
      />
      <FormInput
        type="text"
        id={name + '_email'}
        value={personal.data.phoneNumber}
        label="Phone number"
        onChange={personal.changePhone}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

PersonalForm.propTypes = {
  personal: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PersonalForm;
