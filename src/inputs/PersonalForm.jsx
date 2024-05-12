import PropTypes from 'prop-types';
import FormInput from './FormInput';

function PersonalForm({ personal }) {
  const name = 'personal';
  return (
    <form>
      <FormInput
        type="text"
        id={name + '_fullName'}
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
        id={name + 'phoneNumber'}
        value={personal.data.phoneNumber}
        label="Phone number"
        onChange={personal.changePhone}
      />
      <FormInput
        type="text"
        id={name + 'location'}
        value={personal.data.location}
        label="Location"
        onChange={personal.changeLocation}
      />
    </form>
  );
}

PersonalForm.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default PersonalForm;
