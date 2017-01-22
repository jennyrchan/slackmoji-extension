import React, {Component} from 'react';
import {connect} from 'react-redux';
import slackmojis from './slackmojis';
import Slackmoji from './Slackmoji';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(slackmoji) {
    const textField = document.createElement('textarea');
    textField.innerText = slackmoji.name;
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
              slackmojis.map(slackmoji => (
                <div className="col-xs-3 emoji-container" key={slackmoji.id}>
                  <Slackmoji slackmoji={slackmoji} handleClick={this.copyToClipboard} />
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
