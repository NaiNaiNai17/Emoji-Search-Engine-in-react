import React from 'react';
import Header from './components/header';
import emojilist from './json/emoji.json';

class App extends React.Component {
  state = { searchValue: '' };

  grabValueFromInput = (e) => {
    console.log('user is typing');

    //store input data into state
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    console.log('render in app', this.state.searchValue);
    return (
      <div
        className='App'
        style={{
          border: '.5px solid #3772FF',
          backgroundColor: '#70E4EF',
          height: '200px',
          padding: '20px',
          color: '#EF709D',
          textShadow: '.5px .7px  .3px #F038FF',
        }}
      >
        <Header />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type='text'
            style={{
              fontSize: '20px',
              width: '400px',
              padding: '5px',
              borderStyle: 'none',
              borderRadius: '5px',
              boxShadow: '.5px .5px #F038FF',
            }}
            onChange={this.grabValueFromInput}
          />
        </div>
      </div>
    );
  }
}

export default App;
