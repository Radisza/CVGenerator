import PropTypes from 'prop-types';
import DescriptionView from './DescriptionView';

function ExperienceView({ experience }) {
  const items = [];
  for (const item of experience.data) {
    items.push(
      <div key={`left-${item.id}`}>
        {item.since} - {item.until}
      </div>
    );
    items.push(
      <div key={`right-${item.id}`} className="bold">
        {item.company}, {item.jobTitle}
      </div>
    );
    items.push(
      <DescriptionView
        key={`description_${item.id}`}
        description={item.description}
      />
    );
  }

  return (
    <div className="flex-column">
      {experience.data.length > 0 && (
        <div className="big-title">{experience.getName()}</div>
      )}
      <div className="twoColumnsBoxRight">{items}</div>
    </div>
  );
}

ExperienceView.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceView;
