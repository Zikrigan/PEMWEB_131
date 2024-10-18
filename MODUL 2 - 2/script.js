// Function to add a new to-do item
function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value;
  
    if (todoText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const todoList = document.getElementById('todo-list');
    
    // Create a new list item
    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;
    
    // Create Edit and Delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
      const newTodoText = prompt("Edit task:", textSpan.textContent);
      if (newTodoText !== null) {
        textSpan.textContent = newTodoText;
      }
    };
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      todoList.removeChild(listItem);
    };
    
    listItem.appendChild(textSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  
    // Clear the input
    input.value = "";
  }
  