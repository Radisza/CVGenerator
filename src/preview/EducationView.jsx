import PropTypes from 'prop-types';
import DescriptionView from './DescriptionView';

function EducationView({ education }) {
  const items = [];
  for (const item of education.data) {
    items.push(
      <div key={`left-${item.id}`}>
        <div>
          {item.since} - {item.until}
        </div>
        <div>{item.location}</div>
      </div>
    );
    items.push(
      <div key={`right-${item.id}`}>
        <div className="bold">{item.schoolName}</div>
        <div className="bold">{item.profile}</div>
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
      {education.data.length > 0 && (
        <div className="big-title">{education.getName()}</div>
      )}
      <div className="twoColumnsBoxRight">{items}</div>
    </div>
  );
}

EducationView.propTypes = {
  education: PropTypes.object.isRequired,
};

export default EducationView;
