import React, {Component} from 'react';
import {connect} from 'react-redux';
import slackmojis from './slackmojis';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    slackmojis.forEach(slackmoji => convertToEmoji(slackmoji.name, slackmoji.image));

    function convertToEmoji (shortName, image) {
      const emoji = `<img src=${image} width='32' height='32'>`
      let page = document.body.innerHTML;

      while (page.indexOf(shortName) >= 0) {
        const i = page.indexOf(shortName);
        const j = shortName.length;
        page = page.substr(0, i) + emoji + page.substr(i + j);
        document.body.innerHTML = page;
      }
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(App);
