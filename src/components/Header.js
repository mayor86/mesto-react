import logo from "../images/mesto-logo.svg"

function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Mesto логотип' className='logo' />
		</header>
	)
}

export default Header
