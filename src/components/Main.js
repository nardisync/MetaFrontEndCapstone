import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage ";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const updateTimes = () => {
    return setAvailableTimes(fetchAPI(availableTimes.dataForm));
  };

  const initializeTimes = fetchAPI(new Date());

  const submitAPI = function (formData) {
    return true;
  };

  let [availableTimes, setAvailableTimes] = React.useReducer(
    updateTimes,
    initializeTimes
  );
  let [formData, setFormData] = React.useState({
    dataForm: "",
    availableTimesForm: "",
    numberOfGuestForm: "",
    occasionForm: "",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              formData={formData}
              setFormData={setFormData}
            />
          }
        ></Route>
        <Route
          path="/booking-confirmation"
          element={<ConfirmedBooking formData={formData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
