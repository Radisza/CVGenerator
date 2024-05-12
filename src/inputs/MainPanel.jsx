import FormItem from './FormItem';
import PersonalForm from './PersonalForm';
import PropTypes from 'prop-types';

function MainPanel({ personal }) {
  const setUserData = (data) => {
    personal.setNewData(data.personal);
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
        renderForm={(onSubmit) => (
          <PersonalForm personal={personal} onSubmit={onSubmit} />
        )}
      />
    </div>
  );
}

MainPanel.propTypes = {
  personal: PropTypes.object.isRequired,
};

export default MainPanel;
