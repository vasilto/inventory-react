import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar.component";
import MedicamentsList from "./components/get-all-medicaments.component";
import AddNewMedicament from "./components/add-new-medicament.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/all" exact component={MedicamentsList} />
        <Route path="/add" exact component={AddNewMedicament} />
      </div>
    </Router>

  );
}

export default App;
