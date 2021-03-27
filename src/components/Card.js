function Card(props) {
	function handleClick() {
		props.onCardClick(props.name, props.link)
	}

	return (
		<div className='elements__item'>
			<img
				className='elements__photo'
				alt='Фото места'
				src={props.link}
				onClick={handleClick}
			/>
			<div className='elements__title-zone'>
				<h3 className='elements__title'>{props.name}</h3>
				<div className='elements__like-zone'>
					<button className='elements__like' type='button'></button>
					<div className='elements__like-count'>{props.likes}</div>
				</div>
			</div>
			<button type='button' className='elements__remove-item'></button>
		</div>
	)
}

export default Card
