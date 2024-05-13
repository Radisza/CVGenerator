import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';
import Languages from './user/Languages';

import './App.css';
import Experience from './user/Experience';
import Education from './user/Education';

function App() {
  const personal = Personal();
  const languages = Languages();
  const experience = Experience();
  const education = Education();

  return (
    <div className="content">
      <MainPanel
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
      />
      <Preview
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
