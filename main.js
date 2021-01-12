//create task
const addBtn = document.querySelector('.add');
let input = document.querySelector("#input[type='text']");
let getUl = document.querySelector('.list');

addBtn.addEventListener('click', function() {
    let createLi = document.createElement('li');
    createLi.classList.add('row');
    

    let createSpan = document.createElement('span');

    let createLink = document.createElement('a');
    createLink.innerHTML = '&#10006;';

    getUl.appendChild(createLi);
    createLi.append(input.value);
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
    }
    removeItem();
    

    // delete all
    const removeAll = document.querySelector('.remove-all');
    removeAll.addEventListener('click', function() {
        createLi.remove();
        createSpan.remove();
        localStorage.clear();
    })

})







