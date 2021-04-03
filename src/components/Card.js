import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.ownerId === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? "" : "elements__remove_hidden";
  const isLiked = props.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked ? "popup__like_checked" : ""}`;

  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  function handleLikeClick() {
    props.onCardLike(props.likes, props.cardId);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.cardId);
  }

  return (
    <div className="elements__item">
      <img
        className="elements__photo"
        alt="Фото места"
        src={props.link}
        onClick={handleClick}
      />
      <div className="elements__title-zone">
        <h3 className="elements__title">{props.name}</h3>
        <div className="elements__like-zone">
          <button
            className={`elements__like ${cardLikeButtonClassName}`}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <div className="elements__like-count">{props.likesCount}</div>
        </div>
      </div>
      <button
        type="button"
        className={`elements__remove-item ${cardDeleteButtonClassName}`}
        onClick={handleDeleteClick}
      ></button>
    </div>
  );
}

export default Card;