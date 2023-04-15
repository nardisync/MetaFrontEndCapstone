import React, { useEffect, useState } from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, formData, setFormData}) {
  
  let [buttonDisabled, setButtonDisabled] = useState(true);

  const navigate = useNavigate()

  function handleChanges(event) {

    console.log("Data:", availableTimes, formData )

    if ("undefined" in formData) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }

    const { name, value, type, checked } = event.target;
    setFormData((previousData) => {
      return {
        ...previousData,
        [name]: value,
      };
    });
  }

  
  


  function handlerSubmit(event) {
    event.preventDefault()
    console.log(formData);
    return navigate("/booking-confirmation")
    //return submitFormFunction() ? navigate("/booking-confirmation") : null;
  }

  return (
    <form onSubmit={handlerSubmit} className="BookingForm">
      <label htmlFor="dataForm">Date of Reservation:</label>
      <input
        required
        type="date"
        name="dataForm"
        placeholder="Choose a Date"
        onChange={handleChanges}
        value={formData.dataForm}
      />

      <label htmlFor="availableTimesForm">Choose time</label>
      <select
        id="availableTimesForm"
        value={formData.timeForm}
        onChange={handleChanges}
        name="availableTimesForm"
        required
      >
        <option value="None">-- Choose --</option>
        {
            availableTimes.map((time) => 
                <option value={time}>{time}</option>
            )
        }
    
      </select>
      <label htmlFor="numberOfGuestForm">Number of guests</label>
      <input
        required
        type="number"
        name="numberOfGuestForm"
        placeholder="Choose the number of Guests"
        onChange={handleChanges}
        value={formData.numberOfGuestForm}
        min="1"
        max="10"
        id="numberOfGuestForm"
      />
      <label htmlFor="occasionForm">Occasion</label>
      <select
        id="occasionForm"
        required
        value={formData.occasionForm}
        onChange={handleChanges}
        name="occasionForm"
      >
        <option value="undefined">-- Choose --</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        text="Make Your reservation"
        className="GeneralButton"
        disabled={buttonDisabled}
      >
        Make Your reservation
      </button>
    </form>
  );
}

export default BookingForm;
