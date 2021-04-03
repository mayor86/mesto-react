import PopupWithForm from "./PopupWithForm";
import React from "react"

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();
 
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submitBtnCaption="Сохранить"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
        >
          <input
            id="link-avatar-input"
            type="url"
            className="popup__input-el"
            name="link-avatar"
            placeholder="Ссылка на аватар"
            required
            ref={avatarRef}
          />
          <span className="link-avatar-input-error popup__input-el-error">
            Необходимо заполнить данное поле{" "}
          </span>{" "}
        </PopupWithForm>
  );
}
export default EditAvatarPopup;