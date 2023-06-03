// <!-- ЗАДАЧА 2 -->
const formEl = document.querySelector("#task-form");
const listEl = document.querySelector("#task-list");
const TASK_KEY = "task_key";
createMarcap();
formEl.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const inputEl = evt.target.elements.taskName.value.trim();
  if (!inputEl) return;
  addTask(inputEl);
  evt.currentTarget.reset();
}
function addTask(e) {
  const id = Math.random();
  const task = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

  task.push({ id, name: e });
  localStorage.setItem(TASK_KEY, JSON.stringify(task));
  createMarcap(task);
}
function createMarcap() {
  const taskData = JSON.parse(localStorage.getItem(TASK_KEY));
  if (!taskData) return;
  listEl.innerHTML = "";
  const marcap = taskData
    .map((element) => {
      return `<li><p>${element.name}</p></li>`;
    })
    .join("");

  listEl.insertAdjacentHTML("beforeend", marcap);
}
const buttonEl = document.querySelectorAll(".remove_button");
console.log(buttonEl);
