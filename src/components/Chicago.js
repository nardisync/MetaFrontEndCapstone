import React from "react"
import restaurantImage from './assets/restauranfood.jpg'
import './Chicago.css'




function Chicago (){
    return (
        <div className="ChicagoContainer">
            <div className="ChicagoDescription HighlightText">
                <div className="ChicagoDescriptionText">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <br/>
                    <p className="CardParagraph">
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipes served with a 
                        modern twist
                    </p>
                </div>
                <button className="reserveTableButton GeneralButton">Reserve a Table</button>
            </div>
            <div className="ChicagoImage">
                <img src={restaurantImage}/>
            </div>
        </div>
    )
}

export default Chicago 