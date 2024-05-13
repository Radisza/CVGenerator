import PropTypes from 'prop-types';
import IconText from './IconText';

function LinksView({ links }) {
  return (
    <div className="flex-column">
      {links.data.map(({ id, icon, url }) => (
        <IconText key={id} icon={icon} content={url} />
      ))}
    </div>
  );
}

LinksView.propTypes = {
  links: PropTypes.object.isRequired,
};

export default LinksView;
