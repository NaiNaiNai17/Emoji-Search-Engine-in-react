import React from 'react';
import EmojiItems from './EmojiItems';

export default function EmojiContainer(props) {
  return (
    <ul
      style={{
        width: '80vw',
        margin: '20px 0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {props.emojiData.map((emoji) => {
        return <EmojiItems key={emoji.title} symbol={emoji.symbol} />;
      })}
    </ul>
  );
}
