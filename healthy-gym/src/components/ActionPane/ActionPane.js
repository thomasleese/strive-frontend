import React from 'react';
import IOSButton from './../Buttons/Download/IOSButton';
import isometricImage from './images/iphone_isometric_dark.png';
import runningImage from './images/barbell.jpg';

function ActionPane(props) {

  let style = {
     backgroundImage: "url(" + runningImage + ")",
     backgroundPosition: 'top left',
     height: '500px',
     backgroundSize: '100%',
  }

  return (
    <div className="py-5 bg-primary" id="download" style={style}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center text-center text-md-left">
            <h1 className='text-light'><b>Download Healthy Gym</b></h1>
            <p className="lead text-light"><b className="text-light">Get it on your iOS device right now</b></p>
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
