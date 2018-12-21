import React from 'react';

function Footer(props) {

  return (
    <div className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-1 align-self-center my-3">
            <a href="https://www.facebook.com" target="blank">
              <i className="fab fa-facebook fa-3x text-light"></i>
            </a>
          </div>
          <div className="col-4 col-md-1 align-self-center my-3">
            <a href="https://twitter.com" target="blank">
              <i className="fab fa-fw fa-twitter fa-3x text-light"></i>
            </a>
          </div>
          <div className="col-4 col-md-1 align-self-center my-3">
            <a href="https://www.instagram.com" target="blank">
              <i className="fab fa-fw fa-medium fa-3x text-light"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 my-3 text-center">
            <p className="text-muted">© Copyright 2019 Orycion - All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
