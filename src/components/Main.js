import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage ";
import './Main.css';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
