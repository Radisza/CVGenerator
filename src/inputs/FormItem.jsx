import { useState } from 'react';
import PropTypes from 'prop-types';

function FormItem({ name, renderForm }) {
  const [isActive, setActive] = useState(false);

  if (isActive) {
    return <div className="formItem">{renderForm(() => setActive(false))}</div>;
  }
  return (
    <div className="formItem">
      <div>{name}</div>
      <button onClick={() => setActive(true)}>Edit</button>
    </div>
  );
}

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  renderForm: PropTypes.func.isRequired,
};

export default FormItem;
