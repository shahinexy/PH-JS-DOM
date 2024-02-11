console.log('==============================');

// Add HTMl element by js
// const section = document.querySelector('.add_element');
const section = document.getElementsByClassName('add_element')[0];
const h2 = document.createElement('h2');
h2.innerText  = 'created this element by js dom';
section.appendChild(h2);
const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = ' ul li created by js dom';
ul.appendChild(li);
section.appendChild(ul);



// another way to create html element
const directSection = document.createElement('section');
section.innerHTML = `
<h1>This section created by js Dom. this is another way</h1>
<ul class="color">
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>
</ul>
`