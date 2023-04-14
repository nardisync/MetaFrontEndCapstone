import Header from './Header';
import Chicago from './Chicago';
import Nav from './Nav';
import CustomersSay from './CustomersSay';
import Footer from './Footer';
import './HomePage.css'


function HomePage() {
    return (
      <root>
        <div className='HomePageContainer'>          
          <Header/>
          <Nav/>
          <Chicago/>
          <CustomersSay/>
          <Footer/>
        </div>
      </root>
    );
  }
  

export default HomePage;
