import React, {Component} from 'react';
import {connect} from 'react-redux';
import emojiData from './emojiData';
import AddOwnEmoji from './AddOwnEmoji';
import FilterInput from './FilterInput';
import Emojis from './Emojis';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      inputValue: ''
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {

    const { copied, inputValue } = this.state;
    const filteredEmojis = emojiData.filter(emoji => emoji.name.match(inputValue));

    return (
      <div>
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
        <a href="#" onClick={() => this.props.handleClick()}>
          <button type="button" className="btn btn-primary btn-xs">Create custom emoji</button>
        </a>
        }
      </div>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);


// return (
//       <div>
//         { addOwnEmoji
//           ? <AddOwnEmoji />
//           : <div>
//               <header>
//                 <h3>Click to add an emoji!</h3>
//               </header>
//               <div className="container-fluid">
//                 <FilterInput handleChange={this.handleChange} inputValue={inputValue} />
//                 <div className="row">
//                   { copied
//                     ? <div id="copied"><h4>Copied!</h4></div>
//                     : null }
//                 </div>
//                 <Emojis emojis={filteredEmojis} handleClick={this.copyToClipboard} />
//               </div>
//               <button handleClick={this.addOwnEmoji} type="button" className="btn btn-primary btn-xs">Create custom emoji</button>
//             </div>
//         }
//       </div>
//     );
