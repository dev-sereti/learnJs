// Common selectors
const elById = document.getElementById('myId');          // fast, single element
const elsByClass = document.getElementsByClassName('tag'); // live HTMLCollection
const elsByTag = document.getElementsByTagName('li');    // live HTMLCollection
const qs = document.querySelector('.my-class');         // first match
const qsa = document.querySelectorAll('ul > li');       // static NodeList (forEach works)
