import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleLogout = () => {
    // dispatch( startLogout() );
    console.log('handleLogout');
  }

  return (
    <div className="">
      <div className="navbar navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Bank App
          </span>

          <button
            className="btn btn-outline-danger"
            onClick= { handleLogout }
          >
            <i className="fas fa-sign-out-alt"></i>
            <span className="ms-1">Salir</span>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
