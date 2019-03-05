import React from 'react';

import CardRow from './../CardRow/CardRow';


function Card(props) {
  return (
    <div className=' card border border-primary p-3 m-3 animate-in-down align-items-stretch align-content-stretch w-100'>
      <div className="card-body">
        <h5 className="card-title text-center">{props.title}</h5>
        <span className='text-muted mb1'>{props.subtitle}</span>
        <div className="card-text py-3">
          {props.children}
        </div>
        <p className="text-center mt-4">
          <a href="/" className="btn btn-primary">{props.linkText}</a>
        </p>
      </div>
    </div>
  )
}

function PricingPane(props) {
  return (
    <div className="py-5 bg-primary" id="download">
      <div className="container">
        <CardRow largeClass="col-lg-6">
          <Card title="Free" linkText="Download Soon">
            <h5 className="lead text-center mb-4">Try free with five workouts!</h5>
            <ul className="list-group text-left">
              <li className="list-group-item">5 workouts</li>
              <li className="list-group-item">3 templates</li>
            </ul>
          </Card>
          <Card title="Pro" linkText="Download Soon">
          <h5 className="lead text-center mb-4">£2.99 a month or £27.99 a year.</h5>
            <ul className="list-group text-left">
              <li className="list-group-item">Unlimited Workouts</li>
              <li className="list-group-item">Unlimited Workout Templates</li>
              <li className="list-group-item">Add Goals</li>
              <li className="list-group-item">Progress Charts</li>
              <li className="list-group-item">Suggested Sets</li>
            </ul>
          </Card>
        </CardRow>
      </div>
    </div>
  )
}


export default PricingPane
