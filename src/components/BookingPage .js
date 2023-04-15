import React from "react";
import "./BookingPage.css";

import Header from "./Header";
import Nav from "./Nav";
import BookingForm from "./BookingForm.js";
import Footer from "./Footer";
import "./HomePage.css";

function BookingPage({
  availableTimes,
  formData,
  setFormData,
  submitFormFunction
}) {



  return (
    <div className="BookingPageContainer">
      <Header />
      <Nav />
      <BookingForm
        submitFormFunction={submitFormFunction}
        availableTimes={availableTimes}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
    </div>
  );
}

export default BookingPage;
