import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';
import slackmojis from './components/app/slackmojis';

const proxyStore = new Store({portName: 'example'});

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

const onAppEnter = () => {
  console.log('APP ENTERED', slackmojis);
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

render(
  <Provider store={proxyStore}>
    <App onEnter={onAppEnter} />
  </Provider>
  , document.getElementById('rcr-anchor'));
