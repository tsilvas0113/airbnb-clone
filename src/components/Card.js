import React from "react";

function Card (props) {
    let badgeText
    if (props.spots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card-box">
           {badgeText !== undefined && <div className="card-badge">{badgeText}</div>}
           <img className="katie" src={props.img} alt='Katie Zaferes' />
           <div className='rating'>
                <img className='star' src='./images/star.png' alt='star rating' />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
           <div className="card-title">{props.title}</div>
           <div className="cost"><strong>From ${props.price}</strong> / person</div> 
        </div>
    )
}

export default Card