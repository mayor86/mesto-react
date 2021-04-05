import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const placeNameRef = React.useRef();
  const placeLinkRef = React.useRef();

  React.useEffect(() => {
    placeNameRef.current.value = "";
    placeLinkRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace(placeNameRef.current.value, placeLinkRef.current.value);
  }

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      submitBtnCaption="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="place-name-input"
        type="text"
        className="popup__input-el"
        name="place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        ref={placeNameRef}
      />
      <span className="place-name-input-error popup__input-el-error">
        Необходимо заполнить данное поле
      </span>
      <input
        id="link-image-input"
        type="url"
        className="popup__input-el"
        name="link-image"
        placeholder="Ссылка на картинку"
        required
        ref={placeLinkRef}
      />
      <span className="link-image-input-error popup__input-el-error">
        Необходимо заполнить данное поле
      </span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;