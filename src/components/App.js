import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: '', alt: '', isOpen: false});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {    
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard({name: name, link: link, alt: name, isOpen: true});
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: '', alt: '', isOpen: false});
  }

  return (
   <> 
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  
    <PopupWithForm 
      name="edit-profile" 
      title="Редактировать профиль"
      submitBtnCaption="Сохранить"
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
    >
      <input id="profile-name-input" type="text" className="popup__input-el" name="profile-name" minLength="2"
      maxLength="40" placeholder="Имя" required /> 
      <span className="profile-name-input-error popup__input-el-error">Необходимо заполнить данное поле</span>
      <input id="profile-job-input" type="text" className="popup__input-el" name="profile-job" minLength="2" maxLength="200"
      placeholder="О себе" required />
      <span className="profile-job-input-error popup__input-el-error">Необходимо заполнить данное поле</span>
    </PopupWithForm>
    
    <PopupWithForm 
      name="add-card" 
      title="Новое место" 
      submitBtnCaption="Создать"
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
    >
      <input id="place-name-input" type="text" className="popup__input-el" name="place-name" placeholder="Название"
          minLength="2" maxLength="30" required />
        <span className="place-name-input-error popup__input-el-error">Необходимо заполнить данное поле</span>
        <input id="link-image-input" type="url" className="popup__input-el" name="link-image" placeholder="Ссылка на картинку"
          required />
        <span className="link-image-input-error popup__input-el-error">Необходимо заполнить данное поле</span>
    </PopupWithForm>

    <PopupWithForm 
      name="confirmation" 
      title="Вы уверены?"
      submitBtnCaption="Да"
    />

    <PopupWithForm 
        name="avatar" 
        title="Обновить аватар"
        submitBtnCaption="Сохранить"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
    >
      <input id="link-avatar-input" type="url" className="popup__input-el" name="link-avatar" placeholder="Ссылка на аватар"
          required />
      <span className="link-avatar-input-error popup__input-el-error">Необходимо заполнить данное поле</span>
    </PopupWithForm>
    
    <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
    />
  </>
  );
}

export default App;
