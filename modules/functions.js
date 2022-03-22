const addFunction = ()=>{
  form.style.display = 'none';
  contactSection.style.display = 'none';
  h1.textContent = 'All awesome books';
  list.classList.add('addUI');
  contact.classList.remove('addUI');
  navAdd.classList.remove('addUI');
  container.style.display = 'flex';
}

const adder = (e)=>{
  if (form.title.value && form.author.value) {
    const obj = new Whole(form.title.value, form.author.value);
    main.push(obj);
    localStorage.setItem('list', JSON.stringify(main));      
    // Create book every list container
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const remove = document.createElement('button');
    div.className = 'listDiv';
    // bookslistContainer = div;
    remove.textContent = 'Remove';
    remove.className = 'remove';
    container.appendChild(div);
    div.append(span1, remove);
    container.style.display = 'none';
    // Remove books from the list
    remove.addEventListener('click', () => {
      for(let i=0;i<main.length;i++){
        div.style.display = 'none';
        delete main[i];
        localStorage.setItem('list', JSON.stringify(main));
      }
    })
    span1.textContent = `"${obj.title}"  by  ${obj.author}`;
    form.title.value = null;
    form.author.value = null;  
  } else {
    e.preventDefault();
  }
}

export {addFunction, adder}
import { form, container, list, navAdd, h1, contact, contactSection } from './references.js'
import { main } from '../index.js'
import { Whole } from './class.js'