function handleClick(e) {
  // e.target is the actual clicked element
  // e.currentTarget is the listener-attached element
  console.log('clicked', e.target);
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', handleClick);
// remove later
btn.removeEventListener('click', handleClick);
