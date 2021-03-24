import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import MedicamentsList from "./components/get-all-medicaments.component";
import AddMedicaments from "./components/add-medicament.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={MedicamentsList} />
        <Route path="/add" component={AddMedicaments} />
      </div>
    </Router>

  );
}

export default App;
