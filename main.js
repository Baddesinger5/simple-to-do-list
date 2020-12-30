// open overlay 
let helpBtn = document.querySelector('#help');
let overlay = document.querySelector('.overlay-help');

helpBtn.addEventListener('click', function(){
    overlay.style.display = 'block';
});

let clsBtn = document.querySelector('#close');
clsBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
});

// add task

let addToDo = document.querySelector('.green');

addToDo.addEventListener('click', function(){
    let input = document.querySelector('input').value;
    let ul = document.querySelector('.tasks-list');

    let createLi = document.createElement('li');
    createLi.classList.add('task');
    createLi.style.marginTop = 10 + 'px';
    createLi.style.marginBottom = 10 + 'px';
    createLi.style.display = 'flex';
    createLi.style.alignItems = 'center';

    let createSpan = document.createElement('span');

    let createLink = document.createElement('a');
    createLink.classList.add('remove-icon');
    createLink.innerHTML = '&#10006';
    createLink.setAttribute('style', 'color: #ffffff; font-size: 20px;');

    let insert = ul.appendChild(createLi);
    insert.innerHTML = input; // add clear input after enter info
    createLi.append(createSpan, createLink);

    // removing task

    createLink.addEventListener('click', function(e) {
        e.preventDefault();
        createLink.remove();
        createLi.remove();
    })
    
    // clear all tasks
    let clearBtn = document.querySelector('.blue');
    clearBtn.addEventListener('click', function(){
        createLi.remove('li');
    })
})


