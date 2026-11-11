import { v4 as uuidv4 } from "https://jspm.dev/uuid"; // Enables Unique IDs for todo items.

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todoList = document.querySelector(".todo__list");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {}
});

// Logic located in Todo.js
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

// Logic located in Section.js
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todo__list"
});
section.renderItems();

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopupEl);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopupEl);
  newTodoValidator.resetValidation();
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Guard: Check if form is valid before proceeding
  if (!addTodoForm.checkValidity()) return;

  const date = new Date(dateInput); // Createa a date object
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset()); // Adjust date and time for timezone

  const id = uuidv4(); // Implements use of unique ID's that we imported from v4.
  const values = { name, date, id }; // Values included for each todo item.
  const todoValues = generateTodo(values);
  section.addItem(todoValues);
  closeModal(addTodoPopupEl);
  newTodoValidator.resetValidation();
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
