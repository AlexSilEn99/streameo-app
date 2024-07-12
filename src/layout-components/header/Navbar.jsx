function Navbar() {
  return (
      <div id="navbarContent">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Search</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">My Library</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">My Profile</a></li>
              <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
          </ul>
      </div>
  );
}

export default Navbar;