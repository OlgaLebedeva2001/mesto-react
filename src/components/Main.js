import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace }) {
  //Информация о пользователе:
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  //Информация о карточках:
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfoApi, itemsApi]) => {
        setUserName(userInfoApi.name);
        setUserDescription(userInfoApi.about);
        setUserAvatar(userInfoApi.avatar);
        setCards(itemsApi);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const cardElements = cards.map((card) => (
    <Card key={card._id} card={card} onCardClick={onCardClick} />
  ));

  return (
    <>
      <main className="content page__content">
        {/*Информация о пользователе*/}
        <section className="profile">
          <div className='profile__header'>
            <div className="profile__avatar-container">
              <button
                className="profile__avatar-edit"
                type="button"
                aria-label="Изменить аватар"
                onClick={onEditAvatar}
              ></button>
              <img
                className="profile__avatar"
                src={userAvatar}
                alt="Ваша фотография"
              />
            </div>

            <div className="profile__info info">
              <div className='info__part'>
                <h1 className="info__title">{userName}</h1>
                <button
                  className="info__edit-button"
                  type="button"
                  aria-label="Изменить данные профиля"
                  onClick={onEditProfile}
                ></button>
              </div>
              <p className="info__subtitle">{userDescription}</p>
              
            </div>
          </div>

          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить карточку"
            onClick={onAddPlace}
          ></button>
        </section>

        {/*Карточки с фотографиями*/}
        <section className="elements">{cardElements}</section>
      </main>
    </>
  );
}

export default Main;
