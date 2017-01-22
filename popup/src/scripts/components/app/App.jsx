import React, {Component} from 'react';
import {connect} from 'react-redux';
import emojis from './emojis';
import Emoji from './Emoji';

class App extends Component {
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
    return (
      <div>
        <header>
          <h3>Click to add an emoji!</h3>
        </header>
        <div className="container-fluid">
          <div className="row">
            {
              emojis.map(emoji => (
                <div className="col-xs-3 emoji-container" key={emoji.id}>
                  <Emoji emoji={emoji} handleClick={this.copyToClipboard} />
                </div>
              ))
            }
          </div>
          <div className="row">
            {
              this.state.copied
              ? <div id="copied"><h4>Copied!</h4></div>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
