import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;


function isIt(boolean){
    if (boolean) {
        return "Да"
    } else return "Не";
};

var backendURI = "http://localhost:5000/";

const Medicament = props => (
    

    <tr>
      <td>{props.medicament.name}</td>
      <td>{isIt(props.medicament.isAvailable)}</td>
      <td>{isIt(props.medicament.doesExpireAfterOpen)}</td>
      <td>{props.medicament.expirationDate.substring(0,10)}</td>
    </tr>
  )

export default class MedicamentsList extends Component {
    constructor(props) {
        super(props);

        this.state={medicaments: []};
    }

    componentDidMount() {
        axios.get(`${backendURI}medicaments/`)
            .then( response => {
                this.setState({medicaments: response.data})
            })
            .catch(err=> {
                console.error(err);
            })
    }

    medicamentsList() {
        return this.state.medicaments.map(currentMedicament => {
            return <Medicament medicament={currentMedicament} key={currentMedicament._id} />
        })
    }


    render() {
        return (
            <div>
                <h3>Списък на медикаментите</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Име</th>
                            <th>Наличност</th>
                            <th>Разваля ли се след отваряне</th>
                            <th>Годно до</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.medicamentsList()}
                    </tbody>
                </table>
            </div>
        );
    }    
}
