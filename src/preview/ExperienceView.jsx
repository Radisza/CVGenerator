import PropTypes from 'prop-types';

function ExperienceView({ experience }) {
  const items = [];
  for (const item of experience.data) {
    items.push(
      <div className="flex-column" key={`left-${item.id}`}>
        <div>
          {item.since} - {item.until}
        </div>
      </div>
    );
    items.push(
      <div className="flex-column" key={`right-${item.id}`}>
        <div className="bold">
          {item.company}, {item.jobTitle}
        </div>
        <div>{item.description}</div>
      </div>
    );
  }

  return (
    <div className="flex-column">
      {experience.data.length > 0 && (
        <div className="middle-title">{experience.getName()}</div>
      )}
      <div className="twoColumnsBox">{items}</div>
    </div>
  );
}

ExperienceView.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceView;
