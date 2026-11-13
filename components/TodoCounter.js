class TodoCounter {
  // todos should be the array of inital todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((todo) => todo.completed).length; // number of completed todos
    this._total = todos.length; // the total number of todos
    this._updateText();
    console.log(this._element);
    console.log(this._completed);
    console.log(this._total);
  }

  // Call this when a checkbox is clicked, and when a completed todo is deleted
  updateCompleted = (increment) => {
    // If increment is true, adds 1 to this._completed, otherwise subtracts 1.
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  // Call this when a todo is deleted, or when a todo is created via the form.
  updateTotal = (increment) => {
    // in increment is true, adds 1 to this._total, otherwise subtracts 1.
    this._total += increment ? 1 : -1;
    this._updateText();
    console.log(increment + " is the increment");
  };

  // Call this method to update the text content
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
