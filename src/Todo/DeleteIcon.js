import React from 'react';

export default (props) => {
  return (
    <img
      src={props.imgSrc}
      alt='delete icon'
      onClick={(event) => props.delete(event.target.id)}
    />
  );
};
