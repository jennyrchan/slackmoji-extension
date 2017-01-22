import React from 'react';

function Emoji (props) {

  const emoji = props.emoji;

  return (
    <a href="#" onClick={() => props.handleClick(emoji)}>
      <img src={emoji.image} width="48" height="48" />
    </a>
  );

}

export default Emoji;
