import React from 'react';

import {FacebookLink, TwitterLink} from './../Links/Links';

import iphoneIpadImage from './images/ipad_image.png';
import iphoneIsometric from './images/goals_image.png';


function AboutSubpane(props) {
  return (
    <div className="row py-5">
      <div className="col-md-5 order-2 order-md-1 animate-in-down">
        <img className="img-fluid d-block my-3 mx-auto fade-in" src={iphoneIsometric} width="260" alt=""/>
      </div>
      <div className="col-md-7 align-self-center order-1 order-md-2 my-3 text-md-left text-center">
        <h2>All you need to achieve your goals</h2>
        <h4 className="text-muted">In a simple to use interface</h4>
        <p className="my-4 text-muted">
          Set goals, view progress graphs and
          improve performance through suggested sets. Track your workouts with ease
          (and style!) and create templates so you can get right into the action.
        </p>
        <a className="btn btn-outline-primary" href="#features">Learn more</a>
      </div>
    </div>
  )
}

function SupportSubpane(props) {
  return (
    <div id="help" className="row pt-5">
      <div className="align-self-center col-lg-6 text-md-left text-center">
        <h2>Get all the help you need</h2>
        <h4 className="text-muted">We're open to feedback, and we'll answer your questions</h4>
        <p className="my-4 text-muted">
          Use the links below to chat to us about anything. We want you
          to have the best experience while using the app and we strive to
          add requested features and solve your problems quickly.
        </p>
        <FacebookLink className="btn btn-lg btn-outline-primary shadowed m-1">Facebook</FacebookLink>
        <TwitterLink className="btn btn-lg btn-outline-primary shadowed m-1">Twitter</TwitterLink>
      </div>
      <div className="align-self-center mt-5 col-lg-6 animate-in-down">
        <img className="img-fluid d-block" src={iphoneIpadImage} width="600" alt=""/> </div>
    </div>
  )
}

function DescriptionPane(props) {
  return (
    <div className="py-5">
      <div className="container">
        <AboutSubpane/>
        <SupportSubpane/>
      </div>
    </div>
  )
}


export default DescriptionPane
