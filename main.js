//create task
const addBtn = document.querySelector('.add');
let input = document.querySelector("#input[type='text']");
let getUl = document.querySelector('.list');

addBtn.addEventListener('click', function() {
    let createLi = document.createElement('li');
    createLi.classList.add('row');

    let createSpan = document.createElement('span');
    createSpan.innerHTML = '&#10006;';

    getUl.appendChild(createLi);
    createLi.append(input.value);
    createLi.append(createSpan);

    // //delete one task
    // let spanDetected = document.querySelector('span');
    // spanDetected.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     spanDetected.remove();
    //     createLi.remove();

    // })

    // delete all
    const removeAll = document.querySelector('.remove-all');
    removeAll.addEventListener('click', function() {
        createLi.remove();
        createSpan.remove();
    })

})



