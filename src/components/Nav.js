import LittleLemonLogo from './assets/Logo.svg'
import './Nav.css';
import { useNavigate } from "react-router-dom";

function Nav() {

  const navigate = useNavigate()

  function clickHome(){
    navigate("/")
  }

  function clickReservation(){
    navigate("/booking")
  }

  return (
    <nav className="App-Nav">
        <img src={LittleLemonLogo} alt='"LittleLemonLogo'/>
        <ul>
          <li><a onClick={clickHome}>Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a onClick={clickReservation}>Reservation</a></li>
          <li><a>Order Online</a></li>
          <li><a>Login</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
