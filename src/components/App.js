import React from "react";
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState("");
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState("");
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }


  return (    
      <div className='page'>
        <Header/>

        <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
        />

        <Footer/>

        <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_avatar"
            type="url"
            name="avatar"
            id="avatar"
            required
            placeholder="Ссылка на новый аватар"
          />
          <span className="avatar-error popup__input-error"></span>
        </div>
        <button
          className="popup__button-submit popup__button-submit_valid"
          type="submit"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_name"
            type="text"
            name="name"
            id="name"
            minLength="2"
            maxLength="40"
            required
            placeholder="Имя"
          />
          <span className="name-error popup__input-error"></span>
        </div>
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_job"
            type="text"
            name="job"
            id="job"
            minLength="2"
            maxLength="200"
            required
            placeholder="О себе"
          />
          <span className="job-error popup__input-error"></span>
        </div>
        <button
          className="popup__button-submit popup__button-submit_valid"
          type="submit"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_title-img"
            type="text"
            name="pictureTitle"
            id="title-img"
            required
            minLength="2"
            maxLength="30"
            placeholder="Название места"
          />
          <span className="title-img-error popup__input-error"></span>
        </div>
        <div className="popup__label">
          <input
            className="popup__input  popup__input_type_link"
            type="url"
            name="pictureLink"
            id="link"
            required
            placeholder="Ссылка на изображение"
          />
          <span className="link-error popup__input-error"></span>
        </div>
        <button
          className="popup__button-submit popup__button-submit_valid"
          type="submit"
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups}>
        <button
          className="popup__button-submit popup__button-submit_valid"
          type="submit"
        >
          Да
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        
      </div>
    
  );
}

export default App;
