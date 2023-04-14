import React from 'react'
import './ConfirmedBooking.css'

import Header from './Header';
import Nav from './Nav';
import BookingForm from './BookingForm.js'
import Footer from './Footer';



function ConfirmedBooking({ dataForm, availableTimesForm, 
                            numberOfGuestForm, occasionForm}) {

    return(
        <div className='ConfirmedPageContainer'>
            <Nav/>
            <h2>Your booking is confirmed!</h2>
            <h3>Here the review:</h3>
            <ul>
                <li>Date: {dataForm}</li>
                <li>Time: {availableTimesForm}</li>
                <li>Guest: {numberOfGuestForm}</li>
                <li>Occasion: {occasionForm}</li>
            </ul>
            <p>Have fun!</p>
            <Footer/>
        </div>
    )
}

export default ConfirmedBooking 
