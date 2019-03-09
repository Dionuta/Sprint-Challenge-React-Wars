import React from 'react';
import "./StarWars.css"





 const Card = ({name}) => {
    return (
         <div className="flip-card" >
         <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src='https://www.conservapedia.com/images/thumb/b/bb/Luke_Skywalker.jpg/300px-Luke_Skywalker.jpg' alt="Avatar" />
          </div>
          <div className="flip-card-back">
                <div className="stars"></div>
                <div className="twinkling">
                     <h2>Name: {name} </h2> 
                     <h2>Born: 199BBY</h2> 
                     <h2>We love that guy</h2>
                </div>
                <div className="clouds"></div>
          </div>  
        </div>
        </div>
    )
}



export default Card;