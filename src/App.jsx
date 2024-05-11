import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';

import './App.css';

function App() {
  const personal = Personal();

  return (
    <div className="content">
      <MainPanel personal={personal} />
      <Preview personal={personal} />
    </div>
  );
}

export default App;
