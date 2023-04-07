import LittleLemonLogo from './assets/Logo.svg'
import './Nav.css';

function Nav() {
  return (
    <nav className="App-Nav">
        <img src={LittleLemonLogo} alt='"LittleLemonLogo'/>
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a>Reservation</a></li>
          <li><a>Order Online</a></li>
          <li><a>Login</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
