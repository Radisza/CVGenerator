import { useState } from 'react';
import PropTypes from 'prop-types';
import FormItem from './FormItem';
import { Icon } from '@iconify/react/dist/iconify.js';

function Title({ title, isActive, setActive }) {
  const icon = isActive ? 'mdi-minus' : 'mdi-plus';
  return (
    <div className="formBoxTitle">
      <div>{title}</div>
      <button onClick={() => setActive(!isActive)}>
        <Icon className="icon" icon={icon} />
      </button>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

function Content({ items, generateForm }) {
  return (
    <div className="flex-column">
      <button onClick={() => items.addNewEntry({})}>Add new</button>
      {items.data.map((item) => {
        return (
          <FormItem
            key={item.id}
            name={items.getObjDescription(item.id) || 'New language'}
            form={generateForm(item)}
          />
        );
      })}
    </div>
  );
}

Content.propTypes = {
  items: PropTypes.object.isRequired,
  generateForm: PropTypes.func.isRequired,
};

function FormBox({ items, generateForm }) {
  const [isActive, setActive] = useState(false);

  return (
    <div className="formBox flex-column">
      <Title
        title={items.getName()}
        isActive={isActive}
        setActive={setActive}
      />
      {isActive && <Content items={items} generateForm={generateForm} />}
    </div>
  );
}

export default FormBox;

FormBox.propTypes = {
  items: PropTypes.object.isRequired,
  generateForm: PropTypes.func.isRequired,
};
