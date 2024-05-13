import PropTypes from 'prop-types';

function LanguagesView({ languages }) {
  const name = languages.getName();

  const lang_items = [];
  for (const item of languages.data) {
    lang_items.push(
      <div key={`${name}_${item.language}`}>{item.language}</div>
    );
    lang_items.push(
      <div key={`${item.language}_${item.level}`}>{item.level}</div>
    );
  }

  return (
    <div className="flex-column">
      {languages.data.length > 0 && <div className="title">Languages</div>}
      <div className="languagesBox">{lang_items}</div>
    </div>
  );
}

LanguagesView.propTypes = {
  languages: PropTypes.object.isRequired,
};

export default LanguagesView;
