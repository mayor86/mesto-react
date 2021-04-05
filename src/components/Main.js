//import api from "../utils/api"
import React from "react";
import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <img
            alt="Аватар"
            className="profile__avatar"
            src={currentUser.avatar}
          />
          <button
            className="profile__avatar-edit-button"
            type="button"
            onClick={props.onEditAvatar}
          ></button>
          <div className="profile__zone">
            <div className="profile__zone-header">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            cardId={item._id}
            name={item.name}
            link={item.link}
            ownerId={item.owner._id}
            likesCount={item.likes.length}
            likes={item.likes}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;