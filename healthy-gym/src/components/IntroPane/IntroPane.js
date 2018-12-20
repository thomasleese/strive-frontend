import React from 'react';

import IOSButton from './../Buttons/Download/IOSButton';

import iphoneImage from './images/iphone_cover_dark.png';


function IntroPane(props) {

  var style = {
    height: window.innerHeight,
    display: 'flex',
    alignItems: 'stretch'
  }

  return (
    <div className="section-fade-out pt-5 backgroundGradient" style= {style}>
      <div className="container mt-5 pt-5">
        <div className="row" style={{height: '100%'}}>
          <div className="col-md-6 my-5 text-lg-left text-center align-start">
            <h1 className="display-2 text-light">Healthy Gym</h1>
            <p className="lead text-light">A helpful app for tracking workout progress</p>
            <div className="row mt-5">
              <div className="col-6 col-lg-4">
                <IOSButton />
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{display: 'flex', alignItems: 'flex-end'}}>
            <img className="img-fluid d-block mx-auto" src={iphoneImage} alt="" width="400"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPane
