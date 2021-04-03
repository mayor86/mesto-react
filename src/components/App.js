import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
    alt: "",
    isOpen: false,
  });

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function handleCardLike(likes, cardId) {
    const isLiked = likes.some((i) => i._id === currentUser._id);

    if (isLiked) {
      api.setCardDislike(cardId).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === cardId ? newCard : c)));
      });
    } else {
      api.setCardLike(cardId).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === cardId ? newCard : c)));
      });
    }
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId).then((data) => {
      setCards((state) =>
        state.filter((c) => (c._id === cardId ? false : true))
      );
    });
  }

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
    setSelectedCard({
      name: name,
      link: link,
      alt: name,
      isOpen: true,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      name: "",
      link: "",
      alt: "",
      isOpen: false,
    });
  }

  function handleUpdateUser(name, description) {
    api
      .sendUserInfo(name, description)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((e) => {
        console.log(e);
      });

    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api
      .changeAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((e) => {
        console.log(e);
      });

    closeAllPopups();
  }

  function handleAddPlaceSubmit(place, link) {
    api
      .sendNewCard(place, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((e) => {
        console.log(e);
      });

    closeAllPopups();
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm
          name="confirmation"
          title="Вы уверены?"
          submitBtnCaption="Да"
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;