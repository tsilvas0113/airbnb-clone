import React from "react";
import Star from '../images/star.png'

function Card (props) {
    return (
        <div className="card-box">
           <img className="katie" src={props.img} alt='Katie Zaferes' />
           <div className='rating'>
                <img className='star' src={Star} alt='star rating' />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
           <div className="card-title">{props.title}</div>
           <div className="cost"><strong>From ${props.price}</strong> / person</div> 
        </div>
    )
}

export default Card