import Accordion from "./Accordion";
import woman from './images/illustration-woman-online-desktop.svg'
import box from './images/illustration-box-desktop.svg'

function App() {
  return (
    <div className="card-container">
      <div>
        <img src={woman} alt="hero" />
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
