// Caching the element

const form = document.querySelector('#registrar');
const input = form.querySelector('input');
const ul = document.querySelector('#invitedList');
const hide =document.querySelector('#hide');

hide.addEventListener('click', function (event){
    const state = event.target.checked;
    const listElement = ul.children;
    if(state){
        for(list of listElement){
            if(list.className == 'responded'){
                list.style.display = 'block'
            }else{
                list.style.display = 'none'
            }
        }
    }else{
        for(list of listElement){
            list.style.display = 'block'
        }
    }
    
});

form.addEventListener('submit', function (event){
    if (input.value != '') {
        event.preventDefault();
        const userInput = input.value;
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = userInput;
        li.appendChild(span);

        const label = document.createElement('label');
        label.textContent = 'comfiremd';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        li.appendChild(label);

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        li.appendChild(editBtn);
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        li.appendChild(deleteBtn);

        ul.appendChild(li);
    }else{
        alert('Please Input Something')
    }
    input.value = '';
});

ul.addEventListener('change', function(event){
    const checkbox = event.target;
    const state = checkbox.checked;
    
    const li = checkbox.parentNode.parentNode;
    if(state){
        li.className = 'responded'
    }else{
        li.className = ''
    }
});

ul.addEventListener('click', function (event){
    if(event.target.tagName === 'BUTTON'){
        const button = event.target;
        const li = button.parentNode
        if(button.textContent == 'Delete'){
            li.remove();
        }else if(button.textContent == 'Edit'){
        const span = li.firstChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        
        li.insertBefore(input, span);
        span.remove();
        button.textContent = 'Update';
        }else if(button.textContent == 'Update'){
            const firstChild = li.firstChild;
            const span = document.createElement('span');
            span.textContent = firstChild.value;
            li.insertBefore(span, firstChild);
            firstChild.remove();
            button.textContent = 'Edit';
        }
    }
});