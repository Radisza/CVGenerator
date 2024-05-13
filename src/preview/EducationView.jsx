import PropTypes from 'prop-types';

function EducationView({ education }) {
  const items = [];
  for (const item of education.data) {
    items.push(
      <div className="flex-column" key={`left-${item.id}`}>
        <div>
          {item.since} - {item.until}
        </div>
        <div>{item.location}</div>
      </div>
    );
    items.push(
      <div className="flex-column" key={`right-${item.id}`}>
        <div className="bold">{item.schoolName}</div>
        <div className="bold">Profile: {item.profile}</div>
        <div>{item.description}</div>
      </div>
    );
  }

  return (
    <div className="flex-column">
      {education.data.length > 0 && (
        <div className="middle-title">{education.getName()}</div>
      )}
      <div className="twoColumnsBox">{items}</div>
    </div>
  );
}

EducationView.propTypes = {
  education: PropTypes.object.isRequired,
};

export default EducationView;
