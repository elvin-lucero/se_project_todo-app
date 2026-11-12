class TodoCounter {
    // todos should be the array of inital todos
    // selector is the selector for the counter text element
    constructor(todos, selector) {
        this._element = // select the appropriate element
        this._completed = // number of completed todos
        this._total = // the total number of todos
    }

    // Call this when a checkbox is clicked, 
    // and when a completed todo is deleted
    updateCompleted = (increment) => {
        // in increment is true, add 1 to this._completed. Otherwise,
        // subtract 1. In either case, call the method to update 
        // the text content.
    };

    // Call this when a todo is deleted, 
    // or when a todo id created via the form.
    updateTotal = (increment) => {
        // in increment is true, add 1 to this._total. Otherwise,
        // subtract 1. In either case, call the method to update
        // the text content.
    };

    // Call the method to update teh text content
    _updateText() {
        // Sets the text content of corresponding text element.
        // Call this in teh constructor, and whenever the counts get updated.
        this._element.textContent = 'Showing ${this._completed} out of ${this._total} completed';
    }
}

export default TodoCounter;