function Card({card, onCardClick}) {
    function handleClick() {
      onCardClick(card);
    }
  
    return (
      <div className="elements__element element">
         <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <button
          className="element__del"
          id="element__delete-card"
          type="button"
          aria-label="Удалить"
        ></button>
       
        <div className="element__description description">
          <h2 className="description__title">{card.name}</h2>
          <div className="description__like like">
            <button
              className="like__vector"
              type="button"
              aria-label="Нравится"
            ></button>
            <p className="like__quantity">{card.likes.length}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;