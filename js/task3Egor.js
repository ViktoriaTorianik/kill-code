// // <!-- ЗАДАЧА 2 -->
// const formEl = document.querySelector("#task-form");
// const listEl = document.querySelector("#task-list");
// const TASK_KEY = "task_key";
// createMarcap();
// formEl.addEventListener("submit", onSubmit);
// function onSubmit(evt) {
//   evt.preventDefault();
//   const inputEl = evt.target.elements.taskName.value.trim();
//   if (!inputEl) return;
//   addTask(inputEl);
//   evt.currentTarget.reset();
// }
// function addTask(e) {
//   const id = Math.random();
//   const task = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

//   task.push({ id, name: e });
//   localStorage.setItem(TASK_KEY, JSON.stringify(task));
//   createMarcap(task);
// }
// function createMarcap() {
//   const taskData = JSON.parse(localStorage.getItem(TASK_KEY));
//   if (!taskData) return;
//   listEl.innerHTML = "";
//   const marcap = taskData
//     .map((element) => {
//       return `<li><p>${element.name}</p></li>`;
//     })
//     .join("");

//   listEl.insertAdjacentHTML("beforeend", marcap);
// }
// const buttonEl = document.querySelectorAll(".remove_button");
// console.log(buttonEl);


const TASKS_KEY = "TASKS_KEY";
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
renderTasks();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = e.target.elements.taskName.value.trim();
  if (!task) return;

  addSingleTask(task);
  e.target.reset();
});

function addSingleTask(name) {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  const id = Math.random();
  tasks.push({ name, id });
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  const task = createTask(name, id);
  taskList.append(task);
}

function createTask(name, id) {
  const listItem = document.createElement("li");
  const task = document.createElement("p");
  const button = document.createElement("button");

  listItem.style.display = "flex";
  task.textContent = name;
  button.textContent = "Удалить";
  button.addEventListener("click", () => {
    const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));
    const filteredTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem(TASKS_KEY, JSON.stringify(filteredTasks));
    renderTasks();
  });
  listItem.appendChild(task);
  listItem.appendChild(button);
  return listItem;
}

function renderTasks() {
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY));
  if (!tasks || !tasks.length) return;
  const items = tasks.map(({ name, id }) => createTask(name, id));
  taskList.append(...items);
}