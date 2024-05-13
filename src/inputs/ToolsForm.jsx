import PropTypes from 'prop-types';
import FormInput from './FormInput';

function ToolsForm({ obj, toRender }) {
  const elementId = toRender.id;
  return (
    <form>
      <FormInput
        type="text"
        id={`${toRender.id}_tool`}
        value={toRender.name}
        label="Tools"
        onChange={(e) => obj.changeTool(elementId, e.target.value)}
      />
    </form>
  );
}

ToolsForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};

export default ToolsForm;
