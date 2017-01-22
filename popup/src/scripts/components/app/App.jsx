import React, {Component} from 'react';
import {connect} from 'react-redux';
import initialState from './initialState';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" width="200">
        <h1>Your Favorite Slackmojis</h1>
        <div className="row">
          {
            initialState.map(slackmoji => (
              <div className="col-xs-1" key={slackmoji.id}>
                <h4>{slackmoji.name}</h4>
                <img src={slackmoji.image} width="32" height="32" />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
