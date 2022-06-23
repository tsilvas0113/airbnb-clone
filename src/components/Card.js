import React from "react";

function Card (props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card-box">
           {badgeText !== undefined && <div className="card-badge">{badgeText}</div>}
           <img className="katie" src={props.item.coverImg} alt='Katie Zaferes' />
           <div className='rating'>
                <img className='star' src='./images/star.png' alt='star rating' />
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
           <div className="card-title">{props.item.title}</div>
           <div className="cost"><strong>From ${props.item.price}</strong> / person</div> 
        </div>
    )
}

export default Card