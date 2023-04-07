import LittleLemonLogo from './assets/Logo.svg'
import './Footer.css';

function Footer() {
  return (
    <footer className="App-Footer">

        <img src={LittleLemonLogo} alt='"LittleLemonLogo'/>
        
        <div className="DoormatNavigation Footer">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservation</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
        
        <div className="Contact Footer">
          <h4>Contact</h4>
          <ul>
            <li><a>Address</a></li>
            <li><a>Phone Number</a></li>
            <li><a>Email</a></li>
          </ul>
        </div>

        <div className="Footer SocialMediaLinks">
          <h4>Social Media Links</h4>
          <ul>
            <li><a>Address</a></li>
            <li><a>Phone Number</a></li>
            <li><a>Email</a></li>
          </ul>
        </div>

    </footer>
  );
}

export default Footer;
