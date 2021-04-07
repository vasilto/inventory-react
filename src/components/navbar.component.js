import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">MedInvent</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/all" className="nav-link">Списък с Лекарства</Link>
              </li>
              <li className="navbar-item">
              <Link to="/add" className="nav-link">Добави Лекарства</Link>
              </li>
              <li className="navbar-item">
              <Link to="/user" className="nav-link">Създай Лечение</Link>
              </li>
            </ul>
            </div>
          </nav>
        );
    }    
}
