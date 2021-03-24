const addTaskButton = document.querySelector('.add');
const clearAllButtons = document.querySelector('.remove-all');
const removeTask = document.querySelector('.delete-icon');

let ul = document.querySelector('.list');
let getLiFromDom = document.querySelector('.row');

const input = document.querySelector('#input[type="text"]');



function createTask() {
    let li = document.createElement('li');


    li.classList.add('row');

    let span = document.createElement('span');
    span.addEventListener('click', deleteTask);

    let a = document.createElement('a');
    a.innerHTML = '&#10006;';
    

    ul.appendChild(li);
    li.append(input.value);
    li.append(span);
    span.append(a);
    
    
};

const yesModalButton = document.querySelector('.yes-modal-button');
const noModalButton = document.querySelector('.no-modal-button');
let warningModal = document.querySelector('.warning-modal');
let overlay = document.querySelector('.overlay');

function showModalAlert() {
    warningModal.style.display = 'block';
    overlay.style.display = 'block';
}

function hideModalAlert() {
    warningModal.style.display = 'none';
    overlay.style.display = 'none';
}


function removeAll() {
    ul.innerHTML = '';

    warningModal.style.display = 'none';
    overlay.style.display = 'none';
}

deleteTask = function() {
    this.parentNode.remove();
}


addTaskButton.addEventListener('click', createTask);
document.addEventListener('keydown', function(event){
    if (event.code === 'Enter') {
        createTask();
    }
})

clearAllButtons.addEventListener('click', showModalAlert);
yesModalButton.addEventListener('click', removeAll);
noModalButton.addEventListener('click', hideModalAlert);
