'use strict'

// load style.css.
let style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('css/style.css');
(document.head||document.documentElement).appendChild(style);

// notification.
console.log('The Scrapbox Links Relocator Chrome Extension is running on your Scrapbox.');
