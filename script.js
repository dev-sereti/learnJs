el.classList.add('open');      // add
el.classList.remove('open');   // remove
el.classList.toggle('open');   // toggle
el.classList.contains('foo');  // check

// styles
el.style.backgroundColor = 'salmon';
const cs = getComputedStyle(el); // read computed styles (read-only)
