import './App.css';
import Drawer from "./Components/Drawer/";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
          <Drawer />
      </Router>
    </div>
  );
}

export default App;
