import React from 'react';
import "./StarWars.css" //import of style





 class  Card extends React.Component { 
    picture = () => {  // if statement that matches img with name
        if (this.props.name === "Luke Skywalker") {
            return 'https://www.conservapedia.com/images/b/bb/Luke_Skywalker.jpg'
        } else if (this.props.name === "C-3PO") {
            return 'http://photos1.blogger.com/blogger/2642/3757/320/c3po.jpg'
        } else if (this.props.name === "R2-D2") {
            return 'https://upload.wikimedia.org/wikipedia/en/thumb/3/39/R2-D2_Droid.png/220px-R2-D2_Droid.png'
        } else if (this.props.name === "Darth Vader") {
            return 'https://www.conservapedia.com/images/thumb/7/76/Darth_Vader.jpg/300px-Darth_Vader.jpg'
        } else if (this.props.name === "Leia Organa") {
            return 'http://www.statemaster.com/wikimir/images/upload.wikimedia.org/wikipedia/en/thumb/0/0a/Leia_Organa_Ep5_DVD.jpg/300px-Leia_Organa_Ep5_DVD.jpg'
        } else if (this.props.name === "Owen Lars") {
            return 'https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg/revision/latest?cb=20180513065414'
        } else if (this.props.name === "Beru Whitesun lars") {
            return 'https://i.pinimg.com/236x/40/37/ea/4037ea1be688119649a50d30d5df2d47.jpg'
        } else if (this.props.name === "Biggs Darklighter") {
            return 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406'
        } else if (this.props.name === "R5-D4") {
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPLUn_9kjMfDr8MIzUqLGl9VgtOK-IJs6tEMe82c56HKmzpv_'
        } else if (this.props.name === "Obi-Wan Kenobi") {
            return 'https://images.uncyclomedia.co/uncyclopedia/en/thumb/c/cd/Obi-Wan13.jpg/300px-Obi-Wan13.jpg'
        }
    }

    render () {
    const {name, birth_year, gender, mass, eye_color} = this.props // es6 destructuring
    return (
        //3D flip card
         <div className="flip-card" > 
         <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={this.picture(name)} alt={name} />
          </div>
          <div className="flip-card-back">
                <div className="stars"></div>
                <div className="twinkling">
                     <h2> {name} </h2> 
                     <p>Born: {birth_year}</p> 
                     <p>Mass: {mass}</p>
                     <p>Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
                     <p>Eye Color: {eye_color.charAt(0).toUpperCase() + eye_color.slice(1)}</p>
                </div>
                <div className="clouds"></div>
          </div>  
        </div>
        </div>
    )}
}



export default Card;