import logo from '../.././assets/logo.svg'

function HeaderIcon() {
    return (
        <a href="#" className="text-decoration-none text-uppercase silkscreen-regular text-white">
            <img src={logo} className="header-logo" alt="logo" />
            Streameo
        </a>
    );
}

export default HeaderIcon;