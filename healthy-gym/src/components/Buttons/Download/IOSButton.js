import React from 'react';
import IOSImage from './images/download_ios.png';

function IOSButton(props) {

  return (
    <div style={{borderRadius: '20px'}}>
      <a href="/">
        <img
          style={{borderRadius: '10px'}}
          className="center-block img-fluid d-block shadowed"
          src={IOSImage}
          alt="Download on the App Store"
        />
      </a>
    </div>
  )
}


export default IOSButton
