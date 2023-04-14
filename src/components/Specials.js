import React from "react"

const GreekSaladContent     = "The famous salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with chrunchy garlic and rosmary croutons."
const BruchettaContent      = "Our Bruchetta is made from grilled bread that has been smered with garlic and seasoned with salt and olive oil."
const LemonDessertContent   = "This comes sytraight from grandma recipe book, every last ingredient had been sourced and is as authenitc as can be imagined." 

const LittleLemonPrices = {
    "GreekSalad":   ["Greek salad",     GreekSaladContent,     "$12.99"],
    "Bruchetta":    ["Bruchetta",       BruchettaContent,      "$5.99"],
    "LemonDessert": ["Lemon Dessert",   LemonDessertContent,   "$5.00"]
}


function Specials(props){

    console.log("Props:", props)
    let [specialName, contentToDisplay, priceToDisplay] = LittleLemonPrices[props.specialName]

    return (
        <diV className="SpecialsContainer">
            <img src="./assets/greekSalad.jpg"/>
            <div className="SpecialHeader">
                <h2>{specialName}</h2>
                <div className="SpecialPrice">
                    {priceToDisplay}
                </div>
            </div>
            <div className="SpecialContent">
                {contentToDisplay}
            </div>
        </diV>
    )
}

export default Specials