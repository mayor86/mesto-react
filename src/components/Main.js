import api from '../utils/api';
import React from 'react';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((e) => {
        console.log(e);
      })
  });

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((e) => {
        console.log(e);
      })
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
        <img alt="Аватар" className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} />
          <button className="profile__avatar-edit-button" type="button" onClick={props.onEditAvatar}></button>
          <div className="profile__zone">
            <div className="profile__zone-header">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" >
        {cards.map((item) => (
            <Card 
              key = {item._id}
              name = {item.name}
              link = {item.link}
              likes = {item.likes.length}
              onCardClick = {props.onCardClick}
            />
          ))}
      </section>
    </main>
  );
}

export default Main;
