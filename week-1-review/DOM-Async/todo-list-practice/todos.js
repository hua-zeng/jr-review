// Please open todos.html with Liver Server to view this page

// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
  console.log('ToDo DOM loaded');

  // Hard-coded user and todos array
  const user = 'TRYDENT';
  const todos = [{ name: 'star the trydent repo' }];

  // Create and display the title header
  const title = document.createElement('h1');
  title.innerText = `ToDo List`;
  document.querySelector('#todoHome').appendChild(title);

  // Create a new div to hold the "Create a New ToDo" form
  const createTodoDiv = document.createElement('div');
  createTodoDiv.setAttribute('id', 'createTodo');
  document.querySelector('#todoHome').appendChild(createTodoDiv);

  // Create a heading for the form
  const createTodoLabel = document.createElement('h2');
  createTodoLabel.innerText = 'Create a New Task';
  document.querySelector('#createTodo').appendChild(createTodoLabel);

  // Create the form element
  const createTodoForm = document.createElement('form');
  createTodoForm.setAttribute('id', 'create-todo-form');
  document.querySelector('#createTodo').appendChild(createTodoForm);
  // Create an input field for the task name in the form
  const todoName = document.createElement('input');
  todoName.setAttribute('type', 'text');
  todoName.setAttribute('id', 'create-todo-name');
  todoName.setAttribute('placeholder', 'ToDo Name');
  document.querySelector('#createTodo').appendChild(todoName);
  // Create a submit button for the form
  const todoSubmit = document.createElement('input');
  todoSubmit.setAttribute('type', 'submit');
  todoSubmit.setAttribute('id', 'create-todo-submit');
  todoSubmit.setAttribute('value', 'Submit');
  document.querySelector('#createTodo').appendChild(todoSubmit);

  // Display the "Your ToDos" header
  const todoLabel = document.createElement('h2');
  todoLabel.innerText = 'Your ToDos';
  document.querySelector('#todoHome').appendChild(todoLabel);

  // Create the container for the tasks
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('id', 'todoDiv');
  document.querySelector('#todoHome').appendChild(todoDiv);
  // Add existing tasks to the DOM [try adding a task in the todos array and reloading the page]
  todos.forEach((todo) => {
    addTaskToDOM(todo);
  });

  // Function to add a task to the DOM. These will be the boxes that show up on submission
  function addTaskToDOM(task) {
    // Create a new div to hold the task item
    const todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'todoItem');
    document.querySelector('#todoDiv').appendChild(todoItem);
    // <h3> Element for the task name
    const todoName = document.createElement('h3');
    todoName.innerText = task.name;
    todoItem.appendChild(todoName); // referring to the todoItem in line 60, not the class! How might we refer to a class?
    // <button> Element for the delete button
    const todoDelete = document.createElement('button');
    todoDelete.setAttribute('class', 'todoDelete');
    todoDelete.innerText = 'Delete';
    todoItem.appendChild(todoDelete);
  }

  // Handle the deletion of a todo
  document.querySelector('#todoDiv').addEventListener('click', (e) => {
    if (e.target.className === 'todoDelete') {
      const todoIndex = Array.from(
        e.target.parentNode.parentNode.children
      ).indexOf(e.target.parentNode);
      console.log('To delete:', todoIndex);
      todos.splice(todoIndex, 1); // Remote the task from the local todos array
      e.target.parentNode.remove(); // Remove the task from the DOM
    }
  });

  // Action when the "Create a New ToDo" form is submitted
  document
    .querySelector('#create-todo-submit')
    .addEventListener('click', (e) => {
      e.preventDefault();
      const todoName = document.querySelector('#create-todo-name').value;
      const task = {
        name: todoName,
      };
      todos.push(task); // Add the new task to the local todos array
      addTaskToDOM(task); // Add the new task to the DOM
    });

  const newDiv = document.createElement('div');
  newDiv.innerText = 'This is a new div';
  document.body.appendChild(newDiv);

  // test button
  const button = document.querySelector('#test-button');

  // function will log 'Button clicked!'
  function handleClick() {
    todos.length = 0;

    const todoDiv = document.querySelector('#todoDiv');
    todoDiv.innerHTML = '';

    console.log('All tasks cleared!');
  }

  // listening for a 'click' event on the button. When the event happens, runs handleClick
  button.addEventListener('click', handleClick);
});
