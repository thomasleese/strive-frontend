import React from 'react';

function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/" >Healthy Gym</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">Features</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">Reviews</a>
            </li>
          </ul>
          <a className="btn navbar-btn mx-2 btn-primary shadowed" href="/">Download</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
