import {addFunction, adder} from './modules/functions.js'
import {add, form, container, round, list, navAdd, btn, body, h1, contact, logo, contactSection} from './modules/references.js'
export { main}
import { DateTime } from "./node_modules/luxon/src/luxon.js";

// Clock with date and hour
const dateSpan = document.querySelector('#span');
const dateShower = ()=>{
  // const date = new DateTime();
  let year = DateTime.now().year;
  let month = DateTime.now().month;
  let day = DateTime.now().day;
  let hour = DateTime.now().hour;
  let minute = DateTime.now().minute;
  let second = DateTime.now().second;
  dateSpan.textContent = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
}
setInterval(dateShower, 1000);

// Add books to the list
const main = [];

add.addEventListener('click', adder);
const inputAuthor = document.querySelector('#author');
inputAuthor.addEventListener('keyup', e =>{
  if(e.keyCode === 13){
    adder();
  }
});

// Taking information from the local storage when page loads
window.addEventListener('load', ()=>{
  list.classList.add('addUI');
  let something = localStorage.getItem('list');
  let parsing = JSON.parse(something);
  for(let i=0;i<parsing.length;i++){
    if(parsing[i]){
      main.push(parsing[i]);
      // Create book every list container
      let div = document.createElement('div');
      const span1 = document.createElement('span');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
      div.className = 'listDiv';
      container.appendChild(div);
      div.append(span1, remove);
      container.style.display = 'flex';
      span1.textContent = `"${parsing[i].title}"  by  ${parsing[i].author}`;
      remove.addEventListener('click', ()=>{
        delete parsing[i]
        localStorage.setItem('list', JSON.stringify(parsing))
        div.style.display = 'none';
      })  
    }
  }
})

// Navigation event listeners
navAdd.addEventListener('click', ()=>{
  form.style.display = 'flex';
  contactSection.style.display = 'none';
  h1.textContent = 'Add a new book';
  navAdd.classList.add('addUI');
  list.classList.remove('addUI');
  contact.classList.remove('addUI');
  container.style.display = 'none';
})

list.addEventListener('click', addFunction)

contact.addEventListener('click', ()=>{
  form.style.display = 'none';
  h1.textContent = 'Contact information';
  contactSection.style.display = 'flex';
  contact.classList.add('addUI');
  navAdd.classList.remove('addUI');
  list.classList.remove('addUI');
  container.style.display = 'none';
})

logo.addEventListener('click', addFunction);

// Night mode button functionality
let day = 1;
btn.addEventListener('click', ()=>{
  round.classList.toggle('toggle');
  body.classList.toggle('body-night-mode');
  day++;
  localStorage.setItem('night', day);
})

window.addEventListener('load', ()=>{
  let isDay = localStorage.getItem('night');
  let getdata = JSON.parse(isDay);
  day = getdata;
  if(getdata % 2 == 0){
    body.classList.add('body-night-mode');
    round.classList.add('toggle');
  }
})
