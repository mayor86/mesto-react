function PopupWithForm(props) {
	const popupOpenClass = props.isOpen ? "popup_opened" : ""

	return (
		<div className={`popup popup-${props.name} ${popupOpenClass}`}>
			<form
				className='popup__container'
				name={`${props.name}-popup`}
				noValidate
				onSubmit={props.onSubmit}
			>
				<h3 className='popup__title'>{props.title}</h3>
				{props.children && props.children}
				<button type='submit' className='popup__submit-button'>
					{props.submitBtnCaption}
				</button>
				<button
					type='button'
					className='popup__close-button'
					onClick={props.onClose}
				></button>
			</form>
		</div>
	)
}
export default PopupWithForm