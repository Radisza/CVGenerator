import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';
import Languages from './user/Languages';

import './App.css';

function App() {
  const personal = Personal();
  const languages = Languages();

  return (
    <div className="content">
      <MainPanel personal={personal} languages={languages} />
      <Preview personal={personal} languages={languages} />
    </div>
  );
}

export default App;
