import React from "react"
import greekSaladImage from './assets/greekSalad.jpg'
import bruschettaImage from './assets/bruchetta.svg'
import lemonDessertImage from './assets/LemonDessert.jpg'

import './Specials.css'

const GreekSaladContent     = "The famous salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with chrunchy garlic and rosmary croutons."
const BruchettaContent      = "Our Bruchetta is made from grilled bread that has been smered with garlic and seasoned with salt and olive oil."
const LemonDessertContent   = "This comes sytraight from grandma recipe book, every last ingredient had been sourced and is as authenitc as can be imagined." 

const LittleLemonPrices = {
    "GreekSalad":   ["Greek salad",     GreekSaladContent,     "$12.99",    greekSaladImage],
    "Bruchetta":    ["Bruchetta",       BruchettaContent,      "$5.99",     bruschettaImage],
    "LemonDessert": ["Lemon Dessert",   LemonDessertContent,   "$5.00",     lemonDessertImage]
}


function Specials(props){

    console.log("Props:", props)
    let [specialName, contentToDisplay, priceToDisplay, foodImagePath] = LittleLemonPrices[props.specialName]

    return (
        <diV className="SpecialsContainer">
            <div className="SpecialImage">
                <img src={foodImagePath}/>
            </div>
            <div className="SpecialHeader CardTitle">
                <h2>{specialName}</h2>
                <div className="SpecialPrice">
                    {priceToDisplay}
                </div>
            </div>
            <div className="SpecialContent CardParagraph">
                {contentToDisplay}
            </div>
        </diV>
    )
}

export default Specials