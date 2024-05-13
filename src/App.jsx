import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';
import Languages from './user/Languages';
import Skills from './user/Skills';
import Experience from './user/Experience';
import Education from './user/Education';

import './App.css';

function App() {
  const personal = Personal();
  const languages = Languages();
  const experience = Experience();
  const education = Education();
  const skills = Skills();

  return (
    <div className="content">
      <MainPanel
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
        skills={skills}
      />
      <Preview
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
        skills={skills}
      />
    </div>
  );
}

export default App;
