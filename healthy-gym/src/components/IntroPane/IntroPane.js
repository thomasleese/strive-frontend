import React from 'react';
import backgroundImage from './images/app_background.jpg';
import iphoneImage from './images/iphone_cover_dark.png';


function IntroPane(props) {

  var style = {
    backgroundImage: "url(" + backgroundImage + ")",
    backgroundPosition: '50% 50%',
  }

  return (
    <div className="section-fade-out pt-5" style= {style}>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 my-5 text-lg-left text-center align-self-center">
            <h1 className="display-2 text-light">Healthy Gym</h1>
            <p className="lead text-light">A helpful app for tracking workout progress</p>
            <div className="row mt-5">
              <div className="col-6 col-lg-4">
                <a href="/">
                  <img className="center-block img-fluid d-block shadowed" src="assets/app/download_android.png"/>
                </a>
              </div>
              <div className="col-6 col-lg-4">
                <a href="/">
                  <img className="center-block img-fluid d-block shadowed" src="assets/app/download_ios.png"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid d-block mx-auto" src={iphoneImage} width="400"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPane
