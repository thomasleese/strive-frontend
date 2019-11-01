import React from 'react';

import IOSImage from './images/download_ios.png';

function IOSButton(props) {
  return (
    <div>
      <a href="https://itunes.apple.com/us/app/healthy-gym/id1453225146?ls=1&mt=8">
        <img
          style={{borderRadius: '10px'}}
          className="center-block img-fluid d-block shadowed"
          src={IOSImage}
          alt="Download on the App Store"
        />
      </a>
    </div>
  );
}

export default IOSButton;
