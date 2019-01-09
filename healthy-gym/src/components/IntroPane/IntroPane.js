import React from 'react';

import IOSButton from './../Buttons/Download/IOSButton';

import iphoneImage from './images/workout_image.png';


function IntroPane(props) {

  var style = {
    minHeight: window.innerHeight,
    display: 'flex',
    alignItems: 'stretch'
  }

  return (
    <div className="section-fade-out pt-5 background-gradient" style= {style}>
      <div className="container mt-5 pt-5">
        <div className="row" style={{height: '100%'}}>
          <div className="col-md-6 my-5 text-lg-left text-center align-start">
            <h1 className="display-3 text-light">Healthy Gym</h1>
            <h4 className="display-5 text-light">Your new favourite gym companion.</h4>
            <p className="lead text-light">Join a growing community of gym goers who track their workouts using Healthy Gym.</p>
            <div className="row mt-5">
              <div className="col-6 col-lg-4">
                <IOSButton />
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{display: 'flex', alignItems: 'flex-start'}}>
            <img className="img-fluid d-block mx-auto" src={iphoneImage} alt="" width="300"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPane
