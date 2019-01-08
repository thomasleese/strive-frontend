import React from 'react';

function CardRow(props) {

  return (
    <div className="row justify-content-around align-content-stretch align-items-stretch">
      {props.children.map( (child, index) => (
        <div key={index} className="text-md-left text-center col-lg-4 col-md-6 px-0 d-flex">
          {child}
        </div>
      ))}
    </div>
  )
}

export default CardRow
