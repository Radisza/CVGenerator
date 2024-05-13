import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';
import Languages from './user/Languages';

import './App.css';
import Experience from './user/Experience';

function App() {
  const personal = Personal();
  const languages = Languages();
  const experience = Experience();

  return (
    <div className="content">
      <MainPanel
        personal={personal}
        languages={languages}
        experience={experience}
      />
      <Preview
        personal={personal}
        languages={languages}
        experience={experience}
      />
    </div>
  );
}

export default App;
