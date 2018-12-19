import React from 'react';

function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <h1 className="navbar-brand" >Healthy Gym</h1>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <h1 className="nav-link">Features</h1>
            </li>
            <li className="nav-item mx-2">
              <h1 className="nav-link">Reviews</h1>
            </li>
          </ul>
          <h1 className="btn navbar-btn mx-2 btn-primary shadowed" >Download</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
