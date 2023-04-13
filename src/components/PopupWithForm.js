function PopupWithForm({ name, title, isOpen, onClose, children, buttonText }) {
    return (
      <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" method="get" name={`popup-${name}`}>
            {children}
            <button
            className="popup__button-submit popup__button-submit_valid"
            type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;
  