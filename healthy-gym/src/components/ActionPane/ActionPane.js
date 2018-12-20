import React from 'react';
import IOSButton from './../Buttons/Download/IOSButton';
import isometricImage from './images/iphone_isometric_dark.png'

function ActionPane(props) {

  return (
    <div className="py-5 bg-primary" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-6 animate-in-left">
            <img className="img-fluid d-block my-4 animate-slide-in" src={isometricImage} /> </div>
          <div className="col-md-6 align-self-center text-center text-md-left">
            <h1><b>Download Healthy Gym</b></h1>
            <p className="lead text-dark"><b className="text-white">Get it on your iOS device right now</b></p>
            <div className="row mt-5">
              <div className="col-6 col-lg-4">
                <IOSButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ActionPane
