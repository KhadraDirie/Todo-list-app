//Selectors
//document.querySelector() method we are storing html elements with specific class to their respective constants. Now constants todoInput, todoButton, todoList, filterOption contains html elements.
const todoInput = document.querySelector ('.todo-input');

const todoButton = document.querySelector ('.todo-button');

const todoList = document.querySelector ('.todo-list');

const filterOption = document.querySelector('.filter-todo');



//Event Listerners
todoButton. addEventListener('click', addTodo);
todoList.addEventListener('click',deleteTodo);
filterOption.addEventListener('click', filterTodo);


//Functions

function addTodo(event){
    //PREVENT FROM SUBMITTING
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText =todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //TRASH BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';

}

function deleteTodo(e) {
    const item = e.target;
  //DELETE ITEM FROM TODO
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      //ANIMATION
      todo.classList.add('fall');
      //ONCE THE ANIMATION FINIHSES , REMOVE THE ELEMENT USING:/ THIS WILL EXECUTE THE FUNCTION:
      todo.addEventListener('transitionend', function(){
        todo.remove()
        
      })
    }


//CHECK MARK 
if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
    
   
  }

}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {


  const todos = todoList.childNodes;

  todos.forEach(function(todo) {
    if (todo.nodeType == Node.ELEMENT_NODE) {
         switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'none';
                }
                else{
                    todo.style.display = "flex";
                }
                break;
        }
    }
}) 
}


//SAVE WITH LOCAL STORAGE 
//LocalStorage is a form of web storage provided by the browser that allows web applications to store data locally within a user's browser with no expiration date


