import EditBtn from '../utils/buttons';
import { useState } from 'react';
import PropTypes from 'prop-types';

function FormItem({ name, form }) {
  const [isActive, setActive] = useState(false);

  if (isActive) {
    return (
      <div className="formItem">
        {form}
        <button onClick={() => setActive(false)}>OK</button>
      </div>
    );
  }
  return (
    <div className="formItem">
      <div>{name}</div>
      <EditBtn onClick={() => setActive(true)} />
    </div>
  );
}

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.element.isRequired,
};

export default FormItem;
