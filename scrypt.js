const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    if(input.value==''){
        alert('Write some text');
        return;
    }else{
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    li.innerText = input.value;
    const deletButton = document.createElement('button');
    deletButton.innerText = 'Delete';
   
    list.appendChild(li);
    li.appendChild(deletButton);
    input.value = '';

    deletButton.addEventListener('click', () => {
        list.removeChild(li);
    })
}
})

