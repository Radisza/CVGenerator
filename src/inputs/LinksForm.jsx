import PropTypes from 'prop-types';
import FormInput from './FormInput';

function LinksForm({ obj, toRender }) {
  const elementId = toRender.id;
  return (
    <form>
      <FormInput
        type="text"
        id={elementId + 'icon'}
        value={toRender.icon}
        label="Iconify icon name"
        onChange={(e) => obj.changeIcon(elementId, e.target.value)}
      />
      <FormInput
        type="text"
        id={elementId + 'url'}
        value={toRender.url}
        label="Url"
        onChange={(e) => obj.changeUrl(elementId, e.target.value)}
      />
    </form>
  );
}

LinksForm.propTypes = {
  obj: PropTypes.object.isRequired,
  toRender: PropTypes.object.isRequired,
};
export default LinksForm;
