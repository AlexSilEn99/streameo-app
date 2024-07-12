import HeaderIcon from './HeaderIcon';
import './Header.css'
import Navbar from './Navbar';

function Header() {
    return (
        <nav className="navbar navbar-expand-xl header-bg">
            <div className="container">
                <HeaderIcon/>
                <Navbar/>
            </div>
        </nav>
  );
}

export default Header;