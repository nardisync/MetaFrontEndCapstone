import Header from './Header';
import Chicago from './Chicago';
import Nav from './Nav';
import CustomersSay from './CustomersSay';
import Footer from './Footer';


function HomePage() {
    return (
      <root className="HomePage">
        <Header/>
        <Nav/>
        <Chicago/>
        <CustomersSay/>
        <Footer/>
      </root>
    );
  }
  

export default HomePage;
