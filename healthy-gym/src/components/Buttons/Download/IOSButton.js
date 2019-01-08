import React from 'react';
import IOSImage from './images/download_ios.png';

function IOSButton(props) {

  return (
    <div>
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

function ComingSoon(props) {
  return (
    <button type="button" class="btn btn-primary btn-lg">Coming soon to iOS</button>
  )
}


export default ComingSoon
