'use strict';

(function () {
  const shortName = ':all_the_things';
  const emoji = "<img src='https://emojis.slackmojis.com/emojis/images/1450319440/23/all_the_things.jpg?1450319440' width='32' height='32'> ";
  let page = document.body.innerHTML;

  while (page.indexOf(shortName) >= 0) {
    const i = page.indexOf(shortName);
    const j = shortName.length;
    page = page.substr(0, i) + emoji + page.substr(i + j);
    document.body.innerHTML = page;
  }
})();
