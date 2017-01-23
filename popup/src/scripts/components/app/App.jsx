import React, {Component} from 'react';
import {connect} from 'react-redux';
import emojiData from './emojiData';
import Emojis from './Emojis';
import FilterInput from './FilterInput';
import AddOwnEmoji from './AddOwnEmoji';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      inputValue: '',
      addOwnEmoji: true
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addOwnEmoji = this.addOwnEmoji.bind(this);
  }

  copyToClipboard(emoji) {
    const textField = document.createElement('textarea');
    textField.innerText = emoji.name;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    this.setState({ copied: true });
  }

  handleChange(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue: inputValue });
  }

  addOwnEmoji() {
    emojiData.push({
      id: 29,
      name: ':carlton:',
      image: 'https://emojis.slackmojis.com/emojis/images/1450319453/122/carlton.gif?1450319453'
    });
    this.setState({ addOwnEmoji: false })
  }

  render() {

    const { copied, inputValue, addOwnEmoji } = this.state;
    const filteredEmojis = emojiData.filter(emoji => emoji.name.match(inputValue));

    return (
      <div>
        { addOwnEmoji
          ? <button onClick={this.addOwnEmoji} />
          : <div>
              <header>
                <h3>Click to add an emoji!</h3>
              </header>
              <div className="container-fluid">
                <FilterInput handleChange={this.handleChange} inputValue={inputValue} />
                <div className="row">
                  { copied
                    ? <div id="copied"><h4>Copied!</h4></div>
                    : null }
                </div>
                <Emojis emojis={filteredEmojis} handleClick={this.copyToClipboard} />
              </div>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
