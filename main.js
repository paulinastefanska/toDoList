// add 
const toDoList = [];

const form = document.querySelector('form');
const taskQty = document.querySelector('h1 span');

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = titleTask + " <button>Delete</button>";
  // array
  toDoList.push(newTask);
  renderList();

  ul.appendChild(newTask);
  input.value = "";
  taskQty.textContent = liElements.length;
  newTask.querySelector('button').addEventListener('click', removeTask);
}
form.addEventListener('submit', addTask);

// new dataset key after add and remove
const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
}

// search
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.getElementsByClassName('task');

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};
input.addEventListener('input', searchTask);

// remove
const removeTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  console.log(toDoList);
  renderList();
  taskQty.textContent = liElements.length;
 };




// Rember:

// array
// const arr = [34, 445, 5566, 708, 34, 56656, 34];

// filter 
// const oddNumbers = arr.filter(number => number % 2);
// const evenNumbers = arr.filter(number => !(number % 2));
// const numbersBigger = arr.filter(number => number > 100);

// map
// const double = arr.map(number => number * 2);
// const people = arr.map(number => number + " osób");

//for each
// arr.forEach((number, index) => arr[index] = number * 2);   - way to change array
