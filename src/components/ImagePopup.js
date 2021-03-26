function ImagePopup(props) {
  const popupOpenClass = props.card.isOpen ? 'popup_opened' : 'popup_closed';
  
  return (
  <div className={`popup popup-image ${popupOpenClass}`}>
    <div className="popup-image__container">
      <img className="popup-image__image" alt="Фото места"
        src={props.card.link} />
      <h3 className="popup-image__title">{props.card.name}</h3>
      <button type="button" className="popup__close-button popup-image__close-button" onClick={props.onClose}></button>
    </div>
  </div>
  );
}

export default ImagePopup;