import React from 'react';
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={
            props.imageSrc === 'N/A'
              ? `https://via.placeholder.com/700x600.png?text=${props.title
                  .split(' ')
                  .join('+')}`
              : props.imageSrc
          }
          alt="123"
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">{props.type}</i>
        </span>
        <p>{props.year}</p>
      </div>
    </div>
  );
};

export { Card };
