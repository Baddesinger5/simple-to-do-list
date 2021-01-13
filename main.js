//create task
// const addBtn = document.querySelector('.add');
// let input = document.querySelector("#input[type='text']");
// let getUl = document.querySelector('.list');
// let emptyArray = [];

// let liMaker = addBtn.addEventListener('click', function() {
//     let createLi = document.createElement('li');
//     createLi.classList.add('row');

//     let createSpan = document.createElement('span');

//     let createLink = document.createElement('a');
//     createLink.innerHTML = '&#10006;';

//     getUl.appendChild(createLi);
//     createLi.append(input.value);
//     createLi.append(createSpan);
//     createSpan.append(createLink);

//     // //delete one task
//     function removeItem() {
//         let eachItem = this;
//             createLink.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 createLi.remove(eachItem);
//                 createLink.remove(eachItem);
//     })
//     } removeItem();
    
//     // delete all
//     const removeAll = document.querySelector('.remove-all');
//     removeAll.addEventListener('click', function() {
//         createLi.remove();
//         createSpan.remove();
//         localStorage.clear();
//     })
// })

//===========================================================================

//create task
const addBtn = document.querySelector('.add');
let input = document.querySelector("#input[type='text']");
let getUl = document.querySelector('.list');

//create li
const makeLi = function (value) {
    
    let createLi = document.createElement('li');
    createLi.classList.add('row');

    let createSpan = document.createElement('span');

    let createLink = document.createElement('a');
    createLink.innerHTML = '&#10006;';

    createLi.append(value);
    createLi.append(createSpan);
    createSpan.append(createLink);
    
        
    // //delete one task
    function removeItem() {
        let eachItem = this;
            createLink.addEventListener('click', function(e) {
                e.preventDefault();
                createLi.remove(eachItem);
                createLink.remove(eachItem);
            })
    } removeItem();
    return createLi;
}

// add task on keypressed
input.addEventListener('keyup', function(keyPressed) {
    if (keyPressed.keyCode == 13) {
        const value = input.value;
    
        // Add item to storage
        storageItems.push(value);
        localStorage.storageItems = JSON.stringify(storageItems);
        input.value = '';

        getUl.appendChild(makeLi(value));
    }
})
/*
    Init first list
*/
JSON.parse(localStorage.storageItems || '[]').map(function(n) {
	getUl.appendChild(makeLi(n));
})


// delete all
const removeAll = document.querySelector('.remove-all');
removeAll.addEventListener('click', function() {
/*   createLi.remove();
  createSpan.remove(); */
  localStorage.clear();
  getUl.innerHTML = '';
})

const storageItems = JSON.parse(localStorage.storageItems || '[]');

let maker = addBtn.addEventListener('click', function() {
    
	const value = input.value;
    
    // Add item to storage
    storageItems.push(value);
    localStorage.storageItems = JSON.stringify(storageItems);
    input.value = '';

    getUl.appendChild(makeLi(value));

})








