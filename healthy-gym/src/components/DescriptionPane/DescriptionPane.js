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
        <h2>Simple, Helpful, and Productive</h2>
        <p className="my-4 text-muted">
          Have all your progress at the gym saved for access on any device, create templates for your workouts and set yourself goals to keep yourself improving.

          TODO: LIST MORE FEATURES HERE
        </p>
        <a className="btn btn-outline-primary" href="#features">Learn more</a>
      </div>
    </div>
  )
}

function SupportSubpane(props) {
  return (
    <div className="row pt-5">
      <div className="align-self-center col-lg-6 text-md-left text-center">
        <h2>Support</h2>
        <h4 className='text-muted' >Get Support, Ask Questions, Request features.</h4>
        <p className="my-4 text-muted">
          Follow the links below to our social media and feel free to ask questions, or request new features. ADD MORE
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
