import React from 'react';
import featureImage from "./images/iphone_features_dark.png";

function FeaturePane(props) {

  return (
    <div className="py-5" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="pb-4">Features</h2>
          </div>
        </div>
        <div className="row">
          <div className="align-self-center text-md-right text-center col-lg-4 col-md-6">
            <h4 className="text-primary">Easy Use</h4>
            <p className="mb-5 text-muted">. <br/>Works with IPhones and IPads</p>
            <h4 className="text-primary">Customized settings</h4>
            <p className="mb-5 text-muted">Choose settings depending on the criteria you value the most. With no limits.</p>
            <h4 className="text-primary">Connect</h4>
            <p className="mb-5 text-muted">In-app chat panel 24/7 active. <br/>The support you need, right there.</p>
          </div>
          <div className="align-self-center text-md-left text-center col-lg-4 col-md-6">
            <h4 className="text-primary">Battery-friendly</h4>
            <p className="mb-5 text-muted">Non consuming background operation for longer mobile life</p>
            <h4 className="text-primary">Multilayers</h4>
            <p className="mb-5 text-muted">Work simultaneously on different panels with the switcher</p>
            <h4 className="text-primary">Share the love</h4>
            <p className="mb-5 text-muted">Help us spreading the word. <br/>Tell your friends with just one-click</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FeaturePane
