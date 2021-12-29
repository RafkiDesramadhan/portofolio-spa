// bootsstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery";
import "popper.js";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
