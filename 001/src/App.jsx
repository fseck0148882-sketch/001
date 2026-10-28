import InfoPerso from './composants/InfoPerso';
import Competence from './composants/Competence';
import Experience from './composants/Experience';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <InfoPerso />
      <hr />
      <Competence />
      <hr />
      <Experience />
    </div>
  );
}

export default App;