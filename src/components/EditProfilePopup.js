import PopupWithForm from "./PopupWithForm";
import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser(name, description);
  }

  function onInputNameChange(e) {
    setName(e.target.value);
  }

  function onInputDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      submitBtnCaption="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name-input"
        type="text"
        className="popup__input-el"
        name="profile-name"
        minLength="2"
        maxLength="40"
        placeholder="Имя"
        required
        value={name}
        onChange={onInputNameChange}
      />
      <span className="profile-name-input-error popup__input-el-error">
        Необходимо заполнить данное поле
      </span>{" "}
      <input
        id="profile-job-input"
        type="text"
        className="popup__input-el"
        name="profile-job"
        minLength="2"
        maxLength="200"
        placeholder="О себе"
        required
        value={description}
        onChange={onInputDescriptionChange}
      />
      <span className="profile-job-input-error popup__input-el-error">
        Необходимо заполнить данное поле
      </span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
