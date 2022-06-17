import React from "react";
import Katie from '../images/katie-zaferes.png'
import Star from '../images/star.png'

function Card () {
    return (
        <div className="card-box">
           <img className="katie" src={Katie} alt='Katie Zaferes' />
           <div className='rating'><img className='star' src={Star} alt='star rating' />5.0 (6) . USA</div>
           <div className="card-title">Life lessons with Katie Zaferes</div>
           <div className="cost"><strong>From $136</strong> / person</div> 
        </div>
    )
}

export default Card