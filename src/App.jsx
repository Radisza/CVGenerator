import MainPanel from './inputs/MainPanel';
import Preview from './preview/Preview';
import Personal from './user/PersonalInfo';
import Languages from './user/Languages';
import Skills from './user/Skills';
import Experience from './user/Experience';
import Education from './user/Education';
import { usePDF } from 'react-to-pdf';
import './App.css';

function App() {
  const personal = Personal();
  const languages = Languages();
  const experience = Experience();
  const education = Education();
  const skills = Skills();

  const pdfOptions = {
    filename: 'cv.pdf',
    method: 'open',
    page: {
      margin: 0.3,
    },
    overrides: {
      pdf: {
        applyImageFit: true,
      },
    },
  };
  const { toPDF, targetRef } = usePDF(pdfOptions);

  return (
    <div className="content">
      <MainPanel
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
        skills={skills}
        toPdf={toPDF}
      />
      <Preview
        personal={personal}
        languages={languages}
        experience={experience}
        education={education}
        skills={skills}
        cvRef={targetRef}
      />
    </div>
  );
}

export default App;
