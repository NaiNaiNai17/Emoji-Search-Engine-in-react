import React from 'react';
import EmojiContainer from './components/EmojiContainer';
import Header from './components/header';
import emojilist from './json/emoji.json';
console.log(emojilist);

class App extends React.Component {
  state = { searchValue: '', emojiData: emojilist };

  grabValueFromInput = (e) => {
    console.log('user is typing');

    //store input data into state
    let filterEmoji = emojilist.filter((item) => {
      let inputValue = e.target.value.toLowerCase();
      if (item.title.toLowerCase().includes(inputValue)) {
        return true;
      }
      if (item.keywords.toLowerCase().includes(inputValue)) {
        return true;
      }
      return false;
    });
    this.setState({
      searchValue: e.target.value,
      emojiData: filterEmoji,
    });
  };

  render() {
    console.log('render in app', this.state.searchValue);
    return (
      <div
        className='App'
        style={{
          border: '.5px solid #C0E8F9',
          backgroundColor: '#70E4EF',
          height: '300px',
          padding: '40px',
          color: '#EF709D',
          textShadow: '1px .7px  .3px #00A3A0',
          fontFamily: 'Montserrat',
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
        <EmojiContainer emojiData={this.state.emojiData} />
      </div>
    );
  }
}

export default App;
