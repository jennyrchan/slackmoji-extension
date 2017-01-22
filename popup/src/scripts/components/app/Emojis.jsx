import React from 'react';

function Emojis (props) {

  const { emojis, handleClick } = props;

  return (
    <div className="row">
      {
        emojis.map(emoji => (
          <div className="col-xs-3 emoji-container" key={emoji.id}>
            <a href="#" onClick={() => handleClick(emoji)}>
              <img src={emoji.image} width="48" height="48" />
            </a>
          </div>
        ))
      }
    </div>
  );

}

export default Emojis;
