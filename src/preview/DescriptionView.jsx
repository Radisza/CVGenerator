import PropTypes from 'prop-types';

function DescriptionView({ description, separator = '$$$' }) {
  const elems = description.split(separator);

  switch (elems.length) {
    case 0:
      return;
    case 1:
      return <div className="descriptionView">{description}</div>;
    default:
      return (
        <ul className="descriptionView">
          {elems.map((elem, idx) => (
            <li key={idx}> {elem} </li>
          ))}
        </ul>
      );
  }
}

DescriptionView.propTypes = {
  description: PropTypes.string.isRequired,
  separator: PropTypes.string,
};

export default DescriptionView;
