import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default class AddMedicaments extends Component {
    render() {

        return (
            <form class="row g-4">
                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" required></input>  
                </div>
                <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

        );
    }    
}
