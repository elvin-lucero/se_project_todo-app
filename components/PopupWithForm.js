import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector }); // Passing the valueto the parent class.
  }
}

export default PopupWithForm;
