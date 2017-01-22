import React, {Component} from 'react';
import Emoji from './Emoji';

class Emojis extends Component {

  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyToClipboard = this.copyToClipboard.bind(this);
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

  render() {
    const { copied } = this.state;
    const emojis = this.props.emojis;

    return (
      <div className="row">
        {
          emojis.map(emoji => (
            <div className="col-xs-3 emoji-container" key={emoji.id}>
              <Emoji emoji={emoji} handleClick={this.copyToClipboard} />
            </div>
          ))
        }
        <div className="row">
          { copied
            ? <div id="copied"><h4>Copied!</h4></div>
            : null }
        </div>
      </div>
    );
  }
}

export default Emojis;
