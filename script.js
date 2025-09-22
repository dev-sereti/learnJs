const frag = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  frag.appendChild(li);
}
document.getElementById('bigList').appendChild(frag);


const card = document.getElementById('card');
console.log(card.dataset.userName); // "kelvin"
card.dataset.status = 'active';     // sets data-status="active"
