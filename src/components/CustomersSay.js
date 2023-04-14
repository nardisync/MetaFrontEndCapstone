import React from "react"
import CallToAction from "./CallToAction"
import Specials from "./Specials"

function CustomersSay (){
    return (
        <div className="CustomersSayContainer">
            <div className="HeaderSection">
                <h1>This Weeks Specials!</h1>
                <CallToAction/>
            </div>
            <div className="ContentSection">
                <Specials specialName="GreekSalad"/>
                <Specials specialName="Bruchetta"/>
                <Specials specialName="LemonDessert"/>
            </div>
        </div>
    )
}

export default CustomersSay 