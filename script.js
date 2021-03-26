const addTaskButton = document.querySelector('.add');
const clearAllButtons = document.querySelector('.remove-all');
const removeTask = document.querySelector('.delete-icon');

let ul = document.querySelector('.list');
let getLiFromDom = document.querySelector('.row');

const input = document.querySelector('#input[type="text"]');

//localStorage
//создать массив, перевести его в строчное значение, затем в этот массив мы кладем каждый созданный элемент
//после обновления страницы нам надо его распарсить и вывести на страницу 


//localStorage

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

    if (input.value == '' || input.value == ' ' || input.value == '  ' || input.value == '   ' || input.value == '    ') {
        li.innerHTML = '';
        li.remove(span);
    }

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
    localStorage.clear();
    warningModal.style.display = 'none';
    overlay.style.display = 'none';
}

let deleteTask = function() {
    this.parentNode.remove();
}



addTaskButton.addEventListener('click', createTask);
document.addEventListener('keydown', function(event){
    if (event.code === 'Enter') {
        createTask();
        input.value = '';
    }
});
addTaskButton.addEventListener('click', function() {
    input.value = '';
})
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('input').forEach(function(e) {
        if(e.value === '') {
            e.value = sessionStorage.getItem(e.name, e.value);
        }
        e.addEventListener('input', function() {
            sessionStorage.setItem(e.name, e.value);
        })
    })

}); 


clearAllButtons.addEventListener('click', showModalAlert);
document.addEventListener('keydown', function(event) {
    if(event.code === 'Escape') {
        warningModal.style.display = 'none';
        overlay.style.display = 'none';
    }
})
overlay.addEventListener('click', function(event) {
    if(!event.target.classList.contains('warning-modal')) {
        warningModal.style.display = 'none';
        overlay.style.display = 'none';
    }
});
yesModalButton.addEventListener('click', removeAll);
noModalButton.addEventListener('click', hideModalAlert);



//сделать добавления тасков в локалстордж
//сделать удаление из локалстордж при удалении элемента
//сделать очистку локалстордж при полном удалении листа

