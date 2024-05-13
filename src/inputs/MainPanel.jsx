import FormBox from './FormBox';
import FormItem from './FormItem';
import PersonalForm from './PersonalForm';
import LanguageForm from './LanguageForm';
import ExperienceForm from './ExperienceForm';
import PropTypes from 'prop-types';

function MainPanel({ personal, languages, experience }) {
  const setUserData = (data) => {
    personal.setNewData(data.personal);
    languages.setNewData(data.languages);
    experience.setNewData(data.experience);
  };

  const handleLoadExample = async ({ src = '/example.json' }) => {
    let response = await fetch(src);
    let data = await response.json();

    setUserData(data);
  };

  const handleLoadFiles = async (e) => {
    if (e.target.files.length == 0) {
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      const json_data = JSON.parse(reader.result);
      setUserData(json_data);
    };

    reader.onerror = (e) => {
      console.log(`Can't read file ${file}. Error ${e}`);
    };

    reader.readAsText(file);
  };

  const handleClear = () => {
    personal.clearData();
    languages.clearData();
    experience.clearData();
  };

  return (
    <div className="mainPanel">
      <div className="mainPanelButtons">
        <button onClick={handleLoadExample}> Load example </button>
        <button onClick={handleClear}>Clear all</button>
      </div>
      <div className="formInput">
        <label htmlFor="exampleFile">Or load your file</label>
        <input
          type="file"
          id="exampleFile"
          onChange={handleLoadFiles}
          accept=".json"
          multiple={false}
        />
      </div>
      <FormItem
        name={personal.data.fullName || 'Personal data'}
        form={<PersonalForm personal={personal} />}
      />
      <FormBox
        items={languages}
        generateForm={(language) => (
          <LanguageForm obj={languages} toRender={language} />
        )}
      />
      <FormBox
        items={experience}
        generateForm={(exp) => (
          <ExperienceForm obj={experience} toRender={exp} />
        )}
      />
    </div>
  );
}

MainPanel.propTypes = {
  personal: PropTypes.object.isRequired,
  languages: PropTypes.object.isRequired,
  experience: PropTypes.object.isRequired,
};

export default MainPanel;
