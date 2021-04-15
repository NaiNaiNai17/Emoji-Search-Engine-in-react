import React from 'react';
import GitHubButton from 'react-github-btn';

export default function Header() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Search Emoji &#127752;</h1>
      <p>Emoji search engine with ReactJS</p>
      <p>
        <GitHubButton
          href='https://github.com/NaiNaiNai17'
          data-icon='octicon-star'
          data-text='star'
          data-show-count={true}
          data-size='large'
        />
        &nbsp;&nbsp;
        <GitHubButton
          href='https://github.com/NaiNaiNai17'
          data-icon='octicon-repo-forked'
          data-text='fork'
          data-show-count={true}
          data-size='large'
        />
      </p>
    </div>
  );
}
