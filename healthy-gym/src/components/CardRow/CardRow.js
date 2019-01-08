import React from 'react';

function CardRow(props) {

  return (
    <div className="row justify-content-around align-content-stretch align-items-stretch">
      {props.children.map( (child, index) => (
        <div key={index} className={"text-md-left text-center px-0 d-flex " + props.largeClass + " " + props.mediumClass}>
          {child}
        </div>
      ))}
    </div>
  )
}

CardRow.defaultProps = {
  largeClass: 'col-lg-4',
  mediumClass: 'col-md-6',
}

export default CardRow
