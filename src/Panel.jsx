import React, { useState } from "react";
import arrow from './images/icon-arrow-down.svg'

export default function Panel({question, answer}){
    const [isShown, setIsShown] = useState(false)

    function handleClick(){
        setIsShown(!isShown)
    }


    return (
        <div>
            <div className="question">
                <h3 style={isShown ? {fontWeight : 700} : {fontWeight: 400}}>{question}</h3>
                <img src={arrow} alt="arrow" onClick={handleClick}/>
            </div>
            <div>
                {isShown && <p>{answer}</p>}
            </div>
            <hr></hr>
        </div>
    )
}