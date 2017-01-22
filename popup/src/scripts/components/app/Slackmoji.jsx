import React from 'react';

function Slackmoji (props) {

  const slackmoji = props.slackmoji;

  return (
    <a href="#" onClick={() => props.handleClick(slackmoji)}>
      <img src={slackmoji.image} width="48" height="48" />
    </a>
  );

}

export default Slackmoji;
