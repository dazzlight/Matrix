import "@fortawesome/fontawesome-free/js/all";
import "bootstrap";
//Styles
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//0)Doc loaded get list and save variables
// 1)Add event Listner
//2) Find input field
// 3) get Value
// 4)Get ul
//5) Create new li element (checkbox + text+ icon)

let importantAndUrgent;
let importantAndNotUrgent;
let notImportantAndUrgent;
let notImportantAndNotUrgent;

(function() {
  importantAndUrgent = document.getElementById("importantAndUrgent");
  importantAndNotUrgent = document.getElementById("importantAndNotUrgent");
  notImportantAndUrgent = document.getElementById("notImportantAndUrgent");
  notImportantAndNotUrgent = document.getElementById(
    "notImportantAndNotUrgent"
  );

  const quadrants = [
    importantAndUrgent,
    importantAndNotUrgent,
    notImportantAndUrgent,
    notImportantAndNotUrgent
  ];

  quadrants.forEach(quadrant => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
  });
})();

function addNewTask(quadrant) {
  const value = getInputValue(quadrant);
  if (value) {
    addNewItem(value, quadrant);
  } else {
    alert("Please add value to input");
  }
}

function getInputValue(quadrant) {
  return quadrant.getElementsByClassName("new-task-input")[0].value;
}

function addNewItem(value, quadrant) {
  const list = quadrant.getElementsByClassName("todoList")[0];
  const newLi = getLiWithText(value);
  list.appendChild(newLi);
}
function delLiTodo() {
  this.parentElement.remove();
}

function moveIntoDone(newListItem, quadrant) {
  const listDone = quadrant.getElementsByClassName("doneList")[0];
  listDone.appendChild(newListItem);
}

function getLiWithText(value, quadrant) {
  const newListItem = document.createElement("li");
  const checkbox = getCheckBox();
  const text = document.createTextNode(" " + value);
  const space = document.createTextNode(" ");
  const icon = getDeleteIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(text);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  checkbox.addEventListener("click", () => {
    moveIntoDone(newListItem, quadrant);
  });
  return newListItem;
}

function getCheckBox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}

function getDeleteIcon() {
  const i = document.createElement("i");
  i.className = "fas fa-trash";
  const spanIcon = document.createElement("span");
  spanIcon.appendChild(i);
  spanIcon.addEventListener("click", delLiTodo);
  return spanIcon;
}

// function moveIntoTodo(newListItem, quadrant) {
//   const listDone = quadrant.getElementsByClassName("todoList")[0];
//   listDone.appendChild(newListItem);
//   const checkbox = newListItem.getElementsByTagName("input")[0];
//   checkbox.addEventListener("click", () => {
//     moveIntoDone(newListItem, quadrant);
//   });
// }
