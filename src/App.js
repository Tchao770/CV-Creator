import General from "./components/General.js"
import Educational from "./components/Educational.js"
import Practical from "./components/Practical.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <General/>
      <Educational/>
      <Practical/>
    </div>
  );
}

export default App;