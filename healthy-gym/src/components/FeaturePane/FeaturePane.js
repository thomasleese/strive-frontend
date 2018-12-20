import React from 'react';


function FeatureCard(props) {

  let iconSize = {
    fontSize: "200px"
  }

  return (
    <div className='border border-primary p-3 m-3'>
      <div className='card-body'>
        <h4 className="text-primary">{props.title}</h4>
        <p className="text-muted">{props.children}</p>
        <div className='d-flex justify-content-center'>
          <i className="fa fa-asterisk text-muted" style={iconSize}></i>
        </div>
      </div>
    </div>
  )
}


function FeaturePane(props) {

  return (
    <div className="py-5" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="pb-4">Features</h2>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="text-md-left text-center col-lg-6 col-md-6 px-0">
            <FeatureCard title="Cross Platform">
              Works just the same on iPhone<br />and on iPad.
            </FeatureCard>
            <FeatureCard title="Helps you improve">
              Gives you suggested sets and infoms you about your muscle recovery so you always get the best workout.
            </FeatureCard>
            <FeatureCard title="Quick">
              With templates you can save your regular workouts, and entering your sets is so easy with each page.
            </FeatureCard>
          </div>
          <div className="text-md-left text-center col-lg-6 col-md-6 px-0">
            <FeatureCard title="Saved in the cloud">
              Never worry about losing your gym data, it's all safe in the cloud and synced across all your devices.
            </FeatureCard>
            <FeatureCard title="Know where to improve">
              With goals and progress charts, the app will tell you where you need to improve and help you reach your goals.
            </FeatureCard>
            <FeatureCard title="And so much more…">
              Our passionate development team use the app every day and new features are being added all the time.
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FeaturePane
