function handleClick(e) {
  // e.target is the actual clicked element
  // e.currentTarget is the listener-attached element
  console.log('clicked', e.target);
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', handleClick);
// remove later
btn.removeEventListener('click', handleClick);


const list = document.getElementById('list');

list.addEventListener('click', (e) => {
  const li = e.target.closest('li'); // find nearest li ancestor (or null)
  if (!li || !list.contains(li)) return; // guard
  console.log('clicked li with id', li.dataset.id);
});
