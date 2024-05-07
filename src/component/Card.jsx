import React from 'react'
import cardStyle from '../styles/cards.module.css'
import mangoImg from "../images/Mango.png";
import bananaImg from "../images/Banana.png";
import vegImg from "../images/Veggies.png";

function Card() {
  return (
    <div>
       <div className={cardStyle.cardsContainer}>
      <div className={`${cardStyle.card} ${cardStyle.pink}`}>
        <div className={cardStyle.caption}>
          Season's fresh & crispy, always!
        </div>
        <img className={cardStyle.mango} src={mangoImg} alt="" />
      </div>
      <div className={`${cardStyle.card} ${cardStyle.orange}`}>
        <div className={cardStyle.caption}>Your daily dose of goodness</div>
        <img className={cardStyle.veg} src={vegImg} alt="" />
      </div>
      <div className={`${cardStyle.card} ${cardStyle.blue}`}>
        <div className={cardStyle.caption}>Deals on bananas</div>
        <img className={cardStyle.banana} src={bananaImg} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Card
