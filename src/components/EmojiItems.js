import React from 'react';

export default function EmojiItems(props) {
  return (
    <li
      style={{
        listStyle: 'none',
        width: '200px',
        height: '200px',
        textAlign: 'center',
        lineHeight: '200px',
        margin: '20px',
        fontSize: '30px',
        backgroundColor: 'white',
        boxShadow: '3px 5px 5px #C0E8F9',
        borderRadius: '7px',
      }}
    >
      {props.symbol}
    </li>
  );
}
