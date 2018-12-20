import React from 'react';


function FeatureCard(props) {

  return (
    <div className='border border-primary p-3 m-3'>
      <div className='card-body'>
        <h4 className="text-primary">{props.title}</h4>
        <p className="mb-5 text-muted">{props.children}</p>
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
            <FeatureCard title="Easy Use">
              Stuff <br/>Works with IPhones and IPads
            </FeatureCard>
            <FeatureCard title="Customized settings">
              Choose settings depending on the criteria you value the most. With no limits.
            </FeatureCard>
            <FeatureCard title="Connect">
              In-app chat panel 24/7 active. <br/>The support you need, right there.
            </FeatureCard>
          </div>
          <div className="text-md-left text-center col-lg-6 col-md-6 px-0">
            <FeatureCard title="Easy Use">
              Stuff <br/>Works with IPhones and IPads
            </FeatureCard>
            <FeatureCard title="Customized settings">
              Choose settings depending on the criteria you value the most. With no limits.
            </FeatureCard>
            <FeatureCard title="Connect">
              In-app chat panel 24/7 active. <br/>The support you need, right there.
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FeaturePane
