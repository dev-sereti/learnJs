// Create and append safely
const li = document.createElement('li');         // create element
li.textContent = 'Buy milk';                      // safe text insertion
li.setAttribute('data-id', '42');                 // set attribute
document.getElementById('tasks').appendChild(li); // append to DOM